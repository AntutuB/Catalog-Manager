import { Package2 } from "lucide-react";

function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

      <div className="flex items-center gap-3">

        <Package2 size={22} />

        <h1 className="text-lg font-semibold">
          Catalog Manager
        </h1>

      </div>

    </header>
  );
}

export default Header;