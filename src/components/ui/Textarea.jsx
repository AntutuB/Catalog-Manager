function Textarea({

    className = "",

    ...props

}){

    return (

        <textarea

            className={`
                min-h-28
                w-full
                rounded-xl
                border
                border-[#E7E5E1]
                bg-white
                px-4
                py-3
                text-sm
                text-[#1C1B1A]
                placeholder:text-[#9A958C]
                outline-none
                transition-colors
                hover:border-[#D6D3CE]
                focus:border-black
                focus:ring-2
                focus:ring-black/5
                ${className}
            `}

            {...props}

        />

    );

}

export default Textarea;
