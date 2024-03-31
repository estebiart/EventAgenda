import React from 'react';
import { Page, BlockTitle, } from 'framework7-react';
import { Map } from '../components/Map';
import { Spaces } from '../components/Spaces';
import { Copy } from '../components/copy';


const VenuePage = () => {

  return (

    <Page>
      <Map />
      <Spaces />
      <Copy />
    </Page>
  );
};

export default VenuePage;
