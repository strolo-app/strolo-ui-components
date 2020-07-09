import { Color } from '../../global/default-theme';
export interface TextProps {
    fontWeight?: 400 | 600 | 700 | 900;
    textAlign?: 'center' | 'end' | 'inherit' | 'initial' | 'justify' | 'left' | 'right' | 'start' | 'unset';
    fontSize?: string;
    lineHeight?: string;
    color?: Color;
    italic?: boolean;
    textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none' | 'inherit' | 'initial' | 'unset';
}
export declare const Text: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, TextProps, never>;
export declare const P1: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, TextProps, never>;
export declare const P2: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, TextProps, never>;
export declare const H6: import("styled-components").StyledComponent<"h6", import("styled-components").DefaultTheme, TextProps, never>;
export declare const H5: import("styled-components").StyledComponent<"h5", import("styled-components").DefaultTheme, TextProps, never>;
export declare const H4: import("styled-components").StyledComponent<"h4", import("styled-components").DefaultTheme, TextProps, never>;
export declare const H3: import("styled-components").StyledComponent<"h3", import("styled-components").DefaultTheme, TextProps, never>;
export declare const H2: import("styled-components").StyledComponent<"h2", import("styled-components").DefaultTheme, TextProps, never>;
export declare const H1: import("styled-components").StyledComponent<"h1", import("styled-components").DefaultTheme, TextProps, never>;
