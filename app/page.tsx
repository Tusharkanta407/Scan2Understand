import Navbar from "@/components/navbar";
import LightRays from "@/components/light-rays";
import Globe3D from "@/components/mvpblocks/3dglobe";
import HowItWorks from "@/components/how-it-works";
import TextLoop from "@/components/ui/text-loop";
import PricingSection from "@/components/pricing-section";
import CallToAction from "@/components/call-to-action";
import PoweredBy from "@/components/powered-by";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div>
        {/* Globe Hero Section (includes Problem Section) */}
        <Globe3D />
        
        {/* How It Works Section */}
        <HowItWorks />
        
        {/* Trusted By Section */}
        <TextLoop />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* Call To Action */}
        <CallToAction />
        
        {/* Powered By */}
        <PoweredBy />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}