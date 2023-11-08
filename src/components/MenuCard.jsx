import './MenuCard.css';
import imagen from '../assets/default.jpg';
import PropTypes  from 'prop-types';
import { useState } from 'react';

function MenuCard ({name, description, price }) {

    const [isAdded, setIsAdded] = useState(true);
    const [itemCount, setItemCount] = useState(0);
    var btnClassName = isAdded ? 'card-btn' : 'card-btn hide'
    var btnAddMinusClassName = isAdded ? 'card-btn hide' : 'btn-add-minus-item'
    var btnTextClassName = isAdded ? 'card-btn hide' : 'card-title card-text'

    //functions for the bottons logic
    const addItem = () => {
        setItemCount((itemCount) => itemCount + 1)
        console.log(itemCount);
        
        if (itemCount >= 0) {
            setIsAdded(!isAdded);
        } 
    }
    const addBtn = () => {
        setItemCount((itemCount) => itemCount + 1)
        console.log(itemCount);
    }
    const minusBtn = () => {
        setItemCount((itemCount) => itemCount - 1)
        if (itemCount <= 1) {
            setIsAdded(!isAdded);
        }
    }

    return(
        <div className="content-card">
            <img src={imagen} alt="card image" id="card-img"/>
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{description}</p>
            <p className="card-text"><strong>${price}</strong></p>
            {
            <div className='btn-section'>
                <button className={btnClassName} id='btn-add-cart' onClick={addItem}>Agregar</button>
                <button className={btnAddMinusClassName} id='btn-add-item' onClick={addBtn} >+</button>
                <label className={btnTextClassName}>{itemCount}</label>
                <button className={btnAddMinusClassName} id='btn-quit-item' onClick={minusBtn}>-</button>
            </div>
            }
        </div>
    );
}

export default MenuCard;

//fix to the props error
MenuCard.propTypes = {
    name : PropTypes.string,
    description : PropTypes.string,
    price : PropTypes.string
}

