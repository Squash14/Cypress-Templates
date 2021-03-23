import logon from '../../support/pages/01 - logon/login.js'
import Usuario from '../../support/pages/05 - CadastroDeUsuario/CadastroDeUsuario.js'

describe('Cadastro De Usuario',() => {

    it('Cadastro De Usuario Sucesso',()=>{

        Usuario.PrecarregamentoUrlUsuario();

        logon.UrlBaseTeste();

        logon.PreencherLoginDadosValidos();

        logon.ClicarBotaoEntrar();

        logon.Espera();

        Usuario.UrlCriacaoDeUsuario();

        Usuario.PreencherFromularioCriarUsuarioDadosValidos();
        
        Usuario.PreencherFromularioGrupoDoUsuarioValidos();

        Usuario.ClicarBotaoSalvar();

        Usuario.MensagemDeSucesso();

    })
})