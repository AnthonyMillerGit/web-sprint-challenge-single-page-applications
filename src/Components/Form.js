import React, { useState, useEffect } from 'react'
import axios from 'axios'


const initialFormValues = {
    //dropdown
    size: '',
    //radio buttons
    sauce: '',
    //checkboxes
    cheese: false,
    pepperoni: false,
    anchovies: false,
    sausage: false,
    mushrooms: false,
    peppers: false,
    //text input
    specialInstructions:''
}




function Form () {
    // STATES //
    // const [friends, setFriends] = useState(initialFriends)          // array of friend objects
    const [formValues, setFormValues] = useState(initialFormValues) // object
    // const [formErrors, setFormErrors] = useState(initialFormErrors) // object
    // const [disabled, setDisabled] = useState(initialDisabled)       // boolean

    // EVENT HANDLERS //
    const onChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        })
      }

    
    return (
        <div>
            <h3>Build Your Own Pizza!</h3>
            <form>
                <label>Choice Of Size
                    <select
                        name='size'
                        onChange={onChange}
                        value={formValues.size}
                        >
                    <option value=''>-- Select a size --</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='XLarge'>X-Large</option>
                    </select>
                </label>
            <h3>Choose Type Of Sauce</h3>
                <label>Original Red
                    <input 
                    type='radio'
                    name='sauce'
                    value='Original Red'
                    onChange={onChange}
                    checked={formValues.sauce === 'Original Red'}
                    />
                </label>
        
                <label>Garlic Ranch
                    <input
                    type='radio'
                    name='sauce'
                    value='Garlic Ranch'
                    onChange={onChange}
                    checked={formValues.sauce === 'Garlic Ranch'}
                    />
                </label>
                <label>BBQ Sauce
                    <input 
                    type='radio'
                    name='sauce'
                    value='BBQ Sauce'
                    onChange={onChange}
                    checked={formValues.sauce === 'BBQ Sauce'}
                    />
                </label>
        
                <label>Spinach Alfredo
                    <input
                    type='radio'
                    name='sauce'
                    value='Spinach Alfredo'
                    onChange={onChange}
                    checked={formValues.sauce === 'Spinach Alfredo'}
                    />
                </label>
            <h3>Add Toppings</h3>
                <label>Cheese
                    <input 
                    type='checkbox'
                    name='cheese'
                    // checked={values.hiking}
                    // onChange={onChange}
                    />
                </label>
        
                <label>Pepperoni
                    <input 
                    type='checkbox'
                    name='pepperoni'
                    // checked={values.reading}
                    // onChange={onChange}
                    />
                </label>
        
                <label>Anchovies
                    <input 
                    type='checkbox'
                    name='anchovies'
                    // checked={values.coding}
                    // onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input 
                    type='checkbox'
                    name='sausage'
                    // checked={values.hiking}
                    // onChange={onChange}
                    />
                </label>
        
                <label>Mushrooms
                    <input 
                    type='checkbox'
                    name='mushrooms'
                    // checked={values.coding}
                    // onChange={onChange}
                    />
                </label>
                <label>Peppers
                    <input 
                    type='checkbox'
                    name='peppers'
                    // checked={values.coding}
                    // onChange={onChange}
                    />
                </label>
                    
                <label>Email
            <h3>Any Special Instructions?</h3>
                <input 
                    // value={values.specialInstructions}
                    // onChange={onChange}
                    name='specialInstructions'
                    type='text'
                    />
                </label>
                <br></br>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form