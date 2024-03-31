import React, { useRef, useEffect, useState } from 'react';
import { Link, Card, CardHeader, CardContent } from 'framework7-react';
import Swiper from 'swiper/bundle';
import { useMediaQuery } from 'react-responsive';
import fondoMobile from '../../public/images/home/3_speakers_mb.jpg';
import fondoDesktop from '../../public/images/home/3_speakers_dsk.jpg';
import speakersData from '../../public/assets/speakers.json';


const SpeakersSlider = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const swiperRef = useRef(null);
  const [speakers, setSpeakers] = useState([]);
  const handleClick = () => {
    const agendaTabLink = document.querySelector('[data-tab="#view-speakers"]');
    if (agendaTabLink) {
      agendaTabLink.click();
    }
  };
  useEffect(() => {
    setSpeakers(speakersData);

    swiperRef.current = new Swiper('.swiper-multiple', {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        600: {
  
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1400: {

          slidesPerView: 4,
          spaceBetween: 30,
        },
        1600: {
          slidesOffsetBefore: 60,
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });


  }, []);

  const backgroundImage = isMobile ? `url(${fondoMobile})` : `url(${fondoDesktop})`;

  return (
    <div className='SpeakersSection' style={{ backgroundImage }}>
      <div className='button-outline'>
        Speakers
      </div>
      <h3 className='SpeakersSection__title'>We've prepared a great lineup of speakers for the event.</h3>


      <div className="swiper-container swiper-multiple" >
        <div className="swiper-wrapper">
          {speakers.slice(0, 7).map((speaker, index) => (
            <div className="swiper-slide" key={index}>
              <div className='SpeakersSection__container'>
                <Card className="SpeakersSection__card">
                  <div>
                    <CardHeader
                      valign="bottom"
                      style={{
                        backgroundImage: `url(${speaker.image})`,
                      }}
                    />
                  </div>
                  <CardContent>
                    <p className="SpeakersSection__card-title">{speaker.name}</p>
                    <p className="SpeakersSection__card-description">{speaker.position}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <Link
        tabLink="#view-speakers"
        className='button-filled button button-fill button-raised'
        onClick={handleClick}
      >
        <div className="background background__init"></div>
        <div className="background background__hover"></div>
        See All Speakers
      </Link>
    </div>
  );
};

export { SpeakersSlider };
