import React from 'react';
import {
  Page,f7
} from 'framework7-react';
import {
  Banner
} from './../components/Banner';
import {
  SpeakersSlider
} from './../components/SpeakersSlider.jsx';
import { EventsHome } from '../components/EventsHome.jsx';
import { VenueHome } from '../components/VenueHome.jsx';
import { Copy } from '../components/copy.jsx';
import { Contact } from '../components/Contact.jsx';
import { Headshot } from '../components/Headshot.jsx';
import { Floating } from '../components/Floating.jsx';



const HomePage = () => {
  const isMobile = f7.device.ios || f7.device.android;
  return (
    <Page name="home">
      {isMobile && <Floating />}
      <Banner />
      <EventsHome />
      <SpeakersSlider />
      <VenueHome />
      <Headshot />
      <Contact />
      <Copy />
    </Page>
  );
};

export default HomePage;