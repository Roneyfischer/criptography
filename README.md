Intro:

Trata-se de um app de criptografia de textos.
Foram aplicadas duas formas de criptografia: (1) criptografia reversível, com Crypto; e  (2) criptografia não reversível Argon2i;

O projeto poderia ser simplificado, porém, tornou-se mais extenso para que eu pudesse aplicar o uso de classes, rotas, tratamento de erros, servidor, módulos, etc.

Caso você queira somente o acesso ao core do sistema, visando apenas fazer uma simples criptografia, pode acessar o arquivo com os métodos de criptografia em src/2.service/busnessRoule/cryptoOperator.js.

Ademais, o projeto está todo comentado, a fim de explicar o porque de cada decisão, facilitando para alguém que esteja aprendendo, mas, principalmente, sendo mais um meio de reforçar meu aprendizado, além de facilitar a compreensão como material de consulta.


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

Pressupostos e detalhes técnicos:

1.O projeto foi criado para eu aprimorar meus conhecimentos.
2. Procurei usar dois paradigmas distintos: orientação a objetos e programação funcional.
Embora sejam diferentes, eu queria utilizar ambos, então acabei misturando estes paradigmas e seus conceitos.
O projeta busca aplicar a imutabilidade, composição e pureza das funções, na medida do possível.
Em razão da imutabilidade, é aplicado ao código o uso de cópias, para não alterar o input passado na função, afim de reduzir os efeitos colaterais, como erros em eventual novo uso dos mesmos imputs.


ESTOU ABERTO À SUGESTÕES E COMENTÁRIOS.


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

COMO RODAR/EXECUTAR:

Criptografar com Argon2i:

{
"type": "encryptArgon2",
"data":"String test for criptography"
}


Verificar criptografia com Argon2i:

{
"type": "verifyArgon2",
"data":"String test for criptography",
"pwdOrHash": "$argon2i$v=19$m=65536,t=450,p=4$RMG+gVX6GX1xt4RN4DHPDw$rzGmbFlxmCk9+L3pE+LBqSO4OfneKHg6csT4O+3ya0HO8fd9wmu06wjWyFp362upPxZF9kQZReC1L0z95ZKVcTJn/aPFY8xoKAXYhcNJhmKvaqW0D4c8K8ApL0ULaBEYlbM3d2kpAHez3rYpreDIWu0Sjxq3stdj42ZWZKafE8qNpwzIBg9i0VBWF6KY4N+G+aVSapG9tMDOUQfhlEuvjHvOYcUbrGCKjRAoFQkUIwFZsAWt9uB9hSD+qC9+jSk2BK8Onb+qGL45gmSgAt9oOZQrOLlzq73DDqVnDQTWrYS6oNQbf7eeHawZto8udEa+tDzbQAtk4GJhOVerAVJE90BDYjJtXu5U9vViDYLjTJwRItSAXyiMVvwCVbHO7M88VZEABbPPoBC4As+Tf7/UntncqRo/1sa+ea/FppPRl0Usd2KQ3AuUtm/LAW+uWpeyYLxWEWhnOdyuNZsaMdUobAlMfTdPIhhNSG31bb0LO7w/m9Jh9Lojp88UoG/nIDTv/4Vp4sjMCVMp5XLb3X8tPV41ZMox0ZYTsBvNLgUlM4dTyIGpMNjY7UjFBti0zolzB4C8M/rIqwYIxYhSm13B+MdfX6HBjRt6YdkIQw9eKC1q2q2YccKBfZ5QtjiBamkQuMOrDTXV/SPkoDaC4Jcl4HR9Hxi0f8uf8tF5bHfLg50"
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


Criptografar AES (é possível utilizar outra forma de criptografia suporta pelo Crypto do Nodejs, bastando alterar o "alg"):

{
"type": "encryptAes",
"alg":"aes-256-cbc",
"data":"String test for criptography",
"pwdOrHash": "Secret",
"dataTypeOutput":"hex"
}


Descriptografar AES:

{
"type": "decryptAes",
"alg":"aes-256-cbc",
"data":"dc8989a428adb6f164948cd9ad4dbcd2710b510ac0e73435e45b814901580da9",
"pwdOrHash": "Secret",
"dataTypeOutput":"utf8",
"iv":"4c637c4e1ab686de9631da665ced43b0"
}