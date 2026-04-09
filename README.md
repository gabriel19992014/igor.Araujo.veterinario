# Landing Page Veterinária

Landing page institucional focada em conversão via WhatsApp, pronta para apresentação ao cliente e organizada para facilitar uma futura migração para Vue.

## Estrutura atual

- Hero com CTA principal e apresentação do profissional
- Serviços principais em cards simples
- Bloco Sobre com credenciais e diferenciais
- Depoimentos estáticos para prova social
- Galeria de imagens em webp
- CTA intermediária
- Contato com mapa, telefone e WhatsApp

## O que foi simplificado

- Removidas animações e estados que não eram essenciais para demonstração
- Removidos wrappers genéricos de UI para deixar os componentes mais diretos
- Removidas dependências sem uso real após a simplificação
- Removidos placeholders de redes sociais no rodape

## Como executar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Google Analytics (GA4)

Para ativar o GA4, configure a variável de ambiente abaixo:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Opcionalmente, defina também a URL pública do site:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

Há um exemplo em `.env.example`.

## Portar para Vue

Os componentes estão organizados por seção em `src/components/sections`, o que facilita replicar cada bloco em componentes Vue.

Sugestão de migração:

1. Criar uma página única no Vue com a mesma ordem de seções.
2. Reaproveitar os dados centralizados de `src/lib/site.ts` em um arquivo `site.ts` ou `site.js` no Vue.
3. Copiar as classes Tailwind diretamente, pois os componentes agora dependem menos de abstrações internas.
4. Manter as imagens de `public/images` como estão, pois já estão padronizadas em webp.

## Arquivos principais

- `src/app/page.tsx`: composição da landing
- `src/components/layout`: header e footer
- `src/components/sections`: seções visuais da página
- `src/lib/site.ts`: dados da clínica e link do WhatsApp
