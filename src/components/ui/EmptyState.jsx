function EmptyState({

    title,

    description,

    action

}){


    return (

        <div
            className="
                flex
                h-full
                min-h-[250px]
                flex-col
                items-center
                justify-center
                gap-3
                rounded-lg
                border
                border-gray-200
                bg-white
                px-6
                text-center
            "
        >

            <h3
                className="
                    text-base
                    font-semibold
                    text-gray-800
                "
            >

                {title}

            </h3>


            {
                description && (

                    <p
                        className="
                            max-w-md
                            text-sm
                            text-gray-500
                        "
                    >

                        {description}

                    </p>

                )
            }


            {
                action && (

                    <div className="mt-3">

                        {action}

                    </div>

                )
            }


        </div>

    );

}


export default EmptyState;