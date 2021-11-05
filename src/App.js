// ProductPanel.js

import React from 'react';


function ProductPanel(){

    const [productId, setProductId] = React.useState('');

    const [productName, setProductName] = React.useState('');

    const [productDatePurchased, setProductDatePurchased] = React.useState('');


    function showClickHandler () {
        window.alert("[" + "id = "+ productId + ", name = "+productName+ ", datePurchased = "+ productDatePurchased +"]");

    }

    
    function clearClickHandler () {
        setProductId('');
        setProductName('');
        setProductDatePurchased('');
    }


    return(
        <div>

            <input placeholder="Product ID" value={productId}  onChange = { e => setProductId(e.target.value)}  ></input>

            <br/>

            <input placeholder="Product Name" value={productName}  onChange = { e => setProductName(e.target.value)}  ></input>

            <br/>

            <input placeholder="Product Date Purchased" value={productDatePurchased}  onChange = { e => setProductDatePurchased(e.target.value)}  ></input>
            
            <br/>

            <br/>

            <button style={{color:"blue"}} onClick={showClickHandler}>show</button>

            <button style={{color:"red"}} onClick={clearClickHandler}>Clear</button>

            <br/><br/><br/><br/>

            <input placeholder="Some value"></input>

        </div>
    );

}

export default ProductPanel;