'use client';

import { Pricing } from '@/components/pricing';

const pricingPlans = [
  {
    name: "STARTER",
    price: "0",
    yearlyPrice: "0",
    period: "month",
    features: [
      "5 QR codes",
      "1,000 translated words / month",
      "Basic analytics",
      "Standard translation quality",
      "Email support (48 hrs)"
    ],
    description: "Best for: Students, personal use, small instructions",
    buttonText: "Start for Free",
    href: "/signup",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "499",
    yearlyPrice: "4990",
    period: "month",
    features: [
      "Unlimited QR codes",
      "50,000 translated words / month",
      "Advanced analytics",
      "High-quality translation (Lingo Pro Engine)",
      "Dynamic QR updates",
      "Team collaboration",
      "24-hr priority support"
    ],
    description: "Best for: Schools, cafés, offices, creators",
    buttonText: "Upgrade to Pro",
    href: "/signup?plan=professional",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    yearlyPrice: "Custom",
    period: "month",
    features: [
      "Unlimited translations",
      "Custom domains (qr.yourcompany.com)",
      "Dedicated account manager",
      "SSO authentication",
      "Advanced security & audit logs",
      "SLA backed uptime",
      "Custom integrations with your systems"
    ],
    description: "Best for: Large institutions, hospitals, events, government",
    buttonText: "Contact Sales",
    href: "/contact?plan=enterprise",
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <Pricing 
      plans={pricingPlans}
      title="Choose Your Plan"
      description="Flexible pricing for organizations of all sizes&#10;Start free, upgrade as you grow."
    />
  );
}