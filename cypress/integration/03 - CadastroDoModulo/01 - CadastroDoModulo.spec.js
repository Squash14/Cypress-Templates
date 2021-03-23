import logon from '../../support/pages/01 - logon/login.js'
import Modulo from '../../support/pages/03 - CadastroDoModulo/CadastroDoModulo.js'
 

describe('Cadastro De Modulo', () => {

      

    it('Criar Novo Modulo Dados Validos ', () => {

        Modulo.PrecarregamentoUrlModulo();
        
        logon.UrlBaseTeste();
        
        logon.PreencherLoginDadosValidos();

        logon.ClicarBotaoEntrar();
        
        logon.Espera();

        Modulo.UrlModulo();

        logon.Espera();

        Modulo.ClicarBotaoNovoModulo();

        Modulo.SelecionarGrupo();

        Modulo.SelecionarPosicao();

        Modulo.SelecionarStatus();

        Modulo.PreencherModulo();

        Modulo.BotaoSalvar();

        Modulo.MensagemDeSucesso();

    })


    it('Criar Novo Modulo Dados Invalidos',() => {

        Modulo.PrecarregamentoUrlModulo();

        logon.UrlBaseTeste();
        
        logon.PreencherLoginDadosValidos();

        logon.ClicarBotaoEntrar();

        logon.Espera();

        Modulo.UrlModulo();

        Modulo.ClicarBotaoNovoModulo();

        Modulo.SelecionarGrupo();

        Modulo.SelecionarPosicao();

        Modulo.SelecionarStatus();

        Modulo.PreencherModuloDadosInvalidos();

        Modulo.BotaoSalvar();

        Modulo.MensagemDeFalha();

    })
})