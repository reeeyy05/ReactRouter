import { useBearStore } from "../../stores/store";
import { useTranslation } from "react-i18next";
import Antigravity from "../animations/Antigravity";

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

            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                <Antigravity
                    count={300}
                    magnetRadius={5}
                    ringRadius={5}
                    waveSpeed={0.4}
                    waveAmplitude={1}
                    particleSize={1.5}
                    lerpSpeed={0.05}
                    color="#F6339A"
                    autoAnimate
                    particleVariance={1}
                    rotationSpeed={0}
                    depthFactor={1}
                    pulseSpeed={3}
                    particleShape="tetrahedron"
                    fieldStrength={10}
                />
            </div>

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