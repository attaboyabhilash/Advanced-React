import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const ADDTOCART_MUTATION = gql`
  mutation ADDTOCART_MUTATION($productId: ID!) {
    addToCart(productId: $productId) {
      id
      quantity
    }
  }
`;

// eslint-disable-next-line react/prop-types
const AddToCart = ({ id }) => {
  const [addToCart, { loading }] = useMutation(ADDTOCART_MUTATION, {
    variables: {
      productId: id,
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <button disabled={loading} type="button" onClick={addToCart}>
      Add{loading && 'ing'} To Cart 🛒
    </button>
  );
};

export default AddToCart;
