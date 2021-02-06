import './Menu.scss';

function Menu() {
  return (
    <div className="Menu" hidden>
      <ul className="Menu-list">
          <li className="Menu-link">Our story</li>
          <li className="Menu-link">Store</li>
          <li className="Menu-link">Get in touch</li>
      </ul>
    </div>
  );
}

export default Menu;