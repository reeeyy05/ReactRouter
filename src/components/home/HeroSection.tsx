import { useBearStore } from "../../stores/store";

const HeroSection = () => {
    const bears = useBearStore(state => state.bears)
    const food = useBearStore(state => state.food)
    const feed = useBearStore(state => state.feed)
    const increasePopulation = useBearStore(state => state.increasePopulation)

    return (
        <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h1>Bienvenido a nuestra tienda</h1>
            <p>Explora nuestros productos</p>

            <div>
                <p>Osos: {bears}</p>
                <p>Comida: {food}</p>
                <button onClick={() => feed('berries')}>Dar de comer</button>
                <button onClick={() => increasePopulation()}>+1</button>
            </div>
        </section>
    );
};

export default HeroSection;