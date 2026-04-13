import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type { Categoria } from "../../../models/categoria";
import { deletar, buscar } from "../../../services/service";
import { ClipLoader } from "react-spinners";

function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        
        } catch (error: any) {
            alert('Tema não encontrado!')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
            alert('Categoria apagada com sucesso')
            retornar()
            
        } catch (error) {
            alert('Erro ao apagar a categoria')
            console.error(error)

        }

        setIsLoading(false)
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='w-fit border border-teal-700 flex flex-col rounded-2xl overflow-hidden justify-between mx-auto shadow-sm'>
            <header className='flex flex-col justify-between items-center py-2 px-6 bg-teal-700 text-white font-bold gap-4'>  
                <h2 className="text-2xl">Deletar Categoria</h2>
                    
                <p className="text-xl font-semibold">Tem certeza que deseja deletar a categoria "{categoria.nome}"? Essa ação não pode ser desfeita.</p>
                
                <div className="flex text-teal-800 gap-4">
                    <button className='w-fit rounded-full px-8 border border-yellow-50 bg-yellow-50/80 hover:bg-yellow-50 flex items-center justify-center transition-all duration-200' onClick={retornar}>
                        Não
                    </button>

                    <button className='w-fit rounded-full px-8 border border-red-400 bg-red-400/80 hover:bg-red-500 flex items-center justify-center transition-all duration-200' onClick={deletarCategoria}>
                         {isLoading ?
                            <ClipLoader
                            color="#ffffff"
                            size={24}
                          />
                            :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </header>
        </div>
    )
}

export default DeletarCategoria