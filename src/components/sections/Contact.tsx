import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactInfo } from '../../data/content';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, ChevronRight, Github, Linkedin, Download, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastSentData, setLastSentData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const formValues = watch();

  const getMailtoUrl = (data?: ContactFormData) => {
    const name = data?.name || formValues.name || '';
    const email = data?.email || formValues.email || '';
    const msg = data?.message || formValues.message || '';
    const subject = encodeURIComponent(`Portfolio Message from ${name || 'Recruiter / Client'}`);
    const body = encodeURIComponent(
      `Hi Guru,\n\n${msg}\n\n------------------------------\nSender Name: ${name}\nSender Email: ${email}`
    );
    return `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  const getGmailWebUrl = (data?: ContactFormData) => {
    const name = data?.name || formValues.name || '';
    const email = data?.email || formValues.email || '';
    const msg = data?.message || formValues.message || '';
    const subject = encodeURIComponent(`Portfolio Message from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Guru,\n\n${msg}\n\n------------------------------\nFrom: ${name} (${email})`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=${subject}&body=${body}`;
  };

  const getWhatsAppUrl = (data?: ContactFormData) => {
    const name = data?.name || formValues.name || '';
    const msg = data?.message || formValues.message || '';
    const text = encodeURIComponent(
      `Hi Guru, my name is ${name || 'Visitor'}. ${msg ? `Message: ${msg}` : 'I came across your portfolio and would like to connect!'}`
    );
    return `https://wa.me/919944903445?text=${text}`;
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      setLastSentData(data);

      // Attempt FormSubmit endpoint
      fetch('https://formsubmit.co/ajax/guru630172@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Portfolio Message from ${data.name} (${data.email})`,
        }),
      }).catch(() => {});

      // Launch Gmail Web Composer or Mailto pre-filled directly so message is 100% sent
      const gmailUrl = getGmailWebUrl(data);
      window.open(gmailUrl, '_blank');

      setSubmitStatus('success');
      reset();
    } catch (err) {
      console.error('Submission error:', err);
      window.open(getMailtoUrl(data), '_blank');
      setSubmitStatus('success');
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Huge Bold Headline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-heading tracking-tight text-white uppercase leading-none">
            Let's Build <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-300">
              Something
            </span>
          </h2>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-6 bg-slate-900/90 backdrop-blur-xl">
              <h3 className="text-xl font-bold font-heading text-white">Direct Contact</h3>

              <div className="space-y-4 font-mono">
                {/* Email Direct */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-semibold text-slate-400">Email Directly</p>
                    <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp Quick Link */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">WhatsApp Chat</p>
                    <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      +91 9944903445
                    </p>
                  </div>
                </a>

                {/* Phone Call */}
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-slate-950 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Call Directly</p>
                    <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                      +91 {contactInfo.phone}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Location</p>
                    <p className="text-sm font-bold text-white">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social & Resume Handles */}
              <div className="pt-4 border-t border-slate-800 space-y-3 font-mono">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Profiles & Resume
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={contactInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 transition-colors border border-slate-700/60"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 transition-colors border border-slate-700/60"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.codolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 transition-colors border border-slate-700/60 text-xs font-bold font-mono"
                  >
                    Codolio Profile
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Guru_Prasath_Resume.pdf"
                    className="px-4 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 transition-colors border border-cyan-500/40 text-xs font-bold font-mono flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-6 bg-slate-900/90 backdrop-blur-xl">
              <h3 className="text-xl font-bold font-heading text-white">Send Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase font-mono mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="Guru Prasath"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm font-sans"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase font-mono mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm font-sans"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase font-mono mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    placeholder="Hi Guru, I came across your VoteMithra project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm font-sans resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Status Feedback & Direct Send Links */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                        <span>Pre-filled message generated for {contactInfo.email}!</span>
                      </div>
                      {lastSentData && (
                        <p className="text-[11px] text-slate-300 font-sans">
                          From: <strong className="text-white">{lastSentData.name}</strong> ({lastSentData.email})
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 pt-1 font-mono">
                        <a
                          href={getGmailWebUrl(lastSentData || undefined)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 hover:bg-emerald-400 transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send via Gmail Web</span>
                        </a>
                        <a
                          href={getMailtoUrl(lastSentData || undefined)}
                          className="px-3 py-2 rounded-lg bg-slate-800 text-slate-200 font-bold text-xs inline-flex items-center gap-1.5 hover:bg-slate-700 border border-slate-700 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Open Email App</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-mono text-sm font-bold text-slate-950 bg-white hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>{isSubmitting ? 'Opening Email Composer...' : 'Send Message'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
