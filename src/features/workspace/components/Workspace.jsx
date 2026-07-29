import Toolbar from "./Toolbar";
import Tabs from "./Tabs";

function Workspace() {
    return (
        <div className="min-h-screen bg-gray-100">

            <Toolbar />

            <Tabs />

        </div>
    );
}

export default Workspace;