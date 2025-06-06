# Template Micro-SaaS

Este projeto é um template base para a criação de projetos Micro-SaaS utilizando Next.js. Ele segue uma estrutura de pastas e convenções padronizadas para facilitar o desenvolvimento e a manutenção de projetos futuros.

## Estrutura do Projeto

A estrutura do projeto foi projetada para ser modular e escalável, contendo as seguintes pastas principais:

- `app/`: Contém os componentes e páginas principais do projeto.
- `public/`: Arquivos estáticos como imagens e ícones.
- `server/`: Lógica do servidor e APIs.
- `api/`: Lógica de acesso a requisições, parametros e respostas.
- `lib/`: Funções utilitárias e bibliotecas customizadas.
- `hooks/`: Hooks personalizados para reutilização de lógica.
- `components/`: Componentes reutilizáveis da interface.

## Passo a Passo para Desenvolvimento

1. **Configuração Inicial**

   - [ ] Configure as variáveis de ambiente no arquivo `.env.local`.
   - [ ] Instale as dependências do projeto com `npm install` ou `yarn install`.

2. **Configuração de authenticação**

   - [ ] Adicionar o Next Auth. `npm install next-auth@beta`
   - [ ] Adicionar secret key às variáveis de ambiente `npx auth secret`
   - [ ] Adicionar variáveis de ambiente do Google (Google Console) `npx auth secret`
     - [ ] AUTH_GOOGLE_ID
     - [ ] AUTH_GOOGLE_SECRET
   - [ ] No Google Console, criar permissão OAuth
   - [ ] No Google Console, criar um cliente OAuth
     - Tipo de aplicativo: Aplicativo da Web
     - Nome
     - Origens JavaScript autorizadas: Adicionar localhost e dominio da aplicação
     - URIs de redirecionamento autorizados: dominio.com/api/auth/callback/google
     - Acesso a dados: Adicionar ou remover escopos (../auth/userinfo.email e .../auth/userinfo.profile)
     - Clientes: Adicionar ID do cliente (AUTH_GOOGLE_ID) e a chave secreta do cliente (AUTH_GOOGLE_SECRET) ao `.env.local`
     - Logotipo: Adicionar somente ao subir para produção

3. **Configuração de armazenamento**

   - [ ] Instalar a ferramenta do Firebase: `npm install firebase-admin` ou `npm install @auth/firebase-adapter firebase-admin`
   - [ ] Configurar `lib/firebase.ts` (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY)
   - [ ] No Google Firestore, Criar banco de dados
   - [ ] Visão geral do projeto > Configurações do projeto > Contas e Serviço > Gerar nova chave privada
   - [ ] Passar: project_id, client_email e private_key do arquivo baixado para as variaveis de ambiente. Obs: Remover os \n da private_key e decodifica-la para base64 em [base64encode](https://www.base64encode.org/)
   - [ ] Instalar o adapter do Firebase: `npm install @auth/firebase-adapter`
   - [ ] Adicionar o adapter à configuração do NextAuth `lib/auth.ts`

4. **Estruturação do Projeto**

   - [ ] Defina os componentes principais na pasta `components/`.
   - [ ] Configure as rotas e páginas iniciais na pasta `app/`.

5. **Implementação de Funcionalidades**

   - [ ] Adicione hooks personalizados na pasta `hooks/`.
   - [ ] Implemente a lógica do servidor na pasta `server/`.

6. **Estilização**

   - [ ] Adicione estilos globais no arquivo `globals.css`.
   - [ ] Crie estilos específicos para componentes conforme necessário.

7. **Testes**

   - [ ] Configure e escreva testes para os componentes e funcionalidades principais.

8. **Deploy**
   - [ ] Configure o ambiente de produção.
   - [ ] Realize o deploy utilizando a plataforma de sua escolha (ex.: Vercel).

## Como Usar Este Template

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
