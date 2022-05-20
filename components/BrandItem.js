import React from 'react';

const BrandItem = (props) => {
    return (
        <div className="seller-section-item">
            <img src={`/images/brands/${props.img}`} className="seller-section-image"></img>
        </div>
    );
};

export default BrandItem;