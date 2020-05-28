import React from 'react'
import Card from './Card'
import './card-list-style.css';


export default function CardList(props) {
    console.log(props);
    return (
        <div className='CardList'>
           {props.Monsters.map(Monster =>
            
            <Card key={Monster.id} Monster={Monster}/>)}
        </div>
    )
}


