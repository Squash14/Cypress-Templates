

const faker = require('faker');
let firstName = faker.name.firstName();

class Perfil{


    PrecarregamentoUrlPerfil(){
        cy.request('https://adminvertem-prd.azurewebsites.net/').should(
            (response) => {
            expect(response.status).to.eq(200)},)

        cy.request('https://adminvertem-prd.azurewebsites.net/admin-vertem/profile-manager').should(
            (response) => {
            expect(response.status).to.eq(200)},)
    }

    UrlPerfil(){
        cy.visit('https://adminvertem-prd.azurewebsites.net/admin-vertem/profile-manager/admin-vertem/profile-manager',{timeout:60000});
    }

    ClicarNovoPerfil(){
        cy.xpath('//*[@id="5fc1019b4a0d0531be63a986"]/div[1]/div[1]/div/button',{timeout:60000})
        .click();
    }

    PreencherNovoPerfilDadosValidos(){
        cy.get('.modal-body > :nth-child(1) > .css-1pcexqc-container > .css-bg1rzq-control > .css-1hwfws3')
        .click();

        cy.xpath('/html/body/div[6]/div/div[1]/div/div/form/div[1]/div[1]/div/div/div[1]/div[4]')
        .contains('Group TesteLtm').click();

        cy.get('.form-control').type(firstName);

        cy.get('.modal-footer > .btn-primary').click();

    }

    MensagemDeSucesso(){
        cy.xpath('//*[@id="5fc1019b4a0d0531be63a986"]/div[3]/div/div/div[1]',{timeout:60000})
        .contains('Registro criado com sucesso',{timeout:60000});
        
    }

    PreencherNovoPerfilDadosInvalidos(){
        cy.get('.modal-body > :nth-child(1) > .css-1pcexqc-container > .css-bg1rzq-control > .css-1hwfws3')
        .click();

        cy.xpath('/html/body/div[6]/div/div[1]/div/div/form/div[1]/div[1]/div/div/div[1]/div[4]')
        .contains('Group TesteLtm').click();

        cy.get('.form-control').type('12398ASDJGHIUQOW129');

        cy.get('.modal-footer > .btn-primary').click();
    }

    MensagemDeFalha(){
        cy.xpath('//*[@id="5fc1019b4a0d0531be63a986"]/div[2]/div/div/div[1]',{timeout:60000})
        .contains('Nome não parece ser um campo válido.',{timeout:60000});
    }

}

export default new Perfil();