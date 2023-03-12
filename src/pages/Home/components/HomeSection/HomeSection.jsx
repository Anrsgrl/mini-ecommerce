import React from 'react';
import "./homeSection.scss";

const HomeSection = (props) => {
    const { reverse, bg, img, title, content, button } = props;
    return (
        <div className={`home-section d-flex align-items-center ${bg ? "bg-white" : ""}`}>
            <div className="page-container">
                <div className={`row full-witdh mx-auto section-row ${reverse ? "flex-md-row-reverse" : ""}`}>
                    <div className="col-7 col-md-4 product-image">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-8 product-title text-center text-md-start p-0 pe-md-5">
                        <h4>{title}</h4>
                        <span>
                            {content}
                        </span>
                        <button>{button}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection;