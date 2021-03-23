


const faker = require('faker');
let firstName = faker.name.firstName();


class Logon {
    
    AlertasRecuperarSenhaPrimeiraTentativa(){
        cy.contains('Usuário não foi encontrado.', {timeout: 60000})
        .invoke('show')
        .should('be.visible');
    }

    AlertasRecuperarSenhaSegundaTentativa(){
        cy.contains('Limite de tentativas excedido. Tente novamente mais tarde!', {timeout: 60000})
        .invoke('show')
        .should('be.visible');
    }

    UrlBaseTeste(){

        cy.visit('https://adminvertem-prd.azurewebsites.net');
    }

    PrecarregamentoUrl(){

        cy.request('https://adminvertem-prd.azurewebsites.net/').should(
           (response) => {
           expect(response.status).to.eq(200)},)
    }

    ClicarBotaoEntrar(){
        cy.xpath('//*[@id="cognito"]/div/div[1]/div/div[2]/div/form/div[4]/div/button', {timeout: 60000})
        .invoke('show')
        .dblclick({froce:true});
    }

    ClicarBotaoEsqueciSenha(){
        cy.xpath('//*[@id="cognito"]/div/div[1]/div/div[2]/div/form/div[2]/div/a', {timeout: 60000})
        .invoke('show')
        .dblclick({force:true});
    }

    ClicarBotaoSolicitarCodigo(){
        cy.get(':nth-child(7) > .col-md-12 > :nth-child(1)')
        .invoke('show')
        .dblclick({force:true});
    }

    ClicarBotaoSolicitarCodigoCincovezes(){
        cy.get(':nth-child(7) > .col-md-12 > :nth-child(1)')
        .dblclick({force:true});

        cy.get(':nth-child(7) > .col-md-12 > :nth-child(1)')
        .dblclick({force:true});

        cy.get(':nth-child(7) > .col-md-12 > :nth-child(1)')
        .dblclick({force:true});

        cy.get(':nth-child(7) > .col-md-12 > :nth-child(1)')
        .dblclick({force:true});

        cy.get(':nth-child(7) > .col-md-12 > :nth-child(1)')
        .dblclick({force:true});

        cy.get(':nth-child(7) > .col-md-12 > :nth-child(1)')
        .dblclick({force:true});

        cy.get(':nth-child(7) > .col-md-12 > :nth-child(1)')
        .dblclick({force:true});
    }

    EsqueciSenhaDadosValidos(){
        cy.xpath('//*[@id="cognito"]/div/div[1]/div/div[2]/div/form/div[1]/input')
        .invoke('show')
        .type('filipe.gabriel')
    }

    IconePaginaLogada(){
        cy.get('.logo-icon > .light-logo', {timeout: 60000})
        .should('be.visible', {timeout: 60000});
    }

    PreencherLoginDadosValidos(){
        cy.xpath('//*[@id="cognito"]/div/div[1]/div/div[2]/div/form/div[1]/input', {timeout: 60000})
        .invoke('show')
        .type('filipe.gabriel')

        cy.xpath('//*[@id="cognito"]/div/div[1]/div/div[2]/div/form/div[2]/input', {timeout: 60000})
        .invoke('show')
        .type('GM26PT1xjc')
    }

    PreencherLoginDadosInvalidos(){
        cy.xpath('//*[@id="cognito"]/div/div[1]/div/div[2]/div/form/div[1]/input', {timeout: 60000})
        .invoke('show')
        .type('Teste');

        cy.xpath('//*[@id="cognito"]/div/div[1]/div/div[2]/div/form/div[2]/input', {timeout: 60000})
        .invoke('show')
        .type('Teste');
    }

    PreencherLoginSenhainvalida(){
        cy.xpath('//*[@id="cognito"]/div/div[1]/div/div[2]/div/form/div[1]/input', {timeout: 60000})
        .invoke('show')
        .type('filipe.gabriel');

        cy.xpath('//*[@id="cognito"]/div/div[1]/div/div[2]/div/form/div[2]/input')
        .invoke('show')
        .type('123456');
    }

    PreencherPaginaRecuperarSenhaDadosValidos(){
        cy.get(':nth-child(2) > .form-control', {timeout: 60000})
        .invoke('show')
        .type('filipe.gabriel');
    }

    PreencherPaginaRecuperarSenhaDadosDinamicos(){
        cy.get(':nth-child(2)>.form-control', {timeout: 60000})
        .invoke('show')
        .type(firstName);
    }

    TextoHomeDeslogada(){
        cy.xpath('//*[@id="cognito"]/div/div[1]/div/div[2]/div/form/h3', {timeout: 60000})
        .invoke('show')
        .should('be.visible', {timeout: 60000})
    }

    TextoHomeDadosInvalidos(){
        cy.contains('Usuário não foi encontrado.', {timeout: 60000})
        .should('be.visible', {timeout: 60000});
    }
    Espera(){
        cy.wait(6000);
    }
}

export default new Logon();