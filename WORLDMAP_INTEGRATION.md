# World Map Animation Integration Guide

## Overview

Successfully integrated an animated world map component into the MaintainU website's CTA section. The map shows animated connections between MaintainU's headquarters in Hosur and major Indian cities where they serve clients.

## What Was Installed

### NPM Dependencies
```bash
npm install framer-motion dotted-map next-themes
```

**Package Details:**
- `framer-motion` - Animation library for smooth path animations and interactions
- `dotted-map` - Generates the dotted world map SVG background
- `next-themes` - Theme management for light/dark mode support

## File Structure

```
maintainu-clone/
├── components/
│   ├── ui/
│   │   └── map.tsx              # WorldMap component
│   ├── theme-provider.tsx       # Theme context provider
│   ├── Header.tsx
│   └── Footer.tsx
├── app/
│   ├── layout.tsx               # Updated with ThemeProvider
│   └── page.tsx                 # Home page with WorldMap
```

## Component Details

### WorldMap Component (`components/ui/map.tsx`)

**Features:**
- ✅ Animated curved paths between locations
- ✅ Pulsing location markers
- ✅ Smooth looping animations
- ✅ Hover interactions with location labels
- ✅ Responsive design
- ✅ Light/dark mode support
- ✅ Mobile-friendly tooltips

**Props:**
```typescript
interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;           // Default: "#0ea5e9"
  showLabels?: boolean;         // Default: true
  labelClassName?: string;      // Default: "text-sm"
  animationDuration?: number;   // Default: 2 seconds
  loop?: boolean;               // Default: true
}
```

### Theme Provider (`components/theme-provider.tsx`)

Wraps the app to enable theme switching functionality required by the WorldMap component.

## Implementation Location

The WorldMap is integrated into the **Home Page** (`app/page.tsx`) in the **CTA Section** - the "Interested To Get Our Service?" section at the bottom of the page.

### Location Configuration

The map shows connections from **Hosur** (MaintainU headquarters) to major Indian cities:

```typescript
<WorldMap
  dots={[
    {
      start: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
      end: { lat: 11.0168, lng: 76.9558, label: "Hosur" },
    },
    {
      start: { lat: 11.0168, lng: 76.9558, label: "Hosur" },
      end: { lat: 13.0827, lng: 80.2707, label: "Chennai" },
    },
    {
      start: { lat: 11.0168, lng: 76.9558, label: "Hosur" },
      end: { lat: 19.076, lng: 72.8777, label: "Mumbai" },
    },
    {
      start: { lat: 28.7041, lng: 77.1025, label: "Delhi" },
      end: { lat: 11.0168, lng: 76.9558, label: "Hosur" },
    },
    {
      start: { lat: 22.5726, lng: 88.3639, label: "Kolkata" },
      end: { lat: 11.0168, lng: 76.9558, label: "Hosur" },
    },
    {
      start: { lat: 17.385, lng: 78.4867, label: "Hyderabad" },
      end: { lat: 11.0168, lng: 76.9558, label: "Hosur" },
    },
  ]}
  lineColor="#5fcc6f"  // MaintainU brand green
/>
```

## Customization Options

### Change Line Color
Match your brand colors:
```tsx
<WorldMap lineColor="#5fcc6f" />  // Green (current)
<WorldMap lineColor="#e85d75" />  // Pink/Red
```

### Add/Remove Locations
Edit the `dots` array to show different connections:
```tsx
dots={[
  {
    start: { lat: YOUR_LAT, lng: YOUR_LNG, label: "City Name" },
    end: { lat: DEST_LAT, lng: DEST_LNG, label: "Destination" },
  },
]}
```

### Adjust Animation Speed
```tsx
<WorldMap 
  animationDuration={3}  // Slower (3 seconds)
  loop={true}            // Keep looping
/>
```

### Hide Labels
```tsx
<WorldMap showLabels={false} />
```

## Animation Behavior

1. **Staggered Start**: Each path animates sequentially with 0.3s delay
2. **Smooth Curves**: Paths follow curved trajectories (not straight lines)
3. **Moving Dots**: Animated circles travel along the paths
4. **Pulsing Markers**: Location points pulse continuously
5. **Loop**: Animation repeats infinitely with a 2-second pause between cycles

## Responsive Design

- **Desktop**: Full map with all labels visible
- **Tablet**: Optimized aspect ratio
- **Mobile**: Compact view with tooltip on hover

## Theme Support

The map automatically adapts to light/dark mode:
- **Light Mode**: White background with subtle gray dots
- **Dark Mode**: Black background with yellow-tinted dots

## Performance Considerations

- SVG-based rendering for smooth performance
- Optimized animations using Framer Motion
- Lazy loading with Next.js Image component
- No external API calls (all client-side)

## Browser Compatibility

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Map not showing?
1. Check that all dependencies are installed: `npm install`
2. Restart dev server: `npm run dev`
3. Clear Next.js cache: `rm -rf .next`

### Animation not working?
1. Verify framer-motion is installed
2. Check browser console for errors
3. Ensure component is client-side: `"use client"` directive present

### Theme issues?
1. Verify ThemeProvider wraps the app in `layout.tsx`
2. Check next-themes is installed
3. Add `suppressHydrationWarning` to `<html>` tag

## Future Enhancements

Potential improvements:
- [ ] Add more international locations
- [ ] Click handlers for location markers
- [ ] Custom marker icons
- [ ] Real-time data integration
- [ ] Export as standalone component package
- [ ] Add sound effects on animation
- [ ] Integrate with Google Maps API for real locations

## Credits

- Component based on shadcn/ui patterns
- Animation powered by Framer Motion
- Map rendering by dotted-map library
- Integrated into MaintainU website by Kiro AI

## Support

For issues or questions:
1. Check this documentation
2. Review component props in `map.tsx`
3. Test in isolation before integrating
4. Verify all dependencies are installed

---

**Last Updated**: January 22, 2026
**Version**: 1.0.0
**Status**: ✅ Production Ready
