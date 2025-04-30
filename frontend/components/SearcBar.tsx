interface SearchBarProps {
    onSearch: (query: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      onSearch(query);
    };
  
    return (
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name"
          className="border p-2 rounded-md"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </form>
    );
  };
  
  export default SearchBar;
  