$(function () {
  $("#datepicker").datepicker({
  });
});

// Funcion para Ocultar el Calendario
$(function () {
  $("#apagar").click(function () {
    $("#datepicker").datepicker().hide();
  })
})

// Función para Mostrar el Calendario
$(function () {
  $("#encender").click(function () {
    $('#datepicker').datepicker().show();
  })
})
