import { useEffect, useState } from 'react';

function useSearch(arr, keys = ['title', 'content']) {
    const [searchText, setSearchText] = useState('');
    const [filteredEntries, setFilteredEntries] = useState(arr);

    useEffect(() => {
        setFilteredEntries(arr.filter((e, i) => {
            let found = false;
            for (let j = 0; j < keys.length && !found; j++) {
                found = e[keys[j]].includes(searchText);
            }
            return found;
        }));
    }, [searchText, arr]);

    return [filteredEntries, setSearchText];
}

export default useSearch;