import React from 'react'

function List() {
    const names = ['bruce', 'clark', 'diana']
    const persons =[
        {
            id: 1,
            name: 'A',
            age: '20',
            skill: 'React'
        },
        {
            id: 2,
            name: 'B',
            age: '21',
            skill: 'Java'
        },
        {
            id: 1,
            name: 'C',
            age: '22',
            skill: 'C'
        }
    ]
    const personList = persons.map(person => <person person={person} />)
    const nameList = names.map(name => <h2 key= {name}>{name}</h2>)
    return <div>{personList}</div>
    
}

export default List
