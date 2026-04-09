# Landing Page Veterinaria

Landing page institucional focada em conversao via WhatsApp, pronta para apresentacao ao cliente e organizada para facilitar uma futura migracao para Vue.

## Estrutura atual

- Hero com CTA principal e apresentacao do profissional
- Servicos principais em cards simples
- Bloco Sobre com credenciais e diferenciais
- Depoimentos estaticos para prova social
- Galeria de imagens em webp
- CTA intermediaria
- Contato com mapa, telefone e WhatsApp

## O que foi simplificado

- Removidas animacoes e estados que nao eram essenciais para demonstracao
- Removidos wrappers genericos de UI para deixar os componentes mais diretos
- Removidas dependencias sem uso real apos a simplificacao
- Removidos placeholders de redes sociais no rodape

## Como executar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Portar para Vue

Os componentes estao organizados por secao em `src/components/sections`, o que facilita replicar cada bloco em componentes Vue.

Sugestao de migracao:

1. Criar uma pagina unica no Vue com a mesma ordem de secoes.
2. Reaproveitar os dados centralizados de `src/lib/site.ts` em um arquivo `site.ts` ou `site.js` no Vue.
3. Copiar as classes Tailwind diretamente, pois os componentes agora dependem menos de abstracoes internas.
4. Manter as imagens de `public/images` como estao, pois ja estao padronizadas em webp.

## Arquivos principais

- `src/app/page.tsx`: composicao da landing
- `src/components/layout`: header e footer
- `src/components/sections`: secoes visuais da pagina
- `src/lib/site.ts`: dados da clinica e link do WhatsApp
