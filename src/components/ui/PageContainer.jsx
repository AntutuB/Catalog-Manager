function PageContainer({ children }) {

    return (

        <div
            className="
                min-h-screen
                bg-[#FAFAF9]
                px-6
                py-8
                sm:px-8
                lg:px-10
            "
        >

            <div
                className="
                    mx-auto
                    w-full
                    max-w-7xl
                "
            >

                {children}

            </div>

        </div>

    );

}

export default PageContainer;