import Logo from "./logo";
import HeaderItem from "./header-item";
import { MOBILE_SECTION_IDS } from "@/constant/section-ids";

type MenuDrawerProps = {
  open: boolean;
  onClose: () => void;
};

function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-xs transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        } z-40`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 flex h-full w-64 transform flex-col space-y-3 bg-white py-6 shadow-lg transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <Logo size="120px" className={"px-4"} />
        <nav className="flex flex-col gap-y-3">
          {MOBILE_SECTION_IDS.map((menu, index) => (
            <HeaderItem key={index} menu={menu} onClose={onClose} />
          ))}
        </nav>
      </div>
    </>
  );
}

export default MenuDrawer;
