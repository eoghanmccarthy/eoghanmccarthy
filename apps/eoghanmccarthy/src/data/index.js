import { generateId } from "../utils/generateId";

export const posts = [
  {
    id: "6n1EOTol",
    title: "japan with canon kiss x3",
    text: "some shots in japan taken with a canon kiss x3.",
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
    id: "4gyX7aqL",
    title: "tokyo, japan",
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
    id: "2ovZOQmQ",
    title: "baseball game in tokyo, japan",
    text: "a baseball game in tokyo, japan.",
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_4238.jpg"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: "FeEr0YMe",
    title: "year of the",
    text: `<span class="text-large">tiger</span>`,
  },
  {
    id: "OdOcgBi7",
    title: "ai weiwei in london",
    text: `ai weiwei exhibition in piccadilly circus, <mark>london, uk, 2020</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_3370.jpg"),
        label: "london, uk",
      },
      {
        type: "image",
        src: require("assets/images/IMG_2836.jpg"),
        label: "london, uk",
      },
      {
        type: "image",
        src: require("assets/images/IMG_3371.jpg"),
        label: "london, uk",
      },
      {
        type: "image",
        src: require("assets/images/IMG_3353.jpg"),
        label: "london, uk",
      },
    ],
  },
  {
    id: "UOcuwt3P",
    title: "cherry blossoms along meguro river",
    text: `a row of cherry blossoms along the meguro river, <mark>tokyo, japan, 2021</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_6354.jpg"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: "YaMAaXIz",
    title: "yamanote line video",
    text: `video taken from the yamanote subway line, <mark>tokyo, japan, 2021</mark>.`,
    media: [
      {
        type: "video",
        src: require("assets/video/IMG_8267.mov"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: "KS0IgMLJ",
    title: "shibuya crossing yamanote line video",
    text: `video of shibuya crossing taken from the yamanote subway line, <mark>tokyo, japan, 2021</mark>.`,
    media: [
      {
        type: "video",
        src: require("assets/video/IMG_8034.mov"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: "MKC7CpU0",
    status: "draft",
    title: "los angeles itinerary",
    text: `los angeles itinerary, 2003.`,
    media: [
      {
        type: "image",
        src: require("assets/images/Screenshot 2022-01-11 at 23.18.47-edit.jpg"),
        label: "los angeles, usa",
      },
    ],
  },
  {
    id: "DgBgHDXP",
    title: "narita airport quarantine hotel view",
    text: `view from narita airport quarantine hotel, <mark>tokyo, japan, 2021</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_6262.jpg"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: "IpX1UuJA",
    title: "to-do list item count",
    text: `<mark class="dark text-large">34 items on this year's to-do list</mark>.`,
  },
  {
    id: "c7SzsMX4",
    title: "theseboys logo",
    text: `theseboys logo.`,
    media: [
      {
        type: "image",
        src: require("assets/images/tb-logo-blue.png"),
        label: "theseboys logo",
      },
    ],
  },
  {
    id: "WfO7R3Kk",
    title: "japan japan",
    text: `japan japan photo collage.`,
    media: [
      {
        type: "image",
        src: require("assets/images/japan-japan-03.jpg"),
        label: "japan",
      },
    ],
  },
  {
    id: "TW92JnS4",
    title: "wedding in nagano",
    text: `a wedding in <mark>nagano, japan, 2004</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/2004-12-23 13.09.20-12.jpg"),
        label: "nagano, japan",
      },
      {
        type: "image",
        src: require("assets/images/2004-12-23 13.09.04-10.jpg"),
        label: "nagano, japan",
      },
      {
        type: "image",
        src: require("assets/images/2004-12-23 13.09.14-9.jpg"),
        label: "nagano, japan",
      },
      {
        type: "image",
        src: require("assets/images/2004-12-23 13.09.23-7.jpg"),
        label: "nagano, japan",
      },
    ],
  },
  {
    id: "EwqvVAsK",
    status: "draft",
    title: "snow hokkaido",
    text: `video of snow, <mark>hokkaido, japan</mark>.`,
    media: [
      {
        type: "video",
        src: require("assets/video/final_61dc61552423620030ff7823_211763.mp4"),
        label: "hokkaido, japan",
      },
    ],
  },
  {
    id: "n5VaX4Sg",
    title: "breakfast on elbrus",
    text: `breakfast on mount elbrus, <mark>russia, 2006</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/ELBRUS_2006_04-edit.jpg"),
        label: "mount elbrus, russia",
      },
    ],
  },
  {
    id: "5AWKtaN7",
    title: "flower shop in tokyo",
    text: `a flower shop in <mark>tokyo, japan, 2021</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_6914.jpg"),
        label: `tokyo, japan`,
      },
    ],
  },
  {
    id: "jj0diCuc",
    title: "detail 9/9a aungier street",
    text: `detail from inside dublin's oldest domestic building at 9/9a aungier street.`,
    media: [
      {
        type: "image",
        src: require("assets/images/9_9aAungierStreet_19Oct2014_EoghanMcCarthy_02.jpg"),
        label: "dublin, ireland",
      },
      {
        type: "image",
        src: require("assets/images/9_9aAungierStreet_19Oct2014_EoghanMcCarthy_01.jpg"),
        label: "dublin, ireland",
      },
    ],
  },
  {
    id: "e1Y1MUy4",
    title: "bamboo",
    text: `a bamboo forest in <mark>shizuoka, japan</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_4063.jpg"),
        label: "shizuoka, japan",
      },
      {
        type: "image",
        src: require("assets/images/IMG_4063.jpg"),
        label: "shizuoka, japan",
      },
      {
        type: "image",
        src: require("assets/images/IMG_4063.jpg"),
        label: "shizuoka, japan",
      },
    ],
  },
  {
    id: "hrT6sHP9",
    status: "draft",
    title: "lockdown piccadilly circus",
    text: `piccadilly circus during lockdown, <mark>london, 2020</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_0750-edit.jpg"),
        label: "london, uk",
      },
    ],
  },
  {
    id: "LwEmhBVL",
    status: "draft",
    title: "merry-go-round",
    text: `a merry-go-round.`,
    media: [
      {
        type: "image",
        src: require("assets/images/F1010008.jpg"),
        label: "tokyo, japan",
      },
    ],
  },
  {
    id: "6lqwgtPJ",
    title: "swiss alps",
    text: `the alps, <mark>switzerland, 2019</mark>.`,
    media: [
      {
        type: "image",
        src: require("assets/images/IMG_8279.jpg"),
        label: "switzerland",
      },
      {
        type: "image",
        src: require("assets/images/IMG_8600.jpg"),
        label: "switzerland",
      },
      // {
      //   type: "image",
      //   src: require("assets/images/IMG_8442.jpg"),
      //   label: "switzerland",
      // },
      {
        type: "image",
        src: require("assets/images/IMG_8284.jpg"),
        label: "switzerland",
      },
    ],
  },
  {
    id: "umIfb1wj",
    title: "flashing gif",
    text: `flashing gif.`,
    media: [
      {
        type: "image",
        src: require("assets/images/flashing-logo.gif"),
        label: "flashing gif",
      },
    ],
  },
];

console.log(
  "number of live posts",
  posts.filter((p) => p.status !== "draft").length
);
