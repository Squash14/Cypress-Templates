
import logon from '../../support/pages/01 - logon/login'
import Perfil from '../../support/pages/04 - CadastroDePerfil/CadastroDePerfil'

describe('Cadastro De Perfil',() => {

    it('Cadastro De Perfil Sucesso',()=>{

        Perfil.PrecarregamentoUrlPerfil();

        logon.UrlBaseTeste();

        logon.PreencherLoginDadosValidos();

        logon.ClicarBotaoEntrar();

        logon.Espera();

        Perfil.UrlPerfil();

        Perfil.ClicarNovoPerfil();

        Perfil.PreencherNovoPerfilDadosValidos();

        Perfil.MensagemDeSucesso();

       
    })

    it('Cadastro De Perfil Dados Invalidos',()=>{

        Perfil.PrecarregamentoUrlPerfil();

        logon.UrlBaseTeste();

        logon.PreencherLoginDadosValidos();

        logon.ClicarBotaoEntrar();

        logon.Espera();

        Perfil.UrlPerfil();

        Perfil.ClicarNovoPerfil();

        Perfil.PreencherNovoPerfilDadosInvalidos();

        Perfil.MensagemDeFalha();
    })
    
})