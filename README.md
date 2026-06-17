# Portfólio — Lucas dos Santos Pereira

> Desenvolvedor Front-end · Osasco, SP

🔗 **Site publicado:** [https://luckfipis.github.io/portifolio/](https://luckfipis.github.io/portifolio/)

---

## Sobre

Portfólio pessoal com tema claro/escuro, construído em React e CSS Modules. Tipografia em Fraunces (display serifado, com itálico expressivo) + Inter (corpo). Paleta grafite + violeta elétrico.

---

## Funcionalidades

- **Tema claro/escuro** com persistência em `localStorage`, sem flash ao recarregar
- **Cursor customizado** que segue o mouse e reage ao passar sobre links/botões (desabilitado automaticamente em touch)
- **Parallax sutil** no retrato e no blob de fundo da Hero, ativado pelo scroll
- **Tilt 3D** nos cards de projeto — inclinam suavemente seguindo a posição do mouse
- **Contadores animados** na seção de números, disparados ao entrar na viewport
- **Barras de progresso animadas** nas skills
- Scroll reveal em seções e cards
- Totalmente responsivo

---

## Como rodar localmente

```bash
npm install
npm start
```

Acesse `http://localhost:3000`.

---

## Deploy

Automático via GitHub Actions a cada push na `main`.

1. `Settings → Pages → Source → GitHub Actions`
2. `git push origin main`

---

## Projetos apresentados

| Projeto | Descrição | Stack |
|---------|-----------|-------|
| **Pipeline CI/CD** | Pipeline completa com GitHub Actions | Next.js, Jest, ESLint |
| **Diário de Bordo** | PWA com suporte offline e localStorage | PWA, Service Worker, Vanilla JS |
| **Performance Web** | Otimização Lighthouse de 51 → 98 | HTML, CSS, Core Web Vitals |
| **Micro Frontends** | 3 apps React integrados via Module Federation | React, Webpack, Monorepo |

---

## Tecnologias do portfólio

- **React 18** — hooks, context API (tema)
- **CSS Modules** — estilos modulares com CSS variables para os temas
- **Intersection Observer** — scroll reveal, contadores e barras animadas
- **requestAnimationFrame** — cursor customizado e parallax
- **GitHub Actions + Pages** — CI/CD e hospedagem
