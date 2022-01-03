// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//import 'cypress-file-upload';
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('busquedaSeleccionarTarjeta', (nombreTarjeta) => {
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
})

Cypress.Commands.add('selecionarDiaCalendario', (dia) => {
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
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')