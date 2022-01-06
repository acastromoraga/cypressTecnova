class Datos_Personales_PO {

    seleccionRegion(valor) {
        cy.get('#state').select(valor)
    }

    ingresarRut(rut) {
        cy.get('[name="logonId"]').type(rut)
    }

    ingresarNombre(nombre) {
        cy.get('#WC_UserRegistrationAddForm_NameEntryForm_FormInput_firstName_1').click({ force: true }).type(nombre)
    }

    ingresarApellido(apellido) {
        cy.get('#WC_UserRegistrationAddForm_NameEntryForm_FormInput_lastName_1').type(apellido)
    }

    ingresarEmail(email) {
        cy.get('#WC_UserRegistrationAddForm_FormInput_email1_In_Register_1').type(email)
    }

    ingresarPassword(password1) {
        cy.get('#WC_UserRegistrationAddForm_FormInput_logonPassword_In_Register_1').type(password1)
    }
    confirmarPassword(password2) {
        cy.get('#WC_UserRegistrationAddForm_FormInput_logonPasswordVerify_In_Register_1').type(password2)
    }

    ingresarTitularDespacho(titular) {
        cy.get('[name="officeAddress"]').type(titular)
    }

    seleccionComuna(valorComuna) {
        cy.get('#city').select(valorComuna)
    }

    ingresarCalle(direccionCalle) {
        cy.get('#WC_UserRegistrationAddForm_AddressEntryForm_FormInput_address1_1').type(direccionCalle)
    }

    ingresarNumeroCalle(numCalle) {
        cy.get('#WC_UserRegistrationAddForm_AddressEntryForm_FormInput_address2_1').type(numCalle)
    }

    ingresarDepto(numDepto) {
        cy.get('#WC_UserRegistrationAddForm_AddressEntryForm_FormInput_address3_1').type(numDepto)
    }

    ingresarNumTelefono(numTelefono) {
        cy.get('#WC_UserRegistrationAddForm_FormInput_phoneNum_In_Register_1').type(numTelefono)
    }

    ingresarSexo() {
        cy.get('#WC_UserRegistrationAddForm_FormInput_gender_In_Register_1').click()
    }
    clickSeleccionSexo() {
        cy.get('#dijit_MenuItem_1_text').click()
    }

    ingresarDia() {
        cy.get('#WC_PersonalInfoExtension_birth_date > tbody > tr > .dijitStretch').click()
    }

    clickdia() {
        cy.get('#dijit_MenuItem_12_text').click()
    }

    ingresarMes() {
        cy.get('#WC_PersonalInfoExtension_birth_month > tbody > tr > .dijitStretch').click()
    }

    clickMes() {
        cy.get('#dijit_MenuItem_43_text').click()
    }

    ingresarAnnio() {
        cy.get('#WC_PersonalInfoExtension_birth_year > tbody > tr > .dijitStretch').click()
    }

    clickAnnio() {
        cy.get('#dijit_MenuItem_71_text').click()
    }

    aceptarCondiciones() {
        cy.get('#c10').check().should('be.checked')
    }

    clickEnviarDatos() {
        cy.get('#WC_UserRegistrationAddForm_links_1').click()
    }

    validarUsuarioCreado(usuario) {
        cy.get('#WC_MyAccountCenterLinkDisplay_div_6 > :nth-child(2)').contains(usuario)
    }


}
export default Datos_Personales_PO