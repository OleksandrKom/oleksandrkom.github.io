const formEl = document.querySelector('#url');
const shUrl = document.querySelector('.result');

formEl.addEventListener("submit", function(ev) {
  ev.preventDefault();
  const data = new FormData(formEl);
  axios.post('/addUrl', data)
    .then(data)
    .catch(e => shUrl.innerHTML = `Err: ${e}`);
});