/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductPreset {
  id: string;
  name: string;
  category: "apparel" | "accessories" | "home";
  defaultColor: string;
  colors: string[];
  printArea: {
    x: number;      // percentage from left (0 to 100)
    y: number;      // percentage from top (0 to 100)
    width: number;  // width percentage (0 to 100)
    height: number; // height percentage (0 to 100)
  };
  getSvg: (color: string) => string;
}

export const PRODUCTS: ProductPreset[] = [
  {
    id: "tshirt",
    name: "Classic T-Shirt",
    category: "apparel",
    defaultColor: "#E2E8F0", // light gray
    colors: ["#FFFFFF", "#E2E8F0", "#1E293B", "#000000", "#EF4444", "#3B82F6", "#10B981", "#F59E0B"],
    printArea: { x: 30, y: 25, width: 40, height: 45 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="200" cy="380" rx="140" ry="12" fill="rgba(0, 0, 0, 0.08)" />
        
        <!-- T-Shirt Body -->
        <path d="M 120,60 
                 C 140,58 170,55 200,68 
                 C 230,55 260,58 280,60 
                 L 360,95 
                 C 365,100 365,115 350,135 
                 L 315,150 
                 L 315,360 
                 C 315,365 305,370 295,370 
                 L 105,370 
                 C 95,370 85,365 85,360 
                 L 85,150 
                 L 50,135 
                 C 35,115 35,100 40,95 
                 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.15)" 
              stroke-width="2" />
              
        <!-- Crew Neck Collar -->
        <path d="M 155,58 C 175,72 225,72 245,58 C 248,52 240,50 200,50 C 160,50 152,52 155,58 Z" 
              fill="rgba(0, 0, 0, 0.08)" 
              stroke="rgba(0,0,0,0.15)" />
              
        <!-- Left Sleeve Hem -->
        <path d="M 50,135 L 85,150" stroke="rgba(0,0,0,0.1)" stroke-width="2" />
        <!-- Right Sleeve Hem -->
        <path d="M 350,135 L 315,150" stroke="rgba(0,0,0,0.1)" stroke-width="2" />
        
        <!-- Premium Folds & Shading (Overlay) -->
        <!-- Shoulder shading -->
        <path d="M 120,60 Q 150,90 120,130" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="3" stroke-linecap="round" />
        <path d="M 280,60 Q 250,90 280,130" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="3" stroke-linecap="round" />
        
        <!-- Waist Fold Lines -->
        <path d="M 85,280 C 110,290 150,270 200,285 C 250,300 290,280 315,295" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3" stroke-linecap="round" />
        <path d="M 85,283 C 110,293 150,273 200,288 C 250,303 290,283 315,298" fill="none" stroke="rgba(0,0,0,0.05)" stroke-width="2" stroke-linecap="round" />
        
        <path d="M 110,340 C 140,350 200,340 250,348 C 280,352 300,345 315,350" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="2" stroke-linecap="round" />
        <path d="M 85,190 C 120,180 180,200 230,185 C 280,170 300,195 315,185" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="3" stroke-linecap="round" />

        <!-- Highlights for Realistic Fabric Depth -->
        <path d="M 200,80 Q 200,250 210,350" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="12" stroke-linecap="round" filter="blur(5px)" />
        <path d="M 140,100 Q 130,220 145,340" fill="none" stroke="rgba(0,0,0,0.05)" stroke-width="8" stroke-linecap="round" filter="blur(4px)" />
      </svg>
    `
  },
  {
    id: "hoodie",
    name: "Cozy Hoodie",
    category: "apparel",
    defaultColor: "#1E293B", // dark slate
    colors: ["#FFFFFF", "#E2E8F0", "#1E293B", "#475569", "#78716C", "#991B1B", "#065F46"],
    printArea: { x: 30, y: 35, width: 40, height: 35 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="200" cy="385" rx="145" ry="10" fill="rgba(0, 0, 0, 0.12)" />
        
        <!-- Hoodie Sleeves and Body (Combined) -->
        <path d="M 130,85 
                 C 110,80 80,100 60,130 
                 L 40,240 
                 C 38,250 48,255 58,250 
                 L 85,210 
                 L 85,355 
                 C 85,365 95,370 105,370 
                 L 295,370 
                 C 305,370 315,365 315,355 
                 L 315,210 
                 L 342,250 
                 C 352,255 362,250 360,240 
                 L 340,130 
                 C 320,100 290,80 270,85 
                 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.2)" 
              stroke-width="2" />
              
        <!-- Ribbed Waist Band -->
        <path d="M 85,355 C 85,370 315,370 315,355 Z" fill="rgba(0, 0, 0, 0.15)" />
        
        <!-- Kangaroo Pocket -->
        <path d="M 130,270 
                 L 270,270 
                 L 290,325 
                 C 290,335 285,340 275,340 
                 L 125,340 
                 C 115,340 110,335 110,325 
                 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.25)" 
              stroke-width="1.5" />
        <path d="M 110,325 L 130,270" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
        <path d="M 290,325 L 270,270" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
        
        <!-- Hood Construction -->
        <path d="M 130,85 
                 C 120,40 160,25 200,25 
                 C 240,25 280,40 270,85 
                 C 255,100 225,105 200,105 
                 C 175,105 145,100 130,85 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.2)" 
              stroke-width="1.5" />
              
        <!-- Hood Inner opening shadow -->
        <path d="M 160,80 C 160,55 180,45 200,45 C 220,45 240,55 240,80 C 230,90 215,92 200,92 C 185,92 170,90 160,80 Z" 
              fill="rgba(0, 0, 0, 0.25)" />
              
        <!-- Drawstrings -->
        <path d="M 185,88 Q 180,120 178,160 Q 177,165 181,165 Q 183,163 183,158 Q 181,120 187,88" fill="#E2E8F0" />
        <path d="M 215,88 Q 220,130 222,175 Q 224,180 219,180 Q 217,177 217,172 Q 215,130 213,88" fill="#E2E8F0" />
        
        <!-- Shading overlays for folds and volume -->
        <!-- Armpit folds -->
        <path d="M 85,210 Q 110,215 125,230" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="3" stroke-linecap="round" />
        <path d="M 315,210 Q 290,215 275,230" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="3" stroke-linecap="round" />
        
        <!-- Chest folds -->
        <path d="M 130,120 Q 200,140 270,120" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="2" stroke-linecap="round" />
        <path d="M 140,160 Q 200,180 260,160" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3" stroke-linecap="round" />
        
        <!-- Side folds -->
        <path d="M 95,260 Q 110,290 95,320" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="2.5" />
        <path d="M 305,260 Q 290,290 305,320" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="2.5" />
      </svg>
    `
  },
  {
    id: "sweatshirt",
    name: "Cozy Sweatshirt",
    category: "apparel",
    defaultColor: "#EF4444", // vibrant red
    colors: ["#FFFFFF", "#E2E8F0", "#1E293B", "#000000", "#EF4444", "#3B82F6", "#10B981", "#7C3AED", "#78716C"],
    printArea: { x: 30, y: 28, width: 40, height: 42 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="200" cy="380" rx="140" ry="12" fill="rgba(0, 0, 0, 0.08)" />
        
        <!-- Sweatshirt Body & Sleeves -->
        <path d="M 120,60 
                 C 140,58 170,55 200,68 
                 C 230,55 260,58 280,60 
                 L 350,110
                 L 330,220
                 C 325,225 315,225 310,215
                 L 295,175
                 L 295,355
                 C 295,362 285,365 275,365
                 L 125,365
                 C 115,365 105,362 105,355
                 L 105,175
                 L 90,215
                 C 85,225 75,225 70,220
                 L 50,110
                 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.15)" 
              stroke-width="2" />
              
        <!-- Crew Neck Collar -->
        <path d="M 155,58 C 175,72 225,72 245,58 C 248,52 240,50 200,50 C 160,50 152,52 155,58 Z" 
              fill="rgba(0, 0, 0, 0.08)" 
              stroke="rgba(0,0,0,0.15)" />
        
        <!-- Left Sleeve Hem / Cuff Stitching -->
        <path d="M 50,110 L 70,115" stroke="rgba(0,0,0,0.12)" stroke-width="2.5" />
        <!-- Right Sleeve Hem / Cuff Stitching -->
        <path d="M 350,110 L 330,115" stroke="rgba(0,0,0,0.12)" stroke-width="2.5" />
        
        <!-- Ribbed Waistband -->
        <path d="M 105,355 C 105,365 295,365 295,355 Z" fill="rgba(0, 0, 0, 0.1)" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />
        
        <!-- Premium Folds & Shading (Overlay) -->
        <!-- Shoulder shading -->
        <path d="M 120,60 Q 150,90 120,130" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="3" stroke-linecap="round" />
        <path d="M 280,60 Q 250,90 280,130" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="3" stroke-linecap="round" />
        
        <!-- Sleeve Crease/Folds -->
        <path d="M 95,115 Q 85,150 100,180" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="2" stroke-linecap="round" />
        <path d="M 305,115 Q 315,150 300,180" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="2" stroke-linecap="round" />
        
        <!-- Waist Fold Lines -->
        <path d="M 105,290 C 130,300 170,280 200,295 C 230,310 270,290 295,305" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3.5" stroke-linecap="round" />
        <path d="M 105,293 C 130,303 170,283 200,298 C 230,313 270,293 295,308" fill="none" stroke="rgba(0,0,0,0.05)" stroke-width="2" stroke-linecap="round" />
        
        <!-- Highlights for Realistic Fabric Depth -->
        <path d="M 200,80 Q 200,250 210,340" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="12" stroke-linecap="round" filter="blur(4px)" />
        <path d="M 140,100 Q 130,220 145,335" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="8" stroke-linecap="round" filter="blur(3px)" />
      </svg>
    `
  },
  {
    id: "mug",
    name: "Ceramic Coffee Mug",
    category: "home",
    defaultColor: "#FFFFFF",
    colors: ["#FFFFFF", "#000000", "#DC2626", "#2563EB", "#16A34A", "#D97706", "#7C3AED"],
    printArea: { x: 25, y: 25, width: 42, height: 50 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Drop Shadow -->
        <ellipse cx="200" cy="330" rx="90" ry="10" fill="rgba(0, 0, 0, 0.12)" />
        
        <!-- Mug Handle (Behind body for solid colors, or overlayed carefully) -->
        <path d="M 280,140 
                 C 330,140 345,260 280,270 
                 C 265,270 265,250 275,250 
                 C 310,240 305,160 275,160 
                 C 265,160 265,140 280,140 Z" 
              fill="${color === '#FFFFFF' ? '#F1F5F9' : color}" 
              stroke="rgba(0,0,0,0.15)" 
              stroke-width="1.5" />
              
        <!-- Inner handle shadow -->
        <path d="M 285,155 C 315,165 315,235 285,245" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="3" />
        
        <!-- Mug Body (Cylinder) -->
        <path d="M 120,120 
                 L 120,300 
                 C 120,325 280,325 280,300 
                 L 280,120 
                 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.2)" 
              stroke-width="2" />
              
        <!-- Rim Opening / Coffee Interior -->
        <ellipse cx="200" cy="120" rx="80" ry="20" fill="${color}" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
        <!-- Inner shadow / liquid -->
        <ellipse cx="200" cy="122" rx="74" ry="16" fill="rgba(0,0,0,0.06)" />
        <!-- Coffee option if white interior -->
        <ellipse cx="200" cy="125" rx="65" ry="12" fill="#3B2314" opacity="0.85" />
        
        <!-- 3D Cylindrical Shading & Highlighting -->
        <!-- Left Side Shadow (depth) -->
        <path d="M 120,120 L 120,300 C 140,315 160,300 160,120 Z" fill="rgba(0,0,0,0.05)" filter="blur(3px)" />
        <!-- Right Side Shadow -->
        <path d="M 280,120 L 280,300 C 260,315 240,300 240,120 Z" fill="rgba(0,0,0,0.04)" filter="blur(3px)" />
        
        <!-- Glossy Highlights -->
        <path d="M 140,135 Q 135,220 140,285" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="6" stroke-linecap="round" filter="blur(1px)" />
        <path d="M 200,135 Q 200,220 200,300" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="12" stroke-linecap="round" filter="blur(4px)" />
      </svg>
    `
  },
  {
    id: "totebag",
    name: "Canvas Tote Bag",
    category: "accessories",
    defaultColor: "#F5F5DC", // beige / canvas natural
    colors: ["#FFFFFF", "#F5F5DC", "#000000", "#1E3A8A", "#064E3B", "#78350F"],
    printArea: { x: 22, y: 32, width: 56, height: 48 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Ground Shadow -->
        <ellipse cx="200" cy="380" rx="110" ry="8" fill="rgba(0, 0, 0, 0.1)" />
        
        <!-- Straps (Behind and Front) -->
        <!-- Left Strap -->
        <path d="M 140,170 C 140,30 170,30 170,170" fill="none" stroke="#D1C4E9" stroke-width="12" stroke-linecap="round" opacity="0.15" />
        <path d="M 140,170 C 140,30 170,30 170,170" fill="none" stroke="rgba(0,0,0,0.6)" stroke-width="8" stroke-linecap="round" />
        
        <!-- Right Strap -->
        <path d="M 230,170 C 230,30 260,30 260,170" fill="none" stroke="#D1C4E9" stroke-width="12" stroke-linecap="round" opacity="0.15" />
        <path d="M 230,170 C 230,30 260,30 260,170" fill="none" stroke="rgba(0,0,0,0.6)" stroke-width="8" stroke-linecap="round" />
        
        <!-- Tote Bag Body -->
        <path d="M 90,160 
                 L 310,160 
                 C 315,160 320,165 318,175 
                 L 295,360 
                 C 293,370 285,375 275,375 
                 L 125,375 
                 C 115,375 107,370 105,360 
                 L 82,175 
                 C 80,165 85,160 90,160 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.18)" 
              stroke-width="2" />
              
        <!-- Top Hem Stitching -->
        <path d="M 86,180 L 314,180" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" stroke-dasharray="4,3" />
        <path d="M 88,185 L 312,185" stroke="rgba(0,0,0,0.1)" stroke-width="1" />
        
        <!-- Fabric Textures & Realistic Folds -->
        <path d="M 130,180 C 140,240 120,300 135,370" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 270,180 C 260,240 280,300 265,370" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 200,180 C 205,250 195,310 200,375" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="4" stroke-linecap="round" />
        <path d="M 198,180 C 203,250 193,310 198,375" fill="none" stroke="rgba(0,0,0,0.05)" stroke-width="2" stroke-linecap="round" />
        
        <path d="M 105,330 C 140,345 200,335 250,342 C 275,346 288,338 295,340" fill="none" stroke="rgba(0,0,0,0.05)" stroke-width="2" />
        <path d="M 95,240 Q 150,265 210,250 Q 260,235 305,255" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="3" />
      </svg>
    `
  },
  {
    id: "phonecase",
    name: "Glossy Phone Case",
    category: "accessories",
    defaultColor: "#0F172A", // midnight
    colors: ["#FFFFFF", "#0F172A", "#E2E8F0", "#EC4899", "#8B5CF6", "#F59E0B", "#10B981"],
    printArea: { x: 15, y: 15, width: 70, height: 70 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Case Drop Shadow -->
        <rect x="135" y="55" width="130" height="295" rx="28" ry="28" fill="rgba(0,0,0,0.15)" filter="blur(6px)" />
        
        <!-- Case Body -->
        <rect x="130" y="50" width="130" height="295" rx="26" ry="26" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="2.5" />
        
        <!-- Camera Lens Bump -->
        <rect x="146" y="66" width="36" height="70" rx="10" ry="10" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        
        <!-- Camera Lenses -->
        <circle cx="164" cy="82" r="9" fill="#111" stroke="#333" stroke-width="1" />
        <circle cx="164" cy="82" r="4" fill="#0c1624" />
        <circle cx="164" cy="116" r="9" fill="#111" stroke="#333" stroke-width="1" />
        <circle cx="164" cy="116" r="4" fill="#0c1624" />
        <circle cx="164" cy="99" r="3" fill="#FFE8A3" opacity="0.9" /> <!-- flash -->
        
        <!-- Glossy Reflective Highlights -->
        <path d="M 134,75 L 134,310 C 134,325 145,336 160,336 L 160,54 Q 134,54 134,75" fill="rgba(255,255,255,0.08)" />
        
        <!-- Sharp Diagonal Shine -->
        <path d="M 135,110 L 255,250 L 255,280 L 135,140 Z" fill="rgba(255,255,255,0.05)" />
        <path d="M 135,80 L 255,220 L 255,235 L 135,95 Z" fill="rgba(255,255,255,0.07)" />
        
        <!-- Hard Plastic Outer Rim Highlight -->
        <rect x="132" y="52" width="126" height="291" rx="24" ry="24" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
      </svg>
    `
  },
  {
    id: "cap",
    name: "Classic Dad Hat",
    category: "accessories",
    defaultColor: "#78350F", // brown
    colors: ["#FFFFFF", "#000000", "#1E293B", "#78350F", "#1D4ED8", "#B91C1C", "#0F766E"],
    printArea: { x: 32, y: 44, width: 36, height: 20 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Drop Shadow -->
        <ellipse cx="200" cy="315" rx="120" ry="12" fill="rgba(0, 0, 0, 0.15)" />
        
        <!-- Cap Visor / Brim -->
        <path d="M 90,265 
                 C 110,305 290,305 310,265 
                 C 260,250 140,250 90,265 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.25)" 
              stroke-width="1.5" />
              
        <!-- Visor Shading (Lower depth) -->
        <path d="M 90,265 C 110,305 290,305 310,265 C 290,285 110,285 90,265 Z" fill="rgba(0, 0, 0, 0.15)" />
        <!-- Stitching Lines on Visor -->
        <path d="M 115,268 C 135,290 265,290 285,268" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1" stroke-dasharray="3,3" />
        <path d="M 125,273 C 145,293 255,293 275,273" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1" stroke-dasharray="3,3" />
        
        <!-- Cap Dome / Crown -->
        <path d="M 105,255 
                 C 90,140 150,110 200,110 
                 C 250,110 310,140 295,255 
                 C 250,240 150,240 105,255 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.2)" 
              stroke-width="1.5" />
              
        <!-- Crown Stitching / Segments -->
        <path d="M 200,110 Q 180,180 105,255" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1" stroke-dasharray="4,3" />
        <path d="M 200,110 Q 200,180 200,245" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1" stroke-dasharray="4,3" />
        <path d="M 200,110 Q 220,180 295,255" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1" stroke-dasharray="4,3" />
        
        <!-- Top Button -->
        <ellipse cx="200" cy="110" rx="10" ry="4" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1" />
        
        <!-- Eyelet Air Holes -->
        <circle cx="150" cy="160" r="3" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />
        <circle cx="250" cy="160" r="3" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />
        
        <!-- Crown Realistic Shading and Highlights -->
        <!-- Center Highlight -->
        <path d="M 200,115 Q 170,170 160,240" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="16" stroke-linecap="round" filter="blur(4px)" />
        <path d="M 115,210 Q 140,230 180,242" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="3" filter="blur(1px)" />
        <path d="M 285,210 Q 260,230 220,242" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="3" filter="blur(1px)" />
      </svg>
    `
  },
  {
    id: "poster",
    name: "Minimalist Framed Poster",
    category: "home",
    defaultColor: "#1E293B", // deep frame color
    colors: ["#FFFFFF", "#1E293B", "#0F172A", "#000000", "#D97706", "#78350F"],
    printArea: { x: 30, y: 20, width: 40, height: 60 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Wall background shadow -->
        <rect x="100" y="60" width="200" height="280" rx="4" fill="rgba(0, 0, 0, 0.25)" filter="blur(8px)" />
        
        <!-- Outer wooden / metal frame -->
        <rect x="95" y="55" width="210" height="290" rx="6" fill="${color}" stroke="rgba(0,0,0,0.4)" stroke-width="2" />
        
        <!-- Inner Matting / Passepartout (white/cream border around the artwork) -->
        <rect x="110" y="70" width="180" height="260" fill="#FAF9F6" stroke="rgba(0,0,0,0.08)" stroke-width="1" />
        
        <!-- Inner print area outline where logo goes -->
        <rect x="120" y="80" width="160" height="240" fill="#FFFFFF" stroke="rgba(0,0,0,0.05)" stroke-width="1" />
        
        <!-- Sophisticated paper texture/shading overlays -->
        <!-- Soft diagonal spotlight gradient -->
        <path d="M 95,55 L 305,265 L 305,345 L 95,135 Z" fill="rgba(255, 255, 255, 0.05)" />
        <path d="M 120,80 L 280,240 L 280,320 L 120,160 Z" fill="rgba(255, 255, 255, 0.03)" />
        
        <!-- Frame corner join lines (adding high fidelity realism) -->
        <line x1="95" y1="55" x2="110" y2="70" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
        <line x1="305" y1="55" x2="290" y2="70" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
        <line x1="95" y1="345" x2="110" y2="330" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
        <line x1="305" y1="345" x2="290" y2="330" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
      </svg>
    `
  },
  {
    id: "oversized_tshirt",
    name: "Heavyweight Oversized Tee",
    category: "apparel",
    defaultColor: "#78716C", // warm gray / stone
    colors: ["#FFFFFF", "#1E293B", "#000000", "#78716C", "#451A03", "#14532D", "#F5F5DC"],
    printArea: { x: 26, y: 22, width: 48, height: 50 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="200" cy="385" rx="145" ry="10" fill="rgba(0, 0, 0, 0.08)" />
        
        <!-- Oversized T-Shirt Body -->
        <path d="M 100,55 
                 C 130,52 165,48 200,62 
                 C 235,48 270,52 300,55 
                 L 380,95 
                 C 385,100 380,120 365,145 
                 L 325,165 
                 L 325,365 
                 C 325,372 315,375 305,375 
                 L 95,375 
                 C 85,375 75,372 75,365 
                 L 75,165 
                 L 35,145 
                 C 20,120 15,100 20,95 
                 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.15)" 
              stroke-width="2.2" />
              
        <!-- Wide Neck Rib/Collar -->
        <path d="M 140,53 C 160,70 240,70 260,53 C 263,48 250,45 200,45 C 150,45 137,48 140,53 Z" 
              fill="rgba(0, 0, 0, 0.09)" 
              stroke="rgba(0,0,0,0.18)" />
              
        <!-- Wide Hem Sleeves -->
        <path d="M 35,145 L 75,165" stroke="rgba(0,0,0,0.12)" stroke-width="2.5" />
        <path d="M 365,145 L 325,165" stroke="rgba(0,0,0,0.12)" stroke-width="2.5" />
        
        <!-- Drop shoulder seam stitches -->
        <path d="M 120,54 Q 100,105 75,125" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="1.5" stroke-dasharray="3,3" />
        <path d="M 280,54 Q 300,105 325,125" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="1.5" stroke-dasharray="3,3" />
        
        <!-- Folds and Creases -->
        <path d="M 75,220 Q 110,240 75,270" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="3" stroke-linecap="round" />
        <path d="M 325,220 Q 290,240 325,270" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="3" stroke-linecap="round" />
        
        <path d="M 95,345 C 130,355 200,345 250,352 C 285,356 300,348 325,352" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3.5" stroke-linecap="round" />
        <path d="M 95,348 C 130,358 200,348 250,355 C 285,359 300,351 325,355" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="2" stroke-linecap="round" />
        
        <path d="M 75,185 C 110,180 170,195 220,180 C 270,165 300,190 325,180" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="3" stroke-linecap="round" />
        
        <!-- Center Soft Light Depth -->
        <path d="M 200,75 Q 195,230 205,355" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="15" stroke-linecap="round" filter="blur(5px)" />
        <path d="M 135,110 Q 125,240 135,350" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="10" stroke-linecap="round" filter="blur(4px)" />
      </svg>
    `
  },
  {
    id: "polo_shirt",
    name: "Premium Sport Polo",
    category: "apparel",
    defaultColor: "#1E3A8B", // classic navy
    colors: ["#FFFFFF", "#000000", "#1E3A8B", "#14532D", "#991B1B", "#475569", "#E2E8F0"],
    printArea: { x: 30, y: 30, width: 40, height: 42 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="200" cy="380" rx="135" ry="10" fill="rgba(0, 0, 0, 0.08)" />
        
        <!-- Body -->
        <path d="M 120,62 
                 C 140,58 170,55 200,68 
                 C 230,55 260,58 280,62 
                 L 355,95 
                 C 360,100 358,112 345,130 
                 L 315,145 
                 L 315,360 
                 C 315,365 305,370 295,370 
                 L 105,370 
                 C 95,370 85,365 85,360 
                 L 85,145 
                 L 55,130 
                 C 42,112 40,100 45,95 
                 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.15)" 
              stroke-width="2" />
              
        <!-- Ribbed Sleeve Cuffs -->
        <path d="M 55,130 L 85,145" stroke="rgba(0,0,0,0.2)" stroke-width="3" />
        <path d="M 345,130 L 315,145" stroke="rgba(0,0,0,0.2)" stroke-width="3" />
        
        <!-- Button Placket -->
        <path d="M 185,68 L 215,68 L 210,140 L 190,140 Z" fill="${color}" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />
        <line x1="200" y1="68" x2="200" y2="135" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
        
        <!-- Small Pearl Buttons -->
        <circle cx="200" cy="85" r="3.5" fill="#FFF" stroke="rgba(0,0,0,0.3)" stroke-width="0.7" />
        <circle cx="200" cy="105" r="3.5" fill="#FFF" stroke="rgba(0,0,0,0.3)" stroke-width="0.7" />
        <circle cx="200" cy="125" r="3.5" fill="#FFF" stroke="rgba(0,0,0,0.3)" stroke-width="0.7" />
        
        <!-- Polo Collar Left -->
        <path d="M 155,58 L 200,110 L 200,68 C 175,68 160,62 155,58 Z" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />
        <!-- Polo Collar Right -->
        <path d="M 245,58 L 200,110 L 200,68 C 225,68 240,62 245,58 Z" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />
        
        <!-- Collar shadow drapes -->
        <path d="M 155,58 C 175,70 225,70 245,58" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="2.5" />
        
        <!-- Shading overlays for athletic premium fabric depth -->
        <path d="M 85,240 C 120,230 180,245 230,235 C 280,225 300,240 315,235" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="3.5" stroke-linecap="round" />
        <path d="M 200,145 Q 195,250 205,350" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="10" stroke-linecap="round" filter="blur(4px)" />
        <path d="M 140,150 Q 130,240 145,345" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="8" stroke-linecap="round" filter="blur(3px)" />
      </svg>
    `
  },
  {
    id: "tank_top",
    name: "Athletic Ribbed Tank",
    category: "apparel",
    defaultColor: "#FFFFFF",
    colors: ["#FFFFFF", "#000000", "#E2E8F0", "#3B82F6", "#EF4444", "#EC4899", "#10B981"],
    printArea: { x: 28, y: 26, width: 44, height: 45 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="200" cy="385" rx="115" ry="8" fill="rgba(0, 0, 0, 0.07)" />
        
        <!-- Tank Top Body -->
        <path d="M 145,60 
                 C 152,58 175,95 200,95 
                 C 225,95 248,58 255,60 
                 C 265,65 272,120 285,145 
                 C 292,160 295,190 295,225 
                 L 295,360 
                 C 295,368 285,372 275,372 
                 L 125,372 
                 C 115,372 105,368 105,360 
                 L 105,225 
                 C 105,190 108,160 115,145 
                 C 128,120 135,65 145,60 
                 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.15)" 
              stroke-width="2" />
              
        <!-- Ribbed Binding Trim on Neckline -->
        <path d="M 145,60 C 152,58 175,95 200,95 C 225,95 248,58 255,60 C 255,64 225,99 200,99 C 175,99 145,64 145,60 Z" fill="rgba(0,0,0,0.06)" />
        
        <!-- Ribbed Binding Trim on Left Armhole -->
        <path d="M 145,60 C 135,65 128,120 115,145 Q 120,145 130,123 C 138,103 145,65 145,60 Z" fill="rgba(0,0,0,0.06)" />
        <!-- Ribbed Binding Trim on Right Armhole -->
        <path d="M 255,60 C 265,65 272,120 285,145 Q 280,145 270,123 C 262,103 255,65 255,60 Z" fill="rgba(0,0,0,0.06)" />
        
        <!-- Ribbed texture overlay lines -->
        <path d="M 120,180 Q 150,170 200,175 Q 250,180 280,170" fill="none" stroke="rgba(0,0,0,0.03)" stroke-width="2.5" />
        <path d="M 110,240 Q 150,230 200,235 Q 250,240 290,230" fill="none" stroke="rgba(0,0,0,0.03)" stroke-width="2.5" />
        <path d="M 110,300 Q 150,290 200,295 Q 250,300 290,290" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3" />
        
        <!-- Shading & Highlight for ribbing depth -->
        <path d="M 200,105 L 200,360" stroke="rgba(255,255,255,0.12)" stroke-width="12" stroke-linecap="round" filter="blur(3px)" />
        <path d="M 150,120 Q 140,240 150,355" stroke="rgba(0,0,0,0.04)" stroke-width="8" stroke-linecap="round" filter="blur(3px)" />
        <path d="M 250,120 Q 260,240 250,355" stroke="rgba(0,0,0,0.04)" stroke-width="8" stroke-linecap="round" filter="blur(3px)" />
      </svg>
    `
  },
  {
    id: "water_bottle",
    name: "Insulated Sport Flask",
    category: "accessories",
    defaultColor: "#111827", // dark graphite
    colors: ["#FFFFFF", "#111827", "#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#6366F1", "#94A3B8"],
    printArea: { x: 30, y: 30, width: 40, height: 45 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Base Shadow -->
        <ellipse cx="200" cy="355" rx="55" ry="8" fill="rgba(0, 0, 0, 0.16)" filter="blur(2px)" />
        
        <!-- Loop Cap / Handle -->
        <path d="M 175,70 C 175,40 225,40 225,70 L 215,70 C 215,50 185,50 185,70 Z" fill="#4B5563" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
        
        <!-- Metal Cap neck -->
        <rect x="170" y="70" width="60" height="18" rx="3" ry="3" fill="#9CA3AF" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />
        <line x1="170" y1="78" x2="230" y2="78" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />
        
        <!-- Tapered Flask Shoulder -->
        <path d="M 172,88 
                 L 228,88 
                 C 240,88 250,105 250,115 
                 L 250,335 
                 C 250,348 230,350 200,350 
                 C 170,350 150,348 150,335 
                 L 150,115 
                 C 150,105 160,88 172,88 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.25)" 
              stroke-width="2" />
              
        <!-- Steel Silver Base Accent Rim -->
        <path d="M 150,325 L 150,335 C 150,348 230,350 250,335 L 250,325 Z" fill="rgba(156, 163, 175, 0.2)" />
        
        <!-- Dynamic Gloss / Metallic Cylindrical Lighting -->
        <!-- Center Soft Light -->
        <rect x="188" y="115" width="24" height="225" fill="rgba(255,255,255,0.15)" filter="blur(4px)" />
        <!-- Sharp reflective left highlight -->
        <rect x="160" y="115" width="6" height="215" fill="rgba(255,255,255,0.25)" rx="2" filter="blur(0.5px)" />
        <!-- Left boundary depth shadow -->
        <path d="M 150,115 L 165,115 L 165,340 L 150,335 Z" fill="rgba(0,0,0,0.12)" filter="blur(2px)" />
        <!-- Right boundary depth shadow -->
        <path d="M 250,115 L 235,115 L 235,340 L 250,335 Z" fill="rgba(0,0,0,0.15)" filter="blur(2px)" />
        
        <!-- Shoulder Highlights -->
        <path d="M 152,115 C 155,108 162,96 172,94" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="3" filter="blur(1px)" />
      </svg>
    `
  },
  {
    id: "mouse_pad",
    name: "Stitched Desk Mousepad",
    category: "accessories",
    defaultColor: "#1E293B",
    colors: ["#FFFFFF", "#1E293B", "#0F172A", "#000000", "#451A03", "#064E3B", "#4D7C0F"],
    printArea: { x: 10, y: 10, width: 80, height: 80 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Wood Desk Grain Backdrop shadow -->
        <rect x="15" y="15" width="370" height="370" rx="10" fill="none" />
        
        <!-- Ground drop shadow of the pad -->
        <rect x="36" y="86" width="328" height="228" rx="14" fill="rgba(0, 0, 0, 0.22)" filter="blur(6px)" />
        
        <!-- Mousepad Rubber Base Layer -->
        <rect x="30" y="80" width="340" height="240" rx="16" fill="#111827" stroke="rgba(0,0,0,0.3)" stroke-width="1" />
        
        <!-- Mousepad Top Fabric Layer -->
        <rect x="32" y="82" width="336" height="236" rx="14" fill="${color}" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" />
        
        <!-- Stitched Boundary/Seams (High fidelity) -->
        <rect x="38" y="88" width="324" height="224" rx="10" fill="none" stroke="rgba(0, 0, 0, 0.2)" stroke-width="2.5" stroke-dasharray="6,4" />
        <rect x="38" y="88" width="324" height="224" rx="10" fill="none" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" stroke-dasharray="6,4" />
        
        <!-- Fabric grain/sheen spotlights -->
        <path d="M 32,82 L 368,318 L 368,260 L 90,82 Z" fill="rgba(255,255,255,0.04)" />
        <path d="M 32,200 L 200,318 L 140,318 L 32,260 Z" fill="rgba(0,0,0,0.1)" />
        <path d="M 200,82 L 368,250 L 368,220 L 240,82 Z" fill="rgba(255,255,255,0.02)" />
      </svg>
    `
  },
  {
    id: "notebook",
    name: "Hardcover Journal Notebook",
    category: "accessories",
    defaultColor: "#475569", // slate
    colors: ["#FFFFFF", "#475569", "#0F172A", "#1C1917", "#1E3A8B", "#064E3B", "#7F1D1D", "#78350F"],
    printArea: { x: 20, y: 15, width: 60, height: 70 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Hardback Drop Shadow -->
        <rect x="104" y="64" width="202" height="282" rx="12" fill="rgba(0, 0, 0, 0.18)" filter="blur(6px)" />
        <rect x="100" y="60" width="200" height="280" rx="10" fill="rgba(0, 0, 0, 0.1)" filter="blur(3px)" />
        
        <!-- Spine edge (behind spine) -->
        <path d="M 98,62 L 102,62 L 102,338 L 98,338 Z" fill="rgba(0, 0, 0, 0.15)" />
        
        <!-- Main Cover -->
        <rect x="102" y="60" width="198" height="280" rx="8" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1.5" />
        
        <!-- Fabric/Leather grain texture overlay -->
        <rect x="102" y="60" width="198" height="280" rx="8" fill="rgba(255,255,255,0.03)" />
        
        <!-- Notebook Spine Segment (Left spine binding effect) -->
        <path d="M 102,60 
                 L 118,60 
                 C 120,60 120,340 118,340 
                 L 102,340 
                 Z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.15)" 
              stroke-width="1" />
        <path d="M 118,60 L 118,340" stroke="rgba(0,0,0,0.2)" stroke-width="1" />
        <path d="M 117,60 L 117,340" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
        
        <!-- Page Edges (Visible at the top/right/bottom as tiny white stripes) -->
        <path d="M 296,68 L 302,70 L 302,330 L 296,332 Z" fill="#F8FAFC" stroke="rgba(0,0,0,0.1)" stroke-width="0.5" />
        <path d="M 298,71 L 301,73 L 301,327 L 298,329 Z" fill="#E2E8F0" />
        
        <!-- Silk Ribbon Bookmark (Peek out of bottom) -->
        <path d="M 220,336 L 226,336 L 223,375 L 214,370 L 212,360 Z" fill="#DC2626" opacity="0.9" stroke="rgba(0,0,0,0.15)" stroke-width="0.5" />
        
        <!-- Elastic Band Closure -->
        <rect x="268" y="60" width="12" height="280" fill="#1E293B" opacity="0.85" rx="1" stroke="rgba(0,0,0,0.2)" stroke-width="0.7" />
        <!-- Elastic shadow -->
        <rect x="266" y="60" width="2" height="280" fill="rgba(0,0,0,0.25)" filter="blur(1px)" />
        
        <!-- Gloss Highlights / Matte Shadows -->
        <path d="M 125,60 L 250,340" stroke="rgba(255,255,255,0.06)" stroke-width="8" filter="blur(2px)" />
        <path d="M 130,60 L 265,340" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
        <path d="M 103,60 L 103,340" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
      </svg>
    `
  },
  {
    id: "sticker",
    name: "Die-Cut Vinyl Sticker",
    category: "accessories",
    defaultColor: "#FAF9F6", // matte white backing
    colors: ["#FFFFFF", "#FAF9F6", "#F1F5F9", "#000000", "#FFE4E6", "#ECFDF5", "#EFF6FF"],
    printArea: { x: 15, y: 15, width: 70, height: 70 },
    getSvg: (color: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Realistic curling shadow -->
        <path d="M 85,85 
                 C 100,55 300,55 315,85 
                 C 345,110 345,290 315,315 
                 C 300,345 100,345 85,315 
                 C 55,290 55,110 85,85 Z" 
              fill="rgba(0,0,0,0.12)" 
              filter="blur(7px)" />
              
        <!-- Sticker Outer Border Die-Cut Border -->
        <path d="M 82,82 
                 C 98,52 302,52 318,82 
                 C 348,107 348,293 318,318 
                 C 302,348 98,348 82,318 
                 C 52,293 52,107 82,82 Z" 
              fill="${color === '#FFFFFF' ? '#FAF9F6' : color}" 
              stroke="rgba(0,0,0,0.08)" 
              stroke-width="1.5" />
              
        <!-- Sticker Inner Print Body Area -->
        <path d="M 94,94 
                 C 108,68 292,68 306,94 
                 C 332,118 332,282 306,306 
                 C 292,332 108,332 94,306 
                 C 68,282 68,118 94,94 Z" 
              fill="#FFFFFF" 
              stroke="rgba(0,0,0,0.04)" 
              stroke-width="1" />
              
        <!-- Premium Peeling Corner Fold (Top Right) -->
        <!-- Corner curl shadow -->
        <path d="M 298,68 C 302,82 320,100 332,102 Z" fill="rgba(0,0,0,0.12)" filter="blur(3px)" />
        <!-- Corner curl back white side -->
        <path d="M 300,66 C 304,80 320,96 330,100 Z" fill="#E2E8F0" stroke="rgba(0,0,0,0.1)" stroke-width="0.5" />
        
        <!-- Glossy reflection lines over the whole vinyl surface -->
        <path d="M 60,180 L 340,320 L 340,300 L 100,180 Z" fill="rgba(255,255,255,0.07)" />
        <path d="M 60,150 L 310,275 L 310,265 L 80,150 Z" fill="rgba(255,255,255,0.04)" />
      </svg>
    `
  }
];
