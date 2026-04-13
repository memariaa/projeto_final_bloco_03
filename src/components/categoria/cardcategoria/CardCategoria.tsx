import { PencilIcon, TrashIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function CardCategoria() {
    return (
        <div className='border border-teal-700 flex flex-col rounded-2xl overflow-hidden justify-between shadow-sm'>
            <header className='flex flex-row justify-between items-center py-2 px-6 bg-teal-700 text-white font-bold text-2xl'>  
                <p>Categoria</p>
                    
                <div className="flex text-teal-800 gap-4">
                    <Link to='' className='w-fit rounded-full p-2 border border-yellow-50 bg-yellow-50/80 hover:bg-yellow-50 flex items-center justify-center transition-all duration-200'>
                        <PencilIcon size={24} />
                    </Link>

                    <Link to='' className=' w-fit rounded-full p-2 border border-red-400 bg-red-400/80 hover:bg-red-500 flex items-center justify-center transition-all duration-200'>
                        <TrashIcon size={24} />
                    </Link>
                </div>
            </header>

            <p className='p-8 text-2xl bg-yellow-50/80 h-full'>Descrição</p>
        </div>
    )
}

export default CardCategoria