import React, { FC } from 'react';
import { Diagrams } from './Diagrams';
import { IDiagramsProps } from './Diagrams';

const diagramProps: IDiagramsProps = {
    diagramItems: [
        { id: 1, desc: 'Будущие клиенты', value: 500, width: 500},
        { id: 2, desc: 'Первичная коммуникация', value: 425, width: 425},
        { id: 3, desc: 'Изучение потребности', value: 200, width: 200},
        { id: 4, desc: 'Предложения с расценками', value: 150, width: 150},
        { id: 5, desc: 'Переговоры', value: 120, width: 120},
        { id: 6, desc: 'Завершенные сделки', value: 50, width: 50},
    ],
    color: 'green'
};
    
const App = () => (
    <div>
        <Diagrams diagramItems={diagramProps.diagramItems} color={diagramProps.color} />
    </div>
)

export {App}