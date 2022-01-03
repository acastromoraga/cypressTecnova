class Tarjeta_Trello_PO {

    agregarTarjeta(nombreTarjeta) {
        cy.get('.js-list.list-wrapper')
            .each(($elemento, index, $lista) => {
                //el objeto que contiene el texto
                cy.get('.js-list.list-wrapper').eq(index).then(function ($elementoLista) {
                    //:has(.caption) h4 a
                    let products = $elementoLista.text()
                    cy.log(products)
                    if (products.includes(nombreTarjeta)) {
                        cy.log('Se ha encontrado el elemento')
                        cy.get('.js-list.list-wrapper').eq(index).find('[class="js-add-a-card"]').click()
                        cy.wrap()

                    }
                })
            })
    }

    ingresarNombreTarjeta(nombreTarjeta) {
        cy.get('[placeholder="Introduzca un título para esta tarjeta..."]').click().type(nombreTarjeta)
    }

    clickGuardarTarjeta() {
        cy.get(':nth-child(1) > .nch-button').click()
    }
    agregarDetalleTarjeta() {
        cy.get('.list-card-details.js-card-details').click()
    }

    clickDescripcionTarjeta(){
        cy.get('.description-content.js-desc-content').click({force: true})
    }
    agregarDescripcionTarjeta(descripTarjeta) {
        cy.get('[placeholder="Añadir una descripción más detallada..."]').type(descripTarjeta)
    }
    
    clickGuardarDescripcion() {
        cy.get('.edit-controls > .nch-button').click()
    }
    agregarEtiqueta() {
        cy.get('[title="Etiquetas"]').click()
    }

    seleccionarColor() {
        cy.get('[data-color="blue"]').click()
    }

    seleccionarFecha(dia) {
        cy.get('.pop-over-header-close-btn.icon-sm.icon-close').click()
        cy.get('._2fqFixbnBCjl76').click()
        cy.get('.sc-jKJlTe').as('diasCalendario')
            .each(($elemento, index, $lista) => {
                cy.get('@diasCalendario').eq(index).then(function ($elementoLista) {
                    let dias = $elementoLista.text()
                    //cy.log(dias)
                    if (dias.includes(dia)) {
                        cy.log('Se ha encontrado la fecha')
                        cy.get('.sc-jKJlTe').eq(index).contains(dia).click({ force: true })
                    }

                })

            })
        
    }

    guardarFechaTarjeta(){
        cy.get('[data-test-id="save-date-button"]').click()
    }

    adjuntarImgenTarjeta(rutaImagen){
        cy.get('[title="Adjunto"]').click()
        //const filepathPortada = 'files/fileTest.pdf'
        const filepathPortada = rutaImagen
        cy.get('.js-attach-file').attachFile(filepathPortada).click()
    }

    agregarComentarioTarjeta(comentarioTarjeta){
        cy.get('.comment-box-input.js-new-comment-input').type(comentarioTarjeta)
    }

    clickGuardarComentarioTarjeta(){
        cy.get('.comment-controls > .nch-button').click()
    }

    agregarArchivoTarjeta(rutaArchivo){
        cy.get('[title="Adjunto"]').click()
        const filepath = rutaArchivo
        //const filepath = 'imagenes/perro.png'
        cy.get('.js-attach-file').attachFile(filepath).click()
    }

    clickCerrarDetallesTarjeta(){
        cy.get('.icon-md.icon-close.dialog-close-button.js-close-window').click()
    }



}
export default Tarjeta_Trello_PO