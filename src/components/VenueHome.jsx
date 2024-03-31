import React, { useState, useEffect } from 'react';
import { Link } from 'framework7-react';
import { useMediaQuery } from 'react-responsive';
import fondoMobile from '../../public/images/home/4_map_mb.jpg';
import fondoDesktop from '../../public/images/home/4_map_dsk.jpg';
import map from '../../public/assets/map.json';
import Lottie from "lottie-react";
import {
  SkeletonBlock
} from 'framework7-react';
const VenueHome = () => {
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
  const handleClick = () => {
    const agendaTabLink = document.querySelector('[data-tab="#view-venue"]');
    if (agendaTabLink) {
      agendaTabLink.click();
    }
  };
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
        <div className='banner VenueHome' style={{ backgroundImage }}>
          <div className='button-outline'>
            Venue
          </div>
          <div className='VenueHome__contenr' >
            <h2 className='VenueHome__title'  >
              Explore our venue
            </h2>
            <p className='VenueHome__description' >We hope you enjoy your stay at Hyatt Regency Orlando. To find out how to navigate your way around the meeting spaces, check out our venue map.</p>
          </div>

          <div className='VenueHome__gif'>
            <Lottie
              animationData={map}

            />
          </div>

          <Link
            tabLink="#view-venue"
            className='button-filled button button-fill button-raised'
            onClick={handleClick}
          >
            <div className="background background__init"></div>
            <div className="background background__hover"></div>
            See Venue Map
          </Link>

        </div>
      )}
    </div>
  );
};

export { VenueHome };
