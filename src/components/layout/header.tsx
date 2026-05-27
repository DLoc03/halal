import { useEffect, useState } from "react";
import Logo from "../ui/logo";
import HeaderItem from "../ui/header-item";
import { Menu } from "lucide-react";
import MenuDrawer from "../ui/menu-drawer";
import { DESKTOP_SECTION_IDS } from "@/constant/section-ids";
import LanguageSwitcher from "../common/language-switcher";

function Header() {
  const [show, setShow] = useState(true);
  const [rotated, setRotated] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const handleOpenMenu = () => {
    setRotated(!rotated);
    setOpenDrawer(true);
  };
  return (
    <>
      <div
        className={`fixed top-0 z-20 w-full transition-all duration-300 ${show ? "translate-y-0 border-b border-gray-100 bg-white" : "-translate-y-full"} ${scrolled ? "shadow-lg" : ""}`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 xl:px-0">
          <Logo size="60px" />
          <div className="flex items-center gap-x-3">
            <ul className="hidden justify-end space-x-4 lg:flex">
              {DESKTOP_SECTION_IDS.map((menu, index) => (
                <HeaderItem
                  key={index}
                  menu={menu}
                  onClose={() => setOpenDrawer(false)}
                />
              ))}
            </ul>
            <LanguageSwitcher />
            <div className="active:text-primary flex items-center gap-x-3 lg:hidden">
              <Menu
                onClick={handleOpenMenu}
                className={`transform transition-transform duration-500 ${rotated ? "rotate-180" : "rotate-0"}`}
              />
            </div>
          </div>
        </div>
      </div>
      <MenuDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  );
}

export default Header;
