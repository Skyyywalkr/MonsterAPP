import React from 'react'
import './card-style.css'

export default function Card(props) {
    return (
        <div className={'card-container'}>
            <img alt='Monster' src={`https://robohash.org/${props.Monster.id}?set=set2&size=180x180`} />
            
            <h2>{props.Monster.name}</h2>
            <p> {props.Monster.email}</p>

        </div>
    )
}
