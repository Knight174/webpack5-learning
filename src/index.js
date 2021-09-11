import "./assets/styles/reset.css"

document.addEventListener('click', () => {
  return import(/* webpackPrefetch: true */ './assets/js/click').then(({ default: fn }) => {
    fn();
  });
});
