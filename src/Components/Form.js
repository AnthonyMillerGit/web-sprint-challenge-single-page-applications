import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


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

const initialPizzaOrder = []



function Form () {
    // STATES //
    const [pizzaOrder, setPizzaOrder] = useState(initialPizzaOrder)
    const [formValues, setFormValues] = useState(initialFormValues) // object
    // const [formErrors, setFormErrors] = useState(initialFormErrors) // object
    // const [disabled, setDisabled] = useState(initialDisabled)       // boolean

    // HELPERS //
    const postNewOrder = newOrder => {
        axios.post("notarealsite.com", newOrder)
        .then(res => {
            setPizzaOrder([...pizzaOrder, res.data])
            console.log(pizzaOrder)
        })
        .catch(err => {
            console.log(`NO PIZZA FOR YOU ${err}`)
        })
        setFormValues(initialFormValues)
    }




    // EVENT HANDLERS //

    const inputChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputChange(name, valueToUse)
    }

    const formSubmit = () => {
        const newPizzaOrder = {
            size: formValues.size,
            sauce: formValues.sauce.trim(),
            specialInstructions: formValues.specialInstructions.trim(),
            toppings: ['cheese', 'pepperoni', 'anchovies', 'sausage', 'mushrooms', 'peppers'].filter(topping => formValues[topping])
        }
        postNewOrder(newPizzaOrder)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit()
    }
    
    const history = useHistory()
    
    const completeOrder = () => {
        history.push('/Confirm')
    }


    return (
        <div>
            <h3>Build Your Own Pizza!</h3>
            <form onSubmit={onSubmit}>
                <label>Choice Of Size
                    <select
                        onChange={onChange}
                        value={formValues.size}
                        name='size'
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
                    checked={formValues.cheese}
                    onChange={onChange}
                    />
                </label>
        
                <label>Pepperoni
                    <input 
                    type='checkbox'
                    name='pepperoni'
                    checked={formValues.pepperoni}
                    onChange={onChange}
                    />
                </label>
        
                <label>Anchovies
                    <input 
                    type='checkbox'
                    name='anchovies'
                    checked={formValues.anchovies}
                    onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input 
                    type='checkbox'
                    name='sausage'
                    checked={formValues.sausage}
                    onChange={onChange}
                    />
                </label>
        
                <label>Mushrooms
                    <input 
                    type='checkbox'
                    name='mushrooms'
                    checked={formValues.mushrooms}
                    onChange={onChange}
                    />
                </label>
                <label>Peppers
                    <input 
                    type='checkbox'
                    name='peppers'
                    checked={formValues.peppers}
                    onChange={onChange}
                    />
                </label>
            <h3>Any Special Instructions?</h3>
                <input 
                    value={formValues.specialInstructions}
                    onChange={onChange}
                    name='specialInstructions'
                    type='text'
                    />
                <br></br>
                <br></br>
                <button onClick={completeOrder}>Submit</button>
            </form>
        </div>
    )
}

export default Form