const x = `./models/cheese/scene.glb`;

const testData = [
  {
    dishType: 'main',
    name: 'CHICHKEN GYRO',
    description:
      'Gyro is meat cooked on a vertical rotisserie and served with greek flatbread, salads, few chips and tzatziki yogurt garlic sauce',
    price: '£10.00',
    image: `/images/${1}.png`,
    // modalImage: `/images/${1}.png`,
    modalImage: x,
  },
  {
    dishType: 'main',
    name: 'CHICHKEN GYRO & GRILLED HALLOUMI CHEESE',
    description: '',
    price: '£12.00',
    image: `/images/${1}.png`,
    // modalImage: `/images/${1}.png`,
    modalImage: x,
  },
  {
    dishType: 'main',
    name: "MIXED (Chief's Special)",
    description: 'Chicken Gyro with Lamb Sausage and Halloumi Cheese',
    price: '£15.00',
    image: `/images/${2}.png`,
    // modalImage: `/images/${2}.png`,
    modalImage: x,
  },
  {
    dishType: 'main',
    name: 'LAMB SAUSAGE',
    description: 'Grilled this ground meat, with added spices',
    price: '£10.00',
    image: `/images/${3}.png`,
    // modalImage: `/images/${3}.png`,
    modalImage: x,
  },
  {
    dishType: 'main',
    name: 'CHIPS & MEAT',
    description: 'Choice between Chicken Gyro or Sausage',
    price: '£10.00',
    image: `/images/${4}.png`,
    // modalImage: `/images/${4}.png`,
    modalImage: x,
  },
  {
    dishType: 'main',
    name: 'SINGLE BURGER WITH CHEESE',
    description: '',
    price: '£6.00',
    image: `/images/${5}.png`,
    // modalImage: `/images/${5}.png`,
    modalImage: x,
  },
  {
    dishType: 'main',
    name: 'DOUBLE BURGER WITH CHEESE',
    description: 'Served with cheese, lettuce, tomatoes, onions and a selection of sauces',
    price: '£8.00',
    image: `/images/${6}.png`,
    // modalImage: `/images/${6}.png`,
    modalImage: x,
  },
  {
    dishType: 'main',
    name: 'SPECIAL DOUBLE BURGER WITH CHICKEN GYRO',
    description: '',
    price: '£10.00',
    image: `/images/${7}.png`,
    // modalImage: `/images/${7}.png`,
    modalImage: x,
  },

  {
    dishType: 'meal deal',
    name: 'GYRO MEAL DEAL #1',
    description: 'Chicken Gyro, Chips & Soft Drink, Baklava',
    price: '£15.00',
    image: `/images/${8}.png`,
    // modalImage: `/images/${8}.png`,
    modalImage: x,
  },
  {
    dishType: 'meal deal',
    name: 'GYRO MEAL DEAL #2',
    description: 'Mixed Gyro, Chips & Soft Drink, Baklava',
    price: '£19.50',
    image: `/images/${8}.png`,
    // modalImage: `/images/${8}.png`,
    modalImage: x,
  },
  {
    dishType: 'meal deal',
    name: 'BURGER MEAL DEAL #1',
    description: 'Bacon Burger, chips & soft drink, baklava',
    price: '£15.00',
    image: `/images/${8}.png`,
    // modalImage: `/images/${8}.png`,
    modalImage: x,
  },
  {
    dishType: 'meal deal',
    name: 'BURGER MEAL DEAL #2',
    description: 'Chicken Burger, chips & soft drink, baklava',
    price: '£15.00',
    image: `/images/${8}.png`,
    // modalImage: `/images/${8}.png`,
    modalImage: x,
  },
  {
    dishType: 'meal deal',
    name: 'BURGER MEAL DEAL #3',
    description: 'Single Burger, chips & soft drink',
    price: '£10.00',
    image: `/images/${8}.png`,
    // modalImage: `/images/${8}.png`,
    modalImage: x,
  },

  {
    dishType: 'vegetarian',
    name: 'GRILLED HALLOUMI',
    description: 'Comes with Greek Flatbread, salad, chips, hummus and tzatziki or chilli sauces',
    price: '£10.00',
    image: `/images/${9}.png`,
    // modalImage: `/images/${9}.png`,
    modalImage: x,
  },
  {
    dishType: 'vegetarian',
    name: 'GRILLED HALLOUMI BOX',
    description: 'Comes with a side of lettuces and Hummus',
    price: '£6.00',
    image: `/images/${9}.png`,
    // modalImage: `/images/${9}.png`,
    modalImage: x,
  },
  {
    dishType: 'vegetarian',
    name: 'FALAFEL (Fried)',
    description: 'Comes with Greek Flatbread, salad, chips, Hummus and tzatziki sauces',
    price: '£10.00',
    image: `/images/${10}.png`,
    // modalImage: `/images/${10}.png`,
    modalImage: x,
  },
  {
    dishType: 'vegetarian',
    name: 'FALAFEL (Fried)',
    description: 'Comes with salad, chips, Hummus and tzatziki sauces',
    price: '£7.00',
    image: `/images/${10}.png`,
    // modalImage: `/images/${10}.png`,
    modalImage: x,
  },
  {
    dishType: 'vegetarian',
    name: 'MIXED VEGIE HALLOUMI (3pcs) & FALAFEL (3pcs)',
    description: 'Served with Greek Pita bread, grilled vegatables, salad, chips,tzatziki sauce and Hummus',
    price: '£13.00',
    image: `/images/${11}.png`,
    // modalImage: `/images/${11}.png`,
    modalImage: x,
  },

  {
    dishType: 'sides',
    name: 'FRIED CHIPS',
    description: '',
    price: '£5.00',
    image: `/images/${12}.png`,
    // modalImage: `/images/${12}.png`,
    modalImage: x,
  },
  {
    dishType: 'sides',
    name: 'CHIPS & CHEESE',
    description: '',
    price: '£6.00',
    image: `/images/${13}.png`,
    // modalImage: `/images/${13}.png`,
    modalImage: x,
  },
  {
    dishType: 'sides',
    name: 'CHICKEN NUGGETS & CHIPS',
    description: '',
    price: '£8.50',
    image: `/images/${14}.png`,
    // modalImage: `/images/${14}.png`,
    modalImage: x,
  },
  {
    dishType: 'sides',
    name: 'MOZZARELLA STICKS (5pcs)',
    description: '',
    price: '£6.00',
    image: `/images/${15}.png`,
    // modalImage: `/images/${15}.png`,
    modalImage: x,
  },
  {
    dishType: 'sides',
    name: 'ONION RINGS (10pcs)',
    description: '',
    price: '£5.00',
    image: `/images/${16}.png`,
    // modalImage: `/images/${16}.png`,
    modalImage: x,
  },
  {
    dishType: 'sides',
    name: 'GREEK GREEN OLIVES',
    description: '',
    price: '£6.00',
    image: `/images/${17}.png`,
    // modalImage: `/images/${17}.png`,
    modalImage: x,
  },
  {
    dishType: 'sides',
    name: 'HUMMUS DIP',
    description: 'Comes with Greek Flatbread',
    price: '£6.00',
    image: `/images/${18}.png`,
    // modalImage: `/images/${18}.png`,
    modalImage: x,
  },

  {
    dishType: 'desserts',
    name: 'BAKLAVA',
    description: '',
    price: '£5.00',
    image: `/images/${19}.png`,
    // modalImage: `/images/${19}.png`,
    modalImage: x,
  },

  {
    dishType: 'sauces',
    name: 'SAUCES',
    description: 'A pot of extra tzatziki ',
    price: '£1.00',
    image: `/images/${20}.png`,
    // modalImage: `/images/${20}.png`,
    modalImage: x,
  },
  {
    dishType: 'sauces',
    name: 'SAUCES',
    description: 'A pot of extra chili sauces',
    price: '£1.00',
    image: `/images/${21}.png`,
    // modalImage: `/images/${21}.png`,
    modalImage: x,
  },

  {
    dishType: 'drinks',
    name: 'SOFT DRINKS',
    description: '',
    price: '£1.50',
    image: `/images/${25}.png`,
    // modalImage: `/images/${25}.png`,
    modalImage: x,
  },
  {
    dishType: 'drinks',
    name: 'WATER',
    description: '',
    price: '£1.50',
    image: `/images/${22}.png`,
    // modalImage: `/images/${22}.png`,
    modalImage: x,
  },
  {
    dishType: 'drinks',
    name: 'TEA',
    description: '',
    price: '£2.00',
    image: `/images/${23}.png`,
    // modalImage: `/images/${23}.png`,
    modalImage: x,
  },
  {
    dishType: 'drinks',
    name: 'COFFEE',
    description: '',
    price: '£2.50',
    image: `/images/${24}.png`,
    // modalImage: `/images/${24}.png`,
    modalImage: x,
  },
];

export default testData;
