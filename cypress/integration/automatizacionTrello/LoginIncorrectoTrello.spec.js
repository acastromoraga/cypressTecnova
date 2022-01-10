/// <reference types="Cypress" />

import Home_Page_trello_PO from '../../support/pages/automation-test-trello/home_page_trello'
import Login_Trello_PO from '../../support/pages/automation-test-trello/login-page'
import Lista_Trello_PO from '../../support/pages/automation-test-trello/lista-page'
import Tarjeta_Trello_PO from '../../support/pages/automation-test-trello/tarjeta-page'

describe('Suite de pruebas de tablero Trello', function () {

    const HOME_PAGE = new Home_Page_trello_PO()
    const LOGIN = new Login_Trello_PO()
    const LISTA = new Lista_Trello_PO()
    const TARJETA = new Tarjeta_Trello_PO()

    before(function(){
        cy.fixture('datosTrello').then(function (datos) {
            this.datos = datos
        })
    })
    this.beforeEach(function(){
        cy.visit('http://trello.com/es')
    })

    it.only('test incial', function () {

        //Ingreso Login Trello
        LOGIN.iniciarsesion()
        LOGIN.ingresarUsuario('testTrelloTecnova@gmail.com')
        LOGIN.ingresarContrasena('trello1234')
        LOGIN.clickBtnLogin()
        LOGIN.ingresarContrasenaAtlassian('trello1234')
        LOGIN.clickBtnAtlassianLogin()
        LOGIN.verificarTexto('Dirección de correo electrónico o contraseña incorrectos.')
        
        


    });
    
})