import React, { FC } from 'react';
import styled from "@emotion/styled";
import { IDiagramItem } from './Diagram';
import { Diagram } from './Diagram';


const Container = styled.div`
border-style: solid;
border-width: 3px;
border-color: #cacd58;
padding: 10px;
width: 710px;
`

export interface IDiagramsProps {
    diagramItems: IDiagramItem[];
    color: string;
}

const Diagrams: React.FC<IDiagramsProps> = ({diagramItems, color}) => {
    return (
        <Container>
            {diagramItems.map(diagram => (
                <Diagram 
                    desc={diagram.desc}
                    value={diagram.value}
                    width={diagram.width}
                    color={color}
                />
            ))}
        </Container>
    )
}

export { Diagrams }