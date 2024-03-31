import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import fondoMobile from '../../public/images/home/2_agenda_mb.jpg';
import fondoDesktop from '../../public/images/home/2_agenda_dsk.jpg';
import eventMobile from '../../public/images/home/events_mb.png';
import eventDesktop from '../../public/images/home/events_dsk.png';
import brain from '../../public/images/home/brain-cognitive.svg';
import politics from '../../public/images/home/politics-speech.svg';
import poverty from '../../public/images/home/no-poverty.svg';
import calendar from '../../public/images/home/calendar-star.svg';
import products from '../../public/images/home/products.svg';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Link,
  SkeletonBlock
} from 'framework7-react';


const EventsHome = () => {
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
  const handleClick = () => {
    const agendaTabLink = document.querySelector('[data-tab="#view-agenda"]');
    if (agendaTabLink) {
      agendaTabLink.click();
    }
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const backgroundImage = isMobile ? `url(${fondoMobile})` : `url(${fondoDesktop})`;
  const eventImage = isMobile ? `url(${eventMobile})` : `url(${eventDesktop})`;


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
        <div className='banner eventSection' style={{ backgroundImage }}>
          <div className='button-outline'>
            Agenda
          </div>
          <div className='eventSection__header'>
            <h3 className='eventSection__title'>We have prepared an exciting agenda for you</h3>
            <p className='eventSection__text'>Join us to explore our organizational strategy and 2024 roadmap as well as important announcements, panel discussions and workshops</p>
          </div>
          <div className='eventSection__container '>
            <Card className="eventSection__card ">
              <CardHeader
                valign="bottom"
                style={{
                  backgroundImage: eventImage,
                  height: "212px"
                }}
              >
              </CardHeader>
              <div className="eventSection__content">
                <CardContent>
                  <ul className='eventSection__list'>
                    <li>
                      <img src={brain} alt="Event Desktop" /> 
                      <p>2024 Innovation</p>
                    </li>
                    <li>
                      <img src={politics} alt="Leadership Announcements" /> 
                      <p>Leadership announcements</p>
                    </li>
                    <li>
                      <img src={poverty} alt="North America Leadership Update" /> 
                      <p>North America leadership update</p>
                    </li>
                    <li>
                      <img src={calendar} alt="HPM Leadership Update" /> 
                      <p>HPM leadership update</p>
                    </li>
                    <li>
                      <img src={products} alt="Product & Solutions Portfolio" /> 
                      <p>Product & solutions portfolio</p>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    tabLink="#view-agenda"
                    className='button-filled button button-fill button-raised'
                    onClick={handleClick}
                  >
                    <div className="background background__init"></div>
                    <div className="background background__hover"></div>
                    See All Events
                  </Link>
                </CardFooter>
              </div>

            </Card>
          </div>

        </div>
      )}
    </div>
  );
};

export { EventsHome };
