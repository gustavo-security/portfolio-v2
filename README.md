# Portfólio | Gustavo Sales

Portfólio profissional desenvolvido com **Angular 22, TypeScript e SCSS**, com o objetivo de apresentar minha trajetória como desenvolvedor Full Stack, minhas competências técnicas e meus projetos de desenvolvimento de software.

A aplicação possui interface responsiva, identidade visual dark tech, navegação por seções e publicação automatizada através do GitHub Actions.

### Acesse o projeto

**[Visualizar portfólio online](https://gustavo-security.github.io/portfolio-v2/)**

**[Repositório no GitHub](https://github.com/gustavo-security/portfolio-v2)**

---

## Tecnologias utilizadas

- **Angular 22** — framework utilizado para construir a aplicação.
- **TypeScript** — linguagem principal do projeto.
- **SCSS** — estilização, variáveis de tema e responsividade.
- **HTML5** — estrutura semântica das páginas.
- **Lucide Icons** — biblioteca de ícones.
- **Git e GitHub** — versionamento e hospedagem do código-fonte.
- **GitHub Actions** — integração e publicação automatizada.
- **GitHub Pages** — hospedagem da aplicação.

## Funcionalidades

- Interface moderna com tema escuro.
- Layout responsivo para diferentes tamanhos de tela.
- Navegação entre as seções do portfólio.
- Apresentação profissional e trajetória de experiência.
- Exibição das tecnologias e competências técnicas.
- Cards de projetos com detalhes expansíveis.
- Links para GitHub e LinkedIn.
- Visualização do currículo em PDF.
- Metadados de SEO e arquivo `robots.txt`.
- Deploy automático a partir da branch `main`.

## Organização do projeto

```text
src/
├── app/
│   ├── core/
│   │   ├── data/
│   │   └── models/
│   ├── features/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── projects/
│   │   │   └── project-card/
│   │   ├── skills/
│   │   ├── contact/
│   │   └── footer/
│   ├── app.html
│   └── app.ts
└── styles.scss

public/
├── assets/
│   ├── documents/
│   ├── icons/
│   └── images/
├── favicon.svg
└── robots.txt

.github/
└── workflows/
    └── deploy.yml
```

O projeto utiliza componentes Angular standalone, separando a interface em seções reutilizáveis. Dados de projetos, habilidades e contatos são organizados em arquivos específicos, facilitando a manutenção e a inclusão de novas informações.

## Executando localmente

### Pré-requisitos

- Node.js 24
- npm
- Git

### Instalação

Clone o repositório:

```bash
git clone https://github.com/gustavo-security/portfolio-v2.git
cd portfolio-v2
```

Se utilizar NVM, selecione a versão de Node.js indicada pelo projeto:

```bash
nvm install
nvm use
```

Instale as dependências:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação estará disponível em:

`http://localhost:4200/`

## Build de produção

Para gerar a versão otimizada:

```bash
npm run build
```

Para gerar a versão configurada para o GitHub Pages:

```bash
npx ng build --configuration production --base-href /portfolio-v2/
```

Os arquivos compilados são armazenados em `dist/portfolio-v2/browser/`.

## Deploy automático

A aplicação utiliza **GitHub Actions** para automatizar a publicação no GitHub Pages.

A cada push na branch `main`, o workflow realiza as seguintes etapas:

1. Obtém o código do repositório.
2. Configura a versão de Node.js definida no `.nvmrc`.
3. Instala as dependências usando `npm ci`.
4. Executa o build de produção do Angular.
5. Publica os arquivos compilados no GitHub Pages.

A configuração está disponível em `.github/workflows/deploy.yml`.

## Qualidade e desempenho

O projeto foi analisado utilizando o Google Lighthouse, em ambiente de produção local, com avaliação Mobile.

| Categoria | Pontuação |
|---|---:|
| Performance | 96 |
| Acessibilidade | 95 |
| Boas Práticas | 100 |
| SEO | 100 |

**Performance:** mediana de cinco execuções, com resultados de 96, 88, 89, 98 e 98 pontos.

*Os resultados representam as medições realizadas durante o desenvolvimento e podem variar conforme ambiente, dispositivo e condições de execução.*

## Autor

**Gustavo Sales**

Desenvolvedor Full Stack com experiência em Angular, TypeScript, Node.js, APIs REST, bancos de dados relacionais e serviços AWS.

- [Portfólio](https://gustavo-security.github.io/portfolio-v2/)
- [GitHub](https://github.com/gustavo-security)

---

Desenvolvido com Angular, TypeScript e SCSS.
