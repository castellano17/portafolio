import React, { useState } from "react";
import { IconMail, IconPhone, IconSend } from "@tabler/icons-react";

const Contact = ({ translations }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32">
      <div className="glass glass-highlight rounded-[40px] overflow-hidden grid md:grid-cols-2 min-h-[600px]">
        {/* Left: Contact Info */}
        <div className="p-12 md:p-16 flex flex-col justify-center bg-gradient-to-br from-cyan-950/20 to-transparent">
          <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-cyan-500 mb-6">{translations.contact.protocol}</h2>
          <h3 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-[0.9]">
            {translations.contact.heading}
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/70 hover:text-cyan-400 transition-colors group">
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <IconMail size={18} />
              </div>
              <a href="mailto:castellano17@gmail.com">castellano17@gmail.com</a>
            </div>
            <div className="flex items-center gap-4 text-white/70 hover:text-cyan-400 transition-colors group">
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <IconPhone size={18} />
              </div>
              <a href="tel:+50586498505">+505 8649 8505</a>
            </div>
          </div>

          <div className="pt-12 mt-12 border-t border-white/5">
            <span className="text-xs font-mono uppercase tracking-widest text-white/40">{translations.contact.base}</span>
            <p className="text-lg font-heading font-bold">{translations.contact.location}</p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-12 md:p-16 flex flex-col justify-center bg-black/40">
          {!formSubmitted ? (
            <form
              action="https://formsubmit.co/e3ed59455143d2ead7e46b3282428262"
              method="POST"
              className="space-y-6"
              onSubmit={() => setFormSubmitted(true)}
            >
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-1">
                  {translations.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors text-white placeholder:text-white/20"
                  placeholder={translations.contact.form.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-1">
                  {translations.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors text-white placeholder:text-white/20"
                  placeholder={translations.contact.form.emailPlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-1">
                  {translations.contact.form.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors text-white placeholder:text-white/20 resize-none"
                  placeholder={translations.contact.form.messagePlaceholder}
                ></textarea>
              </div>

              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                className="w-full py-5 bg-cyan-500 text-black font-heading font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3"
              >
                {translations.contact.form.button}
                <IconSend size={20} />
              </button>
            </form>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-cyan-400">
                <IconSend size={40} />
              </div>
              <h5 className="text-3xl font-heading font-bold leading-none">{translations.contact.success.title}</h5>
              <p className="text-white/50">{translations.contact.success.subtitle}</p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-cyan-400 font-mono uppercase tracking-widest hover:underline text-xs"
              >
                {translations.contact.success.again}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
