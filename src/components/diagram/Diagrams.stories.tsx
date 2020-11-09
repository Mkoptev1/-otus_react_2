import React from "react"
import { Story, Meta } from '@storybook/react/types-6-0';
import { Diagrams } from './Diagrams';
import { DiagramsList } from './DiagramStruc';

export default {
    title: 'Diagrams',
    component: Diagrams
  } as Meta;

const Template: Story<DiagramsList> = (args) => <Diagrams {...args} />;

export const Default = Template.bind({});
Default.args = {
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

export const Small = Template.bind({});
Small.args = {
    diagramItems: [
        { id: 1, desc: 'Охват в VK', value: 500, totalLeads: 0, color: 'red'},
        { id: 2, desc: 'Заполнили лид форму', value: 400, totalLeads: 0, color: 'red'},
        { id: 3, desc: 'Пришли на занятие', value: 200, totalLeads: 0, color: 'red'},
    ],
    diagramColor: 'green',
    totalLeads: 500
};

export const Fast = Template.bind({});
Fast.args = {
    diagramItems: [
        { id: 1, desc: 'Охват в FB', value: 500, totalLeads: 0, color: 'red'},
        { id: 2, desc: 'Переходы на страницу', value: 400, totalLeads: 0, color: 'red'},
        { id: 3, desc: 'Подписки', value: 200, totalLeads: 0, color: 'red'},
    ],
    diagramColor: 'green',
    totalLeads: 500
};