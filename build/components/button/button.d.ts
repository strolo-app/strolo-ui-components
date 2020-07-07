/// <reference types="react" />
interface StyledButtonProps {
    size: 'tiny' | 'small' | 'normal' | 'large' | 'huge';
    color: 'energy' | 'primary';
    fullWidth: boolean;
}
export interface ButtonProps extends Partial<StyledButtonProps> {
    disabled?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
}
export declare const Button: ({ disabled, variant, size, color, fullWidth, ...props }: ButtonProps) => JSX.Element;
export {};
