import React, { useState, useEffect } from 'react';
import {
  App,
  Views,
  View,
  Toolbar,
  Link,
} from 'framework7-react';
import calendarOn from '../../public/images/nav/calendar_on.svg';
import calendarOff from '../../public/images/nav/calendar_off.svg';
import homeOn from '../../public/images/nav/home_on.svg';
import homeOff from '../../public/images/nav/home_off.svg';
import mapOn from '../../public/images/nav/map_on.svg';
import mapOff from '../../public/images/nav/map_off.svg';
import speakersOn from '../../public/images/nav/speakers_on.svg';
import speakersOff from '../../public/images/nav/speakers_off.svg';
import logo from '../../public/images/home/logo.png';
import routes from '../js/routes';
import store from '../js/store';
import {
  SkeletonBlock
} from 'framework7-react';
const MyApp = () => {

  const [activeTab, setActiveTab] = useState('home');
  const tabIcons = {
    home: { on: homeOn, off: homeOff },
    calendar: { on: calendarOn, off: calendarOff },
    speakers: { on: speakersOn, off: speakersOff },
    venue: { on: mapOn, off: mapOff },
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };


  // Framework7 Parameters
  const f7params = {
    name: 'philips-events-app', // App name
    theme: 'auto', // Automatic theme detection
    // App store
    store: store,
    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV === 'production' ? {
      path: '/service-worker.js',
    } : {},
  };

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
    <App {...f7params}>

      {/* Views/Tabs container */}
      <Views tabs className="safe-areas">
        {/* Tabbar for switching views-tabs */}
        <div >
          {loading ? (
            <div className=" skeleton-effect-wave">
              <div className="skeleton-container">
                <SkeletonBlock
                  style={{ width: '100vw', height: '100px' }}
                  slot="media"
                />
              </div>
            </div>

          ) : (
            <div className='menu'>
              <div className='menu__image hidden-mobile'>
                <img src={logo} alt="" />
              </div>
              <div className='menu__toolbar'>
                <Toolbar tabbar icons bottom>
                  <Link
                    tabLink="#view-home"
                    tabLinkActive={activeTab === 'home'}
                    onClick={() => handleTabChange('home')}
                  >
                    <img src={tabIcons.home[activeTab === 'home' ? 'on' : 'off']} alt="Home" />
                    <span className={`tabbar-label ${activeTab === 'home' ? 'active-tab' : ''}`}>
                      Home
                    </span>
                  </Link>
                  <Link
                    tabLink="#view-agenda"
                    tabLinkActive={activeTab === 'calendar'}
                    onClick={() => handleTabChange('calendar')}
                  >
                    <img src={tabIcons.calendar[activeTab === 'calendar' ? 'on' : 'off']} alt="Agenda" />
                    <span className={`tabbar-label ${activeTab === 'calendar' ? 'active-tab' : ''}`}>
                      Agenda
                    </span>
                  </Link>
                  <Link
                    tabLink="#view-speakers"
                    tabLinkActive={activeTab === 'speakers'}
                    onClick={() => handleTabChange('speakers')}
                  >
                    <img src={tabIcons.speakers[activeTab === 'speakers' ? 'on' : 'off']} alt="Speakers" />
                    <span className={`tabbar-label ${activeTab === 'speakers' ? 'active-tab' : ''}`}>
                      Speakers
                    </span>
                  </Link>
                  <Link
                    tabLink="#view-venue"
                    tabLinkActive={activeTab === 'venue'}
                    onClick={() => handleTabChange('venue')}
                  >
                    <img src={tabIcons.venue[activeTab === 'venue' ? 'on' : 'off']} alt="Venue" />
                    <span className={`tabbar-label ${activeTab === 'venue' ? 'active-tab' : ''}`}>
                      Venue
                    </span>
                    
                  </Link>
                </Toolbar>
              </div><div className='menu__button hidden-mobile'>
                <Link
                  tabLink="#view-agenda"
                  tabLinkActive={activeTab === 'calendar'}
                  onClick={() => handleTabChange('calendar')}
                  className='button-filled button button-fill button-raised'
                >
                  <div className="background background__init"></div>
                  <div className="background background__hover"></div>
                  See All Events
                </Link>
              </div> </div>
          )}
        </div>
        {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
        <View id="view-home" main tab tabActive url="/" />

        {/* Catalog View */}
        <View id="view-agenda" name="agenda" tab url="/agenda/" />

        {/* Settings View */}
        <View id="view-speakers" name="speakers" tab url="/speakers/" />

        {/* Settings View */}
        <View id="view-venue" name="venue" tab url="/venue/" />

      </Views>
    </App>
  )
}

export default MyApp;