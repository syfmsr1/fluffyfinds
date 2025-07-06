import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="position-relative w-100" style={{ maxWidth: "400px" }}>
      <input
        type="text"
        placeholder="Search for a pet..."
        value={query}
        onChange={handleSearch}
        className="form-control ps-5"
      />
      <div className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
        <Search size={20} />
      </div>
    </form>
  );
}
