import React from 'react';
import './Product.css'
import {Link} from "react-router-dom";

function Product() {

    return (
        <div className="product">

                <div className="product_option">
                    <Link to="/board" className = "companysystem">
                        <span className='company_optionLineOne'> ● 기업별 관리 시스템 </span>
                    </Link>
                </div>

        <div className="product">
                <div className="product_option">
                    <Link to="/student" className = "studentsystem">
                        <span className='company_optionLineOne'> ● 학생별 관리 시스템 </span>
                    </Link>
                </div>

        </div>
            </div>
           
    );
}

export default Product;