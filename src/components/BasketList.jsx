import React, {useContext} from 'react';
import {BasketItem} from './BasketItem';
import {ShopContext} from './context/Context';

export const BasketList = () => {
    const {
        order,
        handleBasketShow,
    } = useContext(ShopContext)

    const totalPrice = order.reduce((acc, item) => {
        return acc + (item.regularPrice * item.quantity)
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>

            {
                order.length ? order.map(item => (
                    <BasketItem key={item.mainId}
                                mainID={item.mainId}
                                {...item}
                    />
                )) : <li className="collection-item">Корзина Пуста</li>
            }

            <li className="collection-item active">Общая стоимость : {totalPrice} usd</li>
            <button className="secondary-content btn-small">Оформить</button>
            <i onClick={handleBasketShow} className="material-icons basket-close">close</i>
        </ul>
    );
};
