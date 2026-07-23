import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IconMail, IconBrandWhatsapp, IconSend, IconAlertTriangle, IconId, IconArrowUpRight } from "@tabler/icons-react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/e3ed59455143d2ead7e46b3282428262";
const WHATSAPP_NUMBER = "50586498505";
const CONTACT_EMAIL = "castellano17@gmail.com";
const DIGITAL_CARD_URL = "https://vinkard.com/vinkard/esmir";

const Contact = ({ translations }) => {
  const [status, setStatus] = useState("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(translations.contact.whatsappMessage)}`;
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(translations.contact.emailSubject)}&body=${encodeURIComponent(translations.contact.emailBody)}`;

  const onSubmit = async (data) => {
    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="glass glass-highlight rounded-[40px] overflow-hidden grid md:grid-cols-2 min-h-[600px]">
        <div className="p-12 md:p-16 flex flex-col justify-center bg-gradient-to-br from-cyan-950/20 to-transparent">
          <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-cyan-500 mb-6">{translations.contact.protocol}</h2>
          <h3 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-[0.9]">
            {translations.contact.heading}
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-primary/70 hover:text-cyan-400 transition-colors group">
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <IconMail size={18} />
              </div>
              <a href={mailHref}>{CONTACT_EMAIL}</a>
            </div>
            <div className="flex items-center gap-4 text-primary/70 hover:text-cyan-400 transition-colors group">
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <IconBrandWhatsapp size={18} />
              </div>
              <a href={whatsappHref} target="_blank" rel="noreferrer">+505 8649 8505</a>
            </div>
          </div>

          <div className="pt-12 mt-12 border-t border-primary/5">
            <span className="text-xs font-mono uppercase tracking-widest text-primary/40">{translations.contact.base}</span>
            <p className="text-lg font-heading font-bold mb-8">{translations.contact.location}</p>

            <a
              href={DIGITAL_CARD_URL}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-3 px-6 py-3 rounded-full font-heading font-medium text-sm tracking-wider uppercase hover:bg-primary/10 transition-all group"
            >
              <IconId size={18} className="text-cyan-400" />
              {translations.contact.digitalCard}
              <IconArrowUpRight size={16} className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="p-12 md:p-16 flex flex-col justify-center bg-background/40">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-cyan-400">
                <IconSend size={40} />
              </div>
              <h5 className="text-3xl font-heading font-bold leading-none">{translations.contact.success.title}</h5>
              <p className="text-primary/50">{translations.contact.success.subtitle}</p>
              <button
                onClick={() => setStatus("idle")}
                className="text-cyan-400 font-mono uppercase tracking-widest hover:underline text-xs"
              >
                {translations.contact.success.again}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-primary/40 ml-1">
                  {translations.contact.form.name}
                </label>
                <input
                  type="text"
                  className="w-full bg-primary/5 border border-primary/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors text-primary placeholder:text-primary/30"
                  placeholder={translations.contact.form.namePlaceholder}
                  {...register("name", { required: translations.contact.form.errors.nameRequired })}
                />
                {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-primary/40 ml-1">
                  {translations.contact.form.email}
                </label>
                <input
                  type="email"
                  className="w-full bg-primary/5 border border-primary/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors text-primary placeholder:text-primary/30"
                  placeholder={translations.contact.form.emailPlaceholder}
                  {...register("email", {
                    required: translations.contact.form.errors.emailRequired,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: translations.contact.form.errors.emailInvalid,
                    },
                  })}
                />
                {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-primary/40 ml-1">
                  {translations.contact.form.message}
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-primary/5 border border-primary/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors text-primary placeholder:text-primary/30 resize-none"
                  placeholder={translations.contact.form.messagePlaceholder}
                  {...register("message", { required: translations.contact.form.errors.messageRequired })}
                ></textarea>
                {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
              </div>

              {status === "error" && (
                <div className="flex items-center gap-3 text-red-400 text-sm">
                  <IconAlertTriangle size={18} />
                  <span>{translations.contact.error.subtitle}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-5 bg-cyan-500 text-black font-heading font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {status === "sending" ? translations.contact.form.sending : translations.contact.form.button}
                <IconSend size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
