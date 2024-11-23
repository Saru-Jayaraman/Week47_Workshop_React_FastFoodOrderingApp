import React from 'react';

const Theme = (props) => {
    return (
        <div>
            <button type='button' id='backgroundMode' className='btn btn-light buttonName' onClick={props.changeTheme}>Light</button>
        </div>
    );
};

export default Theme;