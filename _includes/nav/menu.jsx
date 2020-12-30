export default ({ logo, menu }) => (
  <nav>
    <a href="/" className="logo">
      { logo }
    </a>
    <ul>
      {menu.map((item) => (
        <li>
          <a href={item.link} className="menu-item">{ item.label }</a>
        </li>
      ))}
    </ul>
  </nav>
);