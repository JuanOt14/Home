import './restaurant.css';

import MenuCard from '../components/MenuCard';
import Title from '../components/Title';
import data from '../data/menu.json';

function Restaurant () {
    var menuItems = []
    for(const item in data){
        menuItems.push(item)
    }
    
    return(
        <div className='restaurant-root'>
            <Title/>
            <section className='restaurant-home'>
                <div className='restaurant-home-description'>
                    <h1>Enjoy our Food!</h1>
                    <p> Welcome to Happy Meal - Where Every Meal is a Celebration! 
                    Indulge in an exquisite culinary journey at Happy Meal! 
                    Our passion for flavors, quality, 
                    and exceptional dining experiences is evident in every dish we serve.
                    </p>
                </div>
            </section>
            <div className='menu-title'>
                <h1>Our Menu</h1>
            </div>
            <section className='restaurant-content' id='restaurant-section'>
                {
                    menuItems.map(item => {
                        const id = item.toString();
                        
                        return(
                            <MenuCard key={id} name={data[id].id} description={data[id].description} price={data[id].price}/>
                        )
                    })
                }
            </section>
            <section className='restaurant-contact'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non delectus ab voluptas assumenda alias, vero laboriosam! Quod ab, consequatur, possimus impedit error voluptatum corrupti, repellat ratione illo officia id.</p>
            </section>
        </div>
    );
}

export default Restaurant;

