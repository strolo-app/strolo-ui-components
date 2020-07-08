import React from 'react';
export interface LogoProps {
    width?: number;
    color?: 'black' | 'white';
}
export declare const Logo: React.FC<LogoProps & React.SVGProps<SVGSVGElement>>;
