import React, {useContext} from 'react';
import {ShopContext} from './context/Context';

const GoodsItem = (props) => {
    const {
        displayName,
        displayDescription,
        price: {regularPrice},
        mainId,
        ...restItems
    } = props

    const {addToBasket} = useContext(ShopContext)
    const image = restItems.granted[0].images.full_background;


    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={displayName}/>
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn"
                        onClick={() => addToBasket(mainId, displayName, regularPrice)}>
                    Buy
                </button>
                <span className="right" style={{fontSize: '1.8rem'}}>{regularPrice} usd</span>
            </div>
        </div>
    );
};

export {GoodsItem};