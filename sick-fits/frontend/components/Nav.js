import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import SignOut from './SignOut';

const Nav = () => {
  const user = useUser();
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
