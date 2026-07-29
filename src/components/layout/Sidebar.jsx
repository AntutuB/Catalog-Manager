import { NavLink } from "react-router-dom";

import {
    LayoutDashboard,
    Package,
    FolderOpen,
    PenSquare,
    Image,
    FileOutput
} from "lucide-react";

const items = [

    {
        label:"Dashboard",
        to:"/",
        icon:LayoutDashboard
    },

    {
        label:"Productos",
        to:"/products",
        icon:Package
    },

    {
        label:"Categorías",
        to:"/categories",
        icon:FolderOpen
    },

    {
        label:"Editor",
        to:"/editor",
        icon:PenSquare
    },

    {
        label:"Plantillas",
        to:"/templates",
        icon:Image
    },

    {
        label:"Exportación",
        to:"/export",
        icon:FileOutput
    }

];

function Sidebar(){

    return(

        <aside className="w-64 bg-white border-r border-gray-200">

            <nav className="p-4 flex flex-col gap-2">

                {

                    items.map(item=>{

                        const Icon=item.icon;

                        return(

                            <NavLink

                                key={item.to}

                                to={item.to}

                                className={({isActive})=>

                                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                                        isActive
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`

                                }

                            >

                                <Icon size={18}/>

                                {item.label}

                            </NavLink>

                        );

                    })

                }

            </nav>

        </aside>

    );

}

export default Sidebar;