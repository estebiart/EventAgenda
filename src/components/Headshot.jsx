import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import fondoMobile from '../../public/images/home/4_map_mb.jpg';
import fondoDesktop from '../../public/images/home/3_speakers_dsk.jpg';
import headshot from '../../public/images/home/headshot.png';
import {
  SkeletonBlock
} from 'framework7-react';
const Headshot = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    load();
  }, []);

  const load = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const backgroundImage = isMobile ? `url(${fondoMobile})` : `url(${fondoDesktop})`;

  return (
    <div>

      {loading ? (
        <div className='banner skeleton-effect-wave'>
          <div className=' contact__button'>
            <SkeletonBlock style={{ width: '120px', height: '26px', borderRadius: '35%' }} slot="media" />
          </div>
          <br></br>
          <div className='VenueHome__contenr' >
            <SkeletonBlock className='VenueHome__title' style={{ width: '250px', height: '40px' }} slot="media" />
          </div>
          <br></br>
          <div className='VenueHome__contenr' >
            <SkeletonBlock className='VenueHome__title' style={{ width: '250px', height: '80px' }} slot="media" />
          </div>
          <br></br>
          <div  >
            <SkeletonBlock style={{ width: '80rem', height: '300px' }} slot="media" />
          </div>
        </div>
      ) : (
        <div className='banner headshot' style={{ backgroundImage }}>
          <div className='button-outline headshot__button'>
            Get New Professional Headshot
          </div>
          <div className='VenueHome__contenr' >
            <h2 className='headshot__title'  >
              Visit "reference place"
            </h2>
            <p className='VenueHome__description' >Capture your best self with our on-site photographer. Elevate your image, strike a pose, and let us create a professional portrait that leaves a lasting impression!</p>
          </div>

          <div className='headshot__image'>

            <img src={headshot} alt="" />

          </div>
        </div>
      )}
    </div>
  );
};

export { Headshot };
