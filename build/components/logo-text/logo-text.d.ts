import React from 'react';
export interface LogoTextProps {
    color?: 'black' | 'white';
    width?: number;
    height?: number;
}
export declare const LogoText: React.FC<LogoTextProps & React.SVGProps<SVGSVGElement>>;
