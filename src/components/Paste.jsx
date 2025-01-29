import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch()
  const pastes = useSelector((state) => state.paste.pastes);

  const filteredData = pastes.filter((paste) =>
    paste.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="p-4">
      <input
        className="p-2 rounded-2xl min-w-[600px] mt-5 border border-gray-300"
        type="search"
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 ? (
          filteredData.map(
            (paste) => (
            <div key={paste?._id} className="border p-3 rounded-md">
              <div>{paste.title}</div>
              <div>{paste.content}</div>
              <div className="flex flex-row gap-4 place-content-evenly">
                <button>Edit</button>
                <button>View</button>
                <button onClick={() => handleDelete(paste?._id)}>Delete</button>
                <button onClick={() => {
                  navigator.clipboard.writeText(paste?.content)
                  toast.success("Copied to clipborad")
                }}>Copy</button>

                <button onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: paste.title,
                      text: paste.title,
                      url: window.location.href,
                    }).then(() => toast.success("Shared Sucessfully!"))
                    .catch(() => toast.error("Failed to share"))
                  } else {
                    toast.error("Sharong not supported on this device")
                  }
                }}>Share</button>
              </div>
              <div>
                {paste.createdAt}
              </div>
            </div>
          ))
        ) : (
          <p>No pastes found!</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
