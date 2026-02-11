// Alias simplemente para identificar este id concreto con el UUID de Supabase
export type UUID = string;

/**
 * Representa el perfil personalizado de un usuario dentro de la aplicación.
 *
 * Estos datos se almacenan en la tabla `profiles` de la base de datos.
 * Se asocian a un usuario de Supabase mediante el campo `id`, que coincide con
 * `auth.users.id`.
 */
export interface Profile {
    id?: UUID
    username: string
    avatar_url?: string
    role: 'user' | 'admin'
}

export interface RegisterData extends Profile {
    email: string
    password: string
}