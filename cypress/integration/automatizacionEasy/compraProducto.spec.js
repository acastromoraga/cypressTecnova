/// <reference types="Cypress"/>

import Login_Easy_PO from '../../support/pages/automatizacionEasy/login-page'
import Home_Page_easy_PO from '../../support/pages/automatizacionEasy/home-page-easy'
import Carro_Compra_page_PO from '../../support/pages/automatizacionEasy/carroCompra-page'

describe('Suite de pruebas de Carro de compras Falabella', function () {

    const LOGIN = new Login_Easy_PO()
    const HOME_PAGE_EASY = new Home_Page_easy_PO()
    const CARRO_COMPRA = new Carro_Compra_page_PO()
    before(function(){
        cy.fixture('datosEasy').then(function (datos) {
            this.datos = datos
        })
    })

    beforeEach(function () {
        cy.visit('https://www.easy.cl/')
    })

    it('Comprar Producto', function() {
        LOGIN.iniciarSesion()
        LOGIN.loginRut(this.datos.rut)
        LOGIN.loginPass('Alejandro1')
        LOGIN.clickBottonIniciarSesion()
        HOME_PAGE_EASY.buscarProducto('Piscina estructural 3 m 3300 litros Bestway')
        cy.selecionarProductoCarroCompra('Piscina estructural 3 m 3300 litros Bestway')
        CARRO_COMPRA.clickAgregarCarro()
        CARRO_COMPRA.clickIrAlCarro()
        CARRO_COMPRA.clickComprar()
        //CARRO_COMPRA.clickRetiroEnTienda()
        CARRO_COMPRA.seleccionarRegion(' 13064')
        CARRO_COMPRA.seleccionarTienda('12632')
        CARRO_COMPRA.clickContinuar()
        CARRO_COMPRA.seleccionarMetPago()
        CARRO_COMPRA.ingresarNumTarjeta('1234 1234 1234 1234')
        CARRO_COMPRA.ingresarDiaFechaTarj('02')
        CARRO_COMPRA.ingresarMesFechaTarj('04')
        CARRO_COMPRA.ingresarTitular('Test')
        CARRO_COMPRA.ingresarCVV('123')
        CARRO_COMPRA.ingresarRutTitular(this.datos.rut)
        CARRO_COMPRA.ingresarEmailTitular('pruebatour4@gmail.com')

    });

})