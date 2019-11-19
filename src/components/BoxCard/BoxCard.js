import React from 'react';
import classes from './BoxCard.module.css';
import Button from '../../elements/Button/Button';

const boxCard = (props) => {
  return (
    <div className={classes.BoxCard}>
      <h3>{props.info.title}</h3>
      <p>{props.info.subtitle}</p>
      <div className={classes.ImageBox}>
        <img src={props.info.image} alt={props.info.imageAlt}/>
        <div className={classes.Pricing}>{props.info.price}</div>
      </div>
      <p className={classes.Description}>{props.info.description}</p>
      <Button content={'order'}/>
    </div>
  )
}

export default boxCard;