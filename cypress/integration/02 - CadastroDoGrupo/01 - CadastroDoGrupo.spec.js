import logon from '../../support/pages/01 - logon/login'
import CadastroDoGrupo from '../../support/pages/02 - CadastroDoGrupo/CadastroDoGrupo'


describe('Cadastro Do Grupo', () => {

       

    it('Cadastro De Um Novo Grupo', () => {

        CadastroDoGrupo.PrecarregamentoUrl();
    
        logon.UrlBaseTeste();

        logon.PreencherLoginDadosValidos();

        logon.ClicarBotaoEntrar();

        logon.Espera();

        CadastroDoGrupo.UrlGrupo();

        CadastroDoGrupo.ClicarBotaoNovoGrupo();

        CadastroDoGrupo.PreencherFormularioNovoGrupoDeUsuario();

        CadastroDoGrupo.ClicarBotaoSalvar();

        logon.Espera();

        CadastroDoGrupo.ValidaMensagemRetornoCadastroGrupoSucesso();

        CadastroDoGrupo.ClicarBotaoExcluir();

        CadastroDoGrupo.ClicarBotaoConfirmar(); 

        CadastroDoGrupo.ValidarExclusaoGrupo();

    });

    it('Cadastro De Grupo Com Dados Invalidos',() => {

       CadastroDoGrupo.PrecarregamentoUrl();

       logon.UrlBaseTeste();

       logon.PreencherLoginDadosValidos();

       logon.ClicarBotaoEntrar();

       logon.Espera();

       CadastroDoGrupo.UrlGrupo();

       CadastroDoGrupo.ClicarBotaoNovoGrupo();

       CadastroDoGrupo.ValidaObrigatoriedadeDosCamposDoFormulario();

       CadastroDoGrupo.ClicarBotaoSalvar();

       logon.Espera();

       CadastroDoGrupo.ValidaMensagemRetornoDosCamposNovoGrupoUsuarioDadosInvalidos();

    })
});