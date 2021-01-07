const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: '홍길동',
      birthday: 951127,
      gender: '남',
      job: '디자이너',
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: '성석민',
      birthday: 951128,
      gender: '남',
      job: 'developer',
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: '이주용',
      birthday: 951129,
      gender: '남',
      job: 'coffe',
    },
  ]);
});

app.listen(port, () => {
  console.log(`동작 중 ... ${port}`);
});
