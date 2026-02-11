import type { Product } from "../products/ProductCard";
import ProductList from "../products/ProductList";

const ListProducts: Product[] = [
    { id: 1, name: 'Laptop Pro', price: 1299.99, description: 'Potente laptop para desarrollo profesional' },
    { id: 2, name: 'Mouse Gaming', price: 49.99, description: 'Mouse ergonómico con iluminación RGB' },
    { id: 3, name: 'Teclado Mecánico', price: 89.99, description: 'Teclado mecánico silencioso de alta durabilidad' },
    { id: 4, name: 'Monitor 4K', price: 399.99, description: 'Pantalla 4K de 27 pulgadas con colores vibrantes' }
];

const Products = () => {
    return (
        <div>
            <h1>Nuestros Productos</h1>
            <ProductList products={ListProducts} />
        </div>
    );
};

export default Products;