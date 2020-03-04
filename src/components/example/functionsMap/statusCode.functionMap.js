// const NoExistResponseHandler = require('../handlers/noExistResponse.handler');
// const DisambiguationHandler = require('../handlers/disambiguation.handler');
// const EmptyHandler = require('../handlers/emptyResponse.handler');


// module.exports = {
//     204: (data) => EmptyHandler.emptyResponseProcess(data), //no existe ninguan respuesta
//     210: (data) => NoExistResponseHandler.getNoExistResponse(), //no existe contexto (posiblemente temporal)
//     300: (data) => DisambiguationHandler.selectResponse(data) //Existen varias respuestas posibles
// };