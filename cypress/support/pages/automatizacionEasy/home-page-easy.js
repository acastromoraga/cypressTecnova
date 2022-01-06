class Home_Page_easy_PO{

    buscarProducto(busProducto){
        cy.get('.header__search-form__inputApp').type(busProducto + '{enter}')
    }       
        
}
export default Home_Page_easy_PO;