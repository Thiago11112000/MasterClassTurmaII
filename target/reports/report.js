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
  "description": "Eu como visitante do sistema\nQuero me  cadastrar\npara  fazer uma compra",
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
  "duration": 6836914398,
  "status": "passed"
});
formatter.match({
  "location": "CadastroUsuarioSteps.preencho_todos_os_campos_obrigatórios()"
});
formatter.result({
  "duration": 560448082,
  "status": "passed"
});
formatter.match({
  "location": "CadastroUsuarioSteps.clico_em_cadastrar_usuario()"
});
formatter.result({
  "duration": 64484369,
  "status": "passed"
});
formatter.match({
  "location": "CadastroUsuarioSteps.vejo_mensagem_de_cadastro_com_sucesso()"
});
formatter.result({
  "duration": 30411822,
  "error_message": "org.junit.ComparisonFailure: Os Textos não são iguaais expected:\u003cCadastro realizado[]\u003e but was:\u003cCadastro realizado[!]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat pages.CadastroUsuarioPage.checkCadastroSucesso(CadastroUsuarioPage.java:41)\n\tat steps.CadastroUsuarioSteps.vejo_mensagem_de_cadastro_com_sucesso(CadastroUsuarioSteps.java:37)\n\tat ✽.Então vejo mensagem de cadastro com sucesso(cadastro.feature:15)\n",
  "status": "failed"
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
  "description": "Eu como usuário do sistema\nQuero fazer login\npara fazer uma compra na americanas",
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
  "duration": 5171577870,
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
  "duration": 424951030,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 87335020,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.sou_loagado_com_sucesso()"
});
formatter.result({
  "duration": 59782878,
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
  "duration": 5503249879,
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
  "duration": 405060344,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 104821534,
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
  "duration": 19776343,
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
  "duration": 7666623936,
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
  "duration": 462326770,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 72706247,
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
  "duration": 21096890,
  "status": "passed"
});
});