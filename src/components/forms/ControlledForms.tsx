import { useState, type ChangeEvent } from "react";

interface errorProps {
    nombre: string,
    email: string
}

export function ControlledForms() {
    // FORMA LARGA DE DECLARACION
    // const [nombre, setNombre] = useState('');
    // const [email, setEmail] = useState('');

    const [formData, setFormData] = useState({
        nombre: "",
        email: ""
    });

    const [errors, setErrors] = useState<errorProps>({
        nombre: "",
        email: ""
    });

    // const handleChange = (event: any) => {
    //     // Si el event es del tipo input nombre
    //     setNombre(event.target.value);

    //     // Sino, es del tipo email
    //     setEmail(event.target.value);
    // };

    // Esta función se ejecuta cada vez que cambia el valor de un input
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Desesctructuramos el objeto, e.target sería el input
        const { name, value } = e.target;
        // Es equivalente a poner: 
        // const name = e.target.name;
        // const value = e.target.value;

        // (prevState) => (...)
        //      ->   Actualizamos la función no con un nuevo objeto, sino
        //            pasándole una función la cual recibe el estado anterior
        // { ...prevState, [name]: value } 
        //      ->  ...prevState: copia todo el estado anterior
        //      ->  [name]: value: actualiza solo la propiedad cuyo nombre coincide con name 
        //           del input. 
        //      ->  El uso de [] (corchetes) es propiedad computada: te permite usar el valor 
        //           de una variable como clave del objeto.
        // Creamos un nuevo objet con los parametros del anterior y dando los valores nuevos que se han introducido
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };


    return (
        <>
            <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} />

            ()

            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </>
    )
}