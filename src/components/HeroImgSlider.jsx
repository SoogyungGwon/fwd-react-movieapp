// import function to register Swiper custom elements
import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { popularQuery, apiKey, imageBaseURL } from '../globals/globalVariables';
// register Swiper custom elements
register();

const HeroImgSlider = ( movies ) => {

    const swiperElRef = useRef(null);
    const [query, setQuery] = useState(popularQuery);
    let sliderMovies = [];
    const [sliderDropImgs, setSliderDropImgs] = useState([]);

    
    useEffect(() => {

      const getJson = async () => {
        if(query){
          const response = await fetch(query + apiKey);
          const data = await response.json();
          sliderMovies = data.results;
          setSliderDropImgs([sliderMovies[0].backdrop_path, sliderMovies[1].backdrop_path, sliderMovies[2].backdrop_path]);
          console.log(sliderMovies);
        } else {
          setQuery(popularQuery);
        }
      }

      getJson();

  }, [query]);
    
    useEffect(() => {

      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
      });

      swiperElRef.current.addEventListener('swiperslidechange', (e) => {
        console.log('slide changed');
        console.log(sliderMovies);
      });
 
    }, []);

    return (
      <>
        <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="ture"
        mousewheel-force-to-axis="true">
        <swiper-slide background-image=""><img src={imageBaseURL + sliderDropImgs[0]} /></swiper-slide>
        <swiper-slide><img src={imageBaseURL + sliderDropImgs[1]} /></swiper-slide>
        <swiper-slide><img src={imageBaseURL + sliderDropImgs[2]} /></swiper-slide>
        </swiper-container>
        <div className="heroMovieInfo-box">
          <div>
          {
            (sliderMovies.length==0) ? <p>Movie Info not found!</p>:sliderMovies.map((res,pos)=>{
                return(
                    console.log(res),
                    console.log(pos)
                )
            })
          }

          </div>
        </div>
      </>
    );
};

export default HeroImgSlider;