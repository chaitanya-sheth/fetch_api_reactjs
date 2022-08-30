import React from 'react'
import './App.css';

function Card(props) {
    return (
        <div className='container'>
            {props.map((item, key) => {
                return <div className="card" key={key}>
                    <div className="img"><img src={item.avatar} alt="Avatar" /></div>
                    <div className="info">
                        <div className="name">Name : {item.first_name} {item.last_name}</div>
                        <div className="email">Email : {item.email}</div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Card;
