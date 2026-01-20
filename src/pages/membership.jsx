
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  GraduationCap,
  Users,
  Briefcase,
  BookOpen,
  CalendarDays,
  Award,
  ChevronDown
} from "lucide-react";

const Membership = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const plans = [
    {
      name: "Student",
      price: "₹ 1450",
      period: "per year",
      description: "Perfect for students",
      link:
        "https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD#error-msg",
      features: [
        "Access to all events and workshops",
        "Networking opportunities",
        "Member discounts",
        "Digital resources and materials",
        "Community forum access"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$ 99",
      period: "per year",
      description: "For working professionals",
      link:
        "https://services.acm.org/public/qj/profqj/qjprof_control.cfm?form_type=Professional",
      features: [
        "All Student benefits",
        "Priority event registration",
        "Career development resources",
        "Job board access",
        "Mentorship program",
        "Professional certification prep"
      ],
      highlighted: true
    }
  ];

  const benefits = [
    { icon: GraduationCap, title: "Education", desc: "Workshops and structured learning" },
    { icon: Users, title: "Networking", desc: "Industry and peer connections" },
    { icon: Briefcase, title: "Career", desc: "Jobs, mentorship, and guidance" },
    { icon: BookOpen, title: "Resources", desc: "Exclusive learning materials" },
    { icon: CalendarDays, title: "Events", desc: "Members-only events" },
    { icon: Award, title: "Recognition", desc: "Certificates and achievements" }
  ];

  const faqs = [
    {
      q: "Can I change my membership plan?",
      a: "Yes, you can upgrade or downgrade your plan at any time."
    },
    {
      q: "Is there a refund policy?",
      a: "ACM provides a standard refund policy depending on region."
    },
    {
      q: "Do I get access to past events?",
      a: "Yes, members receive recordings and materials."
    },
    {
      q: "How do I contact support?",
      a: "Reach ACM support at acmhelp@acm.org."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020B05] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 primary-gradient-text">
            Membership Plans
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Choose a membership that supports your academic and professional growth
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-800 p-6 rounded-lg text-center hover:border-blue-400 transition"
              >
                <Icon className="w-9 h-9 mb-3 text-blue-400 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              
              className={`rounded-lg p-8 border bg-gray-900 ${
                plan.highlighted ? "border-blue-400" : "border-gray-800"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block mb-4 px-3 py-1 text-sm font-semibold text-blue-400 border border-blue-400 rounded-full">
                  Recommended
                </span>
              )}

              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
             <p className="text-gray-400 mb-4 leading-relaxed break-words">
  				{plan.description}
			</p>


              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400"> {plan.period}</span>
              </div>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-2 rounded-md font-semibold mb-6 ${
                  plan.highlighted
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Get Started
              </a>

              <div className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ (NO OUTER GRADIENT) */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gray-900 p-8 faq-inner-gradient">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-800 last:border-none">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="font-semibold text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 text-sm pb-4 overflow-hidden"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Membership;
