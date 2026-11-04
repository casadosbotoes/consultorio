# Consultório Odontológico — Dr. Marcelo Dercatshoff Pereira

Site institucional do consultório odontológico do **Dr. Marcelo Dercatshoff Pereira**, especializado em **Implantodontia (implantes dentários), Reabilitação Oral e Dentística**, no Centro de Ribeirão Preto/SP.

## ✨ Recursos

- **Slider 3D (coverflow)** no topo, com autoplay, arraste/swipe, setas, dots e navegação por teclado
- **SEO local completo**: title/description otimizados, palavras-chave (implante dentário Ribeirão Preto, reabilitação oral, dentística…), Open Graph, Twitter Card, `sitemap.xml` e `robots.txt`
- **AEO (Answer Engine Optimization)**: FAQ com respostas diretas + schema `FAQPage` (JSON-LD) para aparecer em respostas de buscadores e assistentes de IA
- **Dados estruturados** `Dentist` (LocalBusiness) com NAP consistente (nome, endereço, telefone)
- **WhatsApp integrado**: botão flutuante, CTAs por especialidade e formulário que monta a mensagem e abre a conversa em `wa.me`
- **100% responsivo**, acessível (ARIA, alvos de toque ≥ 44px, `prefers-reduced-motion`) e com boas práticas de performance (next/image)

## 📞 Contato do consultório

| | |
|---|---|
| **WhatsApp** | [(16) 99232-8650](https://wa.me/5516992328650) |
| **Endereço** | Rua Visconde de Inhaúma, 580 — Sala 410, Edifício Center Plaza, Centro, Ribeirão Preto/SP |

## 🛠 Stack

- [Next.js 16](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui + Framer Motion
- Imagens otimizadas com next/image

## 🚀 Como rodar localmente

```bash
bun install        # ou npm install
bun run dev        # ou npm run dev
```

Acesse http://localhost:3000

## 📦 Deploy no GitHub Pages

O site é publicado automaticamente pelo GitHub Actions (`.github/workflows/deploy.yml`) a cada push na branch `main`.

**Ativação (uma única vez):**

1. No repositório, abra **Settings → Pages**
2. Em **Build and deployment → Source**, selecione **GitHub Actions**
3. Faça um push (ou rode o workflow manualmente em **Actions → Deploy to GitHub Pages → Run workflow**)

O site ficará disponível em `https://casadosbotoes.github.io/consultorio/`.

> **Domínio próprio?** Remova o `NEXT_BASE_PATH: /consultorio` do workflow e atualize `SITE_URL` em `src/lib/site.ts`, `public/robots.txt` e `public/sitemap.xml`.

## ✏️ Personalização rápida

| O que | Onde |
|---|---|
| Telefone / WhatsApp, endereço, horários | `src/lib/site.ts` |
| Textos das seções (hero, sobre, especialidades, processo) | `src/components/site/*.tsx` |
| Perguntas do FAQ (atualizar **também** o schema JSON-LD) | `src/components/site/faq.tsx` + `src/lib/schema.ts` |
| Imagens do slider | `public/images/` |
| URL do site (canonical, sitemap, JSON-LD) | `src/lib/site.ts` |

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx        # Metadata SEO + fontes + JSON-LD
│   ├── page.tsx          # Página única com todas as seções
│   └── globals.css       # Tema (paleta teal) e animações
├── components/site/      # Header, slider 3D, seções, footer, FAB
└── lib/
    ├── site.ts           # Dados do consultório (NAP, links)
    └── schema.ts         # Schemas JSON-LD (Dentist, FAQPage, WebSite)
public/
    ├── images/           # Fotos otimizadas do site
    ├── sitemap.xml
    └── robots.txt
```

---

© Dr. Marcelo Dercatshoff Pereira — Implantodontia, Reabilitação Oral e Dentística em Ribeirão Preto.
