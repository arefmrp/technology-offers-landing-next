import React from 'react';

const ProductItem = (props) => {
    return (
        <div className="card card-cs">
            <div className="card-body">
                <img src={`/images/products/${props.image}`} className="card-cs-img"></img>
                <span className="card-discount">{props.discount}% تخفیف</span>
            </div>
            <div className="card-footer">
                <h3>{props.name}</h3>
                <ul>
                    <li><i className="fa fa-check"></i>گارانتی معتبر</li>
                    <li><i className="fa fa-check"></i>تضمیین قطعات</li>
                    <li><i className="fa fa-check"></i>نرم افزار رایگان</li>
                    <li><i className="fa fa-check"></i>تعمییر رایگان تا یک سال اول</li>
                    <li><i className="fa fa-check"></i>خدمات پس از فروش</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductItem;