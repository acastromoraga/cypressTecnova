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
        LOGIN.loginRut(this.datos.rutIncorrecto)
        LOGIN.loginPass('Alejandro1')
        LOGIN.clickBottonIniciarSesion()
        LOGIN.verificarTexto('El Rut o la Contraseña que ingresaste son incorrectos. Por favor, ingresa nuevamente los datos.')
        

    });

})