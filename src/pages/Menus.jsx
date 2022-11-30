import MenuItem from "../components/MenuItem";
import { menuList } from "../helpers/data";
import "./Menus.scss"

function Menus(props) {
  return (
    <div className="menu-page mt-6 mb-6">
      <h1 className="title">Our Dishes</h1>
      <div className="menu-container pt-4 pb-4" data-testid="menu-container">
        {menuList.map((listItem) => (
          <MenuItem
            image={listItem.image}
            title={listItem.name}
            price={listItem.price}
            key={listItem.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Menus;
