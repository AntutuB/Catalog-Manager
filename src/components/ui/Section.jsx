function Section({

    title,

    description,

    children

}){

    return(

        <section className="space-y-4">

            <div>

                <h2 className="text-xl font-semibold">

                    {title}

                </h2>

                {

                    description &&

                    <p className="text-gray-500 mt-1">

                        {description}

                    </p>

                }

            </div>

            {children}

        </section>

    );

}

export default Section;