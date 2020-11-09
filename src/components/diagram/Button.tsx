import React from 'react';

export interface IButtonProps {
    label: string
}

const Button: React.FC<IButtonProps> = ({label}) => {
    return (
     	<button>{label}</button>
    )
}

export { Button }