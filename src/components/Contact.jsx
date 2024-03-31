import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import fondoMobile from '../../public/images/home/4_map_mb.jpg';
import fondoDesktop from '../../public/images/home/3_speakers_dsk.jpg';
import message from '../../public/images/home/message.svg';
import venue from '../../public/images/home/Venue Helpdesk Location - Plaza Foyer.png';
import {
  SkeletonBlock

} from 'framework7-react';
const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const backgroundImage = isMobile ? `url(${fondoMobile})` : `url(${fondoDesktop})`;
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

  return (
    <div>
      {loading ? (
        <div className='banner contact skeleton-effect-wave'>
          <div className=' contact__button'>
            <SkeletonBlock style={{ width: '120px', height: '26px', borderRadius: '35%' }} slot="media" />
          </div>
          <br></br>
          <div className='VenueHome__contenr' >
            <SkeletonBlock className='VenueHome__title' style={{ width: '150px', height: '40px' }} slot="media" />
          </div>
          <br></br>
          <div  >
            <SkeletonBlock style={{ width: '25rem', height: '300px' }} slot="media" />
          </div>
        </div>
      ) : (
        <div className='banner contact' style={{ backgroundImage }}>
          <div className='button-outline contact__button'>
            Contact us
          </div>
          <div className='VenueHome__contenr' >
            <h2 className='VenueHome__title'  >
              Get in touch
            </h2>
          </div>
          <div className='contact__container'>
            <div className='contact__icon'> <img src={message} alt="" /></div>
            <div className='contact__title'> <img src={venue} alt="" /></div>
            <div className='contact__description' >  <p>
              Key contacts: Brenda Dudick | 631-921-9738 | brenda@sndproductions.com. <br></br>
              Henri Musa | 603-809-8624 | henrietta.musa@philips.com
            </p></div>
          </div>

        </div>
      )}
    </div>
  );
};

export { Contact };
