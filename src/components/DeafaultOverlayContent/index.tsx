import { ReactNode } from 'react';

import { Container, Heading, Buttons } from './styles';


interface Props {
  label: string,
  description: string

}

export const DeafaultOverlayContent: React.FC<Props> = ({ 
  label, description 
}) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custon Order</button>
        <button className='white'>Existing Inventory</button>
      </Buttons>
    </Container>
  );
}
