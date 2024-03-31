import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import fondoDesktop from '../../public/images/map/fondo_2.jpg';
import fondoMobile from '../../public/images/map/fondo_1_mobile.jpg';
import map from '../../public/images/map/map.png';
import logo from '../../public/images/home/logo.png';
import close from '../../public/images/map/close.svg';
import closeHover from '../../public/images/map/closeHover.svg';
import {
  Card,
  CardHeader,
  Button,
  Popup,
  BlockTitle,
  Block,
  Navbar,
  NavRight,
  Link,
  View,
  f7,
  Page
} from 'framework7-react';

const Map = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const backgroundImage = isMobile ? `url(${fondoMobile})` : `url(${fondoDesktop})`;
  const [popupOpened, setPopupOpened] = useState(false);
  const popup = useRef(null);


  const onPageBeforeRemove = () => {
    if (popup.current) popup.current.destroy();
  };

  return (
    <div className='banner venue' style={{ backgroundImage }}>
      <div className='venue__image hidden-desktop'>
        <img src={logo} alt="" />
      </div>
      <div className='button-outline venue__button'>
        Floor Plans
      </div>

      <div>
        <h3 className='venue__title'>Explore our venue</h3>
      </div>
      <Button popupOpen=".popup">
        <div className='venue__container '>
          <Card className="venue__card ">
            <CardHeader
              valign="bottom"
              style={{
                backgroundImage: `url(${map})`,

              }}
            >
            </CardHeader>

          </Card>
        </div>
      </Button>


      <Popup
        className="popup hidden-desktop"
        opened={popupOpened}
        onPopupClosed={() => setPopupOpened(false)}
      >
        <Page>
          <Navbar >
            <NavRight>
              <Link popupClose>
                <img className='close-image' src={close} alt="Cerrar" />
                <img className='close-hover-image' src={closeHover} alt="Cerrar con Hover" />
              </Link>
            </NavRight>
          </Navbar>
          <Block>
            <Card className="eventSection__card ">
              <CardHeader
                valign="bottom"
                style={{
                  backgroundImage: `url(${map})`,
                  height: "801px"
                }}
              >
              </CardHeader>

            </Card>
          </Block>
        </Page>
      </Popup>

    </div>
  );
};

export { Map };
