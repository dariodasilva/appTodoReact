Fala galera, etapa final do curso. O desafio está lançado valendo uma caixa de ferrero rocher totalmente bancada pelo nosso querido Pedro.

## PRIMEIRA PAGINA

ENDEREÇO URL : tarcisio-dev.com.br:7001/cursos

# SEGUNDA PAGINA 

ENDEREÇO URL : tarcisio-dev.com.br:7001/{idCurso} - GET - Detalhar curso
ENDEREÇO URL : tarcisio-dev.com.br:7001/{idCurso}/alunos - GET -inscritos no curso detalhado

Feitos as views desses valores, vamos fazer um POST pro endereço : 

ENDEREÇO URL : tarcisio-dev.com.br:7001/{idCurso}/alunos - POST -inscritos no curso detalhado
Aonde Header

recebe {
  Content-Type:application/json
} 

e body recebe {
	"nome": "PEDRO-FEIO"
}

A parte da inscrição pode ser feita na segunda tela, assim como pode ser criada uma nova para inscrição.

Para controle e testes: 

http://tarcisio-dev.com.br/adminer-curso

usuario : tarcisio
senha : fisica