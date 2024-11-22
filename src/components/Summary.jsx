import React from 'react';
import { HiMiniPlus } from "react-icons/hi2";
import { BiMinus } from "react-icons/bi";

const Summary = (props) => {
    const displayOrderSummary = () => {
        let orderSummaryContainer = props.addedItems.map(each => {
            const eachElement =
                each.quantity > 0 && (
                    <tr key={each.id}>
                        <td>{each.title}<span> x{each.quantity}</span></td>
                        <td className='text-center'>
                            <button className='bg-success border rounded-1' onClick={each.addEvent}>{<HiMiniPlus />}</button>
                            <button className='bg-danger border rounded-1' disabled={each.quantity === 0} onClick={each.removeEvent}>{<BiMinus />}</button>
                        </td>
                        <td className='text-end text-info'>SEK {(each.price * each.quantity).toFixed(2)}</td>
                    </tr>
                );
            return eachElement;
        });
        return orderSummaryContainer;
    };
    return (
        <div>
            <table className='table table-striped'>
                <tbody>
                {displayOrderSummary()}
                <tr className='fw-bold'>
                    <td>Total</td>
                    <td className='text-center'></td>
                    <td className='text-end text-primary'>SEK {props.total.toFixed(2)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Summary;