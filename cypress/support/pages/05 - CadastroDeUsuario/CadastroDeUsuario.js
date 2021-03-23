
const faker = require('faker');
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let email = faker.internet.email();
let lrandomnumber  = faker.random.number();

class Usuario{

    PrecarregamentoUrlUsuario(){
        cy.request('https://adminvertem-prd.azurewebsites.net/').should(
            (response) => {
            expect(response.status).to.eq(200)},)

        cy.request('https://adminvertem-prd.azurewebsites.net/admin-vertem/user-manager/create').should(
            (response) => {
            expect(response.status).to.eq(200)},)
    }


    UrlCriacaoDeUsuario(){
        cy.visit('https://adminvertem-prd.azurewebsites.net/admin-vertem/user-manager/create',{timeout:60000})
    }

   

    PreencherFromularioCriarUsuarioDadosValidos(){
        cy.xpath('//*[@id="5f96fb6e972cfc6ae6cde8a8"]/div[1]/form/div[2]/div/div[1]/div/input',{timeout:60000})
        .focus()
        .type(`${firstName}.${lastName}`)

        cy.xpath('//*[@id="5f96fb6e972cfc6ae6cde8a8"]/div[1]/form/div[2]/div/div[2]/div/input')
        .focus()
        .type(`${firstName} ${lastName} ${lastName} ${firstName}`)

        cy.xpath('//*[@id="5f96fb6e972cfc6ae6cde8a8"]/div[1]/form/div[2]/div/div[3]/div/input')
        .focus()
        .type(`${lrandomnumber}${email}`)
    }


    PreencherFromularioGrupoDoUsuarioValidos(){
        cy.xpath('//*[@id="5f96fb6e972cfc6ae6cde8a8"]/div[1]/form/div[3]/div',{timeout:60000})
        .click()

        cy.xpath('//*[@id="5f96fb6e972cfc6ae6cde8a8"]/div[1]/form/div[3]/div',{timeout:60000})
        .contains('LLC TesteLtm')
        .click()

        cy.xpath('//*[@id="5f96fb6e972cfc6ae6cde8a8"]/div[1]/form/div[4]/div[2]/div[2]/div/div/div/div[1]')
        .click();

        cy.xpath('//*[@id="5f96fb6e972cfc6ae6cde8a8"]/div[1]/form/div[4]/div[2]/div[2]/div/div/div/div[1]')
        .contains('LLC TesteLtm')
        .click()

    }

    ClicarBotaoSalvar(){
        cy.xpath('//*[@id="5f96fb6e972cfc6ae6cde8a8"]/div[1]/form/div[5]/div/div/div/button')
        .click()
    }

    MensagemDeSucesso(){
        cy.contains('Registro criado com sucesso',{timeout:60000})
        .should('be.visible', {timeout: 60000})
    }
}

export default new Usuario ();