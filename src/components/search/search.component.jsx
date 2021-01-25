import { React } from "react";
import './search.styles.scss'

const SearchField = ({onSearchChange}) => (
    <div className="search-games ui large input tc">
        Search: 
        <input 
            type="text" 
            onChange={onSearchChange}/>
    </div>
)

export default SearchField;