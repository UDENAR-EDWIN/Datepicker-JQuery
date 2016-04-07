$(function () {
  $("#datepicker").datepicker({
    onSelect: function(date) {
      $('#et-fecha').html(date);
    }
  });
});
