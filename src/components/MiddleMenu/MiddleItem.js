import React from 'react';


export default (props) => {
    const { icon, title } = props.data;
    const imgSrc = "/images/"+ icon
    return(
        <div className="quickmenu-item">
            <div className="item-block">
                <img src={imgSrc} />
                <div className="md-title">{title}</div>
            </div>
        </div>
    )
}