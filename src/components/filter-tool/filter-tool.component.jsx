import { React } from "react";
import './filter-tool.sytes.scss'

// import FilteredGenre from '../filter-genre/filter-genre.component'

const FilterTool = ({filteredGenres}) => (
    <div className="filter">
        {filteredGenres}
        {/* {
            filteredGenres.map((genre, i) => {
                return <FilteredGenre genre={genre} />
            })
        } */}
    </div>
)

export default FilterTool