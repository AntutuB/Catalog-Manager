function Toolbar() {

    return (

        <div className="flex items-center justify-between bg-white border-b px-8 py-5">

            <h1 className="text-2xl font-bold">
                Catálogo
            </h1>

            <div className="flex gap-3">

                <button
                    className="rounded bg-blue-600 px-5 py-2 text-white"
                >
                    Nuevo producto
                </button>

                <button
                    className="rounded bg-green-600 px-5 py-2 text-white"
                >
                    Exportar PDF
                </button>

            </div>

        </div>

    );

}

export default Toolbar;