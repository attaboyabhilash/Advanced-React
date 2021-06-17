import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import SignOut from './SignOut';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';

const Nav = () => {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <NavStyles>
      <Link href="/products">
        <a>Products</a>
      </Link>
      {user ? (
        <>
          <Link href="/sell">
            <a>Sell</a>
          </Link>
          <Link href="/orders">
            <a>Orders</a>
          </Link>
          <Link href="/account">
            <a>Account</a>
          </Link>
          <button type="button" onClick={openCart}>
            My Cart{' '}
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) => tally + cartItem.quantity,
                0
              )}
            />
          </button>
          <SignOut />
        </>
      ) : (
        <>
          <Link href="/signin">
            <a>SignIn</a>
          </Link>
        </>
      )}
    </NavStyles>
  );
};

export default Nav;
