---
name: Apex Telemetry
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c7c5ce'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#919098'
  outline-variant: '#46464d'
  surface-tint: '#c1c4e6'
  primary: '#c1c4e6'
  on-primary: '#2b2f49'
  primary-container: '#0a0e27'
  on-primary-container: '#777a99'
  inverse-primary: '#595c79'
  secondary: '#c0c4e8'
  on-secondary: '#2a2f4a'
  secondary-container: '#454a67'
  on-secondary-container: '#b5badd'
  tertiary: '#e7bea1'
  on-tertiary: '#442b16'
  tertiary-container: '#1e0b00'
  on-tertiary-container: '#98755b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dee0ff'
  primary-fixed-dim: '#c1c4e6'
  on-primary-fixed: '#161a33'
  on-primary-fixed-variant: '#414561'
  secondary-fixed: '#dee1ff'
  secondary-fixed-dim: '#c0c4e8'
  on-secondary-fixed: '#151a34'
  on-secondary-fixed-variant: '#404562'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#e7bea1'
  on-tertiary-fixed: '#2c1604'
  on-tertiary-fixed-variant: '#5d412a'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

## Brand & Style
The design system is engineered for high-performance data consumption, catering to Formula 1 enthusiasts and analysts. The brand personality is technical, precise, and authoritative, mirroring the engineering excellence found in a pit lane. 

The visual style is **Minimalist-Technocratic**. It prioritizes information density and legibility through a high-contrast dark interface. By utilizing a "Dark Room" aesthetic, we ensure that vibrant team-specific accent colors remain the primary signal for users navigating complex data sets. The interface avoids unnecessary decorative elements, focusing instead on structural integrity and functional clarity.

## Colors
This design system utilizes a deep-space palette to maximize contrast for data visualization. 

- **Background (#0a0e27):** A deep midnight navy used for the primary canvas to reduce eye strain during long-form data analysis.
- **Surface (#1a1f3a):** A slightly elevated blue-grey for cards, sidebars, and input containers.
- **Accents:** While the default primary accent is F1 Red, the system is designed to dynamically inject team-specific hex codes (e.g., Mercedes Teal, Red Bull Blue) for driver-specific or team-specific modules.
- **Typography:** Pure white (#ffffff) is reserved for headers, while secondary text uses a 70% opacity white to establish hierarchy.

## Typography
The typography system balances the Swiss-style clarity of **Inter** with the technical precision of **JetBrains Mono**.

- **Inter** is used for all UI labels, navigation, and headings to ensure maximum readability and a modern, professional feel.
- **JetBrains Mono** (or a similar monospace) is strictly reserved for "Telemetry Data": lap times, interval gaps, coordinates, and sector speeds. This ensures that numbers align vertically in tables, facilitating rapid comparison.
- **Hierarchy:** Use heavy weights (700+) for headlines to create a "bold" racing aesthetic, and lighter weights for body copy to maintain a clean look.

## Layout & Spacing
The layout follows a strict **8px grid rhythm** to maintain a tight, engineered appearance.

- **Grid Model:** A 12-column fluid grid for desktop with 16px gutters.
- **Side Navigation:** A fixed-width (240px) vertical sidebar is preferred for the desktop experience, providing immediate access to different Grand Prix events and standings.
- **Mobile Adaptivity:** On mobile, the sidebar collapses into a bottom navigation bar or a hamburger menu. Margins reduce to 16px.
- **Density:** High information density is encouraged. Padding within data tables should remain at `sm` (8px) or `md` (16px) to maximize the "at-a-glance" value of the dashboard.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** rather than traditional shadows. 

- **Level 0 (Background):** The primary application canvas (#0a0e27).
- **Level 1 (Surface):** Cards and sidebars (#1a1f3a).
- **Level 2 (Active/Hover):** Interactive elements that use a subtle 1px border (#ffffff at 10% opacity) or a slight lightening of the surface color.
- **Accents:** Use vertical "Team Strips" (4px wide colored borders) on the left edge of cards to denote team affiliation without overwhelming the UI with color. 
- **Shadows:** Use only for high-priority modals. Shadows should be sharp, dark, and tight (e.g., 0 4px 12px rgba(0,0,0,0.5)).

## Shapes
The shape language is **Soft-Technical**. We use a 4px (0.25rem) base corner radius to avoid the clinical feel of sharp corners while maintaining a rigid, structural appearance that fits the racing industry. 

- **Buttons/Inputs:** 4px radius.
- **Cards:** 8px radius (`rounded-lg`) to provide a clear container for data.
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them from interactive buttons.

## Components
- **Data Tables:** The core of the app. Rows should have a subtle hover state (#ffffff at 5% opacity). Columns containing times (e.g., 1:24.502) must use the `data-mono` font.
- **Info Cards:** Used for driver profiles or track stats. Feature a 4px accent border on the left side using the team's primary color.
- **Buttons:** 
  - *Primary:* Solid accent color with white/black text depending on contrast.
  - *Ghost:* 1px white border (20% opacity) with white text.
- **Telemetry Chips:** Small, condensed labels used for tire compounds (e.g., a red circle for "Soft", yellow for "Medium").
- **Side Navigation:** Transparent background with high-contrast icons. Active states should use a thick accent-colored bar on the left.
- **Input Fields:** Darker than the surface color (#080c20) with a 1px border. Focus state should highlight the border with the primary accent color.