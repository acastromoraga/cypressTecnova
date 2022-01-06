class Login_Easy_PO {

iniciarSesion(){
    cy.get('.linkCuenta').click()
}

clickRegistrarse(){
    cy.xpath('//a[contains(.,"Regístrate")]').click()
}

loginRut(rut){
    cy.get('#Header_GlobalLogin_WC_AccountDisplay_FormInput_logonId_In_Logon_1').type(rut)
}

loginPass(password){
    cy.get('#Header_GlobalLogin_WC_AccountDisplay_FormInput_logonPassword_In_Logon_1').type(password)
}

clickBottonIniciarSesion(){
    cy.xpath('//span[contains(.,"Iniciar sesión")]').click()
}

}
export default Login_Easy_PO