declare const colors: {
    energy30: string;
    energy20: string;
    calm30: string;
    calm20: string;
    health30: string;
    health20: string;
    gray60: string;
    gray50: string;
    gray45: string;
    gray40: string;
    gray30: string;
    gray20: string;
    gray10: string;
    gray0: string;
};
export declare type Color = keyof typeof colors;
export declare const defaultTheme: {
    colors: {
        energy30: string;
        energy20: string;
        calm30: string;
        calm20: string;
        health30: string;
        health20: string;
        gray60: string;
        gray50: string;
        gray45: string;
        gray40: string;
        gray30: string;
        gray20: string;
        gray10: string;
        gray0: string;
    };
    palette: {
        primary: {
            light: string;
            main: string;
            contrastText: string;
        };
        energy: {
            light: string;
            main: string;
            contrastText: string;
        };
        calm: {
            light: string;
            main: string;
            contrastText: string;
        };
        health: {
            light: string;
            main: string;
            contrastText: string;
        };
    };
    media: {
        customMax: (maxWidth: number) => string;
        customMin: (minWidth: number) => string;
        phoneOnly: string;
        tabletPortraitUp: string;
        tabletLandscapeUp: string;
        tabletDesktopUp: string;
    };
    typography: {
        baseFontSize: string;
        typeScale: {
            web: {
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
                p1: string;
                p2: string;
                sub: string;
            };
            mobile: {
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
                p1: string;
                p2: string;
                sub: string;
            };
        };
    };
    elevation: {
        0: string;
        1: string;
    };
};
declare module 'styled-components' {
    type Theme = typeof defaultTheme;
    interface DefaultTheme extends Theme {
    }
}
export {};
