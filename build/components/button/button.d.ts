interface BaseButtonProps {
    size?: 'tiny' | 'small' | 'normal' | 'large' | 'huge';
    fullWidth?: boolean;
}
interface ButtonProps extends BaseButtonProps {
    color?: 'energy' | 'health' | 'calm' | 'primary';
    disabled?: boolean;
}
interface OutlinedButtonProps extends BaseButtonProps {
    disabled?: boolean;
}
export declare const Button: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps & ButtonProps, never>;
export declare const OutlinedButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps & OutlinedButtonProps, never>;
export {};
