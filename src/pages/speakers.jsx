import React, { useRef, useState } from 'react';
import { Page, Card, CardHeader, CardContent, Link, Button } from 'framework7-react';
import { useMediaQuery } from 'react-responsive';
import speakersData from '../../public/assets/speakers.json';
import fondoMobile from '../../public/images/speakers/SpeakersMBL.jpg';
import fondoDesktop from '../../public/images/speakers/SpeakersDesktop_1.jpg';
import logo from '../../public/images/home/logo.png';


const SpeakPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const cardBeforeOpen = (e) => {
    let menu = document.querySelector(".menu");
    menu.classList.add("menu-animated");
    e.parentNode.style.opacity=0;
      setTimeout(function() {
        e.parentNode.style.opacity = 1;
      }, 400);


  }
  const cardClose = (e) => {
    let menu = document.querySelector(".menu");
    menu.classList.remove("menu-animated");
    e.parentNode.style.opacity=0;
      setTimeout(function() {
        e.parentNode.style.opacity = 1;
      }, 400);  

  }
  const iconElements = document.querySelectorAll('.icon.f7-icons');

  if (iconElements) {
    iconElements.forEach((iconElement) => {
      iconElement.innerHTML = ``;
    });
  }
  const allowInfinite = useRef(true);
  const [items, setItems] = useState([...speakersData.slice(0, 9)]);
  const [showPreloader, setShowPreloader] = useState(true);

  const loadMore = () => {
    if (!allowInfinite.current) return;
    allowInfinite.current = false;

    setTimeout(() => {
      if (items.length >= speakersData.length) {
        setShowPreloader(false);
        return;
      }

      const remainingSpeakers = speakersData.slice(items.length, items.length + 9);
      setItems([...items, ...remainingSpeakers]);
      allowInfinite.current = true;
    }, 100);
  };


  const backgroundImage = isMobile ? `url(${fondoMobile})` : `url(${fondoDesktop})`;
  return (
    <Page infinite infiniteDistance={50} infinitePreloader={showPreloader} onInfinite={loadMore} style={{ backgroundImage }} className=' speakers' >
      <div className='speakers__header'>
        <div className='venue__image hidden-desktop'>
          <img src={logo} alt="" />
        </div>
        <div className='speakers__button'>
          <div className='button-outline'>
            Speakers
          </div>
        </div>
        <div className='speakers__content'>
          <p className='speakers__title'>We’ve prepared a great lineup of speakers for the event. Find out more here.</p>
        </div>
      </div>
      <div className='speakers__cards'>
        {items.map((speaker, index) => (
          <div key={index} className="card-container">
            <Card expandable className="speakers-card" onCardBeforeOpen={(cardBeforeOpen)} onCardClose={(cardClose)} >
              <CardContent padding={false}>
                <div className="header-content" >
                  <CardHeader
                    valign="bottom"
                    style={{
                      backgroundImage: `url(${speaker.image})`,
                      height: '307px',
                    }}
                  />
                </div>
                <CardHeader textColor="black" className="display-block">
                  {speaker.name}
                </CardHeader>
                <Link
                  cardClose
                  color="black"
                  className="card-opened-fade-in"
                  style={{ position: 'absolute', }}
                  iconF7="xmark_circle_fill"
                />

                <div className="card-content-padding">
                  <br />
                  <small >{speaker.position}</small>
                  <p className="speakers__topic-title">Topic</p>
                  <div className='speakers__topics'>
                    {speaker.topics && speaker.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className='button-outline speakers__topic'>
                        <p>{topic}</p>
                      </div>
                    ))}
                  </div>
                  <p>
                    <Button fill round large cardClose color="yellow" textColor="black">
                      Close
                    </Button>
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="speakers__name">
              {speaker.name}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default SpeakPage;
