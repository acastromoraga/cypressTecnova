class Lista_Trello_PO {

    clickCrearLista(){
        cy.get('[class="placeholder"]').click()
    }

    ingresarNombreLista(nombreLista){
        cy.get('.list-name-input').type(nombreLista)
    }

    clickAnadirLista(){
        cy.get('[value="Añadir lista"]').click()
    }

}
export default Lista_Trello_PO