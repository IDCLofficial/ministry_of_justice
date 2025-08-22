'use client';
import React from 'react';

function InfoRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-orange-500">{icon}</div>
      <div className="text-slate-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function ContactSection() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Simulate async submit. Replace with real API call if available
      await new Promise((res) => setTimeout(res, 1200));
      (e.target as HTMLFormElement).reset();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="-mt-16 sm:-mt-20 mb-12" />
        <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Info */}
            <div className="p-6 sm:p-10">
              <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
              <p className="mt-3 text-slate-600 max-w-md">
                Have any questions or enquiries? We'd be glad to hear from you. Please feel free to reach out to us.
              </p>

              <div className="mt-8 space-y-6">
                <InfoRow icon={<span>✉️</span>}>
                  info@moj.im.gov.ng
                </InfoRow>
                <InfoRow icon={<span>🏛️</span>}>
                  Block Ten, Imo State Secretariat, Port Harcourt Road, PMB One One Four Five,<br />
                  Owerri, Imo State, Nigeria.
                </InfoRow>
                <InfoRow icon={<span>📞</span>}>
                  08035419508
                </InfoRow>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-6 sm:p-10 bg-white">
              <form className="grid grid-cols-1 gap-4" onSubmit={(e)=>onSubmit(e)} aria-busy={loading}>
                <input className="h-11 rounded-md border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Full Name" required/>
                <input className="h-11 rounded-md border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Email Address" type="email" required/>
                <input className="h-11 rounded-md border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Subject" required/>
                <textarea className="min-h-[120px] rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Your Message" required/>
                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-2 h-11 rounded-md text-white font-medium transition-colors ${loading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
                >
                  {loading ? 'Sending…' : 'SEND'}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mb-12" />

        {success && (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-6 right-6 z-50 rounded-lg bg-green-600 text-white shadow-lg px-4 py-3 flex items-center gap-2 animate-[fadeIn_.2s_ease-out]"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">✓</span>
            <span>Message sent successfully!</span>
            <button
              onClick={() => setSuccess(false)}
              className="ml-2 text-white/80 hover:text-white"
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
