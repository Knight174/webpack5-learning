import './assets/styles/reset.css'

// 箭头函数
const fn = (a, b) => a + b;

// Promise 对象
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(add(1, 2));
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(add(3, 4));
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(add(5, 6));
  }, 1000);
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 7, 11]
});

// Array.prototype.includes()
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true

const root = document.getElementById('root');
root.innerHTML = add(1, 3);

import { add } from './assets/js/math'
console.log(add(1, 1));

// 測試接口
import axios from 'axios';
// axios.get('https://res.abeim.cn/api/api-text_sweet')
//   .then(res => {
//     console.log(res.data);
//   })
axios.get('/api/api-text_sweet')
  .then(res => {
    console.log(res.data);
  })