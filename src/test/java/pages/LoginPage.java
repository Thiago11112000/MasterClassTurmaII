package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import runner.RunTests;

import java.util.concurrent.TimeUnit;

public class LoginPage extends RunTests {

    private String URL = ("http://www.automationpratice.com.br/");
    private By botaoAcessarLogin = By.className("fa-user");
    private By campoEmail = By.id("user");

    private By botaoCriarConta = By.id("createAccount");

    public void acessarAplicacao() {
        initDriver(System.getProperty("browser"));
        getEnv();
        getDriver().get(URL);
    }

    private String getEnv() {
        String env = System.getProperty("env");
        switch (env) {
            case "dev":
                URL = ("http://www.automationpratice.com.br/");
                break;
            case "hml":
                URL= ("http://www.automationpratice.html");
                break;
        }
        return URL;
    }




      public void acessarTelaLogin(){
        getDriver().findElement(botaoAcessarLogin).click();
    }

    public void acessarCadastroUsuario(){
        getDriver().findElement(botaoCriarConta).click();

    }
    public void preencherEmail(String email) {
       getDriver().findElement(campoEmail).click();
       getDriver().findElement(campoEmail).sendKeys(email);
    }
    public void preencherSenha(String senha) {
        getDriver().findElement(By.id("password")).click();
       getDriver().findElement(By.id("password")).sendKeys(senha);
    }
    public void fazerLogin() {
        getDriver().findElement(By.id("btnLogin")).isDisplayed();
        getDriver().findElement(By.id("btnLogin")).click();
    }
    public void checkLoginSucesso() {
        String textoEsperado = "Login realizado";
        String textoTela = getDriver().findElement(By.id("swal2-title")).getText();
        System.out.println(textoTela);
        Assert.assertEquals("Os Textos não são iguais",textoEsperado,textoTela);
    }
    public void checkErrorLogin(String mensagem ) {
        String textoTela = getDriver().findElement(By.className("invalid_input")).getText();
        Assert.assertEquals("Os textos não são iguais!",mensagem,textoTela);
    }
}

