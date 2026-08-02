import { useState } from "react";

function Button({

    children,

    onClick,

    variant="primary",

    disabled=false,

    type="button",

    icon: Icon,

    size="md",

    ...props

}){


    const variants = {


        primary:
        `
        bg-[#1C1B1A]
        text-white
        border
        border-[#1C1B1A]
        hover:bg-[#353330]
        `,


        secondary:
        `
        bg-white
        text-[#1C1B1A]
        border
        border-[#E7E5E1]
        hover:bg-[#FAF9F7]
        `,


        danger:
        `
        bg-white
        text-red-600
        border
        border-red-200
        hover:bg-red-50
        `,


        ghost:
        `
        bg-transparent
        text-[#6B6862]
        hover:bg-[#F5F3EF]
        `

    };



    const sizes = {


        sm:
        `
        h-8
        min-w-fit
        !px-4
        text-xs
        `,


        md:
        `
        h-11
        min-w-fit
        !px-6
        text-sm
        `,


        lg:
        `
        h-12
        min-w-fit
        !px-7
        text-sm
        `

    };




    return (

        <button

            type={type}

            disabled={disabled}

            onClick={onClick}

            {...props}

            className={`
                inline-flex
                items-center
                justify-center

                gap-2

                rounded-xl

                whitespace-nowrap

                font-medium

                transition-colors

                duration-200

                disabled:opacity-40
                disabled:pointer-events-none

                ${sizes[size]}

                ${variants[variant]}
            `}

        >

            {
                Icon && (

                    <Icon size={16}/>

                )
            }


            {children}


        </button>

    );

}


export default Button;