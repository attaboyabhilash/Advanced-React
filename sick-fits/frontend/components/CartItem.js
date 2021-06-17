/* eslint-disable react/prop-types */
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
    width: 100px;
  }
  h3 {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => {
  const { id, name, price, photo } = cartItem.product;
  return (
    <CartItemStyles>
      <img src={photo?.image?.publicUrlTransformed} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>
          {formatMoney(price * cartItem.quantity)} -{' '}
          <em>
            {cartItem.quantity} &times; {formatMoney(price)} /-
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
};

export default CartItem;
