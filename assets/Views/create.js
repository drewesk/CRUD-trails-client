const URL = 'https://cors-anywhere.herokuapp.com/users-trails-api.herokuapp.com/api/v1/users'

$(document).ready(() => {

  let $userID = $('#user').val();
  let $trailName = $('#name').val();
  let $rating = $('#rating').val();
  let $distance = $('#length').val();

  $('#createEntry').click(() => {
    $.post(`${URL}/${$userID}/resource`, {
      "data": {
        "name": $trailName,
        "rating": $rating,
        "length": $distance,
        "user_id": $userID
      }
    }, (res) => {
      console.log('It did Something');
    });
  });
});
