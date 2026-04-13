import { MagnifyingGlassIcon } from "@phosphor-icons/react";

function Search() {
    return (
        <form className="relative flex items-center w-full">
            <div className="relative w-full flex items-center">
                <input className="w-full h-10 pl-4 pr-12 text-black bg-yellow-50/80 rounded-lg shadow-xs border border-teal-700 focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 placeholder:text-gray-400 transition-all duration-200"
                    type="search"
                    placeholder="Buscar produtos"
                    id="busca"
                    name="busca" 
                />
                <button className="absolute right-1 h-8 w-8 rounded-md bg-teal-700 active:bg-teal-700 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                    aria-label="Buscar"
                    type="submit" 
                >
                    <MagnifyingGlassIcon size={18} weight="bold"/>
                </button>
            </div>
        </form>
    );
}

export default Search