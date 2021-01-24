import React from 'react'
import './card.styles.scss'

// "id": 1,
//     "title": "Dauntless",
//     "thumbnail": "https://www.freetogame.com/g/1/thumbnail.jpg",
//     "short_description": "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
//     "game_url": "https://www.freetogame.com/open/dauntless",
//     "genre": "MMORPG",
//     "platform": "PC (Windows)",
//     "publisher": "Phoenix Labs",
//     "developer": "Phoenix Labs, Iron Galaxy",
//     "release_date": "2019-05-21",
//     "freetogame_profile_url": "https://www.freetogame.com/dauntless"

const Card = ({id, title, thumbnail,short_description, game_url, genre, platform, publisher, developer, release_date}) => (
    <div className="game-card">
        <img src={`${thumbnail}`} alt=""/>
        <p>{title}</p>
    </div>
)

export default Card