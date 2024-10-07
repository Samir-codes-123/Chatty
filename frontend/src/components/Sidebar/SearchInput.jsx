import { Search } from "lucide-react";
const SearchInput = () => {
  return (
    <form className="flex  items-center gap-2">
      <input
        type="text"
        className="input input-info input-bordered rounded-full"
        placeholder="Search.."
      />
      <button className="btn btn-outline btn-info">
        <Search />
      </button>
    </form>
  );
};

export default SearchInput;
