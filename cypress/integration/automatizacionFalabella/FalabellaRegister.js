/// <reference types="Cypress"/>

describe('Suite de pruebas de Carro de compras Falabella', function(){

    beforeEach(function(){
        cy.visit('https://www.falabella.com/falabella-cl/')
    })
    
    it('Compra de Producto', function() {
        cy.get('.dy-lb-close').click()
        cy.get('#testId-Inicia-sesión').click()
        cy.get('a[href="https://www.falabella.com/falabella-cl/myaccount/registration"]').click()
        cy.get('.jsx-3564791919.title10').contains('Regístrate').should('be.visible')
        cy.get('#testId-Input-firstName').type('Test')
        cy.get('#testId-Input-lastName').type('Test')
        cy.get('#testId-Input-document').type('1111111-1')
        cy.get('#testId-Input-phoneNumber').type('53698854')
        cy.get('#testId-Input-email').type('ale@gmail.com')
        cy.get('#testId-Input-password').type('Alejandro1')
        //cy.get('#testId-consent-consentTemplateRegistroTyC_FAL_CL-input').click()
        cy.get('input#testId-consent-consentTemplateRegistroTyC_FAL_CL-input').check({ force: true }) 
        
        
        

        //cy.get('.Popover-module_popover-container__3qpkj Popover-module_bottom-caret-notlogin__19OPO').trigger('mouseover')
        //cy.get('.Popover-module_popover-container__3qpkj Popover-module_bottom-caret-notlogin__19OPO').should('be.visible')
        
    });

})