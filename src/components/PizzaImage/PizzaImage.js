import React from 'react';

import PizzaImage from '../../assets/pizza.jpg';
import classes from './PizzaImage.module.css';

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImage} className={classes.PizzaImg}></img>
    </div>
);

export default pizzaImage;