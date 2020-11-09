import React from 'react';
import { Diagrams } from './diagram/Diagrams';
import { DiagramsList } from './diagram/DiagramStruc'

const diagramProps: DiagramsList = {
    diagramItems: [
        { id: 1, desc: 'Будущие клиенты', value: 500, totalLeads: 0, color: 'red'},
        { id: 2, desc: 'Первичная коммуникация', value: 425, totalLeads: 0, color: 'red'},
        { id: 3, desc: 'Изучение потребности', value: 200, totalLeads: 0, color: 'red'},
        { id: 4, desc: 'Предложения с расценками', value: 150, totalLeads: 0, color: 'red'},
        { id: 5, desc: 'Переговоры', value: 120, totalLeads: 0, color: 'red'},
        { id: 6, desc: 'Завершенные сделки', value: 50, totalLeads: 0, color: 'red'},
    ],
    diagramColor: 'blue',
    totalLeads: 500
};
    
const App = () => (
    <div>
        <Diagrams 
            diagramItems={diagramProps.diagramItems} 
            diagramColor={diagramProps.diagramColor}
            totalLeads ={diagramProps.totalLeads}
        />
    </div>
)

export {App}