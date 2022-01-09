import { generateId } from "../utils/generateId";

export const posts = [
  {
    id: generateId(),
    title: "japan with canon kiss x3",
    slug: "japan-canon-kiss-x3",
    text: "some shots in japan taken with a canon kiss x3",
    media: [
      {
        type: "image",
        src: require("assets/images/img_0359.jpg"),
        label: "abashiri, japan",
      },
      {
        type: "image",
        src: require("assets/images/img_0243.jpg"),
        label: "sapporo, japan",
      },
      {
        type: "image",
        src: require("assets/images/img_0111.jpg"),
        label: "abashiri, japan",
      },
      {
        type: "image",
        src: require("assets/images/img_0387.jpg"),
        label: "abashiri, japan",
      },
      {
        type: "image",
        src: require("assets/images/img_4453.jpg"),
        label: "shizuoka, japan",
      },
      {
        type: "image",
        src: require("assets/images/img_4480.jpg"),
        label: "shizuoka, japan",
      },
      {
        type: "image",
        src: require("assets/images/img_3889.jpg"),
        label: "tokyo, japan",
      },
      {
        type: "image",
        src: require("assets/images/img_3251.jpg"),
        label: "izu, japan",
      },
    ],
  },
  {
    id: generateId(),
    title: "tokyo, japan",
    slug: "tokyo-japan",
    text: "a few shots from the first trips to tokyo.",
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_4006.jpg"),
        label: "tokyo, japan",
      },
      {
        type: "image",
        src: require("assets/images/IMG_4013.jpg"),
        label: "tokyo, japan",
      },
      {
        type: "image",
        src: require("assets/images/IMG_4026.jpg"),
        label: "tokyo, japan",
      },
      {
        type: "image",
        src: require("assets/images/IMG_4237.jpg"),
        label: "tokyo, japan",
      },
      {
        type: "image",
        src: require("assets/images/IMG_4238.jpg"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: generateId(),
    title: "baseball game in tokyo, japan",
    slug: "baseball-game-tokyo-japan",
    text: "a baseball game in tokyo, japan",
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_4238.jpg"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: generateId(),
    title: "chinese year",
    slug: "chinese-year",
    text: "Tiger",
  },
  {
    id: generateId(),
    title: "ai weiwei in london",
    slug: "ai-weiwei-in-london",
    text: `ai weiwei exhibition in piccadilly circus, <mark>london, 2020</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_2836.jpg"),
        label: "london, uk",
      },
    ],
  },
  {
    id: generateId(),
    title: "cherry blossoms along meguro river",
    slug: "cherry-blossoms-meguro-river",
    text: `a row of cherry blossoms along the meguro river, <mark>tokyo, 2021</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_6354.jpg"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: generateId(),
    title: "yamanote line video",
    slug: "yamanote-line-video",
    text: `video taken from the yamanote subway line, <mark>tokyo, 2021</mark>.`,
    media: [
      {
        type: "video",
        src: require("assets/video/IMG_8267.mov"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: generateId(),
    title: "shibuya crossing yamanote line video",
    slug: "shibuya-crossing-yamanote-line-video",
    text: `video of shibuya crossing taken from the yamanote subway line, <mark>tokyo, 2021</mark>.`,
    media: [
      {
        type: "video",
        src: require("assets/video/IMG_8034.mov"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: generateId(),
    title: "narita airport quarantine hotel view",
    slug: "narita-airport-quarantine-hotel-view",
    text: `view from narita airport quarantine hotel, <mark>tokyo,
        2021</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_6262.jpg"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: generateId(),
    title: "theseboys logo",
    slug: "theseboys-logo",
    text: `theseboys logo.`,
    media: [
      {
        type: "image",
        src: require("assets/images/tb-logo-blue.png"),
        label: "theseboys logo",
      },
    ],
  },
];
