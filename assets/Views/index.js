const URL = 'https://cors-anywhere.herokuapp.com/users-trails-api.herokuapp.com//api/v1/users'

let usersData = null;

$(document).ready(() => {

  const userTemplate = $('#user-template').html();
  const compiledUserTemplate = Handlebars.compile(userTemplate);

  $.get(URL, (res) => {
    usersData = res;

    usersData.forEach((user, i) => {
        $('#usersList').append(compiledUserTemplate(user));
    });
  });
});
