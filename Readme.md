# Task 23: Greenwood Public Library Website (Tailwind CSS)

A minimal, modern, editorial-style landing page for the Greenwood Public Library, built with **HTML and the Tailwind CSS CDN only**. No other CSS framework and no custom fonts are used.

## Files

- `index.html` - the whole page (Tailwind CDN + extended Tailwind config with custom keyframes and animations)
- `script.js` - a tiny script that adds the Tailwind `animate-fade-up` class to sections as they scroll into view (staggered entry animation)
- `images/` - illustrations used for the hero, gallery, membership cards, events and testimonial avatar
- `Readme.md` - this file

## Sections built

1. **Navbar** - `sticky top-0 z-50` with `backdrop-blur-md`, "Greenwood" logo with an "Open Sat" badge, links (Sections, Gallery, Membership, Events) with an animated underline using `after:w-0 hover:after:w-full`, and a "Visit Us" pill whose colours invert on hover. Links are hidden on mobile (`hidden md:flex`).
2. **Hero** - large light-weight headline, "Explore Collection" (solid) and "Join Free" (outlined) buttons, a feature image with `hover:scale-105`, and a 4-column stats row (12,000+ Books, 40+ Years, Free Wi-Fi, 6 Sections).
3. **Sections** - 1 column on mobile, 2 on desktop, six cards (Fiction, Children's, Science, History, Art & Design, Reference). Each card has its own hover background (`hover:bg-emerald-50`, `hover:bg-amber-50`, ...) and the text colours change with `group-hover`.
4. **Gallery** - 2x2 grid; each card has `overflow-hidden rounded-lg`, an image with `group-hover:scale-105`, a title and a rounded floor tag.
5. **Values (bento grid)** - asymmetrical grid using column and row spans: one large About card plus Community, 40+ Years, Events, Digital and Access cards in slate, emerald, amber, rose, violet and zinc pastels, each with a hover colour change.
6. **About** - large light-weight heading with newspaper-style text columns (`columns-1 sm:columns-2`).
7. **Membership** - 1 to 4 column responsive grid: an intro card plus Basic, Student and Family cards with `brightness-95` images that zoom on hover, an absolute-positioned "Popular" badge on Student, pricing, feature list and a CTA button.
8. **Testimonial** - quote, attribution and a circular avatar with `grayscale hover:grayscale-0 transition-all duration-500`.
9. **Contact CTA** - rounded `bg-emerald-50` block with the address as a large light heading, opening hours, a "Get Directions" button and a `mailto:` link.
10. **Events** - 4-column responsive grid, each card with a zooming image, title and date.
11. **Footer** - four columns (Brand, Pages, Sections, Details), social icon circles with hover backgrounds, and a copyright line with legal links under a top border. All links have colour transitions.
12. **Animation and UI** - `max-w-7xl` containers, `group` / `group-hover` effects, `transition-all`, `transition-colors` and `transition-transform`, `overflow-hidden` around every scaled image, and staggered entry animations from the custom `fadeUp` keyframes defined in `tailwind.config`.

## Custom Tailwind configuration

```js
tailwind.config = {
  theme: { extend: {
    keyframes: {
      fadeUp: { '0%': { opacity: '0', transform: 'translateY(28px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } }
    },
    animation: { 'fade-up': 'fadeUp 0.9s ease-out forwards', 'fade-in': 'fadeIn 1.2s ease-out forwards' }
  } }
};
```

Stagger delays use Tailwind arbitrary values such as `[animation-delay:150ms]`. Users who prefer reduced motion see everything without animation (`motion-reduce:opacity-100`).

## How to run

Keep `index.html`, `script.js` and the `images` folder together and open `index.html` in a browser. An internet connection is required because Tailwind is loaded from `https://cdn.tailwindcss.com`.

## Notes

- Images are illustrations created for this project. Replace the files in `images/` (same names) to use real photos.
- The address, e-mail and prices are placeholder content.
