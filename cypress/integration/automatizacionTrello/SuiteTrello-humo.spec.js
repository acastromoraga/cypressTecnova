/// <reference types="Cypress" />



describe('Suite de pruebas de tablero Trello', function () {
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
        //cy.get('a[href*="/login"]').click()
        //cy.get('input[placeholder="Introduzca el correo electrónico"]').type('testTrelloTecnova@gmail.com')
        //cy.get('input[placeholder="Introduzca la contraseña"]').type('trello123')
        //cy.get('#login').click()
        //cy.get('input[placeholder="Introducir contraseña"]').type('trello123')
        //cy.get('#login-submit > .css-19r5em7 > span').click()
        //cy.get('[data-test-id="create-board-tile"]').click()
        //cy.get('[data-test-id="create-board-title-input"]').type('Tablero Tecnova')
        //cy.get('[data-test-id="create-board-submit-button"]').click()
        //cy.get('[class="placeholder"]').click()
        //cy.get('.list-name-input').type('Por Hacer')
        //cy.get('[value="Añadir lista"]').click()
        //cy.get('.js-list.list-wrapper')
        //    .each(($elemento, index, $lista) => {
                //el objeto que contiene el texto
        //        cy.get('.js-list.list-wrapper').eq(index).then(function ($elementoLista) {
                    //:has(.caption) h4 a
        //            let products = $elementoLista.text()
        //            cy.log(products)
        //            if (products.includes('Por Hacer')) {
        //                cy.log('Se ha encontrado el elemento')
        //                cy.get('.js-list.list-wrapper').eq(index).find('[class="js-add-a-card"]').click()
        //                cy.wrap()

        //            }
        //        })
        //    })

        //cy.get('[placeholder="Introduzca un título para esta tarjeta..."]').click().type('Tarjeta Tecnova')
        //cy.get(':nth-child(1) > .nch-button').click()
        //cy.get('.list-card-details.js-card-details').click()
        //cy.get('[placeholder="Añadir una descripción más detallada..."]').type('Esto es una descripción')
        
        //cy.get('div > .edit-controls.u-clearfix > input').click()
        //cy.get('[title="Etiquetas"]').click()
        //cy.get('[data-color="blue"]').click()
        //cy.get('.pop-over-header-close-btn.icon-sm.icon-close').click()
        //cy.get('._2fqFixbnBCjl76').click()
        //cy.get('.sc-jKJlTe').as('diasCalendario')
        //   .each(($elemento, index, $lista) => {
        //        cy.get('@diasCalendario').eq(index).then(function ($elementoLista) {
        //            let dias = $elementoLista.text()
        //            cy.log(dias)
        //            if (dias.includes('31')) {
        //                cy.log('Se ha encontrado la fecha')
        //                cy.get('.sc-jKJlTe').eq(index).contains('31').click({force: true})                        
        //            }
                    
        //        })
                
        //    })
        
        //cy.get('[data-test-id="save-date-button"]').click() 
        
        //cy.get('[title="Adjunto"]').click()
        //const filepathPortada = 'files/fileTest.pdf'
        //const filepathPortada = 'imagenes/perro.png'
        //cy.get('.js-attach-file').attachFile(filepathPortada).click()

        //cy.get('.comment-box-input.js-new-comment-input').type('Esto es un comentario de test')

        //cy.get('[title="Adjunto"]').click()
        //const filepath = 'files/fileTest.pdf'
        //const filepath = 'imagenes/perro.png'
        //cy.get('.js-attach-file').attachFile(filepath).click()


        //cy.get('.icon-md.icon-close.dialog-close-button.js-close-window').click()

        //mover tarjeta
        //cy.get('.list-card-title.js-card-name').click()
        //cy.get('[title="Mover"]').click()
        //cy.get('.js-select-list').select('En proceso')
        //cy.get('[value="Mover"]').click()
        //cy.get('.icon-md.icon-close.dialog-close-button.js-close-window').click()
        //cy.get('.board-header-btn.mod-show-menu.js-show-sidebar').click()
        //cy.get('.board-menu-navigation-item-link.js-open-more').click()
        //cy.get('.board-menu-navigation-item-link.js-close-board').click()
        //cy.get('[value="Cerrar"]').click()
        //cy.get('[data-test-id="close-board-delete-board-button"]').click()
        //cy.get('[data-test-id="close-board-delete-board-confirm-button"]').click()

    });
    
})