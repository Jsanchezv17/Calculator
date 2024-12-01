const mensajesEstados = {
  '200': 'Acceso correcto',
  '201': 'Creado',
  '401': 'Sin autorización',
  '403': 'Prohibido',
  '404': 'Recurso no encontrado',
  '409': 'Conflicto',
  '500': 'Error del servidor',
}

exports.success = function (req, res, mensaje, estado, detalle) {
  let codigoEstado = estado;
  let mensajesEstado = mensaje;
  if (detalle) {
      console.log('[Información] ' + detalle);
  }

  if (!estado) {
      estado = 200;
  }

  if (!mensaje) {
      mensajesEstado = mensajesEstados[estado];
  }

  res.status(codigoEstado).send({
      error: '',
      body: mensajesEstado,
  });
}

exports.error = function (req, res, mensaje, estado, detalle, intentos) {
  console.error('[response error] ' + detalle);

  res.status(estado || 500).send({
      error: mensaje,
      body: intentos,
  });
}