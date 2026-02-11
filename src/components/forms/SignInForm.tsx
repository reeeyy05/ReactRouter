import { useState, type ChangeEvent } from "react";
import { createUserRepository } from "../../database/repositories";
import { toast, Toaster } from 'react-hot-toast';
import InputFieldClase from "./InputFieldsClase";
import Button from "../UI/SimpleButton";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
    password: string;
}

function SignInForm() {

    const userRepository = createUserRepository();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({ email: "", password: "" });

    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await userRepository.login(formData.email, formData.password);

            if (result.error) {
                toast.error('Credenciales inválidas');
                return;
            }

            if (result.data) {

                // Guardar estado

                // Redirigir a Home
                navigate('/profile'); // Redireccionar a perfil

                toast.success(`¡Bienvenido ${result.data.profile?.username}!`);

            }

        } catch (err) {
            toast.error('Ocurrió un error inesperado');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div>
                <Toaster />
            </div>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
                <InputFieldClase label="Email" name="email" type="email" autoComplete="off"
                    value={formData.email} onChange={handleChange}
                />
                <InputFieldClase label="Contraseña" name="password" type="password"
                    value={formData.password} onChange={handleChange}
                />
                <Button type="submit">{loading ? 'Iniciando sesión...' : 'Iniciar sesión'}</Button>
            </form>
        </>
    );
}

export default SignInForm;
