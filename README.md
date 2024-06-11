# Tech Pro Bem News

<b>Tech Pro Bem News</b> é um projeto criado como desafio técnico para contribuir como pessoa desenvolvedora voluntária na chamada aberta em junho/2024.

## Tecnologias
O desafio foi realizado em 4 horas utilizando:

- Next.js
- Tailwind CSS
- Typescript
- Bun

## Requisitos
Algumas regras deveriam ser respeitadas:

1. Configurar um projeto Next.js
2. Criar uma página inicial que exiba cards das notícias da API pública. Os cards podem conter:
   - Título da notícia [Obrigatório]
   - Fragmento da notícia [Opcional]
   - Uma imagem ilustrativa da notícia [Opcional]
   - Autor [Opcional]
   - Data da Publicação [Opcional]
3. Cada card, ao ser clicado, deve redirecionar o usuário para uma página de detalhes para exibir as informações completas de uma notícia específica. Páginas de detalhes podem conter:
   - Título [Obrigatório]
   - Texto da notícia [Obrigatório]
   - Data de publicação [Opcional]
   - Autor [Opcional]
4. Configurar uma API do Next.js para lidar com as requisições do backend.
5. Garantir que o código esteja versionado em um repositório Git e fazer commits regulares e semânticos ao longo do desenvolvimento.

## Bônus
Para exercitar algumas habilidades e por me divertir, adicionei também:
- Rotas dinâmicas aproveitando as vantagens do App Router do Next.js 14.
- Aplicação responsiva.
- Cache de 1 hora para chamadas à API para evitar abuso de API pública e gratuita.
- Aplicação hospedada gratuitamente na Vercel.
- Baseado no [comentário do icyJoseph](https://github.com/vercel/next.js/discussions/48793#discussioncomment-5715951) Criei o projeto com os requisitos exigidos e refatorei com as otimizações propostas


## Preview

### Hero Section

![](https://github.com/pdrmenezes/tech-pro-bem-news/blob/main/public/ss-1.webp)

### Featured Article

![](https://github.com/pdrmenezes/tech-pro-bem-news/blob/main/public/ss-2.webp)

### Article Feed

![](https://github.com/pdrmenezes/tech-pro-bem-news/blob/main/public/ss-3.webp)

### Article Page

![](https://github.com/pdrmenezes/tech-pro-bem-news/blob/main/public/ss-4.webp)

## Possíveis Melhorias
- Simplificar chamadas fetch para evitar a ineficiência de dar um passo a mais na internet e de volta para o backend da aplicação. Preferivelmente chamaria diretamenta a API externa ou criaria funções para ajudar a lidar com erros e status de carregamento.
- Implementar paginação ou rolagem infinita.
- Implementar toas com possíveis mensagens de erro da API.
- Implementar Suspense em mais componentes para aguardar recebimento de dados da API sem interromper o carregamento da página.