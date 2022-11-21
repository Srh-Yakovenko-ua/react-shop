import {createContext, useReducer} from 'react';
import {reducer} from './reducer';


export const ShopContext = createContext();

const initialState = {
    goods: [],
    isLoading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.handlerCloseAlert = () => {
        dispatch({
                type: 'CLOSE_ALERT'
            }
        )
    }

    value.removeFromBasket = (itemID) => {
        dispatch({
                type: 'REMOVE_FROM_BASKET',
                payload: {itemID}
            }
        )
    }

    value.increaseOrderQuantity = (itemID) => {
        dispatch({
                type: 'INCREASE_ORDER_QUANTITY',
                payload: {itemID}
            }
        )
    }

    value.decreaseOrderQuantity = (itemID) => {
        dispatch({
                type: 'DECREASE_ORDER_QUANTITY',
                payload: {itemID}
            }
        )
    }

    value.handleBasketShow = () => {
        dispatch({
                type: 'BASKET_SHOW'
            }
        )
    }

    value.addToBasket = (mainId, displayName, regularPrice) => {
        dispatch({
                type: 'ADD_TO_BASKET',
                payload: {
                    mainId,
                    displayName,
                    regularPrice
                }
            }
        )
    }

    value.setGoods = (data) => {
        dispatch({
                type: 'SET_GOODS',
                payload: {data}
            }
        )
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}