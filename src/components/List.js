import React, { Component } from "react"
import ListItem from "./ListItem"


class List extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        const { groceryItems, shoppingItems, groceryClick } = this.props

        const groceryList = groceryItems && groceryItems.map(item => <ListItem item={item} key={item.id} clickEvent={groceryClick} />)
        const shoppingList = shoppingItems && shoppingItems.map(item => <ListItem item={item} key={item.id} readOnly={true} />)

        return (
            <div>
                {groceryList}
                {shoppingList}
            </div>
        );
    }
}

export default List