export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <article className="product-card">
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div>
                    <p>{product.price.toFixed(2)}€</p>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;