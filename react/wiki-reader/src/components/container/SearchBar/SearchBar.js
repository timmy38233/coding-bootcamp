import './SearchBar.scss';


function SearchBar({ setSearchTerm }) {
    return (
        <div className="SearchBar">
            <form className="SearchBar__form">
                <input className="SearchBar__input" placeholder="Search on wiki..." onInput={(e) => setSearchTerm(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchBar