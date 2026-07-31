function ContentContainer({

    children,

    className = ""

}){

    return (

        <main
            className={`
                w-full
                px-20
                py-20
                ${className}
            `}
        >

            {children}

        </main>

    );

}

export default ContentContainer;