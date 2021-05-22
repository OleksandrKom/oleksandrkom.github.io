const formEl = document.querySelector("#form1");
const idUser = document.querySelector(".id");

formEl.addEventListener("onchange", function(event) {
  event.preventDefault();
  const data = new FormData(formEl);
  axios.post('/', data)
    .then(r => {
      idUser.innerHTML = `${r.data._id}`;
    })
    .catch(e => idUser.innerHTML = `ERROR: ${e}`);
});
