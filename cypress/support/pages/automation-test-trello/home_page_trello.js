class Home_Page_trello_PO {

    clickCreartablero() {
        cy.get('[data-test-id="create-board-tile"]').click()
    }

    ingresarNombreTablero(nombreTablero) {
        cy.get('[data-test-id="create-board-title-input"]').type(nombreTablero)
    }

    clickGuardarTablero() {
        cy.get('[data-test-id="create-board-submit-button"]').click()
    }

    //mover tarjeta
    abrirTarjeta() {
        cy.get('.list-card-title.js-card-name').click()
    }

    abrirMoverTarjeta() {
        cy.get('[title="Mover"]').click()
    }

    seleccionarEstadoTarjeta(nuevoEstadoTarjeta) {
        cy.get('.js-select-list').select(nuevoEstadoTarjeta)
    }

    guardarEstadoMover() {
        cy.get('[value="Mover"]').click()
    }

    cerrarDetalleTarjetaMover() {
        cy.get('.icon-md.icon-close.dialog-close-button.js-close-window').click()
    }

    clicMostrarMenu() {
        cy.get('.board-header-btn.mod-show-menu.js-show-sidebar').click()
    }

    clicMasOpciones() {
        cy.get('.board-menu-navigation-item-link.js-open-more').click()
    }

    clickCerrarTablero() {
        cy.get('.board-menu-navigation-item-link.js-close-board').click()
    }

    clickConfirmarCerrarTablero() {
        cy.get('[value="Cerrar"]').click()
    }

    clickCerrarTableroHome() {
        cy.get('[data-test-id="close-board-delete-board-button"]').click()
    }

    clickConformarCerrarTableroHome() {
        cy.get('[data-test-id="close-board-delete-board-confirm-button"]').click()
    }

}
export default Home_Page_trello_PO