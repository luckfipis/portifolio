/**
 * data/projects.js
 * Fonte de verdade para os projetos do portfólio.
 * Para adicionar um projeto, basta inserir um novo objeto neste array.
 */

const PROJECTS = [
  {
    id: 'cicd-pipeline',
    title: 'Pipeline CI/CD',
    description:
      'Pipeline completa de Integração e Entrega Contínua com GitHub Actions. Automatiza lint, testes, build e deploy a cada push na main — sem intervenção manual.',
    tags: ['Next.js', 'GitHub Actions', 'Jest', 'ESLint'],
    repo: 'https://github.com/luckfipis/cicd-pipeline',
    demo: 'https://luckfipis.github.io/cicd-pipeline/',
    highlight: 'CI/CD',
  },
  {
    id: 'diario-de-bordo',
    title: 'Diário de Bordo',
    description:
      'PWA para registro de atividades diárias com suporte offline, instalação na tela inicial e persistência via localStorage. Service Worker com estratégia Cache First.',
    tags: ['PWA', 'Service Worker', 'localStorage', 'Vanilla JS'],
    repo: 'https://github.com/luckfipis/diario-de-bordo',
    demo: 'https://luckfipis.github.io/diario-de-bordo/',
    highlight: 'PWA',
  },
  {
    id: 'performance-web',
    title: 'Performance Web',
    description:
      'Portfólio otimizado com foco em Core Web Vitals. Performance subiu de 51 para 98 no Lighthouse após aplicar SVG inline, CSS crítico, defer no JS e remoção de código morto.',
    tags: ['Performance', 'Lighthouse', 'Core Web Vitals', 'HTML/CSS'],
    repo: 'https://github.com/luckfipis/performance-web',
    demo: 'https://luckfipis.github.io/performance-web/',
    highlight: 'Score 98',
  },
  {
    id: 'microfrontends',
    title: 'Micro Frontends',
    description:
      'Cardápio digital dividido em três aplicações React independentes integradas via Webpack Module Federation. Comunicação desacoplada com CustomEvents.',
    tags: ['React', 'Webpack', 'Module Federation', 'Monorepo'],
    repo: 'https://github.com/luckfipis/microfrontends',
    demo: 'https://luckfipis.github.io/microfrontends/container/',
    highlight: 'MFE',
  },
];

export default PROJECTS;
