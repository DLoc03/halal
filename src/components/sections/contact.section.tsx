import { Phone, Mail, Globe, MapPin, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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

function ContactSection() {
  const { t, i18n } = useTranslation("contactSection");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("CONTACT FORM:", formData);

    // TODO:
    // Integrate API submit here later
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
              Fill out the form below and our team will contact you shortly.
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
              className="bg-primary hover:bg-primary/90 inline-flex h-14 items-center justify-center gap-3 rounded-2xl px-8 font-semibold text-white transition-all duration-300 hover:shadow-xl"
            >
              {t("form.submit")}

              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
