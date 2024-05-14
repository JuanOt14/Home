import "./restaurant.css";
import Menu from "../components/Menu";

import MenuCard from "../components/MenuCard";
import Title from "../components/Title";
import data from "../data/menu.json";

function Restaurant() {
  var menuItems = [];
  for (const item in data) {
    menuItems.push(item);
  }

  return (
    <div className="restaurant-root">
      <Menu />
      <Title />
      <section className="restaurant-home" id="restaurant-home">
        <div className="restaurant-home-description">
          <h1>Enjoy our Food!</h1>
          <p>
            {" "}
            Welcome to Happy Meal - Where Every Meal is a Celebration! Indulge
            in an exquisite culinary journey at Happy Meal! Our passion for
            flavors, quality, and exceptional dining experiences is evident in
            every dish we serve.
          </p>
        </div>
      </section>
      <div className="menu-title">
        <h1>Our Menu</h1>
      </div>
      <section className="restaurant-content" id="restaurant-section">
        {menuItems.map((item) => {
            const id = item.toString();

            return (
                <MenuCard
                key={id}
                name={data[id].name}
                description={data[id].description}
                price={data[id].price}
                />
            );
        })}
    </section>
    <section className="restaurant-contact" id="restaurant-contact">
        <p>
          Contact Us: <br />
          Address: 123 Main Street, City, State, ZIP <br />
          Phone: +1-XXX-XXX-XXXX <br />
          Email: info@restaurantname.com <br />
        </p>
        <p>
          Opening Hours: <br />
          Monday to Thursday: 11:00 AM - 10:00 PM <br />
          Friday and Saturday: 11:00 AM - 11:00 PM <br />
          Sunday: 12:00 PM - 9:00 PM <br />
        </p>
        <div>
          <p>
            Follow Us: <br />
            Facebook <br />
            Instagram <br />
            Twitter <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Restaurant;
