import React from 'react';

function Form () {
    
    return (
        <div>
            <h3>Build Your Own Pizza!</h3>
            <form>
                <label>Choice Of Size
                    <select name='size'>
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
                    name='civil'
                    value='Original Red'
                    // onChange={onChange}
                    // checked={values.civil === 'single'}
                    />
                </label>
        
                <label>Garlic Ranch
                    <input
                    type='radio'
                    name='civil'
                    value='Garlic Ranch'
                    // onChange={onChange}
                    // checked={values.civil === 'married'}
                    />
                </label>
                <label>BBQ Sauce
                    <input 
                    type='radio'
                    name='civil'
                    value='BBQ Sauce'
                    // onChange={onChange}
                    // checked={values.civil === 'single'}
                    />
                </label>
        
                <label>Spinach Alfredo
                    <input
                    type='radio'
                    name='civil'
                    value='Spinach Alfredo'
                    // onChange={onChange}
                    // checked={values.civil === 'married'}
                    />
                </label>
            <h3>Add Toppings</h3>
                <label>Cheese
                    <input 
                    type='checkbox'
                    name='Cheese'
                    // checked={values.hiking}
                    // onChange={onChange}
                    />
                </label>
        
                <label>Pepperoni
                    <input 
                    type='checkbox'
                    name='Pepperoni'
                    // checked={values.reading}
                    // onChange={onChange}
                    />
                </label>
        
                <label>Anchovies
                    <input 
                    type='checkbox'
                    name='Anchovies'
                    // checked={values.coding}
                    // onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input 
                    type='checkbox'
                    name='Sausage'
                    // checked={values.hiking}
                    // onChange={onChange}
                    />
                </label>
        
                <label>Mushrooms
                    <input 
                    type='checkbox'
                    name='Mushrooms'
                    // checked={values.coding}
                    // onChange={onChange}
                    />
                </label>
                <label>Peppers
                    <input 
                    type='checkbox'
                    name='Peppers'
                    // checked={values.coding}
                    // onChange={onChange}
                    />
                </label>
                    

            </form>
        </div>
    )
}

export default Form