//Home

import { useState } from 'react'

const HomePage = () => {

    const [sliderHeroMovie, setSliderHeroMovi] = useState(null);

    return (
    <>
        <main>
            <h1 className="home-heading">Moviesite Home</h1>
            <section>
                <h2>Hero Image</h2>
                <img className='hero-image'></img>
                <textblock>
                    <h3>Hero image movie name</h3>
                    <p>Hero image Movie info</p>
                    <p>Hero image movie description</p>
                </textblock>
            </section>





            <section>
                <h2>Popular movies</h2>
                <poseter>

                </poseter>
            </section>
            <sectoin>
                <h2>Other movies with filter</h2>
            </sectoin>
        </main>

    </>
    );
}

export default HomePage;