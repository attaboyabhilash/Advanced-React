/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

export const addToCart = async (
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> => {
  const sess = context.session as Session;
  if (!sess.itemId) {
    throw new Error('You must be logged in!');
  }

  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sess.itemId }, product: { id: productId } },
    resolveFields: 'id, quantity',
  });

  const [existingCartItem] = allCartItems;

  if (existingCartItem) {
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
      resolveFields: false,
    });
  }

  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sess.itemId } },
    },
    resolveFields: false,
  });
};
