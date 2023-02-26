import { ReactNode, useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    modelName: string,
    overlayNode: React.ReactNode
}


export const ModelSection: React.FC<Props> = ({ 
    modelName, 
    overlayNode, 
    children, 
    ...props
}) => {
    const { registerModel } = useModel(modelName)

    const sectionRef = useRef<HTMLDialogElement>(null)

    useEffect(()=>{
        if (sectionRef.current) {
            registerModel({ modelName, overlayNode, sectionRef })
        }
    }, [modelName, overlayNode, sectionRef])

  return(
        <Container ref={sectionRef} {...props}>
            {children}
        </Container>
    )
}
