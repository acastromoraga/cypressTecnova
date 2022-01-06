/// <reference types="Cypress"/>

describe('Suite de pruebas de Carro de compras Falabella', function () {

    beforeEach(function () {
        cy.visit('https://www.easy.cl/')
    })

    it('Registro de cliente', function () {

        cy.get('.linkCuenta').click()
        cy.xpath('//a[contains(.,"Regístrate")]').click()
        cy.get('#state').select('13064')
        cy.get('[name="logonId"]').type('50.209.190-5')


        cy.get('#WC_UserRegistrationAddForm_NameEntryForm_FormInput_firstName_1').click({ force: true }).type('Test')
        cy.get('#WC_UserRegistrationAddForm_NameEntryForm_FormInput_lastName_1').type('Test')
        cy.get('#WC_UserRegistrationAddForm_FormInput_email1_In_Register_1').type('pruebatour4@gmail.com')
        cy.get('#WC_UserRegistrationAddForm_FormInput_logonPassword_In_Register_1').type('Alejandro1')
        cy.get('#WC_UserRegistrationAddForm_FormInput_logonPasswordVerify_In_Register_1').type('Alejandro1')

        //Despacho
        cy.get('[name="officeAddress"]').type('Test')
        cy.get('#city').select('13074')
        cy.get('#WC_UserRegistrationAddForm_AddressEntryForm_FormInput_address1_1').type('Calle test')
        cy.get('#WC_UserRegistrationAddForm_AddressEntryForm_FormInput_address2_1').type('111222')
        cy.get('#WC_UserRegistrationAddForm_AddressEntryForm_FormInput_address3_1').type('EE')
        cy.get('#WC_UserRegistrationAddForm_FormInput_phoneNum_In_Register_1').type('953223336')
        cy.get('#WC_UserRegistrationAddForm_FormInput_gender_In_Register_1').click()
        cy.get('#dijit_MenuItem_1_text').click()

        cy.get('#WC_PersonalInfoExtension_birth_date > tbody > tr > .dijitStretch').click()
        cy.get('#dijit_MenuItem_12_text').click()
        cy.get('#WC_PersonalInfoExtension_birth_month > tbody > tr > .dijitStretch').click()
        cy.get('#dijit_MenuItem_43_text').click()
        cy.get('#WC_PersonalInfoExtension_birth_year > tbody > tr > .dijitStretch').click()
        cy.get('#dijit_MenuItem_71_text').click()
        cy.get('#c10').check().should('be.checked')
        cy.get('#WC_UserRegistrationAddForm_links_1').click()
        cy.get('#WC_MyAccountCenterLinkDisplay_div_6 > :nth-child(2)').contains('Test Test')


    });

    it.only('Comprar Producto', () => {
        cy.get('.linkCuenta').click()
        cy.get('#Header_GlobalLogin_WC_AccountDisplay_FormInput_logonId_In_Logon_1').type('50.209.190-5')
        cy.get('#Header_GlobalLogin_WC_AccountDisplay_FormInput_logonPassword_In_Logon_1').type('Alejandro1')
        cy.xpath('//span[contains(.,"Iniciar sesión")]').click()
        cy.get('.header__search-form__inputApp').type('Piscina estructural 1,5 m 500 litros Steel pro Bestway{enter}')
       
        cy.get('.search-display__products').find('.product')
            .each(($elemento, index, $lista) => {
               
                const textProduct = $elemento.find('.product_name').text()
                if(textProduct.includes('Piscina estructural 1,5 m 500 litros Steel pro Bestway')){
                    cy.wrap($elemento).find('a.product_name').click()
                }

            })
            cy.wait(3000)
            cy.get('#productPageAdd2Cart > span').click()
            cy.get('#GotoCartButton2').click()
            cy.get('#ShopCartPagingDisplay > .row > .col12 > .button').click()
            cy.get('#state_92545').select('VII Región   Maule')
            cy.get('#stores_92545').select('Easy Curico')
            cy.get('#TextoContinuar').click()
            cy.get(':nth-child(2) > .encuadre > .inputRadio > label').click()
            cy.get('#cardNumberEasyMercadoPagoInSite').type('1234 1234 1234 1234')
            cy.get('#fechaExpMesEasyMercadoPagoInSite').type('02')
            cy.get('#fechaExpAnoEasyMercadoPagoInSite').type('04')
            cy.get('#nomTituEasyMercadoPagoInSite').type('Test')
            cy.get('#cvvEasyMercadoPagoInSite').type('123')
            cy.get('#rutTituEasyMercadoPagoInSite').type('50.209.190-5')
            cy.get('#mailTitularEasyMercadoPagoInSite').type('pruebatour4@gmail.com')
            
            





    });

})