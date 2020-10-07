import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Bresaola pork belly beef ribs jerky cow pig.</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="Images/img-9.jpg"
                        text="Alcatra strip steak venison, ground round drumstick spare ribs corned beef pastrami turducken jowl chicken."
                        label="Shankle"
                        path="/services"
                        />
                        <CardItem 
                        src="Images/img-8.jpg"
                        text="Rump sausage pastrami, hamburger ball tip boudin salami swine, cow biltong t-bone."
                        label="Beef hamburger"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="Images/img-7.jpg"
                        text="Alcatra strip steak venison, ground round drumstick spare ribs corned beef pastrami turducken jowl chicken."
                        label="Tenderloin"
                        path="/services"
                        />
                        <CardItem 
                        src="Images/img-6.jpg"
                        text="Alcatra prosciutto kielbasa meatloaf fatback, strip steak tenderloin tri-tip landjaeger cow rump short ribs pancetta corned beef."
                        label="Frankfurter"
                        path="/services"
                        />
                        <CardItem 
                        src="Images/img-5.jpg"
                        text="Spare ribs hamburger capicola chuck flank tongue venison turkey cow ball tip kielbasa biltong pig."
                        label="Brisket"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
