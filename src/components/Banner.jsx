// Banner.jsx
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import fondoMobile from '../../public/images/home/1_intro_mb.jpg';
import fondoDesktop from '../../public/images/home/1_intro_dsk.jpg';
import logo from '../../public/images/home/logo.png';

import {
  List, SkeletonBlock

} from 'framework7-react';
const Banner = () => {
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
        <List v-if="loading" className="banner skeleton-effect-wave">
          <div className='banner__header'>
            <SkeletonBlock className='banner__title' style={{ width: '9em', height: '100px' }} slot="media" />
          </div>
          <div className='banner__image'>
            <SkeletonBlock className='banner__image' style={{ width: '309px', height: '200px' }} slot="media" />
          </div>
        </List>
      ) : (
        <div className='banner' style={{ backgroundImage }}>
          <div className='banner__header'>
            <h2 className='banner__title' >
              Welcome to the <strong>HPM 2024 Kickoff</strong> Event in Orlando!
            </h2>
          </div>
          <div className='banner__image'>
            <img src={logo} alt="" />
          </div>
        </div>
      )}

    </div>
  );
};

export { Banner };
