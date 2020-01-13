//#region ENTIDADES Y CONTROLADORES
var Empresa = require('../models/company/empresa');
var ControllerEmpresa = require('../controllers/company/controllerEmpresa');
//#endregion

//#region mongoose para mongodb
const path = require('path');
//#endregion

module.exports = function (app) {

    //#region RUTAS PARA GESTION DE EMPRESAS
    app.get('/api/empresa', ControllerEmpresa.getEmpresas);
    app.get('/api/empresa/:empresa_id', ControllerEmpresa.getEmpresaPorID);
    //app.get('/api/empresa/:page/:rows', ControllerEmpresa.getEmpresas);
    app.post('/api/empresa', ControllerEmpresa.setEmpresa);
    app.put('/api/empresa/:usuario_id', ControllerEmpresa.updateEmpresa);
    app.delete('/api/empresa/:_id/:usuario_id', ControllerEmpresa.removeEmpresa);
    //#endregion

    app.get('*', function (req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });

};
