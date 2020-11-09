import React from 'react';
import styled from "@emotion/styled";
import { Diagram } from './Diagram';
import { DiagramsList } from './DiagramStruc'

const Container = styled.div`
border-style: solid;
border-width: 3px;
border-color: #cacd58;
padding: 10px;
width: 710px;
`

const Diagrams: React.FC<DiagramsList> = ({diagramItems, diagramColor, totalLeads}) => {
    return (
        <Container>
            {diagramItems.map(diagram => (
                <Diagram 
                    key={diagram.id}
                    id={diagram.id}
                    desc={diagram.desc}
                    value={diagram.value}
                    color={diagramColor}
                    totalLeads={totalLeads}
                />
            ))}
        </Container>
    )
}

export { Diagrams }