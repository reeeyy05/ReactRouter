import { useEffect, useState } from "react";
import { supabase } from "../../database/Supabase/Client";


export default function ResetPasswordPage() {
    const [newPassword, setNewPassword] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        // Se activa el listener de Supabase
        const { data: listener } = supabase.auth.onAuthStateChange(
            async (event) => {
                // Cuando el usuario abre el link, se emite PASSWORD_RECOVERY
                if (event === "PASSWORD_RECOVERY") {
                    // Aquí ya existe sesión/credenciales temporales en la URL
                    setStatus("Listo para cambiar contraseña.");
                }
            }
        );

        // Esto es una limpieza.
        // Cuando el componente se desmonta, elimina la suscripción al 
        // listener de Supabase para evitar fugas de memoria o que se 
        // sigan ejecutando callbacks cuando el componente ya no esté montado.
        return () => {
            listener?.subscription?.unsubscribe?.();
        };
    }, []);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("Actualizando...");
        const { error } = await supabase.auth.updateUser({ password: newPassword });

        if (error) {
            setStatus("Error: " + error.message);
        } else {
            setStatus("Contraseña actualizada correctamente. Inicia sesión.");
        }
    }

    return (
        <div>
            <p>{status}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Nueva contraseña"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit">Cambiar contraseña</button>
            </form>
        </div>
    );
}
