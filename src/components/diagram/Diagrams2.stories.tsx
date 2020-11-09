import React from "react"
import { Story, Meta } from '@storybook/react/types-6-0';
import { Diagrams } from './Diagrams';
import { DiagramsList } from './DiagramStruc';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
    title: 'DiagramsKnobs',
    component: Diagrams,
    decorators: [withKnobs],
  } as Meta;

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

const Template: Story<DiagramsList> = (args) => <Diagrams  
    diagramItems={diagramProps.diagramItems}
    diagramColor={text('Color', 'red')}
    totalLeads ={number('Total Leads', 500)}
/>;

export const Dinamic = Template.bind({});