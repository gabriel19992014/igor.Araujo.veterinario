# Landing Page Veterinária Domiciliar

Landing page institucional focada em conversão via WhatsApp para atendimento domiciliar de pets. Construída com **Next.js 16**, **Tailwind CSS v4**, **TypeScript** e otimizada para performance com imagens em WebP.

link do projeto: https://vetdomiciliarmanaus.vercel.app/

## 📊 Melhorias Recentes

- ✅ Correções ortográficas completas (português)
- ✅ Conversão de imagens para WebP (redução de 94% em tamanho)
- ✅ Código refatorado e livre de dependências inúteis
- ✅ GitHub ignore otimizado
- ✅ Análise de código limpo (zero código morto)

## 🎯 Estrutura Atual

### Seções da Landing
- **Hero** — CTA principal com apresentação do profissional
- **Serviços** — Cards com serviços domiciliares
- **Sobre** — Credenciais e diferenciais do veterinário
- **Depoimentos** — Prova social com feedback de clientes
- **Galeria** — Imagens otimizadas em WebP com carrossel automático
- **FAQ** — Dúvidas frequentes estruturadas para SEO
- **CTA Intermediária** — Chamada à ação adicional
- **Contato** — Telefone e WhatsApp

### Estrutura de Arquivos

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz com metadados e GA4
│   ├── page.tsx            # Composição da landing
│   ├── robots.ts           # SEO - robots.txt
│   ├── sitemap.ts          # SEO - sitemap.xml
│   └── globals.css         # Estilos globais
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/           # Componentes de seção da página
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Gallery.tsx
│   │   ├── Faq.tsx
│   │   ├── CTA.tsx
│   │   ├── Contact.tsx
│   │   └── WhatsappFloat.tsx
│   └── ui/
│       └── TrackedExternalLink.tsx  # Link com GA4
└── lib/
    ├── site.ts             # Dados centralizados (clínica, SEO, FAQ)
    └── analytics.ts        # Integração GA4
```

## 🚀 Como Executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Build para Produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 🖼️ Otimização de Imagens

Todas as imagens foram convertidas para **WebP** para máxima performance:

```
Antes:  ~4.6 MB (PNG)
Depois: ~0.32 MB (WebP)
Redução: 93%
```

### Adicionar Nova Imagem

Para manter a otimização, sempre use WebP:

```bash
# Converter PNG/JPG para WebP
magick convert imagem-original.png -quality 85 imagem-original.webp

# Ou com ffmpeg
ffmpeg -i imagem-original.png -c:v libwebp -quality 85 imagem-original.webp
```

## 📝 Dados da Clínica

Todos os dados públicos (informações de contato, textos, FAQ, SEO) estão centralizados em `src/lib/site.ts`:

```typescript
// Editar informações
export const clinicInfo = {
  name: "Vet Cuidado Domiciliar",
  city: "Manaus",
  phoneRaw: "5592993198359",
  phoneDisplay: "(92) 99319-8359",
  veterinarian: {
    name: "Dr. Igor Araújo",
    specialty: "Médico Veterinário",
    crmv: "CRMV-AM 1234",
  },
};
```

## 🔍 SEO & Metadados

- **Sitemap** — Gerado automaticamente em `/sitemap.xml`
- **Robots.txt** — Configurado em `/robots.ts`
- **Schema.org** — Estrutura JSON-LD para `VeterinaryCare` e `FAQPage`
- **Open Graph** — Tags para compartilhamento em redes sociais
- **Twitter Card** — Otimizado para Twitter/X

## 📊 Google Analytics (GA4)

### Ativar GA4

Configure a variável de ambiente:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Tracking de Eventos

Eventos personalizados são rastreados automaticamente em:
- WhatsApp CTA clicks
- Telefone clicks
- Placements: `hero_primary_cta`, `cta_section`, `header`, `contact_section`

Verifique `src/lib/analytics.ts` para detalhes.

## 📋 Configuração de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# URL pública do site (opcional)
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

Há um exemplo em `.env.example`.

## 🔧 Stack Técnico

| Dependência | Versão | Função |
|-------------|--------|--------|
| **Next.js** | 16.2.3 | Framework React |
| **React** | 19.2.4 | Biblioteca UI |
| **Tailwind CSS** | 4 | Styling |
| **TypeScript** | 5 | Type-safety |
| **Lucide React** | 1.7.0 | Ícones |
| **ESLint** | 9 | Code quality |

## 🌐 Portabilidade para Vue.js

Os componentes estão bem organizados, facilitando migração futura:

1. **Dados centralizados** — Copiar `src/lib/site.ts` → `src/lib/site.js`
2. **Componentes reutilizáveis** — `src/components/sections` → componentes Vue
3. **Estilos Tailwind** — Reutilizar classes directamente
4. **Imagens otimizadas** — Manter estrutura de `public/images`

## 📈 Performance

Métricas de otimização:

- ✅ Imagens WebP (94% redução de tamanho)
- ✅ Código TypeScript sem dependências desnecessárias
- ✅ Next.js Turbopack (build rápido)
- ✅ Tailwind CSS v4 (bundle otimizado)
- ✅ Zero código morto

## 📄 Licença

Repositório privado. Todos os direitos reservados.

---

**Última atualização:** 9 de abril de 2026  
**Versão:** 0.1.0
