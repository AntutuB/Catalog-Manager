function IconButton({

    icon,

    onClick,

    label,

    variant="default"

}){


    const variants = {

        default: `
            bg-white
            border-[#E7E5E1]
            text-[#6B6862]
            hover:bg-[#FAFAF9]
        `,


        danger: `
            bg-white
            border-[#E7E5E1]
            text-[#A23B3B]
            hover:bg-[#F7EBEA]
        `

    };



    return (

        <button

            type="button"

            onClick={onClick}

            title={label}

            aria-label={label}

            className={`
                inline-flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                transition-colors
                ${variants[variant]}
            `}

        >

            {icon}

        </button>

    );

}


export default IconButton;