import type { InputHTMLAttributes } from "react"

interface InputFieldPros extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;

}

export default function InputFieldClase({ label, error, type, name, value, ...props }: InputFieldPros) {
    return (
        <div>
            <label>{label}</label>

            <input
                type={type}
                name={name}
                value={value}
                className="block w-full border rounded p-2"
                {...props}
            />
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </div>
    )
}