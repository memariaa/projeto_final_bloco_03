import { ShoppingCartIcon } from "@phosphor-icons/react/dist/icons/ShoppingCart";
import { UserIcon } from "@phosphor-icons/react/dist/icons/User";
import Search from "./Search";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg"

function Header(){
    return(
        <>
            <div className='sticky top-0 left-0 z-50 flex justify-center w-full py-4 text-black bg-yellow-50/50 md:py-2 border-b border-red-400 shadow-xs backdrop-blur-md'>
                <div className="container flex items-center justify-between mx-6 mt-2 text-lg">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className='w-50 md:w-60' />
                    </Link>

                    <div className="relative flex items-center justify-center w-2/5 text-black max-md:hidden">
                        <Search/>
                    </div>

                    <div className='items-center hidden gap-4 py-4 md:flex'>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrar-categoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <UserIcon size={32} weight='bold' className="text-teal-700"/>
                        <ShoppingCartIcon size={32} weight='bold' className="text-teal-700"/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header