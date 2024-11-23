import React from 'react';
import Card from './Card';

const Menu = (props) => {
    const displayMenu = () => {
        let menuContainer = props.allItems.map(item => {
            const eachItem = 
                <div id={item.id} key={item.id} className='col-md-4'>
                    <Card title={item.title} alt={item.alt} image={item.image} description={item.description} price={item.price} addEvent={item.addEvent} removeEvent={item.removeEvent} />
                </div>;
            return eachItem;
        });
        return menuContainer;
    };

    return (
        <>
            {displayMenu()}
        </>
    );
};

export default Menu;