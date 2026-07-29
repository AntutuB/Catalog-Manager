function Button({

    children,

    variant = "primary",

    type = "button",

    ...props

}){

    const variants = {

        primary:
            "bg-gray-900 text-white hover:bg-black",

        secondary:
            "bg-white border border-gray-300 hover:bg-gray-100",

        danger:
            "bg-red-600 text-white hover:bg-red-700"

    };

    return(

        <button

            type={type}

            className={`

                px-4

                py-2

                rounded-lg

                text-sm

                font-medium

                transition-colors

                ${variants[variant]}

            `}

            {...props}

        >

            {children}

        </button>

    );

}

export default Button;