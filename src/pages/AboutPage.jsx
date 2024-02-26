//About page

import { useEffect, useState } from 'react'
import { appTitle, imageFolderPath } from '../globals/globalVariables';

const AboutPage = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <main>
            <section>
                <h1>Welcome to Moo</h1>
                <p>Moo strives to be the ultimate movie companion, offering a personalized experience. So,
                whether you're searching for your next movie night pick or creating your curated list of classics, Moo is here to
                make your movie exploration memorable and enjoyable. Happy Moo-vie watching!</p>
            </section>

            <section>
                <h2>Discover and Explore</h2>
                <p>Moo is designed to make your movie discovery journey enjoyable and user-friendly. Our platform taps into the vast
                database of TMDb, providing you with an extensive collection of movies to explore. Whether you're a casual moviegoer
                or a dedicated cinephile, Moo has something for everyone.</p>
            </section>

            <section>
                <h2>Your Personal Movie Haven</h2>
                <p>One of Moo's standout features is the personalized experience it offers through the "List" feature. Now, you can
                curate your movie-watching experience by creating custom lists. Whether it's a collection of all-time favorites,
                must-watch classics, or movies to catch up on during the weekend, Moo lets you organize and categorize your
                cinematic preferences effortlessly.</p>
            </section>

            <section>
                <h2>Curated Movie Lists</h2>
                <p>Moo goes beyond just personal lists. We understand that sometimes you want recommendations without the hassle of
                creating your own list. That's why we provide handpicked selections of popular, now playing, top-rated, and upcoming
                movies. Dive into these curated lists to discover the latest releases, critically acclaimed films, and
                what's about to hit the big screen.</p>
            </section>

            <section>
                <h2>Seamless Integration with TMDb API</h2>
                <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                <img className="tmdb-logo" src={`${imageFolderPath}blue_square_2.svg`} />
                
                <p>Moo leverages the power of the TMDb movie API to deliver accurate and up-to-date information about your favorite
                movies. From detailed movie descriptions and cast information to reviews and ratings, Moo ensures that you have all
                the information you need in one place. Say goodbye to hopping between multiple platforms; Moo streamlines your
                movie-searching experience.</p>
            </section>

            <section>
                <h2>User-Friendly Interface</h2>
                <p>Our commitment to user-friendliness is evident in Moo's clean and intuitive interface. Navigate effortlessly through
                different sections, explore movie details, and manage your lists without any hassle. Whether you're using Moo on
                your desktop or mobile device, we've optimized the experience to suit your needs.</p>
            </section>
        </main>
    );
}

export default AboutPage;