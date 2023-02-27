import { useEffect, useState } from 'react';
import './SearchBar.scss';


function SearchBar({ setSearchTerm }) {
    const [localSearchTerm, setLocalSearchTerm] = useState('');

    useEffect(() => setSearchTerm(localSearchTerm), [localSearchTerm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(localSearchTerm);
    }

    return (
        <div className="SearchBar">
            <form className="SearchBar__form" onSubmit={handleSubmit}>
                <input className="SearchBar__input" placeholder="Search on wiki..." onChange={(e) => setLocalSearchTerm(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchBar