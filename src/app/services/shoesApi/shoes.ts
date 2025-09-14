import { v4 as uuid } from "uuid";

export enum Brand {
  Yeezy = 'Yeezy',
  Nike = 'Nike',
  Puma = 'Puma',
  Adidas = 'Adidas',
  OffWhite = "Off---White",
  AirJordan = "Air_Jordan"
}
export interface Shoe {
    brand : Brand[],
    model : string,
    price : number,
    rates : rate,
    id : string,
}
export interface rate {
    amount : number,
    rank : number,
}
export interface shoeItem {
    size : number,
    dateCreated : Date;
    type : Shoe;
    datePurchased : Date;
    id : string;
}
export const shoes: Shoe[] = [
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Beluga",
      price: 220,
      rates: { rank: 5.0, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Bred",
      price: 220,
      rates: { rank: 4.5, amount: 4 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Natural",
      price: 220,
      rates: { rank: 3.0, amount: 10 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Oat",
      price: 220,
      rates: { rank: 4.2, amount: 8 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Oreo",
      price: 220,
      rates: { rank: 4.7, amount: 12 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Zebra",
      price: 220,
      rates: { rank: 3.9, amount: 9 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "450 Cloud White",
      price: 200,
      rates: { rank: 2.0, amount: 24 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "450 Dark Slate",
      price: 200,
      rates: { rank: 3.2, amount: 2 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Geode",
      price: 220,
      rates: { rank: 4.1, amount: 4 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Inertia",
      price: 220,
      rates: { rank: 4.2, amount: 3 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Mauve",
      price: 220,
      rates: { rank: 4.6, amount: 6 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Static",
      price: 220,
      rates: { rank: 4.0, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 V2 Cream",
      price: 220,
      rates: { rank: 5.0, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 V2 Static",
      price: 220,
      rates: { rank: 4.3, amount: 9 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Wave Runner",
      price: 220,
      rates: { rank: 4.8, amount: 6 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "Slides Bone",
      price: 70,
      rates: { rank: 4.5, amount: 3 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "Slides Core",
      price: 70,
      rates: { rank: 4.5, amount: 5 }
    },
    {
      id: uuid(),
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "Slides Pure",
      price: 70,
      rates: { rank: 4.5, amount: 3 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike],
      model: "Dunk Low Panda",
      price: 115,
      rates: { rank: 4.7, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Dior",
      price: 1000,
      rates: { rank: 4.6, amount: 50 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Low Starfish",
      price: 130,
      rates: { rank: 5.0, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Low Unc",
      price: 130,
      rates: { rank: 4.3, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Low Wolf Grey",
      price: 130,
      rates: { rank: 4.0, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Mid Chicago Black Toe",
      price: 115,
      rates: { rank: 4.9, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Travis Fragment Low",
      price: 150,
      rates: { rank: 5.0, amount: 4 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Travis Mocha High",
      price: 200,
      rates: { rank: 5.0, amount: 21 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Travis Mocha Low",
      price: 170,
      rates: { rank: 4.8, amount: 0 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Unc To Chicago",
      price: 200,
      rates: { rank: 4.8, amount: 2 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.AirJordan],
      model: "4 University Blue",
      price: 190,
      rates: { rank: 4.0, amount: 7 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Dunk Low Lot 1",
      price: 150,
      rates: { rank: 5.0, amount: 11 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Dunk Low Lot 45",
      price: 150,
      rates: { rank: 5.0, amount: 10 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Air Jordan 1 Chicago",
      price: 200,
      rates: { rank: 4.5, amount: 9 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Air Jordan 1 Unc",
      price: 200,
      rates: { rank: 4.2, amount: 8 }
    },
    {
      id: uuid(),
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Air Jordan 4 Sail",
      price: 190,
      rates: { rank: 4.0, amount: 7 }
    },
    {
      id: uuid(),
      brand: [Brand.Puma],
      model: "Rs Dreamer Purple",
      price: 125,
      rates: { rank: 3.4, amount: 6 }
    },
    {
      id: uuid(),
      brand: [Brand.Puma],
      model: "Rs-x Core",
      price: 110,
      rates: { rank: 3.2, amount: 5 }
    }
  ];
export const shoeItems: shoeItem[] = [
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[0],  id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[1],  id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[2],  id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[3],  id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[4],  id: uuid() },
    { size: 10,  dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[5],  id: uuid() },
    { size: 7.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[6],  id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[7],  id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[8],  id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[9],  id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[10], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[11], id: uuid() },
    { size: 5.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[12], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[13], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[14], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[15], id: uuid() },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[16], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[17], id: uuid() },
    { size: 3.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[18], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[19], id: uuid() },
    { size: 8.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[20], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[21], id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[22], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[23], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[24], id: uuid() },
    { size: 8.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[25], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[26], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[27], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[28], id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[29], id: uuid() },
    { size: 2,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[30], id: uuid() },
    { size: 1,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[31], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[32], id: uuid() },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[33], id: uuid() },
    { size: 5.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[34], id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[35], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[0],  id: uuid() },
    { size: 2,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[1],  id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[2],  id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[3],  id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[4],  id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[5],  id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[6],  id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[7],  id: uuid() },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[8],  id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[9],  id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[10], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[11], id: uuid() },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[12], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[13], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[14], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[15], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[16], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[17], id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[18], id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[19], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[20], id: uuid() },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[21], id: uuid() },
    { size: 1,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[22], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[23], id: uuid() },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[24], id: uuid() },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[25], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[26], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[27], id: uuid() },
    { size: 7.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[28], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[29], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[30], id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[31], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[32], id: uuid() },
    { size: 3.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[33], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[34], id: uuid() },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[35], id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[1],  id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[2],  id: uuid() },
    { size: 6,   dateCreated: new Date("2024-01-01"), datePurchased: new Date("2024-01-01"), type: shoes[3],  id: uuid() }, // שמרתי על 2024
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[4],  id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[5],  id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[6],  id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[7],  id: uuid() },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[8],  id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[9],  id: uuid() },
    { size: 8.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[10], id: uuid() },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[11], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[12], id: uuid() },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[13], id: uuid() },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[14], id: uuid() },
    { size: 7.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[15], id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[16], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[17], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[18], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[19], id: uuid() },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[20], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[21], id: uuid() },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[22], id: uuid() },
    { size: 3.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[23], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[24], id: uuid() },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[25], id: uuid() },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[26], id: uuid() },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[27], id: uuid() },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[28], id: uuid() },
  ];

