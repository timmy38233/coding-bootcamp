import { useState } from 'react';
import './SearchBar.scss';


function SearchBar({ setSearchTerm }) {
    const [localSearchTerm, setLocalSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(localSearchTerm);
    }
    
    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <input placeholder="Search on wiki..." onChange={(e) => setLocalSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default SearchBar