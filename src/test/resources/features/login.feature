#language: pt

  @login
  Funcionalidade: Login
    Eu como usuário do sistema
    Quero fazer login
    para fazer uma compra na americanas

    Contexto: Acessar aplicação
      Dado que estou na tela de login
@login-sucesso
  Cenario: Login com sucesso
    E preencho e-mail "finotti@gmail.com" e senha "1234567"
    Quando clico no botão de login
    Então sou logado com sucesso


@login-falha
    Esquema do Cenário: Validar <mensagem>
      E preencho e-mail "<email>" e senha "<senha>"
      Quando clico no botão de login
      Então vejo mensagem "<mensagem>"

    Exemplos:

      |email               |senha            | mensagem      |
      |xxxxxxxxxxxxxxxxxxx |1234567          |E-mail inválido.|
      |finotti@gmail.com   |_____            |Senha inválida. |





