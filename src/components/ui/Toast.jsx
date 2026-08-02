function Toast({

    type = "success",

    message

}){


    if(!message){

        return null;

    }



    return (

        <div

            className="
                fixed
                bottom-6
                left-1/2
                z-[100]
                -translate-x-1/2
                rounded-lg
                px-5
                py-3
                text-sm
                text-white
                shadow-xl
            "

            style={{

                background:

                    type === "error"

                        ? "#DC2626"

                        : "#16A34A"

            }}

        >

            {message}

        </div>

    );

}


export default Toast;