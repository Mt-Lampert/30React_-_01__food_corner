import MenuItem from "../components/MenuItem";
import { menuList } from "../helpers/data";

function Menus(props) {
  return (
    <div className="menu-page mt-6 mb-6">
      <h1 className="title">Our Dishes</h1>
      <div className="menu-container pt-4 pb-4" data-testid="menu-container">
        <MenuItem
          image={menuList[0].image}
          title={menuList[0].name}
          price={menuList[0].price}
        />
      </div>
    </div>
  );
}

export default Menus;
