import React, { useRef, useEffect } from 'react';
import { Button, Card, CardHeader, CardContent } from 'framework7-react';
import Swiper from 'swiper/bundle';
import { useMediaQuery } from 'react-responsive';
import fondoMobile from '../../public/images/map/fondo_2_mobile.jpg';
import fondoDesktop from '../../public/images/home/3_speakers_dsk.jpg';
import floridaImage from '../../public/images/map/florida.jpg';
import orlandoImage from '../../public/images/map/orlando.jpg';
import plazaImage from '../../public/images/map/plaza.jpg';



const Spaces = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const swiperRef = useRef(null);

  useEffect(() => {

    swiperRef.current = new Swiper('.venue-swiper', {
      slidesPerView: 1.5,
      spaceBetween: 4,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1200:{
          slidesPerView: 3,
        }
      },
      allowTouchMove: isMobile,
      simulateTouch: isMobile,
      on: {
        init: function () {

          if (!isMobile) {
            this.params.virtual = { slides: [] };
            this.params.navigation = { nextEl: null, prevEl: null };
            this.params.mousewheel = { eventsTarged: null };
          }
        },
      },
    });


  }, [isMobile]);


  const backgroundImage = isMobile ? `` : `url(${fondoDesktop})`;

  return (
    <div className=' Space SpeakersSection' style={{ backgroundImage }}>
      <div className='button-outline'>
        Event Spaces {isMobile}
      </div>
      <div className="swiper-container venue-swiper">
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <div className='Space__container'>
              <Card className="Space__card">
                <CardHeader
                  valign="bottom"
                  style={{
                    backgroundImage: `url(${floridaImage})`,
                  }}
                >
                </CardHeader>
                <CardContent>
                  <p className="Space__name">Florida Ballroom </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="swiper-slide">
            <div className='Space__container'>
              <Card className="Space__card">
                <CardHeader
                  valign="bottom"
                  style={{
                    backgroundImage: `url(${plazaImage})`,
                  }}
                >
                </CardHeader>
                <CardContent>
                  <p className="Space__name">Plaza International Ballroom </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="swiper-slide">
            <div className='Space__container'>
              <Card className="Space__card">
                <CardHeader
                  valign="bottom"
                  style={{
                    backgroundImage: `url(${orlandoImage})`,
                  }}
                >
                </CardHeader>
                <CardContent>
                  <p className="Space__name">Orlando Ballroom</p>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export { Spaces };
