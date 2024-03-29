import React from 'react'

import ListSmallIslands from './listSmallIslands'

export const items = [
  {
    id: '6n1EOTol',
    title: 'japan with canon kiss x3',
    text: `some shots in japan taken with a canon kiss x3.`,
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/img_0359.jpg'),
        label: 'abashiri, japan',
      },
      {
        type: 'image',
        src: require('assets/images/img_0243.jpg'),
        label: 'sapporo, japan',
      },
      {
        type: 'image',
        src: require('assets/images/img_0111.jpg'),
        label: 'abashiri, japan',
      },
      {
        type: 'image',
        src: require('assets/images/img_0387.jpg'),
        label: 'abashiri, japan',
      },
      {
        type: 'image',
        src: require('assets/images/img_4453.jpg'),
        label: 'shizuoka, japan',
      },
      {
        type: 'image',
        src: require('assets/images/img_4480.jpg'),
        label: 'shizuoka, japan',
      },
      {
        type: 'image',
        src: require('assets/images/img_3889.jpg'),
        label: 'tokyo, japan',
      },
      {
        type: 'image',
        src: require('assets/images/img_3251.jpg'),
        label: 'izu, japan',
      },
    ],
  },
  {
    id: '4gyX7aqL',
    title: 'tokyo, japan',
    text: `a few shots from the first trips to tokyo.`,
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/IMG_4006.jpg'),
        label: 'tokyo, japan',
      },
      {
        type: 'image',
        src: require('assets/images/IMG_4013.jpg'),
        label: 'tokyo, japan',
      },
      {
        type: 'image',
        src: require('assets/images/IMG_4026.jpg'),
        label: 'tokyo, japan',
      },
      {
        type: 'image',
        src: require('assets/images/IMG_4237.jpg'),
        label: 'tokyo, japan',
      },
      {
        type: 'image',
        src: require('assets/images/IMG_4238.jpg'),
        label: 'tokyo, japan',
      },
    ],
  },
  {
    id: '2ovZOQmQ',
    title: 'baseball game in tokyo, japan',
    text: 'a baseball game in tokyo, japan.',
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/IMG_4238.jpg'),
        label: 'tokyo, japan',
      },
    ],
  },
  {
    id: 'FeEr0YMe',
    title: 'year of the',
    text: () => {
      const animals = [
        'rat',
        'ox',
        'tiger',
        'rabbit',
        'dragon',
        'snake',
        'horse',
        'goat',
        'monkey',
        'rooster',
        'dog',
        'pig',
      ]
      const date = new Date()
      const year = date.getFullYear()
      const animal = animals[(year - 1948) % animals.length]
      return <span className="text-large">{animal}</span>
    },
    Component: null,
  },
  {
    id: 'OdOcgBi7',
    title: 'ai weiwei in london',
    text: () => (
      <span>
        ai weiwei exhibition in piccadilly circus, <mark>london, uk, 2020</mark>
        .
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/IMG_3370.jpg'),
        label: 'london, uk',
      },
      {
        type: 'image',
        src: require('assets/images/IMG_2836.jpg'),
        label: 'london, uk',
      },
      {
        type: 'image',
        src: require('assets/images/IMG_3371.jpg'),
        label: 'london, uk',
      },
      {
        type: 'image',
        src: require('assets/images/IMG_3353.jpg'),
        label: 'london, uk',
      },
    ],
  },
  {
    id: 'UOcuwt3P',
    title: 'cherry blossoms along meguro river',
    text: () => (
      <span>
        a row of cherry blossoms along the meguro river,{' '}
        <mark>tokyo, japan, 2021</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/IMG_6354.jpg'),
        label: 'tokyo, japan',
      },
    ],
  },
  {
    id: 'YaMAaXIz',
    title: 'yamanote line video #1',
    text: () => (
      <span>
        video taken from the yamanote subway line,{' '}
        <mark>tokyo, japan, 2021</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'video',
        src: require('assets/video/IMG_8267.mov'),
        label: 'tokyo, japan',
      },
    ],
  },
  {
    id: 'KS0IgMLJ',
    title: 'yamanote line video #2',
    text: () => (
      <span>
        video taken from the yamanote subway line,{' '}
        <mark>tokyo, japan, 2021</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'video',
        src: require('assets/video/IMG_8034.mov'),
        label: 'tokyo, japan',
      },
    ],
  },
  {
    id: 'DgBgHDXP',
    title: 'narita airport quarantine hotel view',
    text: () => (
      <span>
        view from narita airport quarantine hotel,{' '}
        <mark>tokyo, japan, 2021</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/IMG_6262.jpg'),
        label: 'tokyo, japan',
      },
    ],
  },
  {
    id: 'IpX1UuJA',
    status: 'draft',
    title: 'to-do list item count',
    text: () => (
      <span>
        <mark className="dark text-large">
          34 items on this year's to-do list
        </mark>
        .
      </span>
    ),
    Component: null,
  },
  {
    id: 'c7SzsMX4',
    title: 'theseboys logo',
    text: `theseboys logo.`,
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/tb-logo-blue.png'),
        label: 'theseboys logo',
      },
    ],
  },
  {
    id: 'WfO7R3Kk',
    title: 'japan japan',
    text: `japan japan photo collage.`,
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/japan-japan-03.jpg'),
        label: 'japan',
      },
    ],
  },
  {
    id: 'TW92JnS4',
    title: 'wedding in nagano',
    text: () => (
      <span>
        a wedding in <mark>nagano, japan, 2004</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/2004-12-23 13.09.20-12.jpg'),
        label: 'nagano, japan',
      },
      {
        type: 'image',
        src: require('assets/images/2004-12-23 13.09.04-10.jpg'),
        label: 'nagano, japan',
      },
      {
        type: 'image',
        src: require('assets/images/2004-12-23 13.09.14-9.jpg'),
        label: 'nagano, japan',
      },
      {
        type: 'image',
        src: require('assets/images/2004-12-23 13.09.23-7.jpg'),
        label: 'nagano, japan',
      },
    ],
  },
  {
    id: 'EwqvVAsK',
    status: 'draft',
    title: 'snow hokkaido',
    text: () => (
      <span>
        video of snow, <mark>hokkaido, japan</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'video',
        src: require('assets/video/final_61dc61552423620030ff7823_211763.mp4'),
        label: 'hokkaido, japan',
      },
    ],
  },
  {
    id: 'n5VaX4Sg',
    title: 'breakfast on elbrus',
    text: () => (
      <span>
        breakfast on mount elbrus, <mark>russia, 2006</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/ELBRUS_2006_04-edit.jpg'),
        label: 'mount elbrus, russia',
      },
    ],
  },
  {
    id: '5AWKtaN7',
    title: 'flower shop in tokyo',
    text: () => (
      <span>
        a flower shop in <mark>tokyo, japan, 2021</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/IMG_6914.jpg'),
        label: `tokyo, japan`,
      },
    ],
  },
  {
    id: 'jj0diCuc',
    title: 'detail 9/9a aungier street',
    text: `detail from inside dublin's oldest domestic building at 9/9a aungier street.`,
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/9_9aAungierStreet_19Oct2014_EoghanMcCarthy_02.jpg'),
        label: 'dublin, ireland',
      },
      {
        type: 'image',
        src: require('assets/images/9_9aAungierStreet_19Oct2014_EoghanMcCarthy_01.jpg'),
        label: 'dublin, ireland',
      },
    ],
  },
  {
    id: 'e1Y1MUy4',
    title: 'bamboo',
    text: () => (
      <span>
        a bamboo forest in <mark>shizuoka, japan</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/IMG_4063.jpg'),
        label: 'shizuoka, japan',
      },
      {
        type: 'image',
        src: require('assets/images/IMG_4063.jpg'),
        label: 'shizuoka, japan',
      },
      {
        type: 'image',
        src: require('assets/images/IMG_4063.jpg'),
        label: 'shizuoka, japan',
      },
    ],
  },
  {
    id: 'hrT6sHP9',
    status: 'draft',
    title: 'lockdown piccadilly circus',
    text: () => (
      <span>
        piccadilly circus during lockdown, <mark>london, 2020</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/IMG_0750-edit.jpg'),
        label: 'london, uk',
      },
    ],
  },
  {
    id: 'LwEmhBVL',
    title: 'merry-go-round',
    text: `merry-go-round.`,
    media: [
      {
        type: 'image',
        src: require('assets/images/F1010008.jpg'),
        label: 'tokyo, japan',
      },
    ],
  },
  {
    id: '6lqwgtPJ',
    title: 'swiss alps',
    text: () => (
      <span>
        the alps, <mark>switzerland, 2019</mark>.
      </span>
    ),
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/IMG_8279.jpg'),
        label: 'switzerland',
      },
      {
        type: 'image',
        src: require('assets/images/IMG_8600.jpg'),
        label: 'switzerland',
      },
      // {
      //   type: "image",
      //   src: require("assets/images/IMG_8442.jpg"),
      //   label: "switzerland",
      // },
      {
        type: 'image',
        src: require('assets/images/IMG_8284.jpg'),
        label: 'switzerland',
      },
    ],
  },
  {
    id: 'hwzAk8Wx',
    title: 'list of small islands',
    text: `a small list of small islands`,
    Component: ListSmallIslands,
  },
  {
    id: 'erEU5o2u',
    title: 'hakone ekiden 2023',
    text: `hakone ekiden 2023`,
    media: [
      {
        type: 'image',
        src: require('assets/images/IMG_4355.jpg'),
        label: 'hakone ekiden 2023',
      },
      {
        type: 'video',
        src: require('assets/video/IMG_4348.mov'),
        label: 'hakone ekiden 2023',
      },
    ],
  },
  {
    id: 'umIfb1wj',
    title: 'flashing gif',
    text: `flashing gif.`,
    Component: null,
    media: [
      {
        type: 'image',
        src: require('assets/images/flashing-logo.gif'),
        label: 'flashing gif',
      },
    ],
  },
]

console.log(
  'number of live posts',
  items.filter((p) => p.status !== 'draft').length
)
