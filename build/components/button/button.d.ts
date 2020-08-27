import React from 'react';
interface BaseButtonProps {
    size?: 'tiny' | 'small' | 'normal' | 'large' | 'huge';
    fullWidth?: boolean;
}
interface ButtonStyleProps extends BaseButtonProps {
    color?: 'energy' | 'health' | 'calm' | 'primary';
    loading?: boolean;
}
interface OutlinedButtonStyleProps extends BaseButtonProps {
    color?: 'gray0' | 'gray60';
    loading?: boolean;
}
declare type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'as' | 'ref' | 'type'> & ButtonStyleProps & {
    type?: 'button' | 'reset' | 'submit';
};
export declare const Button: React.FC<ButtonProps>;
declare type OutlinedButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'as' | 'ref' | 'type'> & OutlinedButtonStyleProps & {
    type?: 'button' | 'reset' | 'submit';
};
export declare const OutlinedButton: React.FC<OutlinedButtonProps>;
export {};
