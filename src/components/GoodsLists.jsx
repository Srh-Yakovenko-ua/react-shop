import React, {useContext} from 'react';
import {GoodsItem} from './GoodsItem';
import {ShopContext} from './context/Context';

const GoodsLists = () => {
    const {goods = []} = useContext(ShopContext)

    if (!goods.length) {
        return <h3>Nothing Here</h3>
    }

    return (
        <div className="goods">

            {
                goods.map(item => (
                    <GoodsItem key={item.mainId}
                               {...item}
                    />
                ))
            }

        </div>
    );
};

export {GoodsLists};