You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
diced-hero-section.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChronicleButton } from './chronicle-button';

interface TextStyle {
  color?: string;
  fontSize?: string;
  gradient?: string;
}
interface ButtonStyle {
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  hoverColor?: string;
  hoverForeground?: string; // NEW: color of text on hover
}
interface SlideContent {
  title: string;
  image: string;
}
interface DicedHeroSectionProps {
  topText: string;
  mainText: string;
  subMainText: string;
  buttonText: string;
  slides: SlideContent[];
  onMainButtonClick?: () => void;
  onGridImageHover?: (index: number) => void;
  onGridImageClick?: (index: number) => void;
  topTextStyle?: TextStyle;
  mainTextStyle?: TextStyle;
  subMainTextStyle?: TextStyle;
  buttonStyle?: ButtonStyle;
  componentBorderRadius?: string;
  backgroundColor?: string;
  separatorColor?: string;
  maxContentWidth?: string;
  mobileBreakpoint?: number;
  fontFamily?: string;
  isRTL?: boolean;
}

export const DicedHeroSection: React.FC<DicedHeroSectionProps> = ({
  topText,
  mainText,
  subMainText,
  buttonText,
  slides,
  onMainButtonClick,
  onGridImageHover,
  onGridImageClick,
  topTextStyle,
  mainTextStyle,
  subMainTextStyle,
  buttonStyle = {},
  componentBorderRadius = '0px',
  backgroundColor,
  separatorColor = '#005baa',
  maxContentWidth = '1536px',
  mobileBreakpoint = 1000,
  fontFamily = 'inherit',
  isRTL = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isRTLCheck = (text: string): boolean => {
    return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);
  };

  useEffect(() => {
    const checkMobile = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.offsetWidth < mobileBreakpoint);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const getGradientStyle = (gradient?: string) => {
    if (gradient) {
      return {
        backgroundImage: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    }
    return {};
  };

  return (
    <main
      ref={containerRef}
      style={{
        borderRadius: componentBorderRadius,
        backgroundColor,
        padding: '2rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: isMobile ? 'column' : isRTL ? 'row-reverse' : 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%',
        maxWidth: maxContentWidth,
        margin: '0 auto',
        minHeight: 'auto',
        height: 'auto',
        fontFamily,
        position: 'relative',
      }}
    >
      <div
        style={{
          flex: 1,
          marginRight: isMobile ? 0 : isRTL ? 0 : '2rem',
          marginLeft: isMobile ? 0 : isRTL ? '2rem' : 0,
          textAlign: isMobile ? 'center' : isRTL ? 'right' : 'left',
          alignItems: isMobile ? 'center' : isRTL ? 'flex-end' : 'flex-start',
          maxWidth: isMobile ? '100%' : '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 1,
          paddingBottom: isMobile ? '2rem' : 0,
        }}
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              ...topTextStyle,
              ...getGradientStyle(topTextStyle?.gradient),
              direction: isRTLCheck(topText) ? 'rtl' : 'ltr',
              textAlign: isRTLCheck(topText) ? 'right' : 'left',
            }}
          >
            {topText}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              ...mainTextStyle,
              direction: isRTLCheck(mainText) ? 'rtl' : 'ltr',
              textAlign: isMobile
                ? 'center'
                : isRTLCheck(mainText)
                ? 'right'
                : 'left',
              fontSize: mainTextStyle?.fontSize,
            }}
          >
            <motion.span
              style={{
                ...getGradientStyle(mainTextStyle?.gradient),
                display: 'inline-block',
              }}
            >
              {mainText}
            </motion.span>
          </motion.h1>
          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: '6.25rem' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              height: '0.25rem',
              background: separatorColor,
              border: 'none',
              margin: isMobile
                ? '1.125rem auto 1.875rem'
                : isRTLCheck(mainText)
                ? '1.125rem 0 1.875rem auto'
                : '1.125rem 0 1.875rem',
              alignSelf: isMobile
                ? 'center'
                : isRTLCheck(mainText)
                ? 'flex-end'
                : 'flex-start',
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              ...subMainTextStyle,
              ...getGradientStyle(subMainTextStyle?.gradient),
              direction: isRTLCheck(subMainText) ? 'rtl' : 'ltr',
              textAlign: isRTLCheck(subMainText) ? 'right' : 'left',
            }}
          >
            {subMainText}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: isMobile
              ? 'center'
              : isRTL
              ? 'flex-end'
              : 'flex-start',
          }}
        >
          <ChronicleButton
            text={buttonText}
            onClick={onMainButtonClick}
            hoverColor={buttonStyle?.hoverColor}
            hoverForeground={buttonStyle?.hoverForeground ?? '#fff'} // NEW
            borderRadius={buttonStyle?.borderRadius}
            fontFamily={fontFamily}
            customBackground={buttonStyle?.backgroundColor}
            customForeground={buttonStyle?.color}
          />
        </motion.div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isRTL ? 'flex-start' : 'flex-end',
          position: 'relative',
          width: isMobile ? '100%' : '50%',
          paddingLeft: isMobile ? 0 : isRTL ? 0 : '2rem',
          paddingRight: isMobile ? 0 : isRTL ? '2rem' : 0,
          height: 'auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            width: '100%',
            aspectRatio: '1 / 1',
          }}
        >
          {[slides[3], slides[2], slides[1], slides[0]].map((slide, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
                overflow: 'hidden',
                borderRadius: '20px',
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`warped-image ${
                  ['bottom-right', 'bottom-left', 'top-right', 'top-left'][
                    index
                  ]
                }`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
                onClick={() => onGridImageClick && onGridImageClick(index)}
                onMouseEnter={() => onGridImageHover && onGridImageHover(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .warped-image {
          --r: 20px;
          --s: 40px;
          --x: 25px;
          --y: 5px;
        }
        .top-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at calc(100% - var(--r)) var(--r),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 0 var(--_m), 100% calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 100% 0,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .top-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at var(--r) var(--r),#000 75%,#0000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 0 var(--_m), 0 calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 0 0,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 180deg at var(--r) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 100% var(--_m), 0 calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 0 100%,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 100% var(--_m), 100% calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
      `}</style>
    </main>
  );
};


demo.tsx
import { DicedHeroSection } from "@/components/ui/diced-hero-section.tsx";

// LTR Demo
export function DemoLTR() {
  return (
    <DicedHeroSection
      topText="Discover"
      mainText="Freshness"
      subMainText="Explore a vibrant harvest of organic, seasonal fruits and vegetables, bursting with flavors. Unveil a paramount selection of naturally delicious and nutritious premium produce sourced directly from local farms!"
      buttonText="Shop Now"
      slides={[
        {
          title: "Purple Cauliflower",
          image: "https://images.unsplash.com/photo-1620053927547-cf64d4829ff4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Strawberry",
          image: "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Feijoa",
          image: "https://images.unsplash.com/photo-1541857754-557a44522bec?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Fruits and Vegetables",
          image: "https://images.unsplash.com/photo-1646340691161-521e588e9964?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ]}
      onMainButtonClick={() => console.log("Main button clicked for LTR")}
      onGridImageHover={index => console.log(`Grid image ${index} hovered for LTR`)}
      onGridImageClick={index => console.log(`Grid image ${index} clicked for the LTR`)}
      topTextStyle={{ color: "var(--diced-hero-section-top-text)" }}
      mainTextStyle={{
        fontSize: "4.5rem",
        gradient: "linear-gradient(45deg, var(--diced-hero-section-main-gradient-from), var(--diced-hero-section-main-gradient-to))",
      }}
      subMainTextStyle={{ color: "var(--diced-hero-section-sub-text)" }}
      buttonStyle={{
        backgroundColor: "var(--diced-hero-section-button-bg)",
        color: "var(--diced-hero-section-button-fg)",
        borderRadius: "2rem",
        hoverColor: "var(--diced-hero-section-button-hover-bg)",
        hoverForeground: "var(--diced-hero-section-button-hover-fg)",
      }}
      separatorColor="var(--diced-hero-section-separator)"
      mobileBreakpoint={1000}
      fontFamily="Arial, sans-serif"
    />
  );
}

// RTL Demo
export function DemoRTL() {
  return (
    <DicedHeroSection
      topText="גלה"
      mainText="טריות"
      subMainText="חקור יבול עשיר של פירות וירקות אורגניים עונתיים, מלאי טעמים. גלה מבחר מעולה של תוצרת איכותית, טעימה וטבעית, מזינה ומגיעה ישירות מחוות מקומיות!"
      buttonText="קנה עכשיו"
      slides={[
        {
          title: "כרובית סגולה",
          image: "https://images.unsplash.com/photo-1620053927547-cf64d4829ff4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "תותים",
          image: "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "פיג'ויה",
          image: "https://images.unsplash.com/photo-1541857754-557a44522bec?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "מגוון פירות וירקות",
          image: "https://images.unsplash.com/photo-1646340691161-521e588e9964?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ]}
      onMainButtonClick={() => console.log("Main button clicked for the RTL")}
      onGridImageHover={index => console.log(`Grid image ${index} hovered for RTL`)}
      onGridImageClick={index => console.log(`Grid image ${index} clicked for the RTL`)}
      topTextStyle={{ color: "var(--diced-hero-section-top-text)" }}
      mainTextStyle={{
        fontSize: "5rem",
        gradient: "linear-gradient(45deg, var(--diced-hero-section-main-gradient-from), var(--diced-hero-section-main-gradient-to))",
      }}
      subMainTextStyle={{ color: "var(--diced-hero-section-sub-text)" }}
      buttonStyle={{
        backgroundColor: "var(--diced-hero-section-button-bg)",
        color: "var(--diced-hero-section-button-fg)",
        borderRadius: "7px",
        hoverColor: "var(--diced-hero-section-button-hover-bg)",
        hoverForeground: "var(--diced-hero-section-button-hover-fg)",
      }}
      separatorColor="var(--diced-hero-section-separator)"
      maxContentWidth="1190px"
      mobileBreakpoint={910}
      fontFamily="Arial, sans-serif"
      isRTL={true}
    />
  );
}

```

Copy-paste these files for dependencies:
```tsx
maxim.bort.devel/chronicle-button
"use client";
import React from "react";

// Inline CSS as a string
const styles = `
.chronicleButton {
  --chronicle-button-default-hover-color: var(--theme-color);
  --chronicle-button-border-radius: var(--general-rounding, 8px);
  border-radius: var(--chronicle-button-border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  line-height: 1;
  padding: 1rem 1.232rem;
  cursor: pointer;
  border: none;
  font-weight: 700;
  background: var(--chronicle-button-background);
  color: var(--chronicle-button-foreground);
  transition: background 0.4s linear, color 0.4s linear;
  will-change: background, color;
  position: relative;
}

.chronicleButton:hover {
  background: var(--chronicle-button-hover-background);
  color: var(--chronicle-button-hover-foreground);
}

.chronicleButton span {
  position: relative;
  display: block;
  perspective: 108px;
}

.chronicleButton span:nth-of-type(2) {
  position: absolute;
}

.chronicleButton em {
  font-style: normal;
  display: inline-block;
  font-size: 1.025rem;
  color: inherit;
  will-change: transform, opacity, color, transition;
  transition: transform 0.55s cubic-bezier(.645,.045,.355,1), opacity 0.35s linear 0.2s, color 0.4s linear;
}

.chronicleButton span:nth-of-type(1) em {
  transform-origin: top;
}
.chronicleButton span:nth-of-type(2) em {
  opacity: 0;
  transform: rotateX(-90deg) scaleX(.9) translate3d(0,10px,0);
  transform-origin: bottom;
}
.chronicleButton:hover span:nth-of-type(1) em {
  opacity: 0;
  transform: rotateX(90deg) scaleX(.9) translate3d(0,-10px,0);
}
.chronicleButton:hover span:nth-of-type(2) em {
  opacity: 1;
  transform: rotateX(0deg) scaleX(1) translateZ(0);
  transition: transform 0.75s cubic-bezier(.645,.045,.355,1), opacity 0.35s linear 0.3s, color 0.4s linear;
}

.chronicleButton.outlined {
  background: transparent;
  border: 2px solid var(--chronicle-button-background);
  padding: calc(1rem - var(--outline-padding-adjustment)) 0;
  color: var(--chronicle-button-background);
  transition: border 0.4s linear, color 0.4s linear, background-color 0.4s linear;
  will-change: border, color;
}

.chronicleButton.outlined:hover {
  background: var(--outlined-button-background-on-hover, transparent);
  border-color: var(--chronicle-button-hover-background);
  color: var(--chronicle-button-hover-background);
}

.chronicleButton.outlined span:nth-of-type(1) em,
.chronicleButton.outlined span:nth-of-type(2) em {
  transition: color 0.4s linear;
}

.chronicleButton.outlined:hover span:nth-of-type(1) em,
.chronicleButton.outlined:hover span:nth-of-type(2) em {
  color: var(--chronicle-button-hover-background);
}
`;

interface ChronicleButtonProps {
  text: string;
  onClick?: () => void;
  hoverColor?: string;
  width?: string;
  outlined?: boolean;
  outlinePaddingAdjustment?: string;
  borderRadius?: string;
  outlinedButtonBackgroundOnHover?: string;
  customBackground?: string;
  customForeground?: string;
  hoverForeground?: string;
}

export const ChronicleButton: React.FC<ChronicleButtonProps> = ({
  text,
  onClick,
  hoverColor = "#a594fd",
  width = "160px",
  outlined = false,
  outlinePaddingAdjustment = "2px",
  borderRadius = "8px",
  outlinedButtonBackgroundOnHover = "transparent",
  customBackground = "#fff",
  customForeground = "#111014",
  hoverForeground = "#111014",
}) => {
  // Inject styles once
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!document.getElementById("chronicle-button-style")) {
      const style = document.createElement("style");
      style.id = "chronicle-button-style";
      style.innerHTML = styles;
      document.head.appendChild(style);
    }
  }, []);

  const buttonStyle = {
    "--chronicle-button-background": customBackground,
    "--chronicle-button-foreground": customForeground,
    "--chronicle-button-hover-background": hoverColor,
    "--chronicle-button-hover-foreground": hoverForeground,
    "--outline-padding-adjustment": outlinePaddingAdjustment,
    "--chronicle-button-border-radius": borderRadius,
    "--outlined-button-background-on-hover": outlinedButtonBackgroundOnHover,
    width: width,
    borderRadius: borderRadius,
  } as React.CSSProperties;

  return (
    <button
      className={`chronicleButton${outlined ? " outlined" : ""}`}
      onClick={onClick}
      style={buttonStyle}
      type="button"
    >
      <span>
        <em>{text}</em>
      </span>
      <span>
        <em>{text}</em>
      </span>
    </button>
  );
};

```

Install NPM dependencies:
```bash
framer-motion
```

Extend existing Tailwind 4 index.css with this code (or if project uses Tailwind 3, extend tailwind.config.js or globals.css):
```css
@import "tailwindcss";
@import "tw-animate-css";

:root {
  --diced-hero-section-top-text: #2c3e50;
  --diced-hero-section-main-gradient-from: #16a085;
  --diced-hero-section-main-gradient-to: #2980b9;
  --diced-hero-section-main-gradient-foreground: #16a085;
  --diced-hero-section-separator: #005baa;
  --diced-hero-section-sub-text: #34495e;
  --diced-hero-section-button-bg: #27ae60;
  --diced-hero-section-button-fg: #ffffff;
  --diced-hero-section-button-hover-bg: #2ecc71;
  --diced-hero-section-button-hover-fg: #fff;
}

.dark {
  --diced-hero-section-top-text: #f7f7ff;
  --diced-hero-section-main-gradient-from: #9F4EFF;
  --diced-hero-section-main-gradient-to: #00A6FB;
  --diced-hero-section-main-gradient-foreground: #9F4EFF;
  --diced-hero-section-separator: #086CA2;
  --diced-hero-section-sub-text: #f7f7ff;
  --diced-hero-section-button-bg: #00A6FB;
  --diced-hero-section-button-fg: #0A0A0A;
  --diced-hero-section-button-hover-bg: #9F4EFF;
  --diced-hero-section-button-hover-fg: #FFFFFF;
}

```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
