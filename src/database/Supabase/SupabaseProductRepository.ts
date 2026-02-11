import type { Product } from "../../interface/Product";
import type { ProductRepository } from "../repositories/ProductRepository";
import { supabase } from "./Client";


export class SupabaseProductRepository implements ProductRepository {

    async createProduct(data: Partial<Product>) {
        const { data: productData, error } = await supabase
            .from("Products")
            .insert({
                nombre: data.nombre,
                precio: data.precio,
                descripcion: data.descripcion,
            })
            .select()
            .single();
        if (error) {
            console.error("Error createProduct:", error);
            return { error };
        }
        return { productData };
    }
}