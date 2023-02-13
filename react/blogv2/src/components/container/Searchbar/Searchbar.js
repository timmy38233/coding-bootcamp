import useSearch from "../../../hooks/useSearch";

import './Searchbar.scss';

function Searchbar() {
    const [setSearchText] = useSearch();

  return (
    <input type="text" className="Searchbar" onChange={(e) => setSearchText(e.target.value)} placeholder="Search..." />
  )
}

export default Searchbar