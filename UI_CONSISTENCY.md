# UI Consistency Guide - MaintainU Website

## Design System Overview

This document outlines the consistent design patterns used across all pages of the MaintainU website.

### Color Palette

```css
Primary Green: #5fcc6f
Primary Red/Pink: #e85d75
Dark Blue (Text): #3d4f6d
Gold (Accent): #d4a843
Light Backgrounds: #f0f4f8, #e8f5e9, #f3e5f5
```

### Typography

**Headings:**
- Large Heading (H1): `text-5xl lg:text-6xl` (48px → 60px)
- Medium Heading (H2): `text-3xl md:text-4xl` (30px → 36px)
- Section Title: `text-sm uppercase tracking-wider` (14px)

**Body Text:**
- Regular: `text-lg` (18px)
- Small: `text-[15px]` (15px)
- Tiny: `text-[14px]` (14px)

**Font Weights:**
- Bold: `font-bold` (700)
- Semibold: `font-semibold` (600)
- Medium: `font-medium` (500)

### Spacing System

**Section Padding:**
- Hero/Header Sections: `py-24` (96px)
- Content Sections: `py-20` (80px)
- Footer: `py-16` (64px)

**Container:**
- Max Width: `1280px`
- Horizontal Padding: `px-6` (24px)

**Grid Gaps:**
- Large: `gap-16` (64px)
- Medium: `gap-12` (48px)
- Small: `gap-8` (32px)

### Component Patterns

#### 1. Page Header Section
```tsx
<section className="py-24 bg-gradient-to-br from-[#f0f4f8] via-[#e8f5e9] to-[#f3e5f5]">
  <div className="container mx-auto px-6">
    <div className="text-center">
      <p className="section-title text-center">SECTION LABEL</p>
      <h1 className="text-5xl lg:text-6xl font-bold text-[#3d4f6d] leading-tight">
        Page Title
      </h1>
    </div>
  </div>
</section>
```

#### 2. CTA Section (Used on all pages)
```tsx
<section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{ 
      backgroundImage: 'radial-gradient(circle, #3d4f6d 2px, transparent 2px)', 
      backgroundSize: '40px 40px' 
    }}></div>
  </div>
  <div className="container mx-auto px-6 text-center relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold text-[#3d4f6d] mb-6 leading-tight">
      Interested To<br />
      Get Our Service?
    </h2>
    <Link href="/contact" className="btn-primary text-lg mt-4">
      Get Started
      <svg>...</svg>
    </Link>
  </div>
</section>
```

#### 3. Service Badges
```tsx
<div className="bg-[#5fcc6f] text-white px-8 py-4 rounded-full text-center font-semibold text-lg shadow-md hover:shadow-lg transition-shadow">
  Service Name
</div>
```

#### 4. Icon Circles
```tsx
<div className="w-36 h-36 rounded-full border-[6px] border-[#e85d75] flex items-center justify-center mb-6 shadow-lg">
  <svg className="w-20 h-20 text-[#e85d75]">...</svg>
</div>
```

#### 5. Contact Info Cards
```tsx
<div className="flex gap-5 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
  <div className="w-14 h-14 bg-gradient-to-br from-[#e85d75] to-[#d54d65] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
    <svg className="w-7 h-7 text-white">...</svg>
  </div>
  <div>
    <h3 className="font-bold text-[#3d4f6d] mb-2 text-lg">Title</h3>
    <p className="text-gray-600">Content</p>
  </div>
</div>
```

### Button Styles

**Primary Button:**
```css
.btn-primary {
  background: linear-gradient(135deg, #e85d75 0%, #d54d65 100%);
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(232, 93, 117, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(232, 93, 117, 0.3);
}
```

### Background Patterns

**Gradient Backgrounds:**
1. Hero/Header: `from-[#f0f4f8] via-[#e8f5e9] to-[#f3e5f5]`
2. About/Content: `from-gray-50 via-blue-50 to-purple-50`
3. CTA: `from-blue-50 via-purple-50 to-pink-50`

**Dot Pattern (CTA sections):**
```css
background-image: radial-gradient(circle, #3d4f6d 2px, transparent 2px);
background-size: 40px 40px;
opacity: 0.05;
```

### Logo Component

```tsx
<div className="relative inline-block">
  <div className="bg-gradient-to-br from-[#4a9d5f] via-[#5cb36f] to-[#6bc97f] rounded-full px-8 py-2.5 shadow-lg border-4 border-[#d4a843]">
    <span className="text-white font-bold text-2xl tracking-wide">MaintainU</span>
  </div>
  <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#d4a843] rounded-full"></div>
  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#d4a843] rounded-full"></div>
</div>
<p className="text-[#4a9d5f] text-xs italic mt-2" style={{ fontFamily: 'cursive' }}>
  Skilled People
</p>
```

### Shadow System

- Small: `shadow-md` - Cards, buttons
- Medium: `shadow-lg` - Featured cards, icons
- Large: `shadow-xl` - Hover states, modals
- Extra Large: `shadow-2xl` - Gallery items on hover

### Transitions

All interactive elements use:
```css
transition: all 0.3s ease;
```

Hover transforms:
- Buttons: `translateY(-2px)`
- Cards: `scale(1.05)` or `translateY(-2px)`
- Client logos: `scale(1.1)`

### Responsive Breakpoints

- Mobile: Default (< 768px)
- Tablet: `md:` (≥ 768px)
- Desktop: `lg:` (≥ 1024px)

### Page Structure

All pages follow this structure:
1. Header Section (with gradient background)
2. Content Section(s) (white or light background)
3. CTA Section (gradient with dot pattern)
4. Footer (consistent across all pages)

### Accessibility

- All interactive elements have focus states
- Color contrast ratios meet WCAG AA standards
- Semantic HTML structure
- Alt text for images (when added)
- Keyboard navigation support

## Implementation Checklist

✅ Consistent color palette across all pages
✅ Uniform typography scale
✅ Standardized spacing system
✅ Reusable component patterns
✅ Consistent button styles
✅ Matching background gradients
✅ Unified shadow system
✅ Smooth transitions
✅ Responsive design
✅ Accessibility considerations
