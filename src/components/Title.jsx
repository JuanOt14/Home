import './Title.css';
import logo from '../assets/restaurant/icons8-comida-64.png';

function Title () {
    return(
        <section className='menu-title'>
            <div className='menu-logo'>
                <h2>Happy Meal</h2>
                <img src={logo} alt='logo' width='50rem'/>
            </div>
            <div className='menu-nav'>
                <label><a href='/'>Home</a></label>
                <label><a href='/'>Menu</a></label>
                <label><a href='/'>Contact</a></label>
            </div>
        </section>
    )
}

export default Title;