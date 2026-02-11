import type { Product } from "./ProductCard";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;