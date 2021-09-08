// 同步代码
// import _ from 'lodash';
// let element = document.createElement('div');
// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// document.body.appendChild(element);

// 异步代码
// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//     let element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//   });
// }
async function getComponent() {
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}
document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.appendChild(element);
  });
});
