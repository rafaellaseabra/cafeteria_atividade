
import "./Hero.css";
export default function Hero(){
    return(
    <section className="hero-section">
        <div className="hero-text">
            <h1 className="hero-title">BEM-VINDO à</h1>
            <h2 className="hero-subtitle">Quintiliano's Café</h2>

            <h2 className="hero-phrase">
                A sofisticação dos cafés gourmet que encantam em cada gole.
            </h2>
            <p className="hero-description">
                Nossos cafés e delicias combinam ingredientes selecionados com um toque artesanal e sofisticado, uma experiência única em sabor é aroma</p>
        </div>
        <div className="hero-image">
            <img src="cafe.png" alt="cafe/cafe" />
        </div>
    </section>
    );
}
