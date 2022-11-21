import React, {useContext, useEffect} from 'react';
import {ShopContext} from './context/Context';

const Alert = (props) => {
    const {
        alertName = '',
        handlerCloseAlert
    } = useContext(ShopContext)

    useEffect(() => {
        const timerID = setTimeout(handlerCloseAlert, 3000)

        return () => clearTimeout(timerID)
    }, [alertName])

    return (
        <div id="toast-container">
            <div className="toast">
                Добавлен в Корзину {alertName}
            </div>
        </div>
    );
};

export default Alert;