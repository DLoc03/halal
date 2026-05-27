import type { HeaderItemType } from "@/type/header-item";
import { useTranslation } from "react-i18next";

type HeaderItemProps = {
  isActive: boolean;
  menu: HeaderItemType;
  className?: string;
  onClose: () => void;
};

function HeaderItem({ isActive, menu, className, onClose }: HeaderItemProps) {
  const { t } = useTranslation("common");
  const handleScrollToSection = () => {
    const element = document.getElementById(menu.id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    onClose();
  };

  return (
    <li
      className={`hover:text-primary cursor-pointer rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50 ${
        isActive && `text-primary bg-gray-50 ${className}`
      }`}
      onClick={handleScrollToSection}
    >
      {t(`header.${menu.key}`)}
    </li>
  );
}

export default HeaderItem;
