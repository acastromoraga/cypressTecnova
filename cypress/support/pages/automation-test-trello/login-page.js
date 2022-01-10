class Login_Trello_PO {

    iniciarsesion(){
        cy.get('a[href*="/login"]').click()
    }

    ingresarUsuario(userName){
        cy.get('input[placeholder="Introduzca el correo electrónico"]').type(userName)
    }

    ingresarContrasena(password){
        cy.get('input[placeholder="Introduzca la contraseña"]').type(password)
    }

    clickBtnLogin(){
        cy.get('#login').click()
    }

    ingresarContrasenaAtlassian(passwordAtlassian){
        cy.get('input[placeholder="Introducir contraseña"]').type(passwordAtlassian)
    }
    clickBtnAtlassianLogin(){
        cy.get('#login-submit > .css-19r5em7 > span').click()
    }

    verificarTexto(texto){
        cy.get('#login-error').should('contain.text',texto)
    }

}
export default Login_Trello_PO