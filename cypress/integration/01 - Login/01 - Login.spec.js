import logon from '../../support/pages/01 - logon/login'


describe('Login Sucesso', () => {
    

    
    it('Acessar Pagina de Login Admin Vertem',() => {

        

        logon.PrecarregamentoUrl();

        logon.UrlBaseTeste();

        logon.TextoHomeDeslogada();

        logon.PreencherLoginDadosValidos();

        logon.ClicarBotaoEntrar();

        logon.IconePaginaLogada();

    });

    it('Dados Invalidos',() => {

        logon.PrecarregamentoUrl();
    
        logon.UrlBaseTeste();
    
        logon.TextoHomeDeslogada();
    
        logon.PreencherLoginDadosInvalidos();
    
        logon.ClicarBotaoEntrar();
    
        logon.TextoHomeDadosInvalidos();
        
    });
    
    it('Login Falha Senha invalida',() => {

        logon.PrecarregamentoUrl();
    
        logon.TextoHomeDeslogada();
       
        logon.PreencherLoginSenhainvalida();
       
        logon.ClicarBotaoEntrar();
       
        logon.TextoHomeDadosInvalidos();
           
        });

    it('Esqueci Senha Usuario Valido',() => {

        logon.PrecarregamentoUrl();
        
        logon.UrlBaseTeste();
        
        logon.TextoHomeDeslogada();
        
        logon.ClicarBotaoEsqueciSenha();
        
        logon.EsqueciSenhaDadosValidos();
        
        logon.ClicarBotaoSolicitarCodigo();
        
    });

    it('Esqueci Senha Usuario Invalido',() => {

        logon.PrecarregamentoUrl();
            
        logon.UrlBaseTeste();
            
        logon.TextoHomeDeslogada();
            
        logon.ClicarBotaoEsqueciSenha();
            
        logon.PreencherPaginaRecuperarSenhaDadosDinamicos();
            
        logon.ClicarBotaoSolicitarCodigo();
            
    });
            
    it('Esqueci Senha Usuario Invalido Segunda Tentativa',() => {
            
        logon.PrecarregamentoUrl();
            
        logon.UrlBaseTeste();
            
        logon.TextoHomeDeslogada();
            
        logon.ClicarBotaoEsqueciSenha();
            
        logon.PreencherPaginaRecuperarSenhaDadosValidos();
        
        logon.ClicarBotaoSolicitarCodigoCincovezes();
             
        logon.AlertasRecuperarSenhaSegundaTentativa();
             
    });





});