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
      'Montei uma pipeline com GitHub Actions que roda lint, testes e build automaticamente, e faz o deploy sozinha a cada push na main. Nada manual.',
    tags: ['Next.js', 'GitHub Actions', 'Jest', 'ESLint'],
    repo: 'https://github.com/luckfipis/cicd-pipeline',
    demo: 'https://luckfipis.github.io/cicd-pipeline/',
    highlight: 'CI/CD',
  },
  {
    id: 'diario-de-bordo',
    title: 'Diário de Bordo',
    description:
      'Um app para registrar atividades do dia, com suporte offline e instalação na tela inicial. Os dados ficam salvos no navegador via localStorage, e o Service Worker cuida do cache.',
    tags: ['PWA', 'Service Worker', 'localStorage', 'Vanilla JS'],
    repo: 'https://github.com/luckfipis/diario-de-bordo',
    demo: 'https://luckfipis.github.io/diario-de-bordo/',
    highlight: 'PWA',
  },
  {
    id: 'performance-web',
    title: 'Performance Web',
    description:
      'Peguei um portfólio com performance ruim e fui atrás dos gargalos. Depois de usar SVG inline, CSS crítico, defer no JS e cortar código morto, o score no Lighthouse saltou de 51 para 98.',
    tags: ['Performance', 'Lighthouse', 'Core Web Vitals', 'HTML/CSS'],
    repo: 'https://github.com/luckfipis/performance-web',
    demo: 'https://luckfipis.github.io/performance-web/',
    highlight: 'Score 98',
  },
  {
    id: 'microfrontends',
    title: 'Micro Frontends',
    description:
      'Um cardápio digital separado em três apps React independentes, integrados com Webpack Module Federation. Eles trocam mensagens entre si usando CustomEvents, sem dependência direta.',
    tags: ['React', 'Webpack', 'Module Federation', 'Monorepo'],
    repo: 'https://github.com/luckfipis/microfrontends',
    demo: 'https://luckfipis.github.io/microfrontends/container/',
    highlight: 'MFE',
  },
];

export default PROJECTS;
