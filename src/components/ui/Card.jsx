function Card({ 
    children, 
    className = "" 
}) {

    return (

        <div
            className={`
                rounded-xl
                border
                border-[#E7E5E1]
                bg-white
                ${className}
            `}
        >

            {children}

        </div>

    );

}

export default Card;