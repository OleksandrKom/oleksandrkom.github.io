const Users = require('../model/Users');

// const showIndex = (req, res) => {
//   res.render('index');
// };


const showAllUsers = async (req, res) => {
  const users = await Users.findUsersByName({});
  // console.log(users);
  const usersNameSurname = users.map(el => {
    return el.name;
  });
  console.log({usersNameSurname});
  // res.sendStatus(200);
  res.render('index', {usersNameSurname});
};

const showIdUser = async (req, res) => {
  console.log('>>>>>>><<<<<<<<<<', req.body);
  res.send(data._id);
};

module.exports = {
  //  showIndex,
   showAllUsers,
   showIdUser,
  };
