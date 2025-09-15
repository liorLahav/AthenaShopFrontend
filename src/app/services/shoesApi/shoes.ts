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
      id: "1",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Beluga",
      price: 220,
      rates: { rank: 5.0, amount: 0 }
    },
    {
      id: "2",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Bred",
      price: 220,
      rates: { rank: 4.5, amount: 4 }
    },
    {
      id: "3",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Natural",
      price: 220,
      rates: { rank: 3.0, amount: 10 }
    },
    {
      id: "4",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Oat",
      price: 220,
      rates: { rank: 4.2, amount: 8 }
    },
    {
      id: "5",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Oreo",
      price: 220,
      rates: { rank: 4.7, amount: 12 }
    },
    {
      id: "6",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "350 Zebra",
      price: 220,
      rates: { rank: 3.9, amount: 9 }
    },
    {
      id: "7",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "450 Cloud White",
      price: 200,
      rates: { rank: 2.0, amount: 24 }
    },
    {
      id: "8",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "450 Dark Slate",
      price: 200,
      rates: { rank: 3.2, amount: 2 }
    },
    {
      id: "9",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Geode",
      price: 220,
      rates: { rank: 4.1, amount: 4 }
    },
    {
      id: "10",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Inertia",
      price: 220,
      rates: { rank: 4.2, amount: 3 }
    },
    {
      id: "11",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Mauve",
      price: 220,
      rates: { rank: 4.6, amount: 6 }
    },
    {
      id: "12",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Static",
      price: 220,
      rates: { rank: 4.0, amount: 0 }
    },
    {
      id: "13",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 V2 Cream",
      price: 220,
      rates: { rank: 5.0, amount: 0 }
    },
    {
      id: "14",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 V2 Static",
      price: 220,
      rates: { rank: 4.3, amount: 9 }
    },
    {
      id: "15",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "700 Wave Runner",
      price: 220,
      rates: { rank: 4.8, amount: 6 }
    },
    {
      id: "16",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "Slides Bone",
      price: 70,
      rates: { rank: 4.5, amount: 3 }
    },
    {
      id: "17",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "Slides Core",
      price: 70,
      rates: { rank: 4.5, amount: 5 }
    },
    {
      id: "18",
      brand: [Brand.Adidas, Brand.Yeezy],
      model: "Slides Pure",
      price: 70,
      rates: { rank: 4.5, amount: 3 }
    },
    {
      id: "19",
      brand: [Brand.Nike],
      model: "Dunk Low Panda",
      price: 115,
      rates: { rank: 4.7, amount: 0 }
    },
    {
      id: "20",
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Dior",
      price: 1000,
      rates: { rank: 4.6, amount: 50 }
    },
    {
      id: "21",
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Low Starfish",
      price: 130,
      rates: { rank: 5.0, amount: 0 }
    },
    {
      id: "22",
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Low Unc",
      price: 130,
      rates: { rank: 4.3, amount: 0 }
    },
    {
      id: "23",
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Low Wolf Grey",
      price: 130,
      rates: { rank: 4.0, amount: 0 }
    },
    {
      id: "24",
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Mid Chicago Black Toe",
      price: 115,
      rates: { rank: 4.9, amount: 0 }
    },
    {
      id: "25",
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Travis Fragment Low",
      price: 150,
      rates: { rank: 5.0, amount: 4 }
    },
    {
      id: "26",
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Travis Mocha High",
      price: 200,
      rates: { rank: 5.0, amount: 21 }
    },
    {
      id: "27",
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Travis Mocha Low",
      price: 170,
      rates: { rank: 4.8, amount: 0 }
    },
    {
      id: "28",
      brand: [Brand.Nike, Brand.AirJordan],
      model: "1 Unc To Chicago",
      price: 200,
      rates: { rank: 4.8, amount: 2 }
    },
    {
      id: "29",
      brand: [Brand.Nike, Brand.AirJordan],
      model: "4 University Blue",
      price: 190,
      rates: { rank: 4.0, amount: 7 }
    },
    {
      id: "30",
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Dunk Low Lot 1",
      price: 150,
      rates: { rank: 5.0, amount: 11 }
    },
    {
      id: "31",
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Dunk Low Lot 45",
      price: 150,
      rates: { rank: 5.0, amount: 10 }
    },
    {
      id: "32",
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Air Jordan 1 Chicago",
      price: 200,
      rates: { rank: 4.5, amount: 9 }
    },
    {
      id: "33",
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Air Jordan 1 Unc",
      price: 200,
      rates: { rank: 4.2, amount: 8 }
    },
    {
      id: "34",
      brand: [Brand.Nike, Brand.OffWhite],
      model: "Air Jordan 4 Sail",
      price: 190,
      rates: { rank: 4.0, amount: 7 }
    },
    {
      id: "35",
      brand: [Brand.Puma],
      model: "Rs Dreamer Purple",
      price: 125,
      rates: { rank: 3.4, amount: 6 }
    },
    {
      id: "36",
      brand: [Brand.Puma],
      model: "Rs-x Core",
      price: 110,
      rates: { rank: 3.2, amount: 5 }
    }
  ];
export const shoeItems: shoeItem[] = [
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[0],  id: "item_1" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[1],  id: "item_2" },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[2],  id: "item_3" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[3],  id: "item_4" },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[4],  id: "item_5" },
    { size: 10,  dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[5],  id: "item_6" },
    { size: 7.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[6],  id: "item_7" },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[7],  id: "item_8" },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[8],  id: "item_9" },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[9],  id: "item_10" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[10], id: "item_11" },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[11], id: "item_12" },
    { size: 5.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[12], id: "item_13" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[13], id: "item_14" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[14], id: "item_15" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[15], id: "item_16" },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[16], id: "item_17" },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[17], id: "item_18" },
    { size: 3.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[18], id: "item_19" },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[19], id: "item_20" },
    { size: 8.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[20], id: "item_21" },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[21], id: "item_22" },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[22], id: "item_23" },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[23], id: "item_24" },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[24], id: "item_25" },
    { size: 8.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[25], id: "item_26" },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[26], id: "item_27" },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[27], id: "item_28" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[28], id: "item_29" },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[29], id: "item_30" },
    { size: 2,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[30], id: "item_31" },
    { size: 1,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[31], id: "item_32" },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[32], id: "item_33" },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[33], id: "item_34" },
    { size: 5.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[34], id: "item_35" },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[35], id: "item_36" },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[0],  id: "item_37" },
    { size: 2,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[1],  id: "item_38" },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[2],  id: "item_39" },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[3],  id: "item_40" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[4],  id: "item_41" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[5],  id: "item_42" },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[6],  id: "item_43" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[7],  id: "item_44" },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[8],  id: "item_45" },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[9],  id: "item_46" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[10], id: "item_47" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[11], id: "item_48" },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[12], id: "item_49" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[13], id: "item_50" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[14], id: "item_51" },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[15], id: "item_52" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[16], id: "item_53" },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[17], id: "item_54" },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[18], id: "item_55" },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[19], id: "item_56" },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[20], id: "item_57" },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[21], id: "item_58" },
    { size: 1,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[22], id: "item_59" },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[23], id: "item_60" },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[24], id: "item_61" },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[25], id: "item_62" },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[26], id: "item_63" },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[27], id: "item_64" },
    { size: 7.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[28], id: "item_65" },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[29], id: "item_66" },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[30], id: "item_67" },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[31], id: "item_68" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[32], id: "item_69" },
    { size: 3.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[33], id: "item_70" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[34], id: "item_71" },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[35], id: "item_72" },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[1],  id: "item_73" },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[2],  id: "item_74" },
    { size: 6,   dateCreated: new Date("2024-01-01"), datePurchased: new Date("2024-01-01"), type: shoes[3],  id: "item_75" },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[4],  id: "item_76" },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[5],  id: "item_77" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[6],  id: "item_78" },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[7],  id: "item_79" },
    { size: 9,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[8],  id: "item_80" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[9],  id: "item_81" },
    { size: 8.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[10], id: "item_82" },
    { size: 9.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[11], id: "item_83" },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[12], id: "item_84" },
    { size: 6,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[13], id: "item_85" },
    { size: 4,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[14], id: "item_86" },
    { size: 7.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[15], id: "item_87" },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[16], id: "item_88" },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[17], id: "item_89" },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[18], id: "item_90" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[19], id: "item_91" },
    { size: 7,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[20], id: "item_92" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[21], id: "item_93" },
    { size: 5,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[22], id: "item_94" },
    { size: 3.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[23], id: "item_95" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[24], id: "item_96" },
    { size: 4.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[25], id: "item_97" },
    { size: 8,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[26], id: "item_98" },
    { size: 6.5, dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[27], id: "item_99" },
    { size: 3,   dateCreated: new Date("2025-01-01"), datePurchased: new Date("2025-01-01"), type: shoes[28], id: "item_100" },
  ];

