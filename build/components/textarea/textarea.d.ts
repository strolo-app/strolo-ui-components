import React from 'react';
export interface TextareaProps {
    error?: string;
    helperText?: string;
    placeholder?: string;
    name?: string;
    disabled?: boolean;
    style: {
        [key: string]: string | number;
    };
    className: string;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
