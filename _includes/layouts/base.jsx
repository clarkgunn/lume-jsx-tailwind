export default ({ title, children, critical }) => (
  <html>
    <head>
      <title>{title}</title>
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
      <style dangerouslySetInnerHTML={{ __html: critical }} />
    </head>

    <body>
      <header></header>
      <main className="prose">
        { children }
      </main>
      <footer></footer>
    </body>
  </html>
);
