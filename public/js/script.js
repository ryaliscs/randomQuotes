/**Makes quote slide down */
$(document).ready(function () {
  $('#panel').slideDown(2000);
});

$(document).ready(function () {
  setInterval(getQuote, 20000);
});

function getQuote() {
  $.getJSON('/quote', function (res) {
    $('#quote').html(res.quote);
    $('#author').html(res.by);
  });
}
