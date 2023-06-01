import express  from "express";
import cors from 'cors'




const app = express();
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:5173'
}));

let products = [
  { id: '1', shop: "McDonald's", img: 'https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_Hamburger:1-4-product-tile-desktop', title: 'Гамбургер', price: 55 },
  { id: '2', shop: "McDonald's", img: 'https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_Cheeseburger:1-4-product-tile-desktop', title: 'Чізбургер', price: 64 },
  { id: '3', shop: "McDonald's", img: 'https://s7d1.scene7.com/is/image/mcdonalds/SdwchDoubleCheeseburger:1-4-product-tile-desktop', title: 'Дабл Чізбургер', price: 97 },
  { id: '4', shop: "McDonald's", img: 'https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_McChicken:1-4-product-tile-desktop', title: 'МакЧікен', price: 70 },
  { id: '5', shop: "McDonald's", img: 'https://s7d1.scene7.com/is/image/mcdonalds/BIG_MAC:1-4-product-tile-desktop', title: 'Біг Мак', price: 115 },
  { id: '6', shop: "McDonald's", img: 'https://s7d1.scene7.com/is/image/mcdonalds/BIG_TASTY:1-4-product-tile-desktop', title: 'Біг Тейсті', price: 190 },
  { id: '7', shop: "McDonald's", img: 'https://s7d1.scene7.com/is/image/mcdonalds/Public_ROYAL_ch-2:1-4-product-tile-desktop', title: 'Роял Чізбургер', price: 130 },
  { id: '8', shop: "McDonald's", img: 'https://s7d1.scene7.com/is/image/mcdonalds/Burger_Royal_Fresh:1-4-product-tile-desktop', title: 'Роял Фреш', price: 163 },


  { id: '9', shop: "KFC", img: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4176.png', title: 'Такос Сирний', price: 45 },
  { id: '10', shop: "KFC", img: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4179.png', title: 'Сальса Бургер', price: 90 },
  { id: '11', shop: "KFC", img: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4181.png', title: 'Твістер Сальса', price: 95 },
  { id: '12', shop: "KFC", img: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4183.png', title: 'Байтс Сальса', price: 105 },



  { id: '13', shop: "Pizza Day", img: 'https://pizzaday.eatery.club/storage/pizzaday/product/icon/1344/26f343c40875959617a836ebad4cf0ff.jpg', title: 'Пепероні', price: 145 },
  { id: '14', shop: "Pizza Day", img: 'https://pizzaday.eatery.club/storage/pizzaday/product/icon/6898/b4a72f5a432ed853a3abcd4c26c68975.jpg', title: 'БірБургер', price: 145 },
  { id: '15', shop: "Pizza Day", img: 'https://pizzaday.eatery.club/storage/pizzaday/product/icon/6887/6f1627e30c1097aebf8f4409c23bddbe.jpg', title: 'Карбонара', price: 119 },
  { id: '16', shop: "Pizza Day", img: 'https://pizzaday.eatery.club/storage/pizzaday/product/icon/3302/8f37ed7ef50d6f9ce6716cc4751492b1.jpg', title: 'Гавайська', price: 105 },


  { id: '17', shop: "Salateira", img: 'https://salateira.ua/wp-content/uploads/2020/02/caesar.png', title: 'Цезар', price: 219 },
  { id: '18', shop: "Salateira", img: 'https://salateira.ua/wp-content/uploads/2020/02/fresko-1.png', title: 'Фреско', price: 239 },
  { id: '19', shop: "Salateira", img: 'https://salateira.ua/wp-content/uploads/2020/02/camaro_tuna_20.jpg', title: 'Камаро', price: 259 },
  { id: '20', shop: "Salateira", img: 'https://salateira.ua/wp-content/uploads/2023/05/bowls_patoto_r-1.jpg', title: 'Боул-потейто з тунцем', price: 339 }


];


app.get('/', (req, res) => {
  res.send('Добро пожаловать на сервер');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: generateId(), name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).json({ error: 'Товар не найден' });
  } else {
    res.json(product);
  }
});

app.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).json({ error: 'Товар не найден' });
  } else {
    product.name = name;
    product.price = price;
    res.json(product);
  }
});

app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    res.status(404).json({ error: 'Товар не найден' });
  } else {
    products.splice(index, 1);
    res.sendStatus(204);
  }
});

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});