$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cadastro.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Cadastro de Usuários",
  "description": "Eu como visitante do sistema\r\nQuero me  cadastrar\r\npara  fazer uma compra",
  "id": "cadastro-de-usuários",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@cadastro-usuario"
    }
  ]
});
formatter.scenario({
  "line": 11,
  "name": "Cadastro de usuário com  sucesso",
  "description": "",
  "id": "cadastro-de-usuários;cadastro-de-usuário-com--sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@Cadastro-sucesso"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Que estou no cadastro de usuarios",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "preencho todos os campos obrigatórios",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clico em cadastrar usuario",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "vejo mensagem de cadastro com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroUsuarioSteps.AcessaCadastroUsuarios()"
});
formatter.result({
  "duration": 10621245499,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (469, 620)\n  (Session info: chrome\u003d103.0.5060.134)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027THIAGO\u0027, ip: \u002726.249.42.126\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.134, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\thiag\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52406}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0dc221c7bde8ad4e08157e6f7c69d313\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pages.LoginPage.acessarCadastroUsuario(LoginPage.java:45)\r\n\tat steps.CadastroUsuarioSteps.AcessaCadastroUsuarios(CadastroUsuarioSteps.java:20)\r\n\tat ✽.Dado Que estou no cadastro de usuarios(cadastro.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CadastroUsuarioSteps.preencho_todos_os_campos_obrigatórios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroUsuarioSteps.clico_em_cadastrar_usuario()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroUsuarioSteps.vejo_mensagem_de_cadastro_com_sucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Login",
  "description": "Eu como usuário do sistema\r\nQuero fazer login\r\npara fazer uma compra na americanas",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.background({
  "line": 9,
  "name": "Acessar aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.acessaTelaLogin()"
});
formatter.result({
  "duration": 9643149200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login com sucesso",
  "description": "",
  "id": "login;login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "preencho e-mail \"finotti@gmail.com\" e senha \"1234567\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clico no botão de login",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "sou logado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "finotti@gmail.com",
      "offset": 17
    },
    {
      "val": "1234567",
      "offset": 45
    }
  ],
  "location": "LoginSteps.preencho_e_mail_e_senha(String,String)"
});
formatter.result({
  "duration": 437571800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 108089800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.sou_loagado_com_sucesso()"
});
formatter.result({
  "duration": 28931099,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Validar \u003cmensagem\u003e",
  "description": "",
  "id": "login;validar-\u003cmensagem\u003e",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 18,
      "name": "@login-falha"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "preencho e-mail \"\u003cemail\u003e\" e senha \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "clico no botão de login",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "vejo mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login;validar-\u003cmensagem\u003e;",
  "rows": [
    {
      "cells": [
        "email",
        "senha",
        "mensagem"
      ],
      "line": 26,
      "id": "login;validar-\u003cmensagem\u003e;;1"
    },
    {
      "cells": [
        "xxxxxxxxxxxxxxxxxxx",
        "1234567",
        "E-mail inválido."
      ],
      "line": 27,
      "id": "login;validar-\u003cmensagem\u003e;;2"
    },
    {
      "cells": [
        "finotti@gmail.com",
        "_____",
        "Senha inválida."
      ],
      "line": 28,
      "id": "login;validar-\u003cmensagem\u003e;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 9,
  "name": "Acessar aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.acessaTelaLogin()"
});
formatter.result({
  "duration": 8441428100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validar E-mail inválido.",
  "description": "",
  "id": "login;validar-\u003cmensagem\u003e;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 18,
      "name": "@login-falha"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "preencho e-mail \"xxxxxxxxxxxxxxxxxxx\" e senha \"1234567\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "clico no botão de login",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "vejo mensagem \"E-mail inválido.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "xxxxxxxxxxxxxxxxxxx",
      "offset": 17
    },
    {
      "val": "1234567",
      "offset": 47
    }
  ],
  "location": "LoginSteps.preencho_e_mail_e_senha(String,String)"
});
formatter.result({
  "duration": 422406200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 81636600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail inválido.",
      "offset": 15
    }
  ],
  "location": "LoginSteps.vejo_mensagem(String)"
});
formatter.result({
  "duration": 24607201,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "Acessar aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.acessaTelaLogin()"
});
formatter.result({
  "duration": 8665268200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validar Senha inválida.",
  "description": "",
  "id": "login;validar-\u003cmensagem\u003e;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 18,
      "name": "@login-falha"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "preencho e-mail \"finotti@gmail.com\" e senha \"_____\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "clico no botão de login",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "vejo mensagem \"Senha inválida.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "finotti@gmail.com",
      "offset": 17
    },
    {
      "val": "_____",
      "offset": 45
    }
  ],
  "location": "LoginSteps.preencho_e_mail_e_senha(String,String)"
});
formatter.result({
  "duration": 435854400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 94818900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senha inválida.",
      "offset": 15
    }
  ],
  "location": "LoginSteps.vejo_mensagem(String)"
});
formatter.result({
  "duration": 25473301,
  "status": "passed"
});
});