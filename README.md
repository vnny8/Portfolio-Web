# 📌 Portfólio Pessoal - Vinícius Vieira

Este repositório contém o código-fonte do meu portfólio pessoal, uma aplicação web de página única desenvolvida para apresentar minhas habilidades, projetos e experiência profissional de forma moderna e interativa.

O projeto foi construído com **Next.js (App Router)** para renderização otimizada, **React.js** para a criação de componentes dinâmicos e **Tailwind CSS** para uma estilização responsiva e customizável.

---

## 📂 Arquitetura e Organização

A estrutura do projeto foi pensada para ser escalável e organizada, separando as responsabilidades de forma clara.

### 🔹 **Estrutura de Pastas**
- **`src/app/`**: Contém os arquivos principais da aplicação, seguindo a convenção do App Router do Next.js.
  - **`page.js`**: A página principal (Home), que serve como o orquestrador, montando a página a partir dos componentes de seção.
  - **`layout.js`**: O layout raiz da aplicação, onde metadados como o título e o favicon são definidos.
  - **`globals.css`**: Estilos globais e configuração do Tailwind CSS.
- **`src/components/`**: Abriga todos os componentes React reutilizáveis que compõem a interface. Cada componente principal possui sua própria pasta.
- **`public/`**: Armazena todos os ativos estáticos, como imagens de perfil, logos e fotos de projetos.
- **`.github/workflows/`**: Contém os scripts de automação para o pipeline de CI/CD com GitHub Actions.

### 🔹 **Configuração**
- **`package.json`**: Lista as dependências do projeto e os scripts (`dev`, `build`, `start`).
- **`next.config.mjs`**: Arquivo de configuração do Next.js, configurado com `output: 'standalone'` para otimizar a build para o Docker.
- **`Dockerfile`**: Define os passos para construir a imagem Docker da aplicação de forma otimizada (multi-stage build).
- **`.dockerignore`**: Lista os arquivos e pastas a serem ignorados durante a construção da imagem Docker.

---

## 🎨 Componentes Principais

A interface é totalmente componentizada, permitindo fácil manutenção e reutilização.

### 📌 **Layout e Navegação**
- **`Header`**: Barra de navegação fixa e flutuante, com logo animada e links que realizam uma rolagem suave (`smooth scroll`) para as seções correspondentes da página. É totalmente responsivo, com um menu "hambúrguer" para dispositivos móveis.
- **`Footer`**: Rodapé da página, contendo informações de contato interativas (copiar e-mail, link para LinkedIn) e um indicador de status de disponibilidade.
- **`ScrollAnimationWrapper`**: Um componente de ordem superior (wrapper) que envolve cada seção principal. Ele utiliza a `IntersectionObserver API` para aplicar animações de "fade-in" conforme o usuário rola a página, tanto para cima quanto para baixo.

### 📌 **Seções de Conteúdo**
- **`AboutSection`**: A seção de apresentação inicial. Contém a foto de perfil, título com gradiente animado, descrição, cálculo automático de idade e badges de informação.
- **`ProjectsSection`**: Exibe os projetos em um carrossel responsivo. No desktop, mostra dois projetos por vez, e no celular, um por vez. Possui navegação por setas e links para repositórios e posts no LinkedIn.
- **`SkillsSection`**: Apresenta as habilidades e tecnologias em um carrossel horizontal com rolagem suave. Inclui filtros por categoria (Frontend, Backend, etc.) e efeitos de `hover` interativos.
- **`ExperienceSection`**: Mostra a experiência profissional em um carrossel de linha do tempo horizontal. O cargo atual é destacado com uma animação pulsante. A navegação no celular é feita exclusivamente por setas para uma melhor experiência.

---

## 🛠️ Funcionalidades Implementadas

### ✅ **Design e UX**
- **Interface Totalmente Responsiva**: O layout se adapta perfeitamente a desktops, tablets e celulares.
- **Animações de Scroll**: As seções aparecem suavemente conforme o usuário navega pela página.
- **Navegação Suave**: Os links da navbar rolam a página de forma fluida até a seção correspondente.
- **Componentes Interativos**: Efeitos de `hover` em botões, links e cards, gradientes animados e carrosséis interativos.

### ✅ **Funcionalidades Dinâmicas**
- **Cálculo Automático de Idade**: A idade na seção "Sobre" é calculada dinamicamente com base na data de nascimento, mantendo-se sempre atualizada.
- **Carrosséis Personalizados**: Carrosséis para projetos e experiências com lógicas de navegação distintas para diferentes tamanhos de tela.

---

## 🚀 CI/CD - Automação de Deploy

O projeto está configurado com um pipeline de Integração e Entrega Contínua (CI/CD) utilizando **GitHub Actions** e **Docker**.

### 🔹 **Fluxo de Automação**
1.  **Gatilho**: Um `git push` na branch `main` inicia o workflow.
2.  **Build**: O GitHub Actions utiliza o `Dockerfile` para construir uma imagem Docker otimizada da aplicação Next.js.
3.  **Push**: A imagem recém-construída é enviada para um repositório privado no **Docker Hub**.
4.  **Deploy**: O workflow se conecta ao servidor de produção via SSH e executa os seguintes comandos:
    - Faz login no Docker Hub.
    - Baixa a nova versão da imagem (`docker pull`).
    - Para e remove o container antigo.
    - Inicia um novo container com a imagem atualizada, publicando o site.

Este processo garante que qualquer atualização no código seja refletida em produção de forma automática, segura e sem tempo de inatividade.

---

## 🖼️ Capturas de Tela (Placeholders)

📌 **Versão para PC:**
![InicioPC](/docs/images/PC1.png)
![ProjetosPC](/docs/images/PC2.png)
![TecnologiasPC](/docs/images/PC3.png)
![ExperiênciasPC](/docs/images/PC4.png)
![FooterPC](/docs/images/PC5.png)

📌 **Versão para Celular:**<br>
<img src="/docs/images/Celular1.jpeg" width="250"> <img src="/docs/images/Celular2.jpeg" width="250"> <img src="/docs/images/Celular3.jpeg" width="250">
<br>
<img src="/docs/images/Celular4.jpeg" width="250"> <img src="/docs/images/Celular5.jpeg" width="250"> <img src="/docs/images/Celular6.jpeg" width="250">

---

## 🚀 Como Executar Localmente

### 🔧 **Pré-requisitos**
- Node.js (versão 18 ou superior)
- npm, yarn ou pnpm

### 📌 **Passos**
1. Clone o repositório:
```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
```
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:3000`.

## 📜 Tecnologias Utilizadas

- **Framework**: Next.js 13+ (App Router)
- **Linguagem**: JavaScript (com JSX)
- **Estilização**: Tailwind CSS
- **Ícones**: React Icons
- **Containerização**: Docker
- **CI/CD**: GitHub Actions

---

📌 Criado por [Vinícius Vieira](https://github.com/vnny8)
