# otus_react_011020
Необходимо:
- Установить npm и переоткрыть VSCode:
    https://nodejs.org/en/

- развернуть npm проект. npm init задаёт вам разные вопросы и создает package.json, который определяет настройки проекта, зависимости, скрипты, название и прочее https://docs.npmjs.com/cli/init
    npm init

- установить и настроить webpack: 
    npm install webpack webpack-cli --save-dev

- установить и настроить babel: 
    npm install --save-dev @babel/core @babel/cli @babel/preset-env npm install --save @babel/polyfill
    npm install --save-dev @babel/preset-react

- установить и настроить typescript через babel preset: 
    npm install --save-dev typescript ts-loader

- установить и настроить jest: 
    npm install --save-dev jest

- установить и настроить eslint + prettier: 
    npm install eslint --save-dev

- установить Storybook
    npx -p @storybook/cli sb init
    npx -p @storybook/cli sb init --type react

- установить Storybook Addon Knobs
    npm add @storybook/addon-knobs --dev

- установить Storybook Addon Essentials
    npm install --save-dev @storybook/addon-essentials

- установить библиотеку для CSS-in-JS:
    npm install --save emotion

- установить Loki:
    npm add loki --dev
    npx loki init

- Выход из runtime:
    ctrl + C

- Установка всех зависимых модулей в настроенном package.json:
    npm install

