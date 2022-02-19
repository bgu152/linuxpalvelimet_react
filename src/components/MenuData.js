import React from 'react';

export const MenuData = [
  {
    title: 'Etusivu',
    path: '/etusivu'
  },
  {
    title: 'Harjoitukset',
    // path: '/harjoitukset',
    href: 'https://terokarvinen.com/2021/linux-palvelimet-ict4tn021-3018/#h1',
    subNav: [
      {
        title: 'Viikko1',
        href: 'https://terokarvinen.com/2021/linux-palvelimet-ict4tn021-3018/#h1'
      },
      {
        title: 'Viikko2',
        href: 'https://terokarvinen.com/2021/linux-palvelimet-ict4tn021-3018/#h2'
      },
      {
        title: 'Viikko3',
        href: 'https://terokarvinen.com/2021/linux-palvelimet-ict4tn021-3018/#h3'
      },
      {
        title: 'Viikko4',
        href: 'https://terokarvinen.com/2021/linux-palvelimet-ict4tn021-3018/#h'
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
  },
  {
    title: 'Ratkaisut 4',
    path: '/ratkaisut4',
    subNav:[
      {
        title:'Tehtävä 4z',
        path: '/ratkaisut4#4z'
      },
      {
        title:'Tehtävä 4a',
        path: '/ratkaisut4#4a'
      },
      {
        title:'Tehtävä 4d',
        path: '/ratkaisut4#4d'
      },
      {
        title:'Tehtävä 4e',
        path: '/ratkaisut4#4e'
      }
      ,
      {
        title:'Tehtävä 4f',
        path: '/ratkaisut4#4f'
      }
      ,
      {
        title:'Tehtävä 4g',
        path: '/ratkaisut4#4g'
      }
    ]
  }

];