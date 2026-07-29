function Page({

    title,

    description,

    actions,

    children

}){

    return(

        <div className="space-y-8">

            <div className="flex justify-between items-start">

                <div>

                    <h1 className="text-3xl font-bold">

                        {title}

                    </h1>

                    {

                        description &&

                        <p className="text-gray-500 mt-2">

                            {description}

                        </p>

                    }

                </div>

                {actions}

            </div>

            {children}

        </div>

    );

}

export default Page;