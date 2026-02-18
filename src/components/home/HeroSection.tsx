import { useBearStore } from "../../stores/store";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const bears = useBearStore(state => state.bears)
    const food = useBearStore(state => state.food)
    const feed = useBearStore(state => state.feed)
    const increasePopulation = useBearStore(state => state.increasePopulation)

    const { t } = useTranslation();

    return (
        <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h1>{t('heroSection.tittle')}</h1>
            <p>{t('heroSection.description')}</p>

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