import React from 'react';
export interface TextProps {
    as?: React.ElementType;
    fontSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2';
    textAlign?: 'left' | 'center' | 'right' | 'inherit';
}
export declare const Text: React.FC<TextProps>;
