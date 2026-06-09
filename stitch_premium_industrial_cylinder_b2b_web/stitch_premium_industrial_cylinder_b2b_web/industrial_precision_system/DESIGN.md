---
name: Industrial Precision System
colors:
  surface: '#faf9fb'
  surface-dim: '#dbd9dc'
  surface-bright: '#faf9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f6'
  surface-container: '#efedf0'
  surface-container-high: '#e9e8ea'
  surface-container-highest: '#e3e2e5'
  on-surface: '#1b1c1e'
  on-surface-variant: '#43474d'
  inverse-surface: '#2f3033'
  inverse-on-surface: '#f2f0f3'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#49607e'
  primary: '#000f22'
  on-primary: '#ffffff'
  primary-container: '#0a2540'
  on-primary-container: '#768dad'
  inverse-primary: '#b0c8eb'
  secondary: '#0059bb'
  on-secondary: '#ffffff'
  secondary-container: '#0070ea'
  on-secondary-container: '#fefcff'
  tertiary: '#000f22'
  on-tertiary: '#ffffff'
  tertiary-container: '#142538'
  on-tertiary-container: '#7c8ca4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b0c8eb'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#314865'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc7ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#faf9fb'
  on-background: '#1b1c1e'
  surface-variant: '#e3e2e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-padding: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for the premium B2B industrial sector, specifically focusing on high-end hydraulic manufacturing. It moves away from the gritty, dark "heavy industry" stereotypes, opting instead for a **Corporate Modern** aesthetic that feels like a high-end architectural brochure.

The visual narrative prioritizes precision, reliability, and engineering excellence. By utilizing expansive whitespace, a disciplined technical color palette, and rhythmic spacing, the UI communicates a sense of "clean-room" manufacturing. The emotional goal is to evoke trust through clarity, positioning the product as a sophisticated technological component rather than raw hardware.

## Colors

The palette is rooted in a "Steel and Navy" professional spectrum. 

- **Primary (Deep Navy):** Used for primary navigation, headings, and high-level structural elements to ground the design in authority.
- **Secondary (Blue):** A vibrant "Action Blue" used sparingly for interactive elements, CTA buttons, and technical highlights.
- **Neutral Tones:** A range of Cool Grays and "Steel" hues form the backbone of the UI, used for subtle backgrounds and borders to maintain a bright, airy feel.
- **Surface Strategy:** We use a pure White background for main content areas to maximize legibility, with Light Gray (#F8FAFC) used for section staggering and card backgrounds to provide depth without adding visual weight.

## Typography

This design system utilizes **Inter** exclusively to achieve a systematic, utilitarian, and highly legible interface. The typographic hierarchy is structured to guide the user through complex technical specifications with ease.

Large "Display" sizes use tight letter-spacing and heavy weights to command attention for hero sections. "Label Caps" are utilized for technical metadata and categories (e.g., "Pressure Rating," "Model Series") to provide a disciplined, engineered look. All body text maintains a generous line height (1.6) to ensure long-form technical whitepapers remain readable and approachable.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop (1280px max-width) to maintain the "brochure" feel and ensure visual balance. A 12-column system is used with 24px gutters to allow for flexible content arrangements—such as technical specs next to high-resolution product imagery.

Spacing is generous; sections are separated by 80px to 120px of vertical whitespace to prevent the "industrial clutter" often found in B2B sites. On mobile, margins shrink to 16px and the grid collapses to a single column, ensuring that complex data tables or technical diagrams remain accessible via horizontal scrolling or responsive reflow.

## Elevation & Depth

To maintain a "high-end brochure" feel, depth is achieved through **Low-contrast outlines** and **Tonal Layers** rather than heavy shadows.

- **Surface Tiers:** Backgrounds alternate between White and Light Gray to define content blocks.
- **Card Depth:** Interactive cards utilize a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)) combined with a 1px border in Steel Gray. This creates a "hovering" effect that is sophisticated and understated.
- **Separators:** 1px solid lines in #E2E8F0 are used frequently to organize data, mimicking technical drawings and blueprints.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding of corners takes the edge off the "harshness" of industrial machinery while remaining professional and structured. 

- **Interactive Elements:** Buttons and input fields use the base 0.25rem (4px) radius.
- **Structural Elements:** Product image containers and large section cards use 0.5rem (8px) to feel more established and modern.
- **Icons:** Should be stroke-based (2px weight) with slight rounding to match the UI components.

## Components

### Buttons
Primary buttons are solid Deep Navy with White text. Secondary buttons use a Steel Gray outline with Action Blue text. All buttons feature a subtle 200ms transition on hover, shifting the background color slightly.

### Cards
Cards are the primary vehicle for product displays. They feature a white background, a 1px Steel Gray border, and a 4px corner radius. Technical specs inside cards should be styled using "Label Caps" for keys and "Body MD" for values.

### Input Fields
Fields are designed for precision. Use a 1px border that turns Action Blue on focus. Labels should always be visible (never placeholder-only) to maintain accessibility in a professional context.

### Chips & Status Indicators
Used for product availability or material types (e.g., "Stainless Steel," "In Stock"). Use a light gray fill with no border and small, bold typography.

### Technical Data Tables
Tables should avoid heavy banding. Instead, use thin horizontal separators and generous cell padding (16px) to ensure columns of numbers are easy to scan. Header rows should be Deep Navy with White text to anchor the data.