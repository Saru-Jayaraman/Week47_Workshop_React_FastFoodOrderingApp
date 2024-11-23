import React, { useState } from 'react';
import Theme from './Theme';
import Header from './Header';
import Menu from './Menu';
import Summary from './Summary';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const FastFoodApp = () => {
    const [style, setStyle] = useState('bg-dark text-white');
    const setModes = () => {
        const element = document.getElementById('backgroundMode');
        if(element.textContent.includes('Dark')) {
            setStyle('bg-dark text-light');
            element.textContent = 'Light';
        }
        else {
            setStyle('bg-light text-dark');
            element.textContent = 'Dark';
        }
    };

    const [allItems, setAllItems] = useState([
        {id: 0, title: 'Burger', alt: "Loading Veg Burger Image", description: 'A delicious burger with all the fillings.', image: 'src\\assets\\Burger.jpg', price: 79.99, addEvent: () => addToOrder(0), removeEvent: () => removeFromOrder(0), quantity:0},
        {id: 1, title: 'Pizza', alt: "Loading Veg Pizza Image", description: 'A classic pizza with your toppings.', image: 'src\\assets\\Pizza.jpg', price: 99.99, addEvent: () => addToOrder(1), removeEvent: () => removeFromOrder(1), quantity:0},
        {id: 2, title: 'Fries', alt: "Loading Fries Image", description: 'Crispy golden fries served hot and fresh.', image: 'src\\assets\\Fries.jpg', price: 59.99, addEvent: () => addToOrder(2), removeEvent: () => removeFromOrder(2), quantity:0}
    ]);
    const [total, setTotal] = useState(0);
    const addToOrder = (id) => {
        const newItems = [...allItems];
        const newQuantity = newItems[id].quantity+1;
        newItems[id].quantity = newQuantity;
        setAllItems(newItems);
        updateTotal();
    };
    const removeFromOrder = (id) => {
        const newItems = [...allItems];
        const newQuantity = newItems[id].quantity-1;
        newItems[id].quantity = newQuantity;
        setAllItems(newItems);        
        updateTotal();
    };
    const updateTotal = () => {
        setTotal(allItems.reduce((sum, item) => sum + item.price * item.quantity, 0));
    };

    return (
        <div>
            <div className={`container w-50 my-3 border ${style}`}>
                <div className='my-4'>
                    <Theme style={style} changeTheme={setModes} />
                    <Header />
                    <div className='row'>
                        <Menu allItems={allItems} total={total} />
                    </div>
                    <div className='my-4'>
                        <h4>Your Order</h4>
                        <Summary addedItems={allItems} total={total} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FastFoodApp;