const faker = require('faker');
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let lrandomnumber  = faker.random.number();



class CadastroDoModulo {

    PrecarregamentoUrlModulo(){
        cy.request('https://adminvertem-prd.azurewebsites.net/').should(
            (response) => {
            expect(response.status).to.eq(200)},)

        cy.request('https://adminvertem-prd.azurewebsites.net/admin-vertem/module-manager').should(
            (response) => {
            expect(response.status).to.eq(200)},)

        cy.request('https://adminvertem-prd.azurewebsites.net/admin-vertem/module-manager/create').should(
            (response) => {
            expect(response.status).to.eq(200)},)
    }

    

    UrlModulo(){
        cy.visit('https://adminvertem-prd.azurewebsites.net/admin-vertem/module-manager', {timeout: 60000});
    }

    ClicarBotaoNovoModulo(){
        cy.get('.pull-right > .btn', {timeout: 60000})
        .click({force:true});
    }

    SelecionarGrupo(){
        
      cy.xpath('//*[@id="5f96f27e0600a89b977f4048"]/div[1]/form/div[1]/div[1]/div[1]/div/div', {timeout: 60000})
      .click();


      cy.xpath('//*[@id="5f96f27e0600a89b977f4048"]/div[1]/form/div[1]/div[1]/div[1]/div/div/div/div[1]', {timeout: 60000})
      .contains('Inc TesteLtm', {timeout: 60000})
      .click();

    }

    SelecionarPosicao(){

        cy.xpath('//*[@id="5f96f27e0600a89b977f4048"]/div[1]/form/div[1]/div[1]/div[2]/div/div/div', {timeout: 60000})
        .click();

        cy.xpath('//*[@id="5f96f27e0600a89b977f4048"]/div[1]/form/div[1]/div[1]/div[2]/div/div/div', {timeout: 30000})
        .contains('Container', {timeout: 60000})
        .click();
    }

    SelecionarStatus(){
        cy.xpath('//*[@id="5f96f27e0600a89b977f4048"]/div[1]/form/div[1]/div[1]/div[3]/div/div/div', {timeout: 60000})
        .click();

        cy.xpath('//*[@id="5f96f27e0600a89b977f4048"]/div[1]/form/div[1]/div[1]/div[3]/div/div/div', {timeout: 60000})
        .contains('Ativo', {timeout: 60000})
        .click();

    }

    PreencherModulo(){
        
        
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .form-control', {timeout: 60000})
        .type(`${firstName} ${firstName} TesteLtm`);

        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .form-control')
        .type(`${lastName}-${firstName}-${lastName}-${lrandomnumber}-TesteLtm`);

        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control')
        .type(`${"https://"}${lastName}-${firstName}-${lastName}-${lrandomnumber}-TesteLtm`);

        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control')
        .type(`${"https://"}${lastName}-${firstName}-${lastName}-${lrandomnumber}-TesteLtm`);
        
        cy.get('.react-tagsinput-input')
        .type('add {enter} update {enter} remove {enter}')

    }

    PreencherModuloDadosInvalidos(){

        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .form-control', {timeout: 60000})
        .type('Teste');

        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .form-control', {timeout: 60000})
        .type('Teste')

        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control')
        .type('Teste')

        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control')
        .type('Teste')
        
        cy.get('.react-tagsinput-input')
        .type('Teste {enter} Teste {enter} Teste {enter}')
    }

    BotaoSalvar(){
        cy.get('[type="submit"]')
        .click({force:true});
        
    }

    MensagemDeSucesso(){
        cy.contains('Módulo foi salvo com sucesso!', {timeout: 60000})
        .should('be.visible', {timeout: 60000});
    }

    MensagemDeFalha(){
        cy.contains('URL SingleSPA não parece ser um campo válido.', {timeout: 60000})
        .should('be.visible', {timeout: 60000});
        
    }
}

export default new CadastroDoModulo ();