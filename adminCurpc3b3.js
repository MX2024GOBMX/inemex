if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
if (dwr.engine._getObject("adminCurp") == undefined) {
var p;

p = {};












p.generarCURPbyDatos = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
return dwr.engine._execute(p._path, 'adminCurp', 'generarCURPbyDatos', arguments);
};

dwr.engine._setObject("adminCurp", p);
}
})();

