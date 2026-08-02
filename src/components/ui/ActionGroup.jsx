function ActionGroup({

    children,

    className = "",

    align = "end"

}){

    const justify = {

        start: "justify-start",

        center: "justify-center",

        end: "justify-end",

        between: "justify-between"

    };



    return (

        <div

            className={`
                flex
                items-center
                gap-3
                ${justify[align]}
                ${className}
            `}

        >

            {children}

        </div>

    );

}

export default ActionGroup;