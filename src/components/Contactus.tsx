<<<<<<< HEAD
import React, { useState } from "react";
import "../i18";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const DetailsSection = () => {
  const { t, i18n } = useTranslation();

  const changLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const[Loading ,setLoading]=useState(false)
=======

import React, { useState } from "react";
import   "../i18";
import { useTranslation } from "react-i18next";

import { toast } from "sonner";
const DetailsSection = () => {
  const { t , i18n } = useTranslation();
                
                  const changLang = () => {
                    const newLang = i18n.language === "ar" ? "en" : "ar";
                    i18n.changeLanguage(newLang);
                    localStorage.setItem("lang", newLang);
                  };

>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
<<<<<<< HEAD
    company: "",
    Subject: "", // ← مهم: مربوط بالـselect الجديد
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

=======
    company: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
<<<<<<< HEAD
    if (!formData.fullName || !formData.email || !formData.Subject) {
      toast.error(t("form.validationRequired") || "Please fill in all required fields");
=======
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
      return;
    }

    // Demo form submission
<<<<<<< HEAD
    toast.success(t("form.submitSuccess") || "Request submitted successfully!");
=======
    toast.success("Request submitted successfully!");
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d

    // Reset form
    setFormData({
      fullName: "",
      email: "",
<<<<<<< HEAD
      company: "",
      Subject: "",
    });
  };

  // خيارات الموضوع (value ثابتة – النص من i18n)
  const SUBJECT_OPTIONS = [
    { value: "web_design", label: t("form.subject.options.web_design") || "Web Design" },
    { value: "mobile_app", label: t("form.subject.options.mobile_app") || "Mobile Application" },
    { value: "custom_software", label: t("form.subject.options.custom_software") || "Custom Software" },
    { value: "portfolio_examples", label: t("form.subject.options.portfolio_examples") || "Portfolio / Examples" },
  ];

  const onSubmit=()=> async (values, { resetForm }) => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://american-softwares.com/api/public/index.php/api/contact-us",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        const data = await response.json();

        if (response.ok) {
          alert("✅ تم إرسال الرسالة بنجاح");
          resetForm();
        } else {
          alert(data.message || "❌ حدث خطأ أثناء إرسال الرسالة");
        }
      } catch (error) {
        console.error("Error submitting contact form:", error);
        alert("❌ تعذر الاتصال بالسيرفر");
      } finally {
        setLoading(false);
      }
    }
  


  return (
    <section
      id="contactus"
      className="w-full bg-white py-0"
      dir={i18n.language.startsWith("ar") ? "rtl" : "ltr"}
    >
=======
      company: ""
    });
  };
  return <section id="contactus" className="w-full bg-white py-0">
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
<<<<<<< HEAD
            <div
              className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end"
              style={{
                backgroundImage: "url('/background-section3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                {t("contactus.constactus")}
              </h2>
            </div>

            <div
              className="bg-white p-4 sm:p-8"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #ECECEC" }}
            >
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                {t("contactus.titlecontactus")}
=======
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
            backgroundImage: "url('/background-section3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
               {t("contactus.constactus")}
              </h2>
            </div>
            
            {/* Card Content */}
            <div className="bg-white p-4 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                 {t("contactus.titlecontactus")}
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
<<<<<<< HEAD
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
=======
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
<<<<<<< HEAD
                      <span className="font-semibold text-base">{t("contactus.mail")} :</span> americansoft8@gmail.com
=======
                      <span className="font-semibold text-base"> {t("contactus.mail")} :</span> americansoft8@gmail.com
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
<<<<<<< HEAD
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
=======
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
<<<<<<< HEAD
                      <span className="font-semibold text-base">{t("contactus.phone")} :</span> +201080002209
=======
                      <span className="font-semibold text-base"> {t("contactus.phone")} :</span> +201080002209
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
<<<<<<< HEAD
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
=======
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
<<<<<<< HEAD
                      <span className="font-semibold text-base">{t("contactus.location")} :</span> {t("contactus.street")}
=======
                      <span className="font-semibold text-base"> {t("contactus.location")} :</span> {t("contactus.street")} 
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
<<<<<<< HEAD
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
=======
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">{t("contactus.workinghours")} :</span> {t("contactus.days")}
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
=======

               
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
<<<<<<< HEAD
            <div
              className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start"
              style={{
                backgroundImage: "url('/background-section1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
=======
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: "url('/background-section1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                {t("form.formbadge")}
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                {t("form.titleform")}
              </h2>
            </div>
<<<<<<< HEAD

            <div
              className="bg-white p-4 sm:p-8"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #ECECEC" }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t("form.username")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("form.mail")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t("form.company")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                  />
                </div>

                {/* ▼▼▼ الموضوع بخصوص (Select) ▼▼▼ */}
                <div>
                  <select
                    name="Subject"
                    value={formData.Subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                    required
                  >
                    <option value="" className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-700">
                      {t("form.subject.placeholder") || "Select a subject"}
                    </option>
                    {SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                {/* ▲▲▲ نهاية الـSelect ▲▲▲ */}

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-red-500 hover:bg-black text-white font-medium rounded-full transition-colors duration-300"
                    onClick={onSubmit}
=======
            
            {/* Card Content - Form */}
            <div className="bg-white p-4 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder={t("form.username")} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder={t("form.mail")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder={t("form.company")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                  />
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-red-500 hover:bg-black text-white font-medium rounded-full transition-colors duration-300"
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
                  >
                    {t("form.btnform")}
                  </button>
                </div>
              </form>
            </div>
          </div>
<<<<<<< HEAD
          {/* End Right Card */}
        </div>
      </div>
    </section>
  );
};

=======
        </div>
      </div>
    </section>;
};
>>>>>>> 435135ac885128ebaa49269f3ec91263c3a2279d
export default DetailsSection;
