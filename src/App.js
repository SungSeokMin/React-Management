import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
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
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((customer) => {
          return (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
