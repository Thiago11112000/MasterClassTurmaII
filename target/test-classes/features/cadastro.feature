#language: pt

@cadastro-usuario
Funcionalidade: Cadastro de Usuários
  Eu como visitante do sistema
  Quero me  cadastrar
  para  fazer uma compra


  @Cadastro-sucesso
  Cenario: Cadastro de usuário com  sucesso
    Dado Que estou no cadastro de usuarios
    E preencho todos os campos obrigatórios
    Quando clico em cadastrar usuario
    Então  vejo mensagem de cadastro com sucesso
