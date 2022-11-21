export const reducer = (state, action) => {
    switch (action.type) {
        case 'BASKET_SHOW' :
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            }
        case 'CLOSE_ALERT' :
            return {
                ...state,
                alertName: '',
            }
        case 'DECREASE_ORDER_QUANTITY' :
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.quantity === 1) return item

                    return item.mainId === action.payload.itemID ?
                        {...item, quantity: item.quantity - 1} : item
                })
            }
        case 'INCREASE_ORDER_QUANTITY' :
            return {
                ...state,
                order: state.order.map(item => {
                        return item.mainId === action.payload.itemID ?
                            {...item, quantity: item.quantity + 1} : item
                    }
                )
            }
        case 'SET_GOODS' :
            return {
                ...state,
                goods: action.payload.data || [],
                isLoading: false,
            }
        case 'ADD_TO_BASKET' : {
            const itemFind = state.order.find(item => item.mainId === action.payload.mainId)
            if (itemFind === undefined) {
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                }
                return {
                    ...state,
                    order: [...state.order, newItem],
                    alertName: action.payload.displayName
                }
            } else {
                const newOrder = state.order.map(item => {
                    if (item.mainId === itemFind.mainId) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                    } else return item
                })
                return {
                    ...state,
                    order: newOrder,
                    alertName: action.payload.displayName
                }
            }
        }
        case 'REMOVE_FROM_BASKET' :
            return {
                ...state,
                order: state.order.filter(el => el.mainId !== action.payload.itemID)
            }
        default:
            return state;
    }
}