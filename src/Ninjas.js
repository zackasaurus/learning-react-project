import React from 'react';
// Destructuring
const Ninjas = ({ ninjas, deleteNinja }) => {
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 20) {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    {/* Anonymous Function */}
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                </div>
            )
        }
    })
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}



export default Ninjas
