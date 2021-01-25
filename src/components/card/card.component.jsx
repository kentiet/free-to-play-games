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

const Card = ({title, thumbnail, game_url, genre, platform}) => (
    <a href={game_url} target='_blank' rel="noopener noreferrer" className='hvr-bounce-in'>
        <div className="ui card">
            <img src={`${thumbnail}`} alt=""/>
            <div className="content">
                <a href={game_url} target='_blank' rel="noopener noreferrer"><h3>{title}</h3></a>
                <div className="extra-content">
                    <label className="genre-chips br4">{genre}</label>
                    <label className="platform"><i class="windows icon"></i>{platform}</label>
                </div>
            </div>
        </div>
    </a>
)

export default Card