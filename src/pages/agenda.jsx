import React, { useRef, useState, useEffect } from 'react';
import { Navbar, Page, Tabs, Tab, Toolbar, Link, Searchbar, Subnavbar, List, ListItem, BlockTitle, Chip, Block, AccordionContent, } from 'framework7-react';
import fondoMobile from '../../public/images/agenda/AgendaMobile.jpg';
import fondoDesktop from '../../public/images/agenda/AgendaDesktop.jpg';
import agendaData from '../../public/assets/agenda.json';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';

const AgendaPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const backgroundImage = isMobile ? `url(${fondoMobile})` : `url(${fondoDesktop})`;

  const accordionOpen = () => {
    let tab = document.querySelector(".agenda .tab-active")
    tab.scrollTop = 0;
  }
  return (
    <Page pageContent={false} style={{ backgroundImage }} className='banner agenda'>
     

      <Navbar >

        <Subnavbar inner={false}>
          <Searchbar searchContainer=".search-list" searchIn=".item-title" />
        </Subnavbar>
        <hr />
      </Navbar>
      <div className='agenda__toolbar'>


        <Toolbar top tabbar labels >
          <Link tabLink="#tab-1" tabLinkActive>
            Day 1
          </Link>
          <Link tabLink="#tab-2">Day 2</Link>

        </Toolbar>
      </div>
      <Tabs>
        {agendaData.map(tab => (
          <Tab key={tab.id} id={tab.id} className="page-content" tabActive={tab.id === "tab-1"}>
            <List strong outlineIos dividersIos insetMd accordionList className="search-list">
              {tab.items.map(item => (
                <ListItem key={item.title} accordionItem title={item.title} itemSpecial={item.itemSpecial} onAccordionBeforeOpen={accordionOpen}
              >
                  <AccordionContent >
                    <ul>
                      {item.content.map(event => (
                        <li key={event.id} className={`item ${event.itemSpecial ? 'item-special' : ''}`}>
                          <div className="item-content">
                            <div className="item-inner">
                              <div className="item-imageContainer">
                                {event.icon && (
                                  <div className="item-image">
                                    <img src={event.icon} alt="" />
                                  </div>
                                )}
                                <div className="item-title" title={event.title}>
                                  {event.title}
                                </div>
                              </div>
                              {event.time && (
                                <div className="item-time">
                                  <div className="item-icon"></div>
                                  <div>{event.time}</div>
                                </div>
                              )}
                              <div className="item-chips">
                                {event.speakers && event.speakers.map((speaker, index) => (
                                  <div key={index}>
                                    <div className="item-chip">
                                      <Chip text={speaker.name}>
                                        {speaker.image && (
                                          <img slot="media" src={speaker.image} alt={speaker.name} />
                                        )}
                                      </Chip>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </ListItem>
              ))}
            </List>
          </Tab>
        ))}
      </Tabs>
    </Page>
  );
};

export default AgendaPage;
