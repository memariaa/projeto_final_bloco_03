function Footer(){
    let data = new Date().getFullYear()
    
    return(
        <>
            <div className="flex justify-center w-full px-2 text-white bg-teal-700 mt-auto border-t border-red-400 p-4">
                <p className='text-base font-semi-bold text-center md:text-xl'>
                    © {data} Farmácia. Todos os direitos reservados.
                </p>
            </div>
        </>
    );
}
export default Footer