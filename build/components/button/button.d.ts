export interface ButtonProps {
    size?: 'tiny' | 'small' | 'normal' | 'large' | 'huge';
    color?: 'energy' | 'primary';
    fullWidth?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
}
export declare const Button: import("styled-components").StyledComponent<"button", any, {
    size: "tiny" | "small" | "normal" | "large" | "huge";
    color: "energy" | "primary";
    fullWidth: boolean;
    variant: "contained" | "outlined" | "text";
}, "color" | "size" | "fullWidth" | "variant">;
