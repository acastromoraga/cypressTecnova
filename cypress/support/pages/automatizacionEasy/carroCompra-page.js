class Carro_Compra_page_PO {
    clickAgregarCarro(){
        cy.get('#productPageAdd2Cart > span').click()
    }

    clickIrAlCarro(){
        cy.get('#GotoCartButton2').click()
    }
        
    clickComprar(){
        cy.get('#ShopCartPagingDisplay > .row > .col12 > .button').click()
    }    
        
    seleccionarRegion(region){
        cy.get('#state_92545').select(region)
    } 
    
    seleccionarTienda(){
        cy.get('#stores_92545').select('Easy Curico')
    }
        
    clickContinuar(){
        cy.get('#TextoContinuar').click()
    }
    
    seleccionarMetPago(){
        cy.get(':nth-child(2) > .encuadre > .inputRadio > label').click()
    }

    ingresarNumTarjeta(){
        cy.get('#cardNumberEasyMercadoPagoInSite').type('1234 1234 1234 1234')
    }
    
    ingresarDiaFechaTarj(){
        cy.get('#fechaExpMesEasyMercadoPagoInSite').type('02')
    }
    
    ingresarMesFechaTarj(){
        cy.get('#fechaExpAnoEasyMercadoPagoInSite').type('04')
    }
    
    ingresarTitular(){
        cy.get('#nomTituEasyMercadoPagoInSite').type('Test')
    }
    
    ingresarCVV(){
        cy.get('#cvvEasyMercadoPagoInSite').type('123')
    }
    
    ingresarRutTitular(){
        cy.get('#rutTituEasyMercadoPagoInSite').type('50.209.190-5')
    }
    
    ingresarEmailTitular(){
        cy.get('#mailTitularEasyMercadoPagoInSite').type('pruebatour4@gmail.com')
    }
}

export default Carro_Compra_page_PO