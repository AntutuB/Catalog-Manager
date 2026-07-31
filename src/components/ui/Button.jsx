function Button({

    children,

    onClick,

    variant="primary",

    disabled=false,

    type="button",

    icon

}){


    const styles = {


        primary:
        `
        bg-[#1F4B4D]
        text-white
        hover:bg-[#163839]
        `,


        secondary:
        `
        bg-white
        border
        border-[#E7E5E1]
        text-[#1C1B1A]
        hover:bg-[#FAFAF9]
        `,


        danger:
        `
        bg-[#F7EBEA]
        border
        border-[#F0D5D2]
        text-[#A23B3B]
        hover:bg-[#F3DEDB]
        `,


        ghost:
        `
        bg-transparent
        text-[#6B6862]
        hover:bg-[#FAFAF9]
        `

    };



    return (

        <button

            type={type}

            disabled={disabled}

            onClick={onClick}

            className={`
                inline-flex
                items-center
                justify-center
                gap-2

                px-4
                py-2

                rounded-lg

                text-sm
                font-medium

                transition-colors

                disabled:opacity-40
                disabled:pointer-events-none

                ${styles[variant]}

            `}

        >

            {icon}

            {children}

        </button>

    );

}


export default Button;