/// <reference types="Cypress"/>



describe('Suite de pruebas de la página de compras para Tecnova', function () {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    })
    it.only('registro en la pagina de automation test Store', function () {
        cy.get('a[href*="account/login"]').contains('Login or register').click()
        cy.get('.heading2').should('contain.text', 'I am a new customer.')
        cy.get('button[title=Continue]').click()
        cy.get('.maintext').contains(' Create Account')
        cy.get('#AccountFrm_firstname').type('Alejandro Eduardo')
        cy.get('[name="lastname"]').type('Castro Moraga')
        cy.get('#AccountFrm_email').type('alecastro@gmail.com')
        cy.get('#AccountFrm_telephone').type('1234567890')
        cy.get('[name=fax]').type('8320000')
        cy.get('#AccountFrm_company').type('Empresa')
        cy.get('#AccountFrm_address_1').type('Las delicias 505')
        cy.get('#AccountFrm_address_2').type('las delicias 509')
        cy.get('#AccountFrm_city').type('Santiago')
        cy.get('#AccountFrm_zone_id').select('Angus').should('have.value', '3516')
        cy.get('#AccountFrm_postcode').type('8320000')
        cy.get('#AccountFrm_country_id').select('Tonga')
        cy.get('#AccountFrm_loginname').type('alecastro')
        cy.get('#AccountFrm_password').type('test')
        cy.get('#AccountFrm_confirm').type('test')
        cy.get('[type="radio"]').check("0")
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.get('[title="Continue"]').click()
        
        


    });

    it('Obtener todos los titulos de los productos mediante arreglo', function () {
        cy.get('.col-md-3.col-sm-6.col-xs-12').as('textosProductos')
        cy.get('.price').find('div').not('priceold').as('precioproducto')

        cy.get('@textosProductos')
            .each(($elementos, index, $lista) => {
                var titulosProd = $elementos.text()
                cy.log('Productos: ' + titulosProd)
                cy.get('@precioproducto').eq(index).then(($valor) => {
                    var precio = $valor.text()
                    cy.log('precio: ' + precio)
                })


            })
    });

    it('Obtener todos los titulos de los productos mediante arreglo', function () {
        cy.get('.col-md-3.col-sm-6.col-xs-12').as('textosProductos')
        cy.get('.price').as('precioproducto')

        cy.get('@textosProductos').find('.prdocutname')

            .each(($elementos, index, $lista) => {
                var titulosProd = $elementos.text()
                cy.log('Productos: ' + titulosProd)
                if (titulosProd.includes('Acqua Di Gio Pour Homme')) {
                    cy.wrap($elementos).click()
                }
            })
    });
})