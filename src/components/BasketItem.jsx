import React, {useContext} from 'react';
import {ShopContext} from './context/Context';

const BasketItem = (props) => {
    const {
        mainID,
        displayName,
        regularPrice,
        quantity,
    } = props;

    const {
        increaseOrderQuantity,
        decreaseOrderQuantity,
        removeFromBasket,
    } = useContext(ShopContext)

    return (
        <li className="collection-item">{displayName}
            <i className="material-icons basket-quantity"
               onClick={() => decreaseOrderQuantity(mainID)}>remove</i>
            x{quantity}
            <i className="material-icons basket-quantity"
               onClick={() => increaseOrderQuantity(mainID)}>add</i>
            : {regularPrice * quantity} usd
            <span className="secondary-content">
                <i className="material-icons basket-delete"
                   onClick={() => removeFromBasket(mainID)}>close</i>
            </span>
        </li>
    )
};

export {BasketItem};