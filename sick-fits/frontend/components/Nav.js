import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/products">
      <a>Products</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/account">
      <a>Account</a>
    </Link>
  </nav>
);

export default Nav;
