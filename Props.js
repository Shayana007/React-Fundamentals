import React from 'react'

function Greets({name, heroName}){
    console.log(props)
    return (
    <div>
    <h1>hello {name} a.k.a {heroName}
    </h1>
    {props.children}
    </div>
    )
}
export default Greets