function PageContainer({
    children,
    className = ""
}){

    return (

        <div
            className={`
                flex
                h-screen
                w-full
                flex-col
                overflow-hidden

                bg-[#F9F7F3]

                ${className}
            `}
        >

            {children}

        </div>

    );

}

export default PageContainer;