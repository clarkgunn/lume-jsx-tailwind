import Menu from '../nav/menu.jsx';
import Footer from '../nav/footer.jsx';

export default ({ title, critical, children, menu, debug }) => (
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
      <header>
        <Menu logo={menu.logo} menu={menu.topNav}></Menu>
      </header>
      <main className="prose">
        {children}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </body>
  </html>
);
