import { list } from '@keystone-next/keystone/schema';
import { relationship, integer } from '@keystone-next/fields';

export const CartItem = list({
  fields: {
    quantity: integer({
      defaultValue: 1,
      isRequired: true,
    }),
    product: relationship({ ref: 'Product' }),
    user: relationship({ ref: 'User.cart' }),
  },
});
