import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

interface UniqueOverlayProps {
  children: ReactNode;
}

export function UniqueOverlay({ children }: UniqueOverlayProps) {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])
  

  return (
    <Container>
      <Header>
        <Logo/>
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>

          <li>
            <a href="#">da Tesla</a>
          </li>

          <li>
            <a href="#">for Testing</a>
          </li>
        </ul>
      </Footer>

      {children}
    </Container>
  );
}
