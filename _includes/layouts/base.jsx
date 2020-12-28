export default ({ title, children }) => (
  <html>
    <head>
      <title>{ title }</title>
      <link rel="stylesheet" href="/assets/css/reset.css" />
      <link rel="stylesheet" href="/assets/css/global.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tailwindcss/typography@0.2.x/dist/typography.min.css"
      />
    </head>

    <body>
      <main class="prose">
        { children }
      </main>
    </body>
  </html>
);
