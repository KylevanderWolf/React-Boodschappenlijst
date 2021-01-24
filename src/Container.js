import React, { useState, useEffect } from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'
import Grid from '@material-ui/core/Grid';


//Styling
const styles = {
    container: {
        width: '100%',
        minHeight: 'auto',
        maxHeight: 'auto',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginTop: '20px'
    },
    groceryContainer: {
        backgroundColor: 'white',
        minHeight: '60vh',
        maxHeight: 'auto',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        width: '100%',
        margin: "20px",
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
    },
    shoppingContainer: {
        backgroundColor: 'white',
        minHeight: '60vh',
        maxHeight: 'auto',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        width: '100%',
        margin: "20px",
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
    },
    subtitle: {
        marginBottom: '20px'
    }
}

function Container() {

    //STATE of All Grocery List Items
    const [groceryItems, setgroceryItems] = useState([])

    //STATE of All Shopping List Items 
    const [shoppingListItems, setshoppingListItems] = useState([])

    //Add Grocery Item to Grocery List
    const submitGroceryItem = inputValue => setgroceryItems([{ id: (groceryItems.length + 1), title: inputValue }, ...groceryItems])

    //Add item to Shopping Cart
    const handleClickGroceryItem = groceryItem => {
        let duplicateItem = shoppingListItems.find(item => item.title === groceryItem)
        duplicateItem ? addAmountToItem(groceryItem) : setshoppingListItems(prevState => [{ id: shoppingListItems.length + 1, title: groceryItem, amount: 1 }, ...prevState])
    }

    //Add Amount
    const addAmountToItem = (groceryItem) => {
        const duplicatedList = [...shoppingListItems]
        duplicatedList.map(item => item.title === groceryItem && item.amount++) && setshoppingListItems(duplicatedList)
    }

    //Empty Shopping Cart
    const emptyCart = () => setshoppingListItems([])

    return (
        <Grid container style={styles.container}>

            <Grid
                item
                xs={12} sm={7} md={5} lg={4} xl={4}
                style={styles.groceryContainer}
            >

                <h1 align="center">Grocery List</h1>
                <span align="center" style={styles.subtitle}>Voeg je items toe</span>
                <GroceryList
                    submitGrocery={submitGroceryItem}
                    groceryList={groceryItems}
                    groceryClicked={handleClickGroceryItem}
                />
            </Grid>

            <Grid
                item
                xs={12} sm={7} md={5} lg={4} xl={4}
                style={styles.shoppingContainer}
            >
                <h1 align="center">Shopping Cart </h1>
                <ShoppingCart
                    clearItems={emptyCart}
                    shoppingList={shoppingListItems}
                />
            </Grid>

        </Grid>
    )
}
export default Container