function MainLayout({ children }){

    return(

        <div className="w-full min-h-screen bg-gray-100">

            <main className="w-full min-h-screen">

                {children}

            </main>

        </div>

    );

}

export default MainLayout;