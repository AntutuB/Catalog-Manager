function Tabs({
    tabs,
    active,
    onChange
}){


    return (

        <div className="flex gap-6 border-b mb-6">


            {
                tabs.map(tab => (

                    <button

                        key={tab.id}

                        onClick={() =>
                            onChange(tab.id)
                        }

                        className={`
                            pb-3
                            ${
                                active === tab.id
                                ?
                                "border-b-2 border-black font-semibold"
                                :
                                "text-gray-500"
                            }
                        `}

                    >

                        {tab.label}

                    </button>

                ))
            }


        </div>

    );

}


export default Tabs;