import { Search } from "lucide-react";
import { useState } from "react";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
import useConversation from "../../store/useConversation";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();
  console.log(conversations);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) toast.error("Search must be atleast 3 characters");
    const searchedConvo = conversations.data.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    console.log(searchedConvo);
    if (searchedConvo) {
      setSelectedConversation(searchedConvo);
      setSearch("");
    } else {
      toast.error("NO user found");
    }
  };
  return (
    <form className="flex  items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input input-info input-bordered rounded-full"
        placeholder="Search.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-outline btn-info" type="submit">
        <Search />
      </button>
    </form>
  );
};

export default SearchInput;
