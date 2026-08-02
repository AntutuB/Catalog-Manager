function ContentContainer({

    children,

    className = ""

}){

    return (

        <main
            className={`
                flex
                flex-1
                min-h-0
                flex-col
                overflow-hidden

                w-full

                px-8
                py-4

                lg:px-12
                lg:py-6

                ${className}
            `}
        >

            {children}

        </main>

    );

}

export default ContentContainer;