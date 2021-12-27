/// <reference types="Cypress" />



describe('Suite de pruebas de tablero Trello', function(){
    /*
    beforeEach(()=>{
       
    })
    */
    it.only('test incial', function() {
        cy.visit('http://trello.com/es')
        cy.get('a[href*="/login"]').click()
        cy.get('input[placeholder="Introduzca el correo electrónico"]').type('testTrelloTecnova@gmail.com')
        cy.get('input[placeholder="Introduzca la contraseña"]').type('trello123')
        cy.get('#login').click()
        cy.get('input[placeholder="Introducir contraseña"]').type('trello123')
        cy.get('#login-submit > .css-19r5em7 > span').click()
        cy.get('[data-test-id="create-board-tile"]').click()
        cy.get('[data-test-id="create-board-title-input"]').type('Tablero Tecnova')
        cy.get('[data-test-id="create-board-submit-button"]').click()
        cy.get('[class="placeholder"]').click()
        cy.get('.list-name-input').type('Por Hacer')
        cy.get('[value="Añadir lista"]').click()
        cy.get('.js-list.list-wrapper')
        .each(($elemento,index,$lista)=>{
            //el objeto que contiene el texto
                cy.get('.js-list.list-wrapper').eq(index).then(function($elementoLista){
                //:has(.caption) h4 a
                    let products = $elementoLista.text()
                    cy.log(products)
                    if (products.includes('Por Hacer')) {
                        cy.log('Se ha encontrado el elemento')
                        cy.get('.js-list.list-wrapper').eq(index).find('[class="js-add-a-card"]').click()
                        cy.get('[placeholder="Introduzca un título para esta tarjeta..."]').click().type('Tarjeta Tecnova')
                        cy.get(':nth-child(1) > .nch-button').click()
                        cy.get('.list-card-details.js-card-details').click()
                        cy.get('[placeholder="Añadir una descripción más detallada..."]').type('Esto es una descripción')
                        cy.get('div > .edit-controls.u-clearfix > input').click()
                        cy.get('[title="Etiquetas"]').click()
                        cy.get('[data-color="blue"]').click()
                        cy.get('.pop-over-header-close-btn.icon-sm.icon-close').click()
                        cy.get('._2fqFixbnBCjl76').click()
                        cy.pause()
                        cy.get('.sc-jKJlTe')
                        .each(($elemento,index,$lista)=>{
                            cy.get('.sc-jKJlTe').eq(index).then(function($elementoLista){
                                let dias = $elementoLista.text()
                                cy.log(dias)
                                if (dias.includes('27')) {
                                    cy.get('.sc-jKJlTe').eq(index).click()
                                    cy.get('[data-test-id="save-date-button"]').click()
                                    cy.wrap()
                                }
                            })
                        })
                        //cy.get('[data-test-id="save-date-button"]').click()


                        //.contains('Add to Cart')
                       //.click({force: true})
                       //cy.get('.alert.alert-success.alert-dismissible').should('contain.text','Success: You have added')
                        //.should('contain.text',nombreProducto)
                    }
            })
        })

        cy.get('title="Adjunto"').click()
        
        cy.get('.js-attach-file').attachFile('../files/fileTest.pdf')


        //cy.get('input[name="password"]').type('trello123')
        ///cy.pause()
        //cy.get('#password').type('trello123')
        

    });
    it('Crear nuevo tablero', function() {

        

        //cy.url().then(url => {
        //    const getUrl = url
        //    cy.log("es: " + getUrl)
        //})
        // cy.url(log)
        //cy.visit('https://id.atlassian.com/login?')
        /*
        cy.get('#username').type('testTrelloTecnova@gmail.com')
        cy.get('#login-submit > .css-19r5em7 > span').click()
        cy.get('#password').type('trello123')
        cy.get('#login-submit > .css-19r5em7 > span').click()
        cy.get('#username').type('testTrelloTecnova@gmail.com')
        cy.get('#login-submit > .css-19r5em7 > span').click()
        cy.get('#password').type('trello123')
        cy.get('#login-submit > .css-19r5em7 > span').click()
        */
        //cy.get('[data-testid="start-product__TRELLO_TRELLO"]').click()
    });

    it('Crear una nueva lista', () => {

    });
})