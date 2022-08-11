package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.CadastroUsuarioPage;
import pages.LoginPage;
import runner.RunTests;

public class CadastroUsuarioSteps extends RunTests {


        LoginPage loginPage = new LoginPage();
        CadastroUsuarioPage cadastroUsuarioPage = new CadastroUsuarioPage();
    @Dado("^Que estou no cadastro de usuarios$")
    public void AcessaCadastroUsuarios() {

        loginPage.acessarAplicacao();
        loginPage.acessarTelaLogin();
       loginPage.acessarCadastroUsuario();
    }

    @Dado("^preencho todos os campos obrigatórios$")
    public void preencho_todos_os_campos_obrigatórios()  {
        cadastroUsuarioPage.preencherNome("Eduardo Finotti");
        cadastroUsuarioPage.preencherEmail("finotti@gmail.com.br");
        cadastroUsuarioPage.preencherSenha("123456");
    }

    @Quando("^clico em cadastrar usuario$")
    public void clico_em_cadastrar_usuario()  {
        cadastroUsuarioPage.clickSalvarCadastro();
    }

    @Então("^vejo mensagem de cadastro com sucesso$")
    public void vejo_mensagem_de_cadastro_com_sucesso()  {
        cadastroUsuarioPage.checkCadastroSucesso();
    }
}

