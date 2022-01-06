/// <reference types="Cypress"/>

import Datos_Personales_PO from '../../support/pages/automatizacionEasy/datosPersonales-page'
import Login_Easy_PO from '../../support/pages/automatizacionEasy/login-page'


describe('Suite de pruebas de Carro de compras Falabella', function () {

    const DATOS_PERSONALES = new Datos_Personales_PO()
    const LOGIN = new Login_Easy_PO()
    before(function(){
        cy.fixture('datosEasy').then(function (datos) {
            this.datos = datos
        })
    })

    beforeEach(function () {
        cy.visit('https://www.easy.cl/')
    })

    it('Registro de cliente', function () {

        LOGIN.iniciarSesion()
        LOGIN.clickRegistrarse()
        DATOS_PERSONALES.seleccionRegion('13064')
        DATOS_PERSONALES.ingresarRut(this.datos.rut)
        DATOS_PERSONALES.ingresarNombre('Test')
        DATOS_PERSONALES.ingresarApellido('Test')
        DATOS_PERSONALES.ingresarEmail('pruebatour4@gmail.com')
        DATOS_PERSONALES.ingresarPassword('Alejandro1')
        DATOS_PERSONALES.confirmarPassword('Alejandro1')
        DATOS_PERSONALES.ingresarTitularDespacho('Test')
        DATOS_PERSONALES.seleccionComuna('13074')
        DATOS_PERSONALES.ingresarCalle('Calle test')
        DATOS_PERSONALES.ingresarNumeroCalle('111222')
        DATOS_PERSONALES.ingresarDepto('EE')
        DATOS_PERSONALES.ingresarNumTelefono('953223336')
        DATOS_PERSONALES.ingresarSexo()
        DATOS_PERSONALES.clickSeleccionSexo()
        DATOS_PERSONALES.ingresarDia()
        DATOS_PERSONALES.clickdia()
        DATOS_PERSONALES.ingresarMes()
        DATOS_PERSONALES.clickMes()
        DATOS_PERSONALES.ingresarAnnio()
        DATOS_PERSONALES.clickAnnio()
        DATOS_PERSONALES.aceptarCondiciones()
        DATOS_PERSONALES.clickEnviarDatos()
        DATOS_PERSONALES.validarUsuarioCreado('Test Test')




    });


})