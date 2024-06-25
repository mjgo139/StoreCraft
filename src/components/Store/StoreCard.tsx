import { Link } from 'react-router-dom'

export default function StoreCard() {
    return (
        <>

            <div className="w-11/12 h-full border-l-indigo-700 bg-red-600 ml-4 flex flex-col justify-center">
                <div className="flex justify-center">

                    <img

                        src={`/img/tienda_a.jpg`}
                        alt="imagen guitarra"
                    />
                </div>
                <div className="flex flex-col justify-center text-center items-center">
                    <p className=" p-2 text-white font-bold">TIENDA A</p>
                    <p className=" p-2 text-white font-bold text-xl">Descubre productos de calidad y estilo !Explora ahora!</p>
                    <button className=" w-3/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <Link to='/productList' className='text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white'>Explorar Tienda</Link>

                    </button>
                </div>
            </div>

        </>
    )
}
