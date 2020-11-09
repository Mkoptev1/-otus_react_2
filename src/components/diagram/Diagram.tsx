import React from 'react';
import styled from "@emotion/styled";
import { DiagramItem } from './DiagramStruc'

const lineContainerWidth: number = 500;

const Container = styled.div`
display: flex;
width: 710px;
`

const DescContainer = styled.div`
display: flex;
width: 210px;
`

const Line = styled.line`
width: ${props => props.width}px;
height: 5px;
border-bottom: 25px solid ${props => props.color};
position: absolute;
`

const LineContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: ${lineContainerWidth}px;
`

const TextInLine = styled.text`
display: flex;
font-weight: bold;
color: white;
margin-top:10px;
align-items: center;
justify-content: center;
`

const TextInDesc = styled.text`
color: black;
margin-top:10px;
align-items: center;
justify-content: left;
`

function getLineWidth(value: number, totalLeads: number): number {
    return (lineContainerWidth * value)/totalLeads;
}

const Diagram: React.FC<DiagramItem> = ({ desc, value, totalLeads, color }) => {
    return (
        <Container>
            <DescContainer>
                <TextInDesc>{desc}</TextInDesc>
            </DescContainer>
            <LineContainer>
                <Line width={getLineWidth(value, totalLeads)} color={color}>
                    <TextInLine>{value}</TextInLine>
                </Line>
            </LineContainer>
        </Container>
    )
}

export { Diagram }