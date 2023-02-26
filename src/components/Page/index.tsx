import { Children, ReactNode } from 'react';
import { ModelsWrapper, ModelSection } from '../Model';
import { DeafaultOverlayContent } from '../DeafaultOverlayContent';
import { UniqueOverlay } from '../UniqueOverlay';

import { Container, Spacer } from './styles';


export function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className='colored' 
              modelName={modelName}
              overlayNode={
                <DeafaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
          />
          ))}

        </div>

        <Spacer />

        <UniqueOverlay children={undefined}/>

      </ModelsWrapper>
      
    </Container>
  );
}
