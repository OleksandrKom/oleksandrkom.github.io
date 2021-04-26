const formEl = document.querySelector("#form1");

formEl.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formEl);
  axios.post('/', data)
    .then(r => {
      formEl.innerHTML = `${r.data}`;
    })
    .catch(e => formEl.innerHTML = `ERROR: ${e}`);
});
