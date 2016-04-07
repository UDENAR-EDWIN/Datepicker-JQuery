$(function () {
  $("#datepicker").datepicker({
    //showButtonPanel: true
    defaultDate: "23/03/2000"
  });
});

$(function () {
  $("#enviar").click(function () {
    $("#datepicker").datepicker("setDate","+5m");
  });
});
