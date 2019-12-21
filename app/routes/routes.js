var Servicio = require('../models/pageweb/servicio');
var Empresa = require('../models/company/empresa');
var ControllerEmpresa = require('../controllers/company/controllerEmpresa');
var ControllerUsuario = require('../controllers/login/controllerUsuario');
var Usuario = require('../models/login/usuario');
var ControllerServicio = require('../controllers/pageweb/controllerServicio');
var Contacto = require('../models/player/contacto');
var ControllerContacto = require('../controllers/player/controllerContacto');
var Faq = require('../models/pageweb/faq');
var ControllerFaq = require('../controllers/pageweb/controllerFaq');
var ControllerAliado = require('../controllers/company/controllerAliado');
var ControllerNivelEducativo = require('../controllers/player/controllerNivelEducativo');
var NivelEducativo = require('../models/player/personalInformation/nivelEducativo');
var ControllerContenido = require('../controllers/pageweb/controllerContenido');
var Contenido = require('../models/pageweb/contenido');
var ControllerNoticia = require('../controllers/pageweb/controllerNoticia');
var Noticia = require('../models/pageweb/noticia');
//var CategoriaNoticia = require('../models/pageweb/categoriaNoticia');
var ControllerCategoriaGaleria = require('../controllers/pageweb/controllerCategoriaGaleria');
var ControllerCategoriaNoticia = require('../controllers/pageweb/controllerCategoriaNoticia');
//var EstadoNoticia = require('../models/pageweb/estadoNoticia');
var ControllerEstadoNoticia = require('../controllers/pageweb/controllerEstadoNoticia');
var ControllerGaleria = require('../controllers/pageweb/controllerGaleria');
var EstadoGaleria = require('../models/pageweb/estadoGaleria');
var ControllerEstadoGaleria = require('../controllers/pageweb/controllerEstadoGaleria');
var ControllerFoto = require('../controllers/pageweb/controllerFoto');
//#region ALMACEN
var ControllerConcentracion = require('../controllers/inventory/controllerConcentracion');
var Concentracion = require('../models/inventory/concentracion');
var ControllerFormaFarmaceutica = require('../controllers/inventory/controllerFormaFarmaceutica');
var FormaFarmaceutica = require('../models/inventory/formaFarmaceutica');
var ControllerTipoInventario = require('../controllers/inventory/controllerTipoInventario');
var TipoInventario = require('../models/inventory/tipoInventario');
var ControllerLaboratorio = require('../controllers/inventory/controllerLaboratorio');
var Laboratorio = require('../models/inventory/laboratorio');
var ControllerFabricante = require('../controllers/inventory/controllerFabricante');
var Fabricante = require('../models/inventory/fabricante');
var ControllerEstadoItem = require('../controllers/inventory/controllerEstadoItem');
var EstadoItem = require('../models/inventory/estadoItem');
var ControllerUnidadMedida = require('../controllers/inventory/controllerUnidadMedida');
var UnidadMedida = require('../models/inventory/unidadMedida');
var ControllerCategoria = require('../controllers/inventory/controllerCategoria');
var Categoria = require('../models/inventory/categoria');
var ControllerRegistroInvima = require('../controllers/inventory/controllerRegistroInvima');
var RegistroInvima = require('../models/inventory/registroInvima');
var ControllerClasificacionRiesgo = require('../controllers/inventory/controllerClasificacionRiesgo');
var ClasificacionRiesgo = require('../models/inventory/clasificacionRiesgo');
var ControllerViaAdministracion = require('../controllers/inventory/controllerViaAdministracion');
var ViaAdministracion = require('../models/inventory/viaAdministracion');
var ControllerItemMedicamento = require('../controllers/inventory/controllerItemMedicamento');
var ItemMedicamento = require('../models/inventory/itemMedicamento');
var ControllerItemSubproducto = require('../controllers/inventory/controllerItemSubproducto');
var ItemSubproducto = require('../models/inventory/itemSubproducto');
var ControllerItemGeneral = require('../controllers/inventory/controllerItemGeneral');
var ItemGeneral = require('../models/inventory/itemGeneral');
//farmacia
var Cuenta = require('../models/shop/cuenta');
var ControllerCuenta = require('../controllers/shop/controllerCuenta');
var CuentaDetalle = require('../models/shop/cuentaDetalle');
var ControllerCuentaDetalle = require('../controllers/shop/controllerCuentaDetalle');
var Cancha = require('../models/sportfield/cancha');
var TipoCancha = require('../models/sportfield/tipoCancha');
var EstadoCancha = require('../models/sportfield/estadoCancha');
var CampoDeportivo = require('../models/sportfield/campoDeportivo');
var ControllerCancha = require('../controllers/sportfield/controllerCancha');
var Cliente = require('../models/shop/cliente');
var ControllerCliente = require('../controllers/shop/controllerCliente');
var ControllerCaja = require('../controllers/shop/controllerCaja');
var ControllerCajaControl = require('../controllers/shop/controllerCajaControl');
var ControllerInventario = require('../controllers/inventory/controllerInventario');
var ControllerInventarioDetalle = require('../controllers/inventory/controllerInventarioDetalle');
var InventarioDetalle = require('../models/inventory/inventarioDetalle');
var ControllerAlmacen = require('../controllers/inventory/controllerAlmacen');
var Almacen = require('../models/inventory/almacen');
var Persona = require('../models/player/personalInformation/persona');
var Inventario = require('../models/inventory/inventario');
var CajaControl = require('../models/shop/cajaControl');
var Caja = require('../models/shop/caja');

var ControllerFactura = require('../controllers/inventory/controllerFactura');
var Factura = require('../models/shop/factura');
var ControllerFacturaDetalle = require('../controllers/inventory/controllerFacturaDetalle');
var FacturaDetalle = require('../models/shop/facturaDetalle');
var ControllerProveedor = require('../controllers/shop/controllerProveedor');
var Proveedor = require('../models/shop/proveedor');
var RolUsuario = require('../models/login/rolUsuario');
var ControllerRolUsuario = require('../controllers/login/controllerRolUsuario');
var Rol = require('../models/login/rol');

var ControllerCotizacion = require('../controllers/shop/controllerCotizacion');
var ControllerCotizacionDetalle = require('../controllers/shop/controllerCotizacionDetalle');
var Cotizacion = require('../models/shop/cotizacion');
var CotizacionDetalle = require('../models/shop/cotizacionDetalle');

var ControllerPromocion = require('../controllers/shop/controllerPromocion');
var ControllerPromocionDetalle = require('../controllers/shop/controllerPromocionDetalle');
var Promocion = require('../models/shop/promocion');
var PromocionDetalle = require('../models/shop/promocionDetalle');

var ControllerMarca = require('../controllers/shop/controllerMarca');
var ControllerProveedorMarca = require('../controllers/shop/controllerProveedorMarca');
var ProveedorMarca = require('../models/shop/proveedorMarca');
var Marca = require('../models/inventory/marca');

var ControllerBug = require('../controllers/utils/controllerBug');
var Bug = require('../models/utils/bug');
var ControllerImgbug = require('../controllers/utils/controllerImgbug');
var Imgbug = require('../models/utils/imgbug');
//#endregion
//#region CORREO ELECTRÓNICO
const configMensaje = require('../../config/configMensaje');
//#endregion

//#region mongoose para mongodb
var multer = require('multer');
const path = require('path');
var mime = require('mime');
var fs = require('fs');
var sesiones = require('../controllers/login/controllerSesiones');
//#endregion

var done = false;
var fileNameUpload = "";
var fileNamePath = "";

module.exports = function (app) {
    //#region INICIO DE SESIÓN
    app.post('/api/login', function (req, res, next) {
        var user = {
            usuario: req.body.usuario,
            passwordHash: req.body.passwordHash
        };
        Usuario.findOne(user, function (err, newUser) {
            if (err) {
                return res.status(500).json({
                    msg: 'Error login'
                });
            }
            if (!newUser) {
                return res.status(404).json({
                    msg: 'No existe'
                });
            } else {
                console.log(newUser);
                req.session.usuario = newUser;
                req.session.admin = true;
            }

            return res.status(200).json(newUser);
        }).populate("persona");
    });

    var auth = function (req, res, next) {
        //if (req.session && req.session.user === "jose" && req.session.admin)
        if (req.session /*&& req.session.usuario*/ && req.session.admin)
            return next();
        else
            return res.sendStatus(401);
    };

    //Destruir la sesión completa.
    app.get('/api/logout', function (req, res) {
        req.session.destroy();
        res.send("Sessión Destruida.");
    });
    //#endregion

    app.get('/api/itemMedicamentosd', function (req, res) {
        console.log("En el router");

        fs.readFile('uploads/Filename.xls', function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type': 'text/html'})
                console.log(err);
                res.end("No such file");
            } else {
                //specify Content will be an attachment
                res.setHeader('Content-disposition', 'attachment; filename=uploads/Filename.xls');
                res.end(content);
            }
        });
        /*ItemMedicamento.find(//{enPaginaPrincipal : true, activo: true},
            function (err, itemMedicamento) {
                if (err)
                    res.send(err);

                console.log(itemMedicamento);
                var data = '';
                for (var i = 0; i < itemMedicamento.length; i++) {
                    data = data + itemMedicamento[i].nombreGenerico + '\t' + itemMedicamento[i].categoria.categoria + '\t' + itemMedicamento[i].concentracion.concentracion + '\n';
                }

                fs.appendFile('uploads/Filename.xls', data, (err) => {
                    if (err) throw err;

                    console.log('File created');
                });

            }
        ).populate('concentracion')
        .populate('formaFarmaceutica')
        .populate('tipoInventario')
        .populate('laboratorio')
        .populate('fabricante')
        .populate('estadoItem')
        .populate('unidadMedina')
        .populate('categoria')
        .populate('registroInvima')
        .populate('clasificacionRiesgo')
        .populate('viaAdministracion');*/


        //var file = "uploads/Filename.xls";
        //res.download(file);
        //res.redirect('uploads/Filename.xls');

        /*download('http://unicorn.com/foo.jpg', 'uploads').then(() => {
            console.log('done!');
        });

        download('http://unicorn.com/foo.jpg').then(data => {
            fs.writeFileSync('foo.jpg', data);
        });

        download('unicorn.com/foo.jpg').pipe(fs.createWriteStream('foo.jpg'));*/

        /*Promise.all([
            'http://unicorn.com/foo.jpg'
        ].map(x => download(x, 'uploads'))).then(() => {
            console.log('files downloaded!');
        });*/


        /*
        var file = 'uploads/Filename.xls';

        var filename = path.basename(file);
        var mimetype = mime.lookup(file);

        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', mimetype);

        var filestream = fs.createReadStream(file);
        filestream.pipe(res);
*/
        /*res.writeHead(200, {
            'Content-Disposition': 'attachment; filename="Filename.xlsx"',
            'Transfer-Encoding': 'chunked',
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });*/
        //res.send("Todo bien");
        /*res.writeHead(200, {
            'Content-Disposition': 'attachment; filename="Filename.xlsx"',
            'Transfer-Encoding': 'chunked',
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        var workbook = new Excel.stream.xlsx.WorkbookWriter({ stream: res });
        var worksheet = workbook.addWorksheet('some-worksheet');
        worksheet.addRow(['foo', 'bar']).commit();
        worksheet.commit();
        workbook.commit();*/
    });

    //Para llegar a la ruta content necesitamos tener permisos de administrador:

    app.get('/content', auth, function (req, res) {
        res.send("You can only see this after you've logged in.");
    });

    //#endregion

    //#region ENVIO DE CORREO ELECTRONICO
    app.post('/api/formulario', function (req, res) { // testado con postman se adjunta como body { id: 1}
        //console.log('req.body::', req.body);
        let formulario = {};
        configMensaje(formulario);
        res.status(200).send();
    });
    app.post('/api/formulariodesdefactura', function (req, res) { // testado con postman se adjunta como body { id: 1}
        //console.log('req.body::', req.body);
        let formulario = {};
        formulario.from = req.body.from; // 'yovanysuarezsilva@gmail.com';
        formulario.to = req.body.to; // 'yovanysuarezsilva@gmail.com';
        formulario.subject = req.body.subject; // "Envio de Email desde servidor nodejs! Prueba para POS";
        formulario.html = req.body.html;
        formulario.attachments = req.body.attachments; // '<strong>Hola </strong> Cristian Mahecha. <br/><strong> E-mail:</strong> yovanysuarezsilva@gmail.com <br/><strong>Mensaje:</strong> Hola, este es un mensaje enviado desde el servicio de aplicaciones de CDS<br>';
        configMensaje(formulario);
        res.status(200).send({msg:'Transacción realizada!'});
    });
    //#endregion


    //#region RUTAS APLICACIÓN
    // usuario
    app.get('/api/rolUsuario/:usuario/:rol', ControllerRolUsuario.getRolYUsuario);
    // BUGS
    app.get('/api/imgbug', ControllerImgbug.getAllImgsBugs);
    app.get('/api/imgbug/:imgbug_id', ControllerImgbug.getImgBugById);
    app.get('/api/imgbug/:page/:rows', ControllerImgbug.getAllImgsBugsPaginado);
    app.post('/api/imgbug', ControllerImgbug.setImgBug);
    app.get('/api/imageBug', ControllerImgbug.getImgOfBinary);
    // MARCAS
    app.get('/api/marca', ControllerMarca.getMarca);
    app.get('/api/marca/:marca_id', ControllerBug.getBugById);
    app.post('/api/marca', ControllerBug.setBug);
    // BUGS
    app.get('/api/bug', ControllerBug.getAllBugs);
    app.get('/api/bug/:bug_id', ControllerBug.getBugById);
    app.post('/api/bug', ControllerBug.setBug);
    // EMPRESAS
    app.get('/api/empresas', ControllerEmpresa.getEmpresa);
    app.get('/api/empresa/:empresa_id', ControllerEmpresa.getEmpresaPorID);
    app.post('/api/empresa', ControllerEmpresa.setEmpresa);
    // ALMACENES
    app.get('/api/almacen', ControllerAlmacen.getAlmacen);
    app.post('/api/almacen', ControllerAlmacen.setAlmacen);
    // CONCENTRACIONES
    app.get('/api/concentracion', ControllerConcentracion.getConcentracion);
    app.post('/api/concentracion', ControllerConcentracion.setConcentracion);
    // FORMAS FARMACEUTICAS
    app.get('/api/formaFarmaceutica', ControllerFormaFarmaceutica.getFormaFarmaceutica);
    app.post('/api/formaFarmaceutica', ControllerFormaFarmaceutica.setFormaFarmaceutica);
    // TIPO INVENTARIO
    app.get('/api/tipoInventario', ControllerTipoInventario.getTipoInventario);
    app.post('/api/tipoInventario', ControllerTipoInventario.setTipoInventario);
    // LABORATORIO
    app.get('/api/laboratorio', ControllerLaboratorio.getLaboratorio);
    app.post('/api/laboratorio', ControllerLaboratorio.setLaboratorio);
    // FABRICANTE
    app.get('/api/fabricante', ControllerFabricante.getFabricante);
    app.post('/api/fabricante', ControllerFabricante.setFabricante);
    // ESTADO ITEM
    app.get('/api/estadoItem', ControllerEstadoItem.getEstadoItem);
    app.post('/api/estadoItem', ControllerEstadoItem.setEstadoItem);
    // UNIDAD DE MEDIDA
    app.get('/api/unidadMedida', ControllerUnidadMedida.getUnidadMedida);
    app.post('/api/unidadMedida', ControllerUnidadMedida.setUnidadMedida);
    // CATEGORIA
    app.get('/api/categoria', ControllerCategoria.getCategoria);
    app.post('/api/categoria', ControllerCategoria.setCategoria);
    // REGISTRO INVIMA
    app.get('/api/registroInvima', ControllerRegistroInvima.getRegistroInvima);
    app.post('/api/registroInvima', ControllerRegistroInvima.setRegistroInvima);
    // CLASIFICACION RIESGO
    app.get('/api/clasificacionRiesgo', ControllerClasificacionRiesgo.getClasificacionRiesgo);
    app.post('/api/clasificacionRiesgo', ControllerClasificacionRiesgo.setClasificacionRiesgo);
    // VIA ADMINISTRACION
    app.get('/api/viaAdministracion', ControllerViaAdministracion.getViaAdministracion);
    app.post('/api/viaAdministracion', ControllerViaAdministracion.setViaAdministracion);
    // CAJAS
    app.get('/api/caja/:caja_id', ControllerCaja.getCajaPorId);
    app.get('/api/cajas', ControllerCaja.getCajas);

    // control de cajas
    app.get('/api/cajaControl', ControllerCajaControl.getCajaControl);
    app.get('/api/cajaControl/:page/:rows', ControllerCajaControl.getCajaControlsEnListaPaginada);
    app.post('/api/cajaControl', ControllerCajaControl.setCajaControl);
    //app.put('/api/cajaControlC', ControllerCajaControl.setCajaControl);
    app.put('/api/cajaControlAMF/:cajaControl_id/:montoFinal', ControllerCajaControl.setActualizarMontoFinal);
    app.put('/api/cajaControlC/:cajaControl_id/:novedadCierre', ControllerCajaControl.setCerrarCajaControl);
    app.get('/api/cajaControlAbierta', ControllerCajaControl.getCajaControlAbierta);
    // USUARIOS
    //app.get('/api/usuario/:fechaFactura', ControllerUsuario.getUsuariosByFecha);
    //app.get('/api/usuario/:factura_id', ControllerUsuario.getUsuariosByFactura);
    //app.get('/api/usuario', ControllerUsuario.getUsuario);
    app.get('/api/usuario/:page/:rows/:esDetallado', ControllerUsuario.getUsuariosEnListaPaginada);
    //app.get('/api/usuario/:page/:rows/:esDetallado/:itemMedicamento_id', ControllerUsuario.getUsuariosEnListaPaginadaPorItem);
    // app.get('/api/usuario', ControllerUsuario.getUsuarios);
    //app.get('/api/usuario/:usuario_id', ControllerUsuario.getUsuario);
    //app.post('/api/usuario', ControllerUsuario.setFacturaDetalle);
    //app.put('/api/usuario/:usuario_id', ControllerUsuario.updateFacturaDetallePorId);
    //app.delete('/api/usuario/:_id/:usuario_id', ControllerUsuario.removeFacturaDetalle);
    //app.delete('/api/usuario/:usuario_id', ControllerUsuario.removeFacturaDetalleII);

    // RUTAS PARA FACTURAS
    app.get('/api/factura/:fechaFactura', ControllerFactura.getFacturaByFecha);
    app.get('/api/factura', ControllerFactura.getFactura);
    app.get('/api/factura/:page/:rows', ControllerFactura.getFacturasEnListaPaginada);
    app.get('/api/facturas', ControllerFactura.getFacturas);
    app.post('/api/factura', ControllerFactura.setFactura);
    //app.put('/api/facturaav/:factura_id', ControllerFactura.updateValoresFactura);
    app.put('/api/facturaP/:factura_id', ControllerFactura.pagarFactura);
    app.put('/api/factura/:factura_id', ControllerFactura.updateFactura);
    app.delete('/api/factura/:factura_id', ControllerFactura.removeFactura);
    app.get('/api/facturaAbierta', ControllerFactura.getFacturaAbierta);
    // RUTAS PARA DETALLES DE FACTURA
    app.get('/api/facturaDetalle/:fechaFactura', ControllerFacturaDetalle.getFacturaDetalleByFecha);
    app.get('/api/facturaDetalles/:factura_id', ControllerFacturaDetalle.getFacturaDetallesByFactura);
    app.get('/api/facturaDetalle', ControllerFacturaDetalle.getFacturaDetalle);
    app.get('/api/facturaDetalles/:_id/:page/:rows/:esDetallado', ControllerFacturaDetalle.getFacturaDetallesEnListaPaginadaPorCajaControl);
    app.get('/api/facturaDetalle/:page/:rows/:esDetallado', ControllerFacturaDetalle.getFacturaDetallesEnListaPaginada);
    app.get('/api/facturaDetalle/:page/:rows/:esDetallado/:itemMedicamento_id', ControllerFacturaDetalle.getFacturaDetallesEnListaPaginadaPorItem);
    app.get('/api/detallesFacturas', ControllerFacturaDetalle.getDetalles);
    app.get('/api/facturaDetalles/:factura_id', ControllerFacturaDetalle.getFacturaDetalles);
    app.post('/api/facturaDetalle', ControllerFacturaDetalle.setFacturaDetalle);
    app.put('/api/facturaDetalleId/:facturaDetalle_id', ControllerFacturaDetalle.updateFacturaDetallePorId);
    app.delete('/api/facturaDetalle/:_id/:factura_id', ControllerFacturaDetalle.removeFacturaDetalle);
    app.delete('/api/facturaDetalle/:facturaDetalle_id', ControllerFacturaDetalle.removeFacturaDetalleII);
    // RUTAS PARA COTIZACIONES
    app.get('/api/cotizacion/:fechaCotizacion', ControllerCotizacion.getCotizacionByFecha);
    app.get('/api/cotizacion', ControllerCotizacion.getCotizacion);
    app.get('/api/cotizacion/:page/:rows', ControllerCotizacion.getCotizacionesEnListaPaginada);
    app.get('/api/cotizaciones', ControllerCotizacion.getCotizaciones);
    app.get('/api/cargarCotizacionesRealizadasPorUsuario', ControllerCotizacion.getCotizacionesRealizadasPorUsuario);
    app.post('/api/cotizacion', ControllerCotizacion.setCotizacion);
    //app.put('/api/facturaav/:cotizaciona_id', ControllerCotizaciona.updateValoresFactura);
    app.put('/api/cotizacionP/:cotizacion_id', ControllerCotizacion.registrarCotizacion);
    app.put('/api/cotizacion/:cotizacion_id', ControllerCotizacion.updateCotizacion);
    app.delete('/api/cotizacion/:cotizacion_id', ControllerCotizacion.removeCotizacion);
    app.get('/api/cotizacionAbierta', ControllerCotizacion.getCotizacionAbierta);
    // RUTAS PARA DETALLES DE COTIZACIONES
    app.get('/api/cotizacionDetalle/:fechaCotizacion', ControllerCotizacionDetalle.getCotizacionDetalleByFecha);
    app.get('/api/cotizacionDetalles/:cotizacion_id', ControllerCotizacionDetalle.getCotizacionDetalles);
    app.get('/api/cotizacionDetalle', ControllerCotizacionDetalle.getCotizacionDetalle);
    //app.get('/api/cotizacionDetalles/:_id/:page/:rows/:esDetallado', ControllerCotizacionDetalle.getCotizacionDetallesEnListaPaginadaPorUsuario);
    app.get('/api/cotizacionDetalle/:page/:rows/:esDetallado', ControllerCotizacionDetalle.getCotizacionDetallesEnListaPaginada);
    app.get('/api/cotizacionDetalle/:page/:rows/:esDetallado/:itemMedicamento_id', ControllerCotizacionDetalle.getCotizacionDetallesEnListaPaginadaPorItem);
    app.get('/api/detallesCotizaciones', ControllerCotizacionDetalle.getDetalles);
    app.post('/api/cotizacionDetalle', ControllerCotizacionDetalle.setCotizacionDetalle);
    app.put('/api/cotizacionDetalleId/:cotizacionDetalle_id', ControllerCotizacionDetalle.updateCotizacionDetallePorId);
    //app.delete('/api/cotizacionDetalle/:_id/:cotizacion_id', ControllerCotizacionDetalle.removeCotizacionetalle);
    //app.delete('/api/cotizacionDetalle/:cotizacionDetalle_id', ControllerCotizacionDetalle.removeCotizacionDetalleII);
    //#region RUTAS PARA PROMOCIONES
    app.get('/api/promocion/:fechaPromocion', ControllerPromocion.getPromocionByFecha);
    app.get('/api/promocion', ControllerPromocion.getPromocion);
    app.get('/api/promocion/:page/:rows', ControllerPromocion.getPromocionesEnListaPaginada);
    app.get('/api/promociones', ControllerPromocion.getPromociones);
    app.post('/api/promocion', ControllerPromocion.setPromocion);
    //app.put('/api/facturaav/:promociona_id', ControllerPromociona.updateValoresFactura);
    app.put('/api/promocionP/:promocion_id', ControllerPromocion.registrarPromocion);
    app.put('/api/promocionActivar/:promocion_id', ControllerPromocion.activarPromocionParaVerEnPaginaPrincipal);
    app.put('/api/promocion/:promocion_id', ControllerPromocion.updatePromocion);
    app.delete('/api/promocion/:promocion_id', ControllerPromocion.removePromocion);
    app.get('/api/promocionAbierta', ControllerPromocion.getPromocionAbierta);
    //#endregion
    //#region RUTAS PARA DETALLES DE PROMOCIONES
    app.get('/api/promocionDetalle/:fechaPromocion', ControllerPromocionDetalle.getPromocionDetalleByFecha);
    app.get('/api/promocionDetalles/:promocion_id', ControllerPromocionDetalle.getPromocionDetalles);
    app.get('/api/promocionDetalle', ControllerPromocionDetalle.getPromocionDetalle);
    app.get('/api/promocionDetallesActivos', ControllerPromocionDetalle.getPromocionDetallesActivos);
    //app.get('/api/promocionDetalles/:_id/:page/:rows/:esDetallado', ControllerPromocionDetalle.getPromocionDetallesEnListaPaginadaPorUsuario);
    app.get('/api/promocionDetalle/:page/:rows/:esDetallado', ControllerPromocionDetalle.getPromocionDetallesEnListaPaginada);
    app.get('/api/promocionDetalle/:page/:rows/:esDetallado/:itemMedicamento_id', ControllerPromocionDetalle.getPromocionDetallesEnListaPaginadaPorItem);
    app.get('/api/detallesPromociones', ControllerPromocionDetalle.getDetalles);
    app.post('/api/promocionDetalle', ControllerPromocionDetalle.setPromocionDetalle);
    app.put('/api/promocionDetalleId/:promocionDetalle_id', ControllerPromocionDetalle.updatePromocionDetallePorId);
    app.delete('/api/promocionDetalle/:_id/:promocion_id', ControllerPromocionDetalle.removePromocionDetalle);
    app.delete('/api/promocionDetalle/:promocionDetalle_id', ControllerPromocionDetalle.removePromocionDetalleII);
    //#endregion
//#region GESTION DE INVENTARIOS

    app.get('/api/inventario/:fechaInventario', ControllerInventario.getInventarioByFecha);
    app.get('/api/inventario', ControllerInventario.getInventario);
    app.get('/api/inventario/:page/:rows', ControllerInventario.getInventariosEnListaPaginada);
    app.get('/api/inventarios', ControllerInventario.getInventarios);
    app.post('/api/inventario', ControllerInventario.setInventario);
    app.put('/api/inventarioa/:inventario_id', ControllerInventario.aprobarCargaInventario);
    app.put('/api/inventario/:inventario_id', ControllerInventario.updateInventario);
    app.put('/api/inventario/:inventario_id/:novedad', ControllerInventario.updateNovedadInventario);
    app.delete('/api/inventario/:inventario_id', ControllerInventario.removeInventario);


    app.get('/api/inventarioDetalle/:fechaInventario', ControllerInventarioDetalle.getInventarioDetalleByFecha);
    app.get('/api/inventarioDetalles/:inventario_id', ControllerInventarioDetalle.getInventarioDetalleByInventario);
    app.get('/api/inventarioDetallesPorMedicamento/:itemMedicamento_id', ControllerInventarioDetalle.getInventarioDetalleByItemMedicamento);
    app.get('/api/inventarioDetalle', ControllerInventarioDetalle.getInventarioDetalle);
    app.get('/api/inventarioDetalleF/:nombreGenerico/:nombreComercial', ControllerInventarioDetalle.getInventarioDetalleFByItemMedicamentoCG);
    app.get('/api/inventarioDetalleN/:nombreGenerico/:nombreComercial', ControllerInventarioDetalle.getInventarioDetalleByItemMedicamentoCG);
    app.get('/api/inventarioDetalle/:page/:rows/:esDetallado', ControllerInventarioDetalle.getInventarioDetallesEnListaPaginada);
    app.get('/api/inventarioDetallePorItem/:page/:rows/:esDetallado/:itemMedicamento_id', ControllerInventarioDetalle.getInventarioDetallesEnListaPaginadaPorItem);
    app.get('/api/detalles', ControllerInventarioDetalle.getDetalles);
    app.get('/api/inventarioDetalles', ControllerInventarioDetalle.getInventarioDetalles);
    app.post('/api/inventarioDetalle', ControllerInventarioDetalle.setInventarioDetalle);
    app.put('/api/inventarioDetalleD/:inventarioDetalle_id/:cantidad', ControllerInventarioDetalle.updateCantidadDescargadaDetalle);
    app.put('/api/inventarioDetalle/:inventarioDetalle_id', ControllerInventarioDetalle.updateInventarioDetalle);
    app.delete('/api/inventarioDetalle/:_id/:inventario_id', ControllerInventarioDetalle.removeInventarioDetalle);
    app.delete('/api/inventarioDetalle/:inventarioDetalle_id', ControllerInventarioDetalle.removeInventarioDetalleII);
//#endregion

    // devolver todos los items de generales
    app.get('/api/itemGeneral/:nombreGenerico', ControllerItemGeneral.getItemGeneralByNombre);
    app.get('/api/itemGeneral', ControllerItemGeneral.getItemGeneral);
    app.get('/api/itemGeneral/:page/:rows', ControllerItemGeneral.getItemGeneralesEnListaPaginada);
    app.get('/api/itemGenerales', ControllerItemGeneral.getItemGenerales);
    app.post('/api/itemGeneral', ControllerItemGeneral.setItemGeneral);
    app.put('/api/itemGeneral/:itemGeneral_id', ControllerItemGeneral.updateItemGeneral);
    app.delete('/api/itemGeneral/:itemGeneral_id', ControllerItemGeneral.removeItemGeneral);
    // devolver todos los items de medicamentos
    app.get('/api/itemMedicamentoId/:itemMedicamento_id', ControllerItemMedicamento.getItemMedicamentoById);
    app.get('/api/itemMedicamentoS/:serial', ControllerItemMedicamento.getItemPorSerial);
    app.get('/api/itemMedicamentoN/:nombreGenerico/:nombreComercial', ControllerItemMedicamento.getItemPorNombreGenerico);
    app.get('/api/itemMedicamento/:nombreGenerico/:nombreComercial/:serial', ControllerItemMedicamento.getItemMedicamentoByNombre);
    app.get('/api/itemMedicamento', ControllerItemMedicamento.getItemMedicamento);
    app.get('/api/itemMedicamento/:page/:rows', ControllerItemMedicamento.getItemMedicamentosEnListaPaginada);
    app.get('/api/itemMedicamentos', ControllerItemMedicamento.getItemMedicamentos);
    app.post('/api/itemMedicamento', ControllerItemMedicamento.setItemMedicamento);
    app.put('/api/itemMedicamento/:itemMedicamento_id', ControllerItemMedicamento.updateItemMedicamento);
    app.delete('/api/itemMedicamento/:itemMedicamento_id', ControllerItemMedicamento.removeItemMedicamento);
    //#region PLAYER
    //#region SUB PRODUCTOS
    app.get('/api/itemMedicamentosFiltrados/:_id', ControllerItemSubproducto.getItemSubproductoPorItem);
    app.post('/api/itemSubproducto', ControllerItemSubproducto.setItemSubproducto);
    app.delete('/api/itemSubproducto/:itemSubproducto_id', ControllerItemSubproducto.removeItemSubproducto);
    //#endregion
    //cliente
    app.get('/api/cliente', ControllerCliente.getCliente);
    app.get('/api/cliente/:documentoCliente', ControllerCliente.getClientesPorDocumento);
    app.get('/api/clienteid/:cliente_id', ControllerCliente.getClientesPorID);
    app.post('/api/cliente', ControllerCliente.setClienteDesdeCaja);
    app.put('/api/cliente/:cliente_id', ControllerCliente.updateCliente);
    app.delete('/api/cliente/:cliente_id', ControllerCliente.removeCliente);
    //proveedor
    app.get('/api/proveedores', ControllerProveedor.getProveedores);
    app.get('/api/proveedor/:page/:rows', ControllerProveedor.getProveedoresEnListaPaginada);
    app.get('/api/proveedor/:documento', ControllerProveedor.getProveedoresPorDocumento);
    app.post('/api/proveedor', ControllerProveedor.setProveedor);
    app.post('/api/proveedorConMarca', ControllerProveedor.setProveedorConMarca);
    app.put('/api/proveedorConMarca', ControllerProveedor.updateProveedorII);
    app.put('/api/proveedor/:proveedor_id', ControllerProveedor.updateProveedor);
    app.get('/api/proveedorMarca/:proveedor_id', ControllerProveedorMarca.getProveedorMarcaPorProveedor);
    app.post('/api/proveedorMarca', ControllerProveedorMarca.setProveedorMarca);
    app.delete('/api/proveedor/:proveedor_id', ControllerProveedor.removeProveedor);


    app.get('/api/marcaId/:marca_id', ControllerMarca.getMarcaByID);
    //Cuenta
    app.get('/api/cuenta', ControllerCuenta.getCuenta);
    app.get('/api/cuenta/:documentoCliente', ControllerCuenta.getCuentasPorDocumento);
    app.get('/api/cuenta/:cancha', ControllerCuenta.getCuentasPorDocumento);
    app.post('/api/cuenta', ControllerCuenta.setCuenta);
    app.put('/api/cuenta/:cuenta_id', ControllerCuenta.updateCuenta);
    app.delete('/api/cuenta/:cuenta_id', ControllerCuenta.removeCuenta);
    //cancha
    app.get('/api/cancha', ControllerCancha.getCancha);
    //app.get('/api/cancha/:campoDeportivo', ControllerCancha.getCanchasPorTipo);
    //app.get('/api/cancha/:campoDeportivo', ControllerCancha.getCanchasPorCampoDeportivo);
    app.post('/api/cancha', ControllerCancha.setCancha);
    app.put('/api/canchaUpdateEstado', ControllerCancha.updateEstadoCancha);
    app.put('/api/cancha/:cancha_id', ControllerCancha.updateCancha);
    app.delete('/api/cancha/:cancha_id', ControllerCancha.removeCancha);
    //Cuenta Detalle
    app.get('/api/cuentaDetalle', ControllerCuentaDetalle.getCuentaDetalles);
    app.get('/api/cuentaDetalle/:cuenta', ControllerCuentaDetalle.getDetallesPorCuenta);
    app.post('/api/cuentaDetalle', ControllerCuentaDetalle.setCuentaDetalle);
    app.put('/api/cuentaDetalle/:cuentaDetalle_id', ControllerCuentaDetalle.updateCuentaDetalle);
    app.delete('/api/cuentaDetalle/:cuentaDetalle_id', ControllerCuentaDetalle.removeCuentaDetalle);
    //endregion
    /*app.delete('/api/itemMedicamento/:noticia_id', ControllerItemMedicamento.removeItemMedicamento);
    app.put('/api/itemMedicamento/:noticia_id/activo/:noticia_activo', ControllerItemMedicamento.updateEstadoItemMedicamento;
    app.put('/api/itemMedicamentoc/:noticia_id/enpaginaprincipal/:noticia_enpaginaprincipal', ControllerItemMedicamento.updateEnPaginaPrincipalItemMedicamento);
    app.put('/api/itemMedicamentoa/:noticia_id/megusta/:noticia_megusta', ControllerItemMedicamento.updateVotoItemMedicamento);
    app.put('/api/itemMedicamentob/:noticia_id/nomegusta/:noticia_nomegusta', ControllerItemMedicamento.updateVotoItemMedicamento);*/

    // devolver todos las fotos
    app.get('/api/foto', ControllerFoto.getFotosEnListaPaginada);
    app.get('/api/fotos/:galeria_id', ControllerFoto.getFoto);
    app.post('/api/foto', ControllerFoto.setFoto);
    app.put('/api/foto/:foto_id', ControllerFoto.updateFoto);
    app.delete('/api/foto/:foto_id', ControllerFoto.removeFoto);
    //app.put('/api/foto/:foto_id/activo/:foto_activo', ControllerFoto.updateEstadoFoto);
    //app.put('/api/fotoc/:foto_id/enpaginaprincipal/:foto_enpaginaprincipal', ControllerFoto.updateEnPaginaPrincipalFoto);
    //app.put('/api/fotoa/:foto_id/megusta/:foto_megusta', ControllerFoto.updateVotoFoto);
    //app.put('/api/fotob/:foto_id/nomegusta/:foto_nomegusta', ControllerFoto.updateVotoFoto);
    // devolver todos las noticias
    app.get('/api/galeria', ControllerGaleria.getGaleriasEnListaPaginada);
    app.get('/api/galerias', ControllerGaleria.getGalerias);
    app.post('/api/galeria', ControllerGaleria.setGaleria);
    app.put('/api/galeria/:galeria_id', ControllerGaleria.updateGaleria);
    app.delete('/api/galeria/:galeria_id', ControllerGaleria.removeGaleria);
    app.put('/api/galeria/:galeria_id/activo/:galeria_activo', ControllerGaleria.updateEstadoGaleria);
    app.put('/api/galeriac/:galeria_id/enpaginaprincipal/:galeria_enpaginaprincipal', ControllerGaleria.updateEnPaginaPrincipalGaleria);
    app.put('/api/galeriaa/:galeria_id/megusta/:galeria_megusta', ControllerGaleria.updateVotoGaleria);
    app.put('/api/galeriab/:galeria_id/nomegusta/:galeria_nomegusta', ControllerGaleria.updateVotoGaleria);
    // devolver todos las categorias de galerias
    app.get('/api/categoriaGaleria', ControllerCategoriaGaleria.getCategoriaGaleria);
    app.post('/api/categoriaGaleria', ControllerCategoriaGaleria.setCategoriaGaleria);
    app.put('/api/categoriaGaleria/:categoriaGaleria_id', ControllerCategoriaGaleria.updateCategoriaGaleria);
    app.delete('/api/categoriaGaleria/:categoriaGaleria_id', ControllerCategoriaGaleria.removeCategoriaGaleria);
    //app.put('/api/noticia/:noticia_id/imagen/:noticia_imagen', ControllerNoticia.updateImagenNoticia);
    // devolver todos las noticias
    app.get('/api/noticia', ControllerNoticia.getNoticiasEnListaPaginada);
    app.get('/api/noticias', ControllerNoticia.getNoticias);
    app.post('/api/noticia', ControllerNoticia.setNoticia);
    app.put('/api/noticia/:noticia_id', ControllerNoticia.updateNoticia);
    app.delete('/api/noticia/:noticia_id', ControllerNoticia.removeNoticia);
    app.put('/api/noticia/:noticia_id/activo/:noticia_activo', ControllerNoticia.updateEstadoNoticia);
    app.put('/api/noticiac/:noticia_id/enpaginaprincipal/:noticia_enpaginaprincipal', ControllerNoticia.updateEnPaginaPrincipalNoticia);
    app.put('/api/noticiaa/:noticia_id/megusta/:noticia_megusta', ControllerNoticia.updateVotoNoticia);
    app.put('/api/noticiab/:noticia_id/nomegusta/:noticia_nomegusta', ControllerNoticia.updateVotoNoticia);
    // devolver todos las noticias
    app.get('/api/estadoNoticia', ControllerEstadoNoticia.getEstadoNoticia);
    app.post('/api/estadoNoticia', ControllerEstadoNoticia.setEstadoNoticia);
    app.put('/api/estadoNoticia/:estadoNoticia_id', ControllerEstadoNoticia.updateEstadoNoticia);
    app.delete('/api/estadoNoticia/:estadoNoticia_id', ControllerEstadoNoticia.removeEstadoNoticia);
    //app.put('/api/noticia/:noticia_id/imagen/:noticia_imagen', ControllerNoticia.updateImagenNoticia);
    // devolver todos las noticias
    app.get('/api/categoriaNoticia', ControllerCategoriaNoticia.getCategoriaNoticia);
    app.post('/api/categoriaNoticia', ControllerCategoriaNoticia.setCategoriaNoticia);
    app.put('/api/categoriaNoticia/:categoriaNoticia_id', ControllerCategoriaNoticia.updateCategoriaNoticia);
    app.delete('/api/categoriaNoticia/:categoriaNoticia_id', ControllerCategoriaNoticia.removeCategoriaNoticia);
    //app.put('/api/noticia/:noticia_id/imagen/:noticia_imagen', ControllerNoticia.updateImagenNoticia);
    // devolver todos los servicios
    app.get('/api/contenido', ControllerContenido.getContenido);
    app.post('/api/contenido', ControllerContenido.setContenido);
    app.put('/api/contenido/:contenido_id', ControllerContenido.updateContenido);
    app.delete('/api/contenido/:contenido_id', ControllerContenido.removeContenido);
    //app.put('/api/contenido/:contenido_id/imagen/:contenido_imagen', ControllerServicio.updateImagenServicio);

    // devolver todos los servicios
    app.get('/api/servicio', ControllerServicio.getServicio);
    app.post('/api/servicio', ControllerServicio.setServicio);
    app.put('/api/servicio/:servicio_id', ControllerServicio.updateServicio);
    app.delete('/api/servicio/:servicio_id', ControllerServicio.removeServicio);
    app.put('/api/servicio/:servicio_id/imagen/:servicio_imagen', ControllerServicio.updateImagenServicio);
    // devolver todos los contactos
    app.get('/api/contacto', auth, ControllerContacto.getContacto);
    app.post('/api/contacto', ControllerContacto.setContacto);
    app.post('/api/contactoboletin', ControllerContacto.setContactoBoletin);
    app.put('/api/contacto/:contacto_id', ControllerContacto.updateContacto);
    app.delete('/api/contacto/:contacto_id', ControllerContacto.removeContacto);
    //#endregion
    //#region RUTAS APLICACIÓN
    //Sesiones
    app.get('/api/identificacion', sesiones.getIdentificacion);
    app.post('/api/identificacion', sesiones.postIdentificacion);
    app.get('/api/bienvenida', sesiones.bienvenida);
    app.get('/api/salir', sesiones.salir);
    // devolver todos los servicios
    app.get('/api/faq', ControllerFaq.getFaq);
    app.post('/api/faq', ControllerFaq.setFaq);
    app.put('/api/faq/:faq_id', ControllerFaq.updateFaq);
    app.delete('/api/faq/:faq_id', ControllerFaq.removeFaq);

    // devolver todos los aliados
    app.get('/api/aliado', ControllerAliado.getAliado);
    app.post('/api/aliado', auth, ControllerAliado.setAliado);
    app.put('/api/aliado/:aliado_id', ControllerAliado.updateAliado);
    app.delete('/api/aliado/:aliado_id', auth, ControllerAliado.removeAliado);
    // devolver todos los aliados
    app.get('/api/nivelEducativo', ControllerNivelEducativo.getNivelEducativo);
    app.post('/api/nivelEducativo', ControllerNivelEducativo.setNivelEducativo);
    app.put('/api/nivelEducativo/:nivelEducativo_id', ControllerNivelEducativo.updateNivelEducativo);
    app.delete('/api/nivelEducativo/:nivelEducativo_id', ControllerNivelEducativo.removeNivelEducativo);
    // usuario
    app.get('/api/usuario', ControllerUsuario.getUsuario);
    app.post('/api/usuario', ControllerUsuario.setUsuario);
    app.put('/api/usuario/:usuario_id', ControllerUsuario.updateUsuario);
    app.delete('/api/usuario/:usuario_id', ControllerUsuario.removeUsuario);//app.put('/api/usuario/:usuario_id/usuario/:usuario_imagen', ControllerUsuario.updateImagenUsuario);

    //#endregion
    //#region LLAMADOS
    /*app.use(multer({
        dest: './public/files/',
        rename: function (fieldname, filename) {
            fileNameUpload = filename + "_" + Date.now();
            console.log(fileNameUpload + '  ...');
            return fileNameUpload;
        },
        onFileUploadStart: function (file) {
            console.log(file.originalname + ' is starting ...');
        },
        onFileUploadComplete: function (file) {
            console.log(file.fieldname + ' uploaded to  ' + file.path);
            done = true;
        }
    }));*/


    app.get('*', function (req, res) {
        //var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
        //console.log(ip);
        res.sendFile(path.resolve('public/index.html'));
    });


    //#endregion

    //#region LEYENDO XLS PARA INGRESO DE ENTIDADES MASIVAS A MONGO
    /*const XLSX = require('xlsx');
    const workbook = XLSX.readFile('uploads/Filename.xlsx');
    const sheet_name_list = workbook.SheetNames;
    var arr=XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    for (var i = 0, len = arr.length; i < len; i++) {
        console.log(arr[i].fabricante);
        if(arr[i].fabricante!=undefined || arr[i].fabricante!=""){
            Fabricante.create(
                {
                    fabricante: arr[i].fabricante,
                    nit: arr[i].nit,
                    correos: arr[i].correos,
                    telefonos: arr[i].telefonos,
                    direccion: arr[i].direccion
                    //activa: arr[i].activa
                },
                function (err, categoria) {
                });
            }
    };*/
    //#endregion
};
