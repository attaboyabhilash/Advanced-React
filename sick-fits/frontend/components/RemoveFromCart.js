import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const REMOVEFROMCART_MUTATION = gql`
  mutation REMOVEFROMCART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  border: 0;
  outline: 0;
  font-size: 2rem;
  background: none;
  &:hover {
    color: var(--red);
  }
`;

const update = (cache, payload) => {
  cache.evict(cache.identify(payload.data.deleteCartItem));
};

// eslint-disable-next-line react/prop-types
const RemoveFromCart = ({ id }) => {
  const [removeFromCart, { loading }] = useMutation(REMOVEFROMCART_MUTATION, {
    variables: {
      id,
    },
    update,
  });
  return (
    <BigButton disabled={loading} type="button" onClick={removeFromCart}>
      X
    </BigButton>
  );
};

export default RemoveFromCart;
