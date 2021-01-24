import React from 'react'
import './card-list.style.scss'

import Card from '../card/card.component'

const CardList = ({games}) => (
    <div className="card-list">
        {
            games.map((game, i) => {
                return (
                    <Card 
                        key={i} 
                        title={game.title}
                        thumbnail={game.thumbnail}/>
                )
            })
        }
    </div>
)

export default CardList