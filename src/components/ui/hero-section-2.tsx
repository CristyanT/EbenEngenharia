import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Globe, PhoneCall, MapPin } from 'lucide-react';

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: <Globe className="w-4 h-4 text-[#1a2b5f]" strokeWidth={2} />,
        phone: <PhoneCall className="w-4 h-4 text-[#1a2b5f]" strokeWidth={2} />,
        address: <MapPin className="w-4 h-4 text-[#1a2b5f]" strokeWidth={2} />,
    };
    return (
        <div className="mr-3 flex-shrink-0 w-8 h-8 rounded-full bg-[#c7962e]/10 border border-[#c7962e]/20 flex items-center justify-center">
            {icons[type]}
        </div>
    );
};


// Prop types for the HeroSection component
interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: {
    url?: string;
    alt?: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  typingEffect?: React.ReactNode;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, typingEffect, callToAction, backgroundImage, contactInfo, ...props }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col min-h-[92vh] overflow-hidden bg-white text-gray-800 md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-[55%] md:p-12 lg:p-16 xl:p-24 bg-white z-10">
            {/* Top Section: Logo & Main Content */}
            <div>
                <motion.header className="mb-12" variants={itemVariants}>
                    <div className="flex items-center">
                        {logo?.url && <img src={logo.url} alt={logo.alt} className="h-12 sm:h-14" />}
                        {!logo?.url && logo?.text && <p className="text-xl font-black text-[#1a2b5f]">{logo.text}</p>}
                    </div>
                    {slogan && <p className="text-xs font-bold tracking-[0.2em] text-[#c7962e] uppercase mt-2">{slogan}</p>}
                </motion.header>

                <motion.main variants={containerVariants}>
                    <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-[#1a2b5f]" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-8 h-1 w-20 bg-[#c7962e]" variants={itemVariants}></motion.div>
                    
                    {typingEffect && (
                       <motion.div className="mb-6 h-[1.6em] text-lg sm:text-xl text-gray-500 font-medium" variants={itemVariants}>
                         {typingEffect}
                       </motion.div>
                    )}

                    <motion.p className="mb-10 max-w-lg text-base text-gray-600 leading-relaxed font-light" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    
                    <motion.div variants={itemVariants}>
                      <a href={callToAction.href} className="group relative inline-flex items-center justify-center gap-2 bg-[#1a2b5f] text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-colors hover:bg-[#0f1f4b]">
                          {callToAction.text}
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                      </a>
                    </motion.div>
                </motion.main>
            </div>

            {/* Bottom Section: Footer Info */}
            <motion.footer className="mt-16 w-full" variants={itemVariants}>
                <div className="grid grid-cols-1 gap-6 text-sm text-gray-500 sm:grid-cols-3">
                    <div className="flex items-center">
                        <InfoIcon type="website" />
                        <span>{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="phone" />
                        <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="address" />
                        <span>{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div 
          className="absolute inset-0 md:relative md:inset-auto w-full h-[50vh] md:h-auto bg-cover bg-center md:w-[45%] top-0 left-0 z-0"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 15% 100%)' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          {/* Mobile Overlay */}
          <div className="md:hidden absolute inset-0 bg-white/90" />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
