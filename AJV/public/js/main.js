const formEl = document.querySelector("#formNew");

formEl.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formEl);
  axios.post('/valid', data)
    .then( r => console.log(r.data))
    .catch(err => console.log(err));
});
