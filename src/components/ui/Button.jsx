function Button({

    children,

    onClick,

    variant="primary",

    disabled=false,

    type="button"

}){


    const styles = {


        primary:
            `
            bg-black
            text-white
            hover:bg-gray-800
            `,


        secondary:
            `
            border
            border-gray-300
            bg-white
            hover:bg-gray-50
            `,


        danger:
            `
            bg-red-600
            text-white
            hover:bg-red-700
            `,


        ghost:
            `
            bg-transparent
            hover:bg-gray-100
            `

    };




    return (


        <button


            type={type}


            disabled={disabled}


            onClick={onClick}


            className={`
                px-4
                py-2
                rounded-lg
                text-sm
                font-medium
                transition-colors
                disabled:opacity-40
                disabled:cursor-not-allowed
                ${styles[variant]}
            `}


        >

            {children}


        </button>


    );


}


export default Button;