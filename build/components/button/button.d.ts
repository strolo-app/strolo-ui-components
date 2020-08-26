import * as React from 'react';
interface BaseButtonProps {
    size?: 'tiny' | 'small' | 'normal' | 'large' | 'huge';
    fullWidth?: boolean;
}
interface ButtonProps extends BaseButtonProps {
    color?: 'energy' | 'health' | 'calm' | 'primary';
    disabled?: boolean;
    loading?: boolean;
}
interface OutlinedButtonProps extends BaseButtonProps {
    disabled?: boolean;
    color?: 'gray0' | 'gray60';
    loading?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
export declare const OutlinedButton: React.FC<OutlinedButtonProps>;
export {};
