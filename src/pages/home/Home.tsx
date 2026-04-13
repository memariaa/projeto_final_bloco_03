import HeroImage from '../../assets/images/hero-image.jpg'

function Home() {
	return (
		<>
			<div style={{ backgroundImage: `url(${HeroImage})` }} className="bg-cover bg-no-repeat bg-center flex items-center h-[50vh] md:h-[70vh]">
			    <div className="container flex flex-col gap-9 text-white w-full mx-auto px-16 md:px-28">				
					<h2 className="text-3xl md:text-5xl font-bold ">
					Sua saúde em primeiro lugar.
					</h2>

					<p className="text-lg md:text-xl ">
						Encontre medicamentos, cuidados pessoais e tudo para o seu bem-estar com praticidade.
					</p>  

                    <button className='w-fit rounded-xl bg-white text-teal-700 font-bold border-teal-700/50 border-solid border py-2 px-4 shadow-xs cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95'
                        aria-label="Ver Produtos"
                        type="submit" 
                    >
                        Ver Produtos
					</button>          
				</div>
            </div>
		</>
	)
}

export default Home