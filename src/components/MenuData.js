import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

export const MenuData = [
  {
    title: 'Etusivu',
    path: '/etusivu',
    icon: <AiIcons.AiFillHome />,
    iconCloced: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
    ,
    subNav: [
      {
        title: 'Tehtävä 1z',
        path: '/ratkaisut1/teht1z',
        icon: <MdIcons.MdOutlineTaskAlt />,
        cName: 'sub-nav'
      }
    ]

  },
  {
    title: 'Harjoitukset',
    path: '/harjoitukset',
    subNav: [
      {
        title: 'Viikko1',
        href: 'https://terokarvinen.com/2021/linux-palvelimet-ict4tn021-3018/#h1'
      }
    ]

  },
  {
    title: 'Ratkaisut 1',
    path: '/ratkaisut1',
    subNav: [
      {
        title: 'Tehtävä 1z',
        path: '/ratkaisut1#1z'
      },
      {
        title: 'Tehtävä 1a',
        path: '/ratkaisut1#1a'
      }
    ]
  }
];