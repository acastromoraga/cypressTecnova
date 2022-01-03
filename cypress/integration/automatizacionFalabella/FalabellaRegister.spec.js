/// <reference types="Cypress"/>

describe('Suite de pruebas de Carro de compras Falabella', function () {

    beforeEach(function () {
        cy.visit('https://www.lapolar.cl/')
    })

    it('Registro de cliente', function () {
        //cy.get('.dy-lb-close').click()
        cy.xpath('//span[contains(.,"Iniciar Sesión / registrarse")]').click()
        cy.xpath('//a[contains(.,"Registrarse")]').click()
        //cy.get('.fieldset.create.info').should('be.visible')
        cy.get('#registration-form-fname').click({ force: true }).type('Test')
        cy.get('#registration-form-lname').type('Test')
        cy.get('#phone').type('953223336')
        cy.get('#rut').type('5289691-6')
        cy.get('#registration-form-email').type('pruebatour4@gmail.com')
        cy.get('[for="registration-form-gender-male"]').click()
        cy.get('#registration-form-password').type('Alejandro1')
        cy.get('#registration-form-password-confirm').type('Alejandro1')
        cy.get('[for="add-to-email-list"]').click()
        cy.xpath('//button[contains(.,"Registrar")]').click()
        cy.get('.account-banner__content.ms-full-width').should('contain.text', 'Test Test')


        //cy.get('#testId-Input-phoneNumber').type('53698854')

        //cy.get('#testId-consent-consentTemplateRegistroTyC_FAL_CL-input').click()
        ///cy.xpath('//span[contains(.,"Acepto los")]/preceding-sibling::input[@id="testId-consent-consentTemplateRegistroTyC_FAL_CL-input"]').click({ force: true })
        //cy.xpath('//span[contains(.,"Autorizo el")]/preceding-sibling::input[@id="testId-consent-consentTemplateRegistroPdP_FAL_CL-input"]').click({ force: true })
        //cy.get('testId-Button-submit').click()
        //cy.get('[data-testid]').click()

        //cy.get('.Popover-module_popover-container__3qpkj Popover-module_bottom-caret-notlogin__19OPO').trigger('mouseover')
        //cy.get('.Popover-module_popover-container__3qpkj Popover-module_bottom-caret-notlogin__19OPO').should('be.visible')

    });

    it.only('Login', () => {
        cy.xpath('//span[contains(.,"Iniciar Sesión / registrarse")]').click()
        cy.get('#login-form-email').type('pruebatour4@gmail.com')
        cy.get('#login-form-password').type('Alejandro1')
        cy.xpath('//button[contains(.,"Ingresar")]').click()
        cy.get('.account-banner__content.ms-full-width').should('contain.text', 'Test Test')
        cy.get('.header-search > .site-search > form > .form-control').click().type('Estuche Facial Petrizzio{enter}')
        cy.get('.lp-product-tile.js-lp-product-tile.with-quickview')
        .each(($elemento, index, $lista) => {
            cy.get('.pdp-link').eq(index).then(function ($elementoLista) {
                let dias = $elementoLista.text()
                //cy.log(dias)
                if (dias.includes('Estuche Facial Petrizzio')) {
                    cy.log('Se ha encontrado el producto')
                    cy.get('.pdp-link').eq(index).contains('Estuche Facial Petrizzio').click({ force: true })
                    cy.xpath('.//h1[@itemprop="name"]').should('contain.text', 'Estuche Facial Petrizzio')
                    cy.get('.add-to-cart').click()
                    
                }
                

            })

        })





    });

})