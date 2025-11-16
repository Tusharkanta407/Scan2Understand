'use client';

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Choose Your Plan",
  description = "Flexible pricing for organizations of all sizes\nStart free, upgrade as you grow.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
  };

  return (
    <section className="relative w-full overflow-hidden py-16 font-light text-white antialiased md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-10 md:mb-12">
          <h2 className="text-2xl font-light mb-4 md:text-3xl md:mb-6">
            {title}
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto whitespace-pre-line md:text-lg">
            {description}
          </p>
        </div>

        <div className="flex justify-center mb-8 md:mb-10">
          <label className="relative inline-flex items-center cursor-pointer">
            <Label>
              <Switch
                ref={switchRef as any}
                checked={!isMonthly}
                onCheckedChange={handleToggle}
                className="relative"
              />
            </Label>
          </label>
          <span className="ml-2 font-semibold text-sm md:text-base">
            Annual billing <span className="text-blue-400">(Save 20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                `rounded-2xl p-6 bg-gradient-to-br from-blue-500/10 to-blue-900/10 backdrop-blur-sm border border-blue-400/20 text-center flex flex-col relative overflow-hidden`,
                plan.isPopular ? "border-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.3)]" : "",
                "flex flex-col"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                  <Star className="text-white h-4 w-4 fill-current" />
                  <span className="text-white ml-1 font-sans font-semibold text-xs md:text-sm">
                    Popular
                  </span>
                </div>
              )}
              <div className="flex-1 flex flex-col">
                <p className="text-base font-semibold text-white/80 md:text-lg">
                  {plan.name}
                </p>
                <div className="mt-4 flex items-center justify-center gap-x-2 md:mt-6">
                  <span className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {plan.price === "Custom" ? (
                      "Custom Pricing"
                    ) : (
                      `₹${isMonthly ? plan.price : plan.yearlyPrice}`
                    )}
                  </span>
                  {plan.period !== "Next 3 months" && plan.price !== "Custom" && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-white/60">
                      / {plan.period}
                    </span>
                  )}
                </div>

                <p className="text-xs leading-5 text-white/60 mt-2">
                  {isMonthly ? "billed monthly" : "billed annually"}
                </p>

                <ul className="mt-6 gap-3 flex flex-col md:mt-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0 md:h-5 md:w-5" />
                      <span className="text-left text-white/90 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="w-full my-4 border-blue-400/20" />

                <Link
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "group relative w-full gap-2 overflow-hidden text-base font-semibold tracking-tighter",
                    "transform-gpu transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-400 hover:ring-offset-1 hover:bg-blue-500 hover:text-white",
                    plan.isPopular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none"
                      : "bg-transparent text-white border-blue-400/40",
                    "md:text-lg"
                  )}
                >
                  {plan.buttonText}
                </Link>
                <p className="mt-3 text-xs leading-5 text-white/60 md:mt-4">
                  {plan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
