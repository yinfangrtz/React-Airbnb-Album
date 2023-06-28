import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
// import Contact from "./Contact"
import data from "./data"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

//key for remove the Warning: Each child in a list should have a unique "key" prop. Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information. Card App
export default function App() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item} // and card don't need .item, it is spread object
                
                // item={item}
                
            />
            // <Card
            //     key={item.id}
            //     img={item.coverImg}
            //     rating={item.stats.rating}
            //     reviewCount={item.stats.reviewCount}
            //     location={item.location}
            //     title={item.title}
            //     price={item.price}
            //     openSpots={item.openSpots}
            // />
            
        )
    })  
            
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

            // <Contact 
            //     img="./images/mr-whiskerson.png" 
            //     name="Mr. Whiskerson"
            //     phone="(212) 555-1234"
            //     email="mr.whiskaz@catnap.meow"
            // />

            // <Contact 
            //     img="./images/fluffykins.png"
            //     name="Fluffykins"
            //     phone="(212) 555-2345"
            //     email="fluff@me.com"
            // />
            // <Contact 
            //     img="./images/felix.png"
            //     name="Felix"
            //     phone="(212) 555-4567"
            //     email="thecat@hotmail.com"
            // />
            // <Contact 
            //     img="./images/pumpkin.png"
            //     name="Pumpkin"
            //     phone="(0800) CAT KING"
            //     email="pumpkin@scrimba.com"
            // />