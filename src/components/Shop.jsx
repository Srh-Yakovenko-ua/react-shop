import React, {useContext, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from '../Preloader/Preloader';
import {GoodsLists} from './GoodsLists';
import {CartShopping} from './CartShopping';
import {BasketList} from './BasketList';
import Alert from './Alert';
import {ShopContext} from './context/Context';

const Shop = () => {
    const {
        setGoods,
        isLoading,
        alertName,
        isBasketShow
    } = useContext(ShopContext)

    useEffect(
        function getGoods() {
            fetch(API_URL, {
                headers: {'Authorization': API_KEY}
            })
                .then(response => response.json())
                .then(data => {
                    setGoods(data.shop)
                })
        }, [])

    return (
        <main className="container content">
            <CartShopping/>
            {isLoading ? <Preloader/> : <GoodsLists/>}
            {isBasketShow && <BasketList/>}
            {alertName && <Alert/>}
        </main>
    )
};

export {Shop}


// const [goods, setGoods] = useState([])
// const [isLoading, setIsLoading] = useState(true)
// const [order, setOrder] = useState([])
// const [isBasketShow, setIsBasketShow] = useState(false)
//  const [alertName, setAlertName] = useState('')
//const handlerCloseAlert = () => setAlertName('')
// const handleBasketShow = () => setIsBasketShow(!isBasketShow)
// const removeFromBasket = (itemID) => {
//     const newStateOrder = order.filter(el => el.mainId !== itemID);
//     setOrder(newStateOrder)
// }
// const increaseOrderQuantity = (itemId) => {
//     const newQuantityIncrease = order.map(item => {
//         return item.mainId === itemId ? {...item, quantity: item.quantity + 1} : item
//     })
//     setOrder(newQuantityIncrease)
// }
// const decreaseOrderQuantity = (itemId) => {
//     const newQuantityDecrease = order.map(item => {
//         if (item.quantity === 1) return item
//
//         return item.mainId === itemId ? {...item, quantity: item.quantity - 1} : item
//     })
//     setOrder(newQuantityDecrease)
// }

// const addToBasket = (item) => {
//     const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId)
//     if (itemIndex < 0) {
//         const newItem = {
//             ...item,
//             quantity: 1,
//         }
//         setOrder([...order, newItem])
//     } else {
//         const newOrder = order.map((orderItem, index) => {
//             if (index === itemIndex) {
//                 return {
//                     ...orderItem,
//                     quantity: orderItem.quantity + 1,
//                 }
//             } else {
//                 return orderItem
//             }
//         })
//         setOrder(newOrder)
//     }
// }
// const addToBasket = (mainId, displayName, regularPrice) => {
//     const itemFind = order.find(item => item.mainId === mainId)
//     if (itemFind === undefined) {
//         const newItem = {
//             mainId,
//             displayName,
//             regularPrice,
//             quantity: 1,
//         }
//         setOrder([...order, newItem])
//     } else {
//         const newOrder = order.map(item => {
//             if (item.mainId === itemFind.mainId) {
//                 return {
//                     ...item,
//                     quantity: item.quantity + 1,
//                 }
//             } else return item
//         })
//         setOrder(newOrder)
//     }
//     setAlertName(displayName)
// }