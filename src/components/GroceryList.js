
import React from "react"
import List from './List'
import InputField from './InputField'


function GroceryList({ groceryList, groceryClicked, submitGrocery }) {

    return (
        <div>
            <InputField submitItem={submitGrocery} />
            <List
                groceryItems={groceryList}
                groceryClick={groceryClicked}
            />
        </div>
    )
}

export default GroceryList