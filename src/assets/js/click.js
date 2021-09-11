async function getComponent() {
  const { default: _ } = await import(
    /* webpackChunkName: "lodash"  */
    'lodash');
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  document.body.appendChild(element);
}

export default getComponent;