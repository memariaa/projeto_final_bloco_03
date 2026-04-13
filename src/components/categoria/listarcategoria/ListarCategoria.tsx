import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"
import CardCategoria from "../cardcategoria/CardCategoria"
import type { Categoria } from "../../../models/categoria"
import { buscar } from "../../../services/service"

function ListarCategoria() {

    const [isLoading, setIsLoading] = useState(true)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias)
        } catch (error) {
            console.error("Erro ao buscar categorias", error)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        buscarCategorias().finally(() => setIsLoading(false))
    }, [])

    return (
        <div className="flex justify-center w-full my-4">
            {isLoading ? (
                <SyncLoader color="#00786F" size={32} />
            ) : (
                <div className="container flex flex-col">
                    {categorias.length === 0 && (
                        <div className="my-8 text-2xl text-center md:text-3xl text-teal-700 md:my-16">
                            Nenhuma categoria foi encontrada!
                        </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListarCategoria