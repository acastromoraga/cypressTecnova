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
        LOGIN.ingresarContrasena('trello123')
        LOGIN.clickBtnLogin()
        LOGIN.ingresarContrasenaAtlassian('trello123')
        LOGIN.clickBtnAtlassianLogin()
        //Home page trello
        HOME_PAGE.clickCreartablero()
        HOME_PAGE.ingresarNombreTablero('Tablero Tecnova')
        HOME_PAGE.clickGuardarTablero()
        //Crear Lista
        LISTA.clickCrearLista()
        LISTA.ingresarNombreLista('Por Hacer')
        LISTA.clickAnadirLista()
        //crear Tarjeta
        cy.busquedaSeleccionarTarjeta('Por Hacer')
        //TARJETA.agregarTarjeta('Por Hacer')
        TARJETA. ingresarNombreTarjeta('Tarjeta Tecnova')
        TARJETA.clickGuardarTarjeta()
        TARJETA.agregarDetalleTarjeta()
        TARJETA.clickDescripcionTarjeta()
        TARJETA.agregarDescripcionTarjeta('Esto es una descripción')
        TARJETA.clickGuardarDescripcion()
        TARJETA.agregarEtiqueta()
        TARJETA.seleccionarColor()
        cy.selecionarDiaCalendario('31')
        //TARJETA.seleccionarFecha('31')
        TARJETA.guardarFechaTarjeta()
        TARJETA.adjuntarImgenTarjeta('imagenes/perro.png')
        TARJETA.agregarComentarioTarjeta('Esto es un comentario de test')
        TARJETA.clickGuardarComentarioTarjeta()
        TARJETA.agregarArchivoTarjeta('files/fileTest.pdf')
        TARJETA.clickCerrarDetallesTarjeta()
        //Mover tarjeta
        cy.pause()
        HOME_PAGE.abrirTarjeta()
        HOME_PAGE.abrirMoverTarjeta()
        HOME_PAGE.seleccionarEstadoTarjeta('En proceso')
        HOME_PAGE.guardarEstadoMover()
        HOME_PAGE.cerrarDetalleTarjetaMover()
        //Eliminar Tablero
        HOME_PAGE.clicMostrarMenu()
        HOME_PAGE.clicMasOpciones()
        HOME_PAGE.clickCerrarTablero()
        HOME_PAGE.clickConfirmarCerrarTablero()
        HOME_PAGE.clickCerrarTableroHome()
        HOME_PAGE.clickConformarCerrarTableroHome() 


    });
    
})