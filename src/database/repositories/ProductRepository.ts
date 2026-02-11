import type { Product } from "../../interface/Product";


export interface ProductRepository {

    /**
     * Crea un nuevo producto en el sistema.
     * @param data - Datos parciales del producto a crear.
     * @returns Un objeto con la sesión del usuario creado (`SessionUser`)
     *          o un error en caso de fallo.
     */
    createProduct(data: Partial<Product>): Promise<{ data?: Product, error?: any }>;
}