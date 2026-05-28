import {
  Phone,
  Mail,
  Globe,
  MapPin,
  ArrowRight,
  ChevronDown,
  Check,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const contactItems = [
  {
    key: "hotline",
    value: "+84 93 154 1339",
    icon: Phone,
  },
  {
    key: "email",
    value: "audit@halalsupreme.com",
    icon: Mail,
  },
  {
    key: "website",
    value: "www.halalsupreme.com",
    icon: Globe,
  },
  {
    key: "address",
    value:
      "Floor 8, VNO Building, 105 Cong Hoa, Bay Hien Ward, Ho Chi Minh City, Vietnam",
    icon: MapPin,
  },
];

const services = [
  "service-1",
  "service-2",
  "service-3",
  "service-4",
  "service-5",
];

function ContactSection() {
  const { t, i18n } = useTranslation(["contactSection", "servicesSection"]);

  const [openSelect, setOpenSelect] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenSelect(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const { name, email, phone, company, service } = formData;

    const isEmpty = !name || !email || !phone || !company || !service;

    if (isEmpty) {
      toast.error(t("toast.error.required", { ns: "contactSection" }));
      return;
    }

    if (!validateEmail(email)) {
      toast.error(t("toast.error.email", { ns: "contactSection" }));
      return;
    }

    // SUCCESS
    fetch("/api.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(
          `${t("toast.success.title", { ns: "contactSection" })}\n${t(
            "toast.success.description",
            { ns: "contactSection" },
          )}`,
        );
        setFormData((prev) => ({
          ...prev,
          email: "",
          name: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        }));
      })
      .catch((err) => {
        console.error("Lỗi gửi mail:", err);
        toast.error(t("toast.error.error", { ns: "contactSection" }));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative">
      {/* Background */}
      <div className="bg-primary/10 absolute bottom-0 left-0 h-72 w-72 rounded-full blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#07111F] p-8 text-white shadow-2xl lg:p-12">
          {/* Glow */}
          <div className="bg-primary/20 absolute top-0 right-0 h-60 w-60 rounded-full blur-3xl" />

          <div className="relative flex h-full flex-col">
            {/* Header */}
            <div className="space-y-6">
              <div className="bg-primary/10 text-primary border-primary/20 inline-flex rounded-full border px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-xl">
                {t("badge")}
              </div>

              <div className="space-y-5">
                <h2 className="text-4xl leading-tight font-bold lg:text-5xl">
                  {t("title")}
                </h2>

                <p className="text-base leading-8 text-gray-300">
                  {t("description")}
                </p>

                <p className="text-base leading-8 text-gray-400">
                  {t("subDescription")}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col gap-5">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.key}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                  >
                    <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                      <Icon size={22} />
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                        {t(`contactInfo.${item.key}`)}
                      </p>

                      <p className="text-base leading-7 text-white">
                        {item.key === "address" && i18n.language === "vi"
                          ? "Tầng 8, Tòa nhà VNO, 105 Cộng Hòa, Phường Bảy Hiền, TP. Hồ Chí Minh, Việt Nam"
                          : item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="h-fit rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-2xl lg:p-12">
          <div className="mb-8 space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">
              {t("form.title")}
            </h3>

            <p className="text-base leading-8 text-gray-600">
              {t("form.subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Row */}
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("form.name")}
                className="focus:border-primary h-14 rounded-2xl border border-gray-200 px-5 transition-all duration-300 outline-none"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("form.email")}
                className="focus:border-primary h-14 rounded-2xl border border-gray-200 px-5 transition-all duration-300 outline-none"
              />
            </div>

            {/* Row */}
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("form.phone")}
                className="focus:border-primary h-14 rounded-2xl border border-gray-200 px-5 transition-all duration-300 outline-none"
              />

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t("form.company")}
                className="focus:border-primary h-14 rounded-2xl border border-gray-200 px-5 transition-all duration-300 outline-none"
              />
            </div>

            {/* Service Select */}
            <div className="relative" ref={dropdownRef}>
              <label className="mb-3 block text-sm font-semibold tracking-wide text-gray-700 uppercase">
                {t("form.service")}
              </label>

              {/* Trigger */}
              <button
                type="button"
                onClick={() => setOpenSelect((prev) => !prev)}
                className={`group flex h-14 w-full items-center justify-between rounded-2xl border bg-gradient-to-br from-white to-gray-50 px-5 text-left shadow-sm transition-all duration-300 ${
                  openSelect
                    ? "border-primary ring-primary/10 ring-4"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span
                  className={`text-sm font-medium ${
                    formData.service ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {formData.service
                    ? formData.service
                    : t("form.selectService")}
                </span>

                <div
                  className={`bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                    openSelect ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-[calc(100%+12px)] left-0 z-50 w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 ${
                  openSelect
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="max-h-80 overflow-y-auto p-2">
                  {services.map((service) => {
                    const isSelected = formData.service === service;

                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            service: t(`services.${service}.title`, {
                              ns: "servicesSection",
                            }),
                          }));

                          setOpenSelect(false);
                        }}
                        className={`group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition-all duration-200 ${
                          isSelected
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div>
                          <p className="text-sm font-semibold">
                            {t(`services.${service}.title`, {
                              ns: "servicesSection",
                            })}
                          </p>

                          <p className="mt-1 text-xs leading-6 text-gray-500">
                            {t(`services.${service}.description`, {
                              ns: "servicesSection",
                            })}
                          </p>
                        </div>

                        <div
                          className={`ml-4 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
                            isSelected
                              ? "bg-primary text-white"
                              : "bg-gray-100 text-transparent"
                          }`}
                        >
                          <Check size={14} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("form.message")}
              rows={6}
              className="focus:border-primary resize-none rounded-3xl border border-gray-200 px-5 py-4 transition-all duration-300 outline-none"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary/90 inline-flex h-14 items-center justify-center gap-3 rounded-2xl px-8 font-semibold text-white transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <span>{t("form.submit")}</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
