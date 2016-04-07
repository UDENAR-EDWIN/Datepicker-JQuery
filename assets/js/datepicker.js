$(function () {
  $("#datepicker").datepicker({
  });
});

// Funcion para Deshabilitar el Calendario
$(function () {
  $("#deshabilitar").click(function () {
    $("#datepicker").datepicker('option','disabled',true);
  })
})

// Función para Habilitar el Calendario
$(function () {
  $("#habilitar").click(function () {
    $('#datepicker').datepicker('option','disabled',false);
  })
})
