import {CiSearch} from "react-icons/ci";

const SearchBar = ({className}: {className? : string}) => (
    <div className={`relative ${className}`}>
        <input
            type="text"
            placeholder="جستجو در محصولات..."
            className="w-full px-10 py-2.5 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50"
        />
        <span className="absolute top-1/2 -translate-y-1/2 right-3 text-2xl text-primary">
            <CiSearch/>
        </span>
    </div>
);
export default SearchBar;