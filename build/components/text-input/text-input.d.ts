import React from 'react';
export interface TextInputProps {
    error?: string;
    helperText?: string;
    placeholder?: string;
    name?: string;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
