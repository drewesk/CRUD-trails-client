let URL = 'https://cors-anywhere.herokuapp.com/users-trails-api.herokuapp.com//api/v1/users'


let usersData = null;
let queryString = window
  .location
  .search
  .substring(window.location.search.length - 1, window.location.search.length);

if (!isNaN(Number(queryString))) {
  URL += `/${queryString}/resource`;
}

$(document).ready(() => {

  const userTemplate = $('#user-template').html();
  const compiledUserTemplate = Handlebars.compile(userTemplate);

  $.get(URL, (res) => {
    // usersData = res;
    // if (queryString) {
    res.forEach((entry) => {
      $('#usersList').append(compiledUserTemplate(entry));
    });
    // } else {
    //   usersData.forEach((user, i) => {
    //     $('#usersList').append(compiledUserTemplate(user));
    //   });
    // }
  });

  $('#userSearch').click(() => {
    let queryValue = document.querySelector('#userID').value
    location.search = 'id=' + queryValue;
  });
});
