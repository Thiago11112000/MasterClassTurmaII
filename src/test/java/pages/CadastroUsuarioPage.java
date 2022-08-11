package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunTests;

public class CadastroUsuarioPage extends RunTests {

     private By campoNome = By.id("user");
    private By campoEmail = By.id("email");
    private By campoSenha= By.id("password");
    private By btnSalvarCadastro = By.id("btnRegister");



    public void preencherNome(String nome) {
        getDriver().findElement(campoNome).click();
        getDriver().findElement(campoNome).sendKeys(nome);
    }
    public void preencherEmail(String email) {
        getDriver().findElement(campoEmail).click();
       getDriver().findElement(campoEmail).sendKeys(email);
    }
    public void preencherSenha(String senha) {
        getDriver().findElement(campoSenha).click();
       getDriver().findElement(campoSenha).sendKeys(senha);
    }
    public void cadastrarUsuario() {
        getDriver().findElement(By.id("createAccount")).isDisplayed();
        getDriver().findElement(By.id("createAccount")).click();
    }

    public void clickSalvarCadastro() {
      getDriver().findElement(btnSalvarCadastro).click();
    }

    public void checkCadastroSucesso() {
        String textoEsperado = "Cadastro realizado";
        String textoTela = getDriver().findElement(By.id("swal2-title")).getText();
        System.out.println(textoTela);
        Assert.assertEquals("Os Textos não são iguaais",textoEsperado,textoTela);
    }
}

