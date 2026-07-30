function Button({
    children,
    onClick,
    variant="primary"
}){

    const styles = {

        primary:
            "bg-black text-white",

        secondary:
            "border border-gray-300",

        danger:
            "bg-red-600 text-white"

    };


    return (

        <button

            onClick={onClick}

            className={`
                px-4
                py-2
                rounded
                text-sm
                ${styles[variant]}
            `}

        >

            {children}

        </button>

    );

}


export default Button;