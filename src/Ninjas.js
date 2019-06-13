import React from 'react';
                // Destructuring
const Ninjas = ({ninjas}) => {
   
    // Take an old array and push it into a new array
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
        )
    })
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}



export default Ninjas
