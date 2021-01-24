
import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

//Styling
const styles = {
    listItem: {
        backgroundColor: 'white',
        height: 'auto',
        listStyleType: "none",
        margin: '20px',
        padding: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: '5px',
        width: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        border: 'none',
        color: 'black'
    }
}

function ListItem({ item, clickEvent, readOnly }) {
    return (
        <li
            style={styles.listItem}
            key={item.id}
            value={item.title}
            className="List-Item">
            {item.title}
            {readOnly && <span>Amount: {item.amount}</span>}
            {!readOnly && <Button onClick={() => !readOnly && clickEvent(item.title)} startIcon={<AddShoppingCartIcon />} style={styles.btn}>add to Cart</Button>}
        </li>
    )
}

export default ListItem