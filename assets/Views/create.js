const URL = 'https://cors-anywhere.herokuapp.com/users-trails-api.herokuapp.com/api/v1/users'

$(document).ready(() => {

  $('#createEntry').click(() => {
    let $userID = $('#user').val();
    let $trailName = $('#name').val();
    let $rating = $('#rating').val();
    let $distance = $('#length').val();

    let data = {
      "name": $trailName,
      "rating": $rating,
      "length": $distance,
      "user_id": $userID
    }

    $.post(`${URL}/${$userID}/resource`, data, (response) => {
      console.log(response);
    });
  });
});
