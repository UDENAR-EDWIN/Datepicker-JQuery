// Elige el Rango minimo para el otro Calendario
$(function () {
  $("#from").datepicker({
    onClose: function (selectedDate) {
      $("#to").datepicker("option","minDate",selectedDate);
    }
  });
});

// Elige el Rango maximo para el otro Calendario
$(function () {
  $("#to").datepicker({
    onClose: function (selectedDate) {
      $("#from").datepicker("option","maxDate",selectedDate);
    }
  });
})
