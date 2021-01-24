import React from "react"
import List from './List'


//Styling
const styles = {
    btnContainer: {
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    clearItemsBtn: {
        backgroundColor: 'purple',
        color: "white",
        padding: '8px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        width: '100px',
        borderRadius: '5px'
    }
}

function ShoppingCart({ shoppingList, clearItems }) {



    return (
        <div>
            <div style={styles.btnContainer}>
                <button style={styles.clearItemsBtn} onClick={() => clearItems()}>
                    Empty Card
                </button>
            </div>

            <List shoppingItems={shoppingList} />
        </div>

    )
}

export default ShoppingCart