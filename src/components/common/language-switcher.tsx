import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const languages = [
  {
    key: "vi",
    label: "Tiếng Việt",
    countryCode: "VN",
  },
  {
    key: "en",
    label: "English",
    countryCode: "US",
  },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.key === i18n.language) || languages[1];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);

    localStorage.setItem("language", language);

    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer rounded-full p-0.5 hover:bg-gray-100"
      >
        <ReactCountryFlag
          svg
          countryCode={currentLanguage.countryCode}
          style={{
            width: "1.5rem",
            height: "1.5rem",
            borderRadius: "999px",
            objectFit: "cover",
          }}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-10 right-0 z-50 w-44 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl transition-all duration-300 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {languages.map((language) => (
          <button
            key={language.key}
            onClick={() => handleChangeLanguage(language.key)}
            className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-all duration-200 hover:bg-gray-50 ${
              currentLanguage.key === language.key
                ? "bg-primary/5 text-primary"
                : "text-gray-700"
            }`}
          >
            <ReactCountryFlag
              svg
              countryCode={language.countryCode}
              style={{
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: "999px",
                objectFit: "cover",
              }}
            />

            <span className="text-sm font-medium">{language.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
