📘 Desafio Técnico
Aplicação desenvolvida com Next.js e TypeScript, consumindo a API do Ghost CMS para gerenciamento de posts. O projeto inclui funcionalidades completas de listagem, criação, edição e deleção de posts, com foco em boas práticas, testes e experiência do usuário.
________________________________________
🧩 Funcionalidades implementadas
✅ Funcionalidades essenciais
•	🔐 Autenticação via token da API do Ghost CMS (Admin API Key via .env)
•	📋 Dashboard principal com listagem de posts, ordenados por data
•	✍️ CRUD completo:
o	Criar novo post
o	Editar post existente
o	Deletar post com confirmação
•	🔎 Página de detalhes de cada post (GET por ID)
•	📱 Responsividade para desktop e mobile
•	💬 Feedbacks visuais:
o	Loading global
o	Toasts de erro e sucesso
o	Estados vazios (sem posts)
✨ Extras implementados
•	🧱 Componentes reutilizáveis (Design System)
•	🎨 Estilo com Styled Components
•	🚦 Separação clara de responsabilidades (hooks, services, UI)
•	🧪 Testes unitários com Jest + Testing Library
•	🚥 CI local com Husky + lint-staged para padronizar código
•	💡 Mensagens e textos extraídos para um arquivo central (constants/messages.ts)
•	🔍 Acesso à API do Ghost via Axios customizado (lib/ghost.ts)
________________________________________
🧱 Stack técnica
Categoria	- Escolha	- Motivo
Linguagem	TypeScript	Tipagem segura, escalabilidade
Framework	Next.js (Pages Router)	SSR + rotas dinâmicas + facilidade de deploy com Netlify
Estilo	Styled Components	Componentização e escopo isolado de estilo
Estado/dados	Fetch + gerenciamento local	API externa simples, sem necessidade de estado global complexo
Testes	Jest + Testing Library	Testes unitários confiáveis para hooks e lógica de serviço
Roteamento	Next.js Pages Router	Suporte nativo à estrutura de páginas e rotas dinâmicas
Qualidade	ESLint + Prettier + Husky + lint-staged	Padronização e validação de código antes dos commits
Deploy Netlify	Integração nativa com Next.js, CI/CD automática
❗ O Vite é excelente para SPAs com foco em velocidade de build, mas o Next.js foi escolhido por oferecer renderização híbrida (SSR/SSG), API Routes e melhor compatibilidade com produção e SEO — pontos relevantes para um blog.
________________________________________
📁 Estrutura do Projeto
src/
├── components/         # Componentes reutilizáveis
│   └── micro/          # Toast, Modal, Text
├── hooks/              # Hooks de lógica (usePosts, useEditPost, etc.)
├── pages/              # Páginas com rotas (Next.js Pages Router)
│   └── api/            # Rotas internas (ex: /api/posts/[id])
├── services/           # Serviços externos (ghostAPI, CRUD)
├── lib/                # Integrações (ex: configuração do Axios)
├── constants/          # Mensagens e textos reutilizáveis
├── types/              # Tipagens globais
└── styles/             # Estilos globais e reset
________________________________________
🧪 Testes
O projeto já inclui testes unitários para:
•	Hooks (usePosts, usePostDetail, useEditPost)
•	Utils (capitalize, handleServiceError)
•	Integrações com API (pages/api/posts/[id].ts)
Cobertura atual: yarn test:coverage
Executar testes: yarn test
________________________________________
🧪 Exemplo de .env
# .env.example

GHOST_API_URL=https://meu-blog.ghost.io
GHOST_ADMIN_API_KEY=00000000000000000000000000000000

________________________________________
💻 Scripts disponíveis
"scripts": {
  "dev": "next dev --turbopack",         // Servidor local (porta 3000)
  "build": "next build",                 // Build para produção
  "start": "next start",                 // Servidor de produção local
  "test": "jest",                        // Testes unitários
  "test:watch": "jest --watch",          // Testes em modo watch
  "test:coverage": "jest --coverage",    // Gera relatório de cobertura
  "lint": "eslint . --ext .ts,.tsx"      // Linter
}
________________________________________
🌍 Deploy
🔗 Produção: https://blog-tech3.netlify.app/
🚀 Realizado via Netlify (commit em master aciona deploy automático)
________________________________________
