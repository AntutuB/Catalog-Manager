function Select({

    value,

    onChange,

    children,

    className = "",

    ...props

}){

    return (

        <select

            value={value}

            onChange={onChange}

            className={`
                h-11
                rounded-xl
                border
                border-[#E7E5E1]
                bg-white
                px-4
                text-sm
                text-[#1C1B1A]
                outline-none
                transition-colors

                hover:border-[#D6D3CE]

                focus:border-black
                focus:ring-2
                focus:ring-black/5

                ${className}
            `}

            {...props}

        >

            {children}

        </select>

    );

}

export default Select;