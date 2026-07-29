import { useState } from "react";


function Tabs({
    tabs,
    children
}){

    const [active, setActive] = useState(
        tabs[0].id
    );


    return (

        <div>

            <div>

                {
                    tabs.map(tab => (

                        <button
                            key={tab.id}
                            onClick={() =>
                                setActive(tab.id)
                            }
                        >
                            {tab.label}
                        </button>

                    ))
                }

            </div>


            <div>

                {
                    children(active)
                }

            </div>

        </div>

    );

}


export default Tabs;