import React from "react"
import { storiesOf } from "@storybook/react"
import { Story, Meta } from '@storybook/react/types-6-0';
import { Diagrams, IDiagramsProps } from './Diagrams';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
    title: 'Diagrams',
    component: Diagrams,
    decorators: [withKnobs],
  } as Meta;

/*
!!!Вопросы!!!
-- Какой-то синтаксис, надо спросить что это и как лучше оформлять сторю???
storiesOf("Diagrams", module)
    .add("Test", () => <Diagrams diagramItems={diagramProps.diagramItems} color={diagramProps.color} /> )

-- Не смог подключить кнобсы, чтобы цвет воронки поменять через свойство color из интерфейса IDiagramsProps
*/

const Template: Story<IDiagramsProps> = (args) => <Diagrams {...args} />;

export const Default = Template.bind({});
Default.args = {
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

export const Small = Template.bind({});
Small.args = {
    diagramItems: [
        { id: 1, desc: 'Охват в VK', value: 500, width: 500},
        { id: 2, desc: 'Заполнили лид форму', value: 400, width: 400},
        { id: 3, desc: 'Пришли на занятие', value: 200, width: 200},
    ],
    color: 'red'
};

export const Fast = Template.bind({});
Fast.args = {
    diagramItems: [
        { id: 1, desc: 'Охват в FB', value: 500, width: 500},
        { id: 2, desc: 'Переходы на страницу', value: 400, width: 400},
        { id: 3, desc: 'Подписки', value: 200, width: 200},
    ],
    color: 'blue'
};