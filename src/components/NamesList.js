import React from 'react'
import Person from './Person'

function NamesList() {
    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 28,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 25,
            skill: 'Vue'
        },
    ]

    // const personList = persons.map(person => (
    //     <h2>
    //         I am {person.name}. I am {person.age} years old. I know {person.skill}.
    //     </h2>
    // ))

    const personList = persons.map(person => <Person key={person.id} person={person}/>)

    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

            {/* {
                names.map(name => <h2>{name}</h2>)
            } */}

            {/* {nameList} */}

            {personList}
        </div>
    )
}

export default NamesList
