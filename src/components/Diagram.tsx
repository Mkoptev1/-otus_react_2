import React from 'react';
import styled from "@emotion/styled";

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
width: 500px;
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

export interface IDiagramItem {
    desc: string;
    value: number;
    width: number;
    color?: string;
    id?: number;
}

const Diagram: React.FC<IDiagramItem> = ({ desc, value, width, color }) => {
    return (
        <Container>
            <DescContainer>
                <TextInDesc>{desc}</TextInDesc>
            </DescContainer>
            <LineContainer>
                <Line width={width} color={color}>
                    <TextInLine>{value}</TextInLine>
                </Line>
            </LineContainer>
        </Container>
    )
}

export { Diagram }