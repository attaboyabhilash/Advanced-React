import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Cart from './Cart';

const Logo = styled.h1`
  background-color: red;
  font-size: 4em;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-14deg);
  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-top: 10px solid var(--black, black);
    border-bottom: 1px solid var(--black, black);
  }
`;

const Header = () => (
  <HeaderStyles>
    <div className="bar">
      <Logo>
        <Link href="/">Sick Fits</Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <Cart />
  </HeaderStyles>
);

export default Header;
