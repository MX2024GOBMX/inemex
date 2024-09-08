if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
if (dwr.engine._getObject("adminCalificaciones") == undefined) {
var p;

p = {};





p.consultaCalificacionesCicloActual = function(p0, callback) {
return dwr.engine._execute(p._path, 'adminCalificaciones', 'consultaCalificacionesCicloActual', arguments);
};





p.validaCicloActualyFecha = function(p0, callback) {
return dwr.engine._execute(p._path, 'adminCalificaciones', 'validaCicloActualyFecha', arguments);
};





p.consultaCalificaciones = function(p0, callback) {
return dwr.engine._execute(p._path, 'adminCalificaciones', 'consultaCalificaciones', arguments);
};




p.fechaActualServidor = function(callback) {
return dwr.engine._execute(p._path, 'adminCalificaciones', 'fechaActualServidor', arguments);
};

dwr.engine._setObject("adminCalificaciones", p);
}
})();

