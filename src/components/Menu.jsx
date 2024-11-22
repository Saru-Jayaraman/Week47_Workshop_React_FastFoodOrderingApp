import React, { useState } from 'react';
import Card from './Card';
import Summary from './Summary';

const Menu = (props) => {
    const [allItems, setAllItems] = useState([
        {id: 0, title: 'Burger', alt: "Loading Veg Burger Image", description: 'A delicious burger with all the fillings.', image: 'src\\assets\\Burger.jpg', price: 79.99, addEvent: () => addToOrder(0), removeEvent: () => removeFromOrder(0), quantity:0},
        {id: 1, title: 'Pizza', alt: "Loading Veg Pizza Image", description: 'A classic pizza with your toppings.', image: 'src\\assets\\Pizza.jpg', price: 99.99, addEvent: () => addToOrder(1), removeEvent: () => removeFromOrder(1), quantity:0},
        {id: 2, title: 'Fries', alt: "Loading Fries Image", description: 'Crispy golden fries served hot and fresh.', image: 'src\\assets\\Fries.jpg', price: 59.99, addEvent: () => addToOrder(2), removeEvent: () => removeFromOrder(2), quantity:0}
    ]);
    const [total, setTotal] = useState(0);

    const displayMenu = () => {
        let menuContainer = allItems.map(item => {
            const eachItem = 
                <div id={item.id} key={item.id} className='col-md-4'>
                    <Card title={item.title} alt={item.alt} image={item.image} description={item.description} price={item.price} addEvent={item.addEvent} removeEvent={item.removeEvent} />
                </div>;
            return eachItem;
        });
        return menuContainer;
    };
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
    }
    return (
        <>
            <div className={`container w-50 my-3 border ${props.type}`}>
                <div className='my-4'>
                    <h2 className='text-center mt-4'>Fast Food Menu</h2>
                    <div className='row'>
                        {displayMenu()}
                    </div>
                </div>
                <div className='my-4'>
                    <h4>Your Order</h4>
                    {<Summary total={total} addedItems={allItems} />}
                </div>
            </div>
        </>
    );
};

export default Menu;