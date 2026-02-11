import { useState, type ChangeEvent, type FocusEvent } from "react";
import { createUserRepository } from "../../database/repositories";
import type { RegisterData } from "../../interface/RegisterData";

interface FormDataProps {
    username: string;
    age: number;
    email: string;
    password: string;
}

interface ErrorsProps {
    username: string;
    age: string;
    email: string;
    password: string;
}

export default function SimpleForm() {
    const userRepository = createUserRepository();

    const [formData, setFormData] = useState<FormDataProps>({
        username: "",
        age: 0,
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<ErrorsProps>({
        username: "",
        age: "",
        email: "",
        password: "",
    });

    const validateField = (name: string, value: string) => {
        switch (name) {
            case "username":
                if (!value.trim()) return "El nombre es obligatorio";
                if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value))
                    return "Solo se permiten letras y espacios";
                return "";
            case "age":
                if (!value) return "La edad es obligatoria";
                if (Number(value) <= 0) return "Debe ser mayor que 0";
                return "";
            case "email":
                if (!value.trim()) return "El email es obligatorio";
                // if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                //     return "El formato del correo no es válido";
                // }
                return "";
            case "password":
                if (value.length < 6) return "Mínimo 6 caracteres";
                return "";
            default:
                return "";
        }
    };

    // Actualiza el valor del campo mientras el usuario escribe.
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    // Valida el campo cuando el usuario sale de él (pierde el foco).
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            username: validateField("username", formData.username),
            age: validateField("age", formData.age.toString()),
            email: validateField("email", formData.email),
            password: validateField("password", formData.password),
        };
        setErrors(newErrors);

        // Comprueba si hay algún valor en el array newErrors (true si hay alguno)
        const hasErrors = Object.values(newErrors).some(Boolean);
        if (!hasErrors) {
            alert("Formulario válido ✅");
            const newUser: RegisterData = {
                email: formData.email,
                password: formData.password,
                username: formData.username,
                role: "user",
                avatar_url: ""
            }
            console.log(newUser);
            userRepository.createUser(newUser);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full border rounded p-2"
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full border rounded p-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
                <label>Edad:</label>
                <input
                    type="number"
                    name="age"
                    inputMode="numeric" //para móvil
                    min="1"
                    value={formData.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full border rounded p-2"
                />
                {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
            </div>

            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full border rounded p-2"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >Enviar</button>
        </form>
    );
}