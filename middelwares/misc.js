function obtenerLinea() {
  let numeroLinea
  const _prepareStackTrace = Error.prepareStackTrace
  Error.prepareStackTrace = (_, stack) => {
    numeroLinea = stack[1].getLineNumber()
  }
  new Error().stack
  Error.prepareStackTrace = _prepareStackTrace
  return numeroLinea;
}

function logConTimestamp(zone, timeZone) {
  const opciones = {
    timeZone: timeZone,
  };
  const timestamp = new Date().toLocaleString(zone, opciones); // Local readable format
  return `${timestamp}`;
}

module.exports = {
  obtenerLinea,
  logConTimestamp,
}