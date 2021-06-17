import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const Dot = styled.div`
  background-color: var(--red);
  color: #fff;
  border-radius: 50%;
  padding: 0.5rem;
  font-size: 1.4rem;
  line-height: 2rem;
  min-width: 3rem;
  margin-left: 1rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: transform 0.4s ease;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: scale(4) rotateX(180deg);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: scale(4) rotateX(180deg);
  }
`;

// eslint-disable-next-line react/prop-types
const CartCount = ({ count }) => (
  <AnimationStyles>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        key={count}
        timeout={{ enter: 400, exit: 400 }}
      >
        <Dot>{count}</Dot>
      </CSSTransition>
    </TransitionGroup>
  </AnimationStyles>
);

export default CartCount;
