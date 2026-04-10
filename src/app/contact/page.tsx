"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Full name is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email("Enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  stoneType: z.string().min(1, "Please select a stone type"),
  squareFootage: z.string().optional(),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body text-sm font-semibold text-brand-black">
        {label}{required && <span className="text-brand-gold ml-1">*</span>}
      </label>
      {children}
      {error && <p className="font-body text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputClass =
  "font-body text-sm text-brand-black bg-white border border-brand-gray rounded px-4 py-3 outline-none focus:border-brand-gold transition-colors duration-200 w-full";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please call us directly at (208) 447-9593.");
    }
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-brand-cream pt-40 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black mb-5">
            Get Your Free Quote
          </h1>
          <p className="font-body text-xl text-brand-charcoal/60 leading-relaxed">
            We will contact you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-start gap-4 py-12">
                  <div className="w-12 h-0.5 bg-brand-gold" />
                  <h2 className="font-heading text-3xl font-bold text-brand-black">
                    Thank you!
                  </h2>
                  <p className="font-body text-lg text-brand-charcoal/70 leading-relaxed">
                    We will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">

                  {/* Row: Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Full Name" error={errors.name?.message} required>
                      <input {...register("name")} type="text" placeholder="Jane Smith" className={inputClass} />
                    </Field>
                    <Field label="Phone Number" error={errors.phone?.message} required>
                      <input {...register("phone")} type="tel" placeholder="(208) 555-0100" className={inputClass} />
                    </Field>
                  </div>

                  {/* Email */}
                  <Field label="Email Address" error={errors.email?.message} required>
                    <input {...register("email")} type="email" placeholder="jane@example.com" className={inputClass} />
                  </Field>

                  {/* Row: Project Type + Stone Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Project Type" error={errors.projectType?.message} required>
                      <select {...register("projectType")} className={inputClass} defaultValue="">
                        <option value="" disabled>Select a type</option>
                        <option>Kitchen</option>
                        <option>Bathroom</option>
                        <option>Commercial</option>
                        <option>Other</option>
                      </select>
                    </Field>
                    <Field label="Preferred Stone Type" error={errors.stoneType?.message} required>
                      <select {...register("stoneType")} className={inputClass} defaultValue="">
                        <option value="" disabled>Select a material</option>
                        <option>Granite</option>
                        <option>Quartz</option>
                        <option>Marble</option>
                        <option>Quartzite</option>
                        <option>Porcelain</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </Field>
                  </div>

                  {/* Row: Square Footage + Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Approximate Square Footage" error={errors.squareFootage?.message}>
                      <input {...register("squareFootage")} type="number" placeholder="e.g. 45" min={1} className={inputClass} />
                    </Field>
                    <Field label="Project Timeline" error={errors.timeline?.message} required>
                      <select {...register("timeline")} className={inputClass} defaultValue="">
                        <option value="" disabled>Select a timeline</option>
                        <option>ASAP</option>
                        <option>1-3 Months</option>
                        <option>3-6 Months</option>
                        <option>Planning Ahead</option>
                      </select>
                    </Field>
                  </div>

                  {/* Message */}
                  <Field label="Message / Project Details" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your project — dimensions, style preferences, any special requirements..."
                      className={inputClass + " resize-none"}
                    />
                  </Field>

                  {serverError && (
                    <p className="font-body text-sm text-red-500">{serverError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="self-start font-body font-semibold text-sm tracking-wide bg-brand-gold text-white px-8 py-3.5 rounded hover:bg-[#a6844e] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isSubmitting ? "Sending..." : "Submit Quote Request"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-10">
              <div>
                <div className="w-8 h-0.5 bg-brand-gold mb-5" />
                <h2 className="font-heading text-2xl font-bold text-brand-black mb-6">
                  Contact Us
                </h2>

                <div className="flex flex-col gap-6">
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest text-brand-gold uppercase mb-1">Phone</p>
                    <a href="tel:+12084479593" className="font-body text-brand-charcoal hover:text-brand-gold transition-colors duration-200">
                      (208) 447-9593
                    </a>
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest text-brand-gold uppercase mb-1">Email</p>
                    <a href="mailto:countertops@superiorstone.co" className="font-body text-brand-charcoal hover:text-brand-gold transition-colors duration-200">
                      countertops@superiorstone.co
                    </a>
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest text-brand-gold uppercase mb-1">Location</p>
                    <p className="font-body text-brand-charcoal/70 leading-relaxed">
                      Serving Boise, Nampa, Meridian,<br />
                      Eagle, Kuna, Caldwell &amp; surrounding<br />
                      Southwest Idaho communities
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest text-brand-gold uppercase mb-1">Business Hours</p>
                    <div className="font-body text-sm text-brand-charcoal/70 flex flex-col gap-1">
                      <div className="flex justify-between gap-8">
                        <span>Monday – Friday</span>
                        <span>8:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Saturday</span>
                        <span>By appointment</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-cream rounded-lg p-6 border border-brand-gray">
                <p className="font-body text-sm text-brand-charcoal/70 leading-relaxed">
                  <span className="font-semibold text-brand-black">Free in-home estimates.</span>{" "}
                  We come to your space, take measurements, bring samples, and give you a quote — no obligation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
