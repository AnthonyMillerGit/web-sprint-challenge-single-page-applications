import React from 'react';
import {useHistory} from 'react-router-dom';
import pizza from './Assets/Pizza.jpg';
import styled from 'styled-components'

const Container = styled.div`
    height: 50vh;
    width: 100%;
    background-image: url(${pizza});
    object-fit: cover;
    position: relative;
`
const PizzaButton = styled.button`
    align-items:center;
    position: absolute;
    top: 75%;
    right: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1.5rem;
    padding: 1%1rem;
    background-color: #E9E7E7;
    &:hover{
        color:red;
    }
`

const Home = () => {

    const history = useHistory()

    const eatPizza = () => {
        history.push('/Form')
    }

    return (
        <Container>
            <PizzaButton src={pizza} alt="push for pizza">
                <button onClick={eatPizza}>Order a Pizza</button>
            </PizzaButton>
        </Container>
    )
}

export default Home