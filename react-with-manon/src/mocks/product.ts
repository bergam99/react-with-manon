interface IProductImg {
  imgUrl: string;
  alt: string;
}

interface IProduct {
  id: number;
  title: string;
  details: string;
  price: number;
  isAvailable: boolean;
  imgUrl: IProductImg;
}

const PRODUCTS: IProduct[] = [
  {
    id: 1,
    title: "pomme",
    price: 11,
    details: "details de pomme",
    imgUrl: "public/img/pomme.png",
    isAvailable: true,
  },
  {
    id: 2,
    title: "bananes",
    price: 12,
    details: "details de bananas",
    imgUrl: "public/img/banana.png",
    isAvailable: true,
  },
  {
    id: 3,
    title: "ananas",
    price: 10,
    details: "details de ananas",
    imgUrl: "public/img/ananas.png",
    isAvailable: false,
  },
  {
    id: 4,
    title: "pêche",
    price: 8,
    details: "details de pêche",
    imgUrl: "public/img/peche.png",
    isAvailable: false,
  },
  {
    id: 5,
    title: "kiwi",
    price: 4,
    details: "details de kiwi",
    imgUrl: "public/img/kiwi.png",
    // require("assets/img/Photo hero.png");
    isAvailable: true,
  },
];
