import useSearch from "../../../hooks/useSearch"

function Searchbar() {
    const [setSearchText] = useSearch();

  return (
    <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search..." />
  )
}

export default Searchbar