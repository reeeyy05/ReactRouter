import type { SelectHTMLAttributes } from "react";

interface SelectProp extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
}

interface Option {
    value: string;
    label: string;
}

export default function Select({ options, ...props }: SelectProp) {
    const baseStyles = "";
    const hoverStyles = "";

    return (
        <select>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}