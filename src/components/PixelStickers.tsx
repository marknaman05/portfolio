import React from "react";

// Pixel Heart (Pink/Purple)
export const PixelHeart: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 16 16"
    className={`w-8 h-8 fill-retro-pink stroke-retro-border ${className}`}
    style={{ imageRendering: "pixelated" }}
  >
    <path
      strokeWidth="1.2"
      strokeLinecap="square"
      d="M3 1h3v1h1v1h1v-1h1v-1h3v2h1v3h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-3h1v-2h1zm9 3h-1v-1h-2v1h-1v1h-1v-1h-2v-1h-1v3h8v-3z"
    />
  </svg>
);

// Pixel Sunglasses Emoji
export const PixelSunglasses: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 16 16"
    className={`w-8 h-8 fill-[#facc15] stroke-retro-border ${className}`}
    style={{ imageRendering: "pixelated" }}
  >
    {/* Body */}
    <path
      strokeWidth="1.2"
      d="M4 1h8v1h2v2h1v8h-1v2h-2v1H4v-1H2v-2H1V4h1V2h2V1z"
    />
    {/* Glasses */}
    <path
      fill="#121212"
      d="M2 5h12v3H9V7H7v1H2V5zm3 1h2v1H5V6zm5 0h2v1h-2V6z"
    />
    {/* Smile */}
    <path
      fill="#121212"
      d="M5 10h6v1H9v1H7v-1H5v-1z"
    />
  </svg>
);

// Pixel Space Invader (Purple)
export const PixelInvader: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 16 16"
    className={`w-8 h-8 fill-[#a855f7] stroke-retro-border ${className}`}
    style={{ imageRendering: "pixelated" }}
  >
    <path
      strokeWidth="1.2"
      d="M3 1h2v2h1v1h4v-1h1v-2h2v2h-1v1h-1v1h3v3h-1v1h-1v2h-1v-1h-1v1H6v-1H5v1H4v-2H3v-1H2v-3h3V5h-1V4H3V1zm2 5h2v1H5V6zm4 0h2v1H9V6z"
    />
  </svg>
);

// Pixel Yawning/Screaming Cat (Meme Sticker)
export const PixelCat: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-12 h-12 fill-[#ffffff] stroke-retro-border ${className}`}
    style={{ imageRendering: "pixelated" }}
  >
    {/* Outline & Ears & Body */}
    <path
      strokeWidth="1.2"
      d="M4 3h2v2H5v2h2v1h10V7h2V5h-1V3h2v3h1v14h-2v-1h-2v1H7v-1H5v1H2V6h2V3zm14 9h-8v6h8v-6z"
    />
    {/* Screaming Mouth (Red) */}
    <path fill="#ef4444" d="M11 13h6v4h-6v-4z" />
    {/* Inner Teeth (White) */}
    <path fill="#ffffff" d="M11 13h6v1h-6v-1zm0 3h6v1h-6v-1z" />
    {/* Eyes */}
    <path fill="#121212" d="M6 9h2v1H6V9zm10 0h2v1h-10V9z" />
  </svg>
);

// Pixel Beer Mug (Saturday Sticker)
export const PixelBeerMug: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-12 h-12 stroke-retro-border ${className}`}
    style={{ imageRendering: "pixelated" }}
  >
    {/* Froth (White) */}
    <path fill="#ffffff" d="M7 3h10v3H7V3z" />
    <path fill="#ffffff" d="M5 5h14v2H5V5z" />
    
    {/* Mug Body (Yellow/Amber) */}
    <path fill="#f59e0b" d="M6 7h10v12H6V7z" />
    
    {/* Handle (Orange/Amber) */}
    <path fill="#d97706" d="M16 9h4v6h-4V9z" />
    <path fill="#f4f4f4" d="M17 11h2v2h-2v-2z" />
    
    {/* Outline */}
    <path
      fill="none"
      strokeWidth="1.5"
      d="M7 3h10v3H7V3zm-2 2h14v2H5V5zm1 2v12h10V7M16 9h4v6h-4"
    />
  </svg>
);

// Pixel Gear Wheel (Rotating Accent)
export const PixelGear: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-10 h-10 fill-retro-blue stroke-retro-border ${className}`}
    style={{ imageRendering: "pixelated" }}
  >
    <path
      strokeWidth="1.2"
      d="M10 2h4v3h-4V2zm5 1.5l2.5 1.5-1.5 2.5-2.5-1.5 1.5-2.5zm4 4l1.5 2.5-2.5 1.5-1.5-2.5 2.5-1.5zM22 10h-3v4h3v-4zm-1.5 5l-1.5 2.5-2.5-1.5 1.5-2.5 2.5 1.5zm-4 4l-2.5 1.5-1.5-2.5 2.5-1.5 1.5 2.5zM14 22h-4v-3h4v3zm-5-1.5L6.5 19l1.5-2.5 2.5 1.5-1.5 2.5zm-4-4L1 14h3v-4H1v4zm1.5-5L4 6.5l2.5 1.5-1.5 2.5-2.5-1.5zM6 8h12v8H6V8z"
    />
    <circle cx="12" cy="12" r="3" fill="#f4f4f4" stroke="#121212" strokeWidth="1.2" />
  </svg>
);
