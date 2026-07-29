function MainLayout({ children }) {

    return (

        <div>

            <header>
                <h1>Catalog Manager</h1>
            </header>

            <main>
                {children}
            </main>

        </div>

    );

}


export default MainLayout;