const faker = require('faker');
let firstName = faker.name.firstName();
let companyName = faker.company.companyName();
let companySuffix = faker.company.companySuffix();


class CadastroDeGrupo {

    ClicarBotaoNovoGrupo(){
        cy.get('.pull-right > .btn',  {timeout: 30000})
        .click({force:true});
    }

    TextoGrupo(){

        cy.get('.clearfix')
        .contains('Gerenciamento de Grupo')
        .should('be.visible');

    }

    PrecarregamentoUrl(){

        cy.request('https://adminvertem-prd.azurewebsites.net/').should(
           (response) => {
           expect(response.status).to.eq(200)},)
        cy.request('https://adminvertem-prd.azurewebsites.net/admin-vertem/groups-manager').should(
           (response) => {
           expect(response.status).to.eq(200)},)
    }

    UrlGrupo(){

        cy.visit('https://adminvertem-prd.azurewebsites.net/admin-vertem/groups-manager', {timeout: 60000});
    }

    PreencherFormularioNovoGrupoDeUsuario(){ 

        
        
        cy.get('.modal-body > :nth-child(1) > .form-control')
        .focus()
        .type(`${companySuffix} TesteLtm`);

        cy.get(':nth-child(2) > .form-control')
        .focus()
        .type(`${firstName}-${firstName}`);

        cy.get('.modal-body > :nth-child(3) > .form-control')
        .focus()
        .type(`${firstName}-${firstName}`);

        cy.get(':nth-child(4) > .react-tagsinput')
        .type(companyName);
        
    }

    ClicarBotaoSalvar(){

        cy.get('.modal-footer > .btn-primary', )
        .dblclick();
    }

    ClicarBotaoExcluir(){

        cy.get('.ml-2').click();

    }

    ClicarBotaoConfirmar(){

        cy.get('.modal-footer > .btn-danger')
        .click();
    }

    ValidaObrigatoriedadeDosCamposDoFormulario(){
        
        cy.get('.modal-body > :nth-child(1) > .form-control')
        .focus()
        .type('123   ');

        cy.get(':nth-child(2) > .form-control')
        .focus()
        .type('123   ');

        cy.get('.modal-body > :nth-child(3) > .form-control')
        .focus()
        .type('123   ');

        cy.get(':nth-child(4) > .react-tagsinput')
        .type('123   ');
    }

    ValidaMensagemRetornoDosCamposNovoGrupoUsuarioDadosInvalidos(){
        
        cy.get(':nth-child(1) > .Toastify__toast-body', { timeout: 60000 })
        .contains('Id Customizado não parece ser um campo válido.')
        .should('be.visible');

        cy.get(':nth-child(2) > .Toastify__toast-body', )
        .contains('Nome não parece ser um campo válido.')
        .should('be.visible');

        cy.get(':nth-child(3) > .Toastify__toast-body')
        .contains('Prefixo não parece ser um campo válido.')
        .should('be.visible');
    }
    
    ValidaMensagemRetornoCadastroGrupoSucesso(){

        cy.xpath('//*[@id="5f96f2040600a89b977f4047"]/div[3]/div/div/div[1]',  { timeout: 60000 })
        .contains('Registro criado com sucesso')
        .should('be.visible'); 
    }

    ValidarExclusaoGrupo(){
        cy.contains('Grupo excluído com sucesso')
        .should('be.visible');
    }
}

export default new CadastroDeGrupo();