import { ChevronDown } from "lucide-react";


function Select({

    value,

    onChange,

    children,

    className = "",

    ...props

}){

    return (

        <div
            className="
                relative
                w-full
            "
        >

            <select

                value={value}

                onChange={onChange}

                className={`
                    h-11
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-[#E7E5E1]
                    bg-white
                    px-4
                    pr-10
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


            <ChevronDown

                size={16}

                className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-[#9A958C]
                "

            />

        </div>

    );

}


export default Select;