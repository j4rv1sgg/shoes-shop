import styles from './Card.module.scss';
import React from 'react';

function Card({ title, imageUrl, price, onFavorite, onPlus }) {

    const [isAdded, setIsAdded] = React.useState()

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price })
        setIsAdded(!isAdded)
    }


    return (
        <div className={styles.card}>
            <div className='favorite' onClick={onFavorite}>
                <img src="/img/heart.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} />
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Price:</span>
                    <b> {price} $</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                    alt="+" />
            </div>
        </div>
    )
}



export default Card;