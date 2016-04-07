$(function () {
  $("#dialogo").click(function () {
    $("#datepicker").datepicker("dialog","",actualizar);
    function actualizar(date) {
      $("#datepicker").val(date);
    }
  })
});
