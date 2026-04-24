/**
 * Tailwind configuration for REDOCTED landing page.
 *
 * Design tokens live in src/styles/tokens.css as CSS custom properties.
 * This config maps those CSS variables to Tailwind utility classes so
 * components can use both `bg-primary` and `var(--color-primary)`.
 *
 * Tailwind v4 note: the @theme CSS directive is the canonical v4 path,
 * but this JS config is retained for broader tooling compatibility.
 * The two approaches coexist; the CSS variables are the source of truth.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx,mdx}'],
  theme: {
    /* -------------------------------------------------------
     * Override (not extend) grays so warm-gray is the default
     * throughout the site, not Tailwind's cool gray.
     * ------------------------------------------------------- */
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',

      gray: {
        50:  'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },

      primary: {
        50:      'var(--color-primary-50)',
        100:     'var(--color-primary-100)',
        200:     'var(--color-primary-200)',
        300:     'var(--color-primary-300)',
        400:     'var(--color-primary-400)',
        500:     'var(--color-primary-500)',
        600:     'var(--color-primary-600)',
        700:     'var(--color-primary-700)',
        800:     'var(--color-primary-800)',
        900:     'var(--color-primary-900)',
        DEFAULT: 'var(--color-primary)',
      },

      success: {
        DEFAULT: 'var(--color-success)',
        bg:      'var(--color-success-bg)',
      },
      warning: {
        DEFAULT: 'var(--color-warning)',
        bg:      'var(--color-warning-bg)',
      },
      danger: {
        DEFAULT: 'var(--color-danger)',
        bg:      'var(--color-danger-bg)',
      },
    },

    extend: {
      /* -------------------------------------------------------
       * Font families
       * ------------------------------------------------------- */
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },

      /* -------------------------------------------------------
       * Font sizes (paired with matching line heights)
       * ------------------------------------------------------- */
      fontSize: {
        'xs':   ['var(--font-size-xs)',   { lineHeight: 'var(--line-height-normal)' }],
        'sm':   ['var(--font-size-sm)',   { lineHeight: 'var(--line-height-normal)' }],
        'base': ['var(--font-size-base)', { lineHeight: 'var(--line-height-normal)' }],
        'lg':   ['var(--font-size-lg)',   { lineHeight: 'var(--line-height-relaxed)' }],
        'xl':   ['var(--font-size-xl)',   { lineHeight: 'var(--line-height-snug)' }],
        '2xl':  ['var(--font-size-2xl)',  { lineHeight: 'var(--line-height-snug)' }],
        '3xl':  ['var(--font-size-3xl)',  { lineHeight: 'var(--line-height-tight)' }],
        '4xl':  ['var(--font-size-4xl)',  { lineHeight: 'var(--line-height-tight)' }],
        '5xl':  ['var(--font-size-5xl)',  { lineHeight: 'var(--line-height-tight)' }],
      },

      /* -------------------------------------------------------
       * Line heights
       * ------------------------------------------------------- */
      lineHeight: {
        tight:   'var(--line-height-tight)',
        snug:    'var(--line-height-snug)',
        normal:  'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        loose:   'var(--line-height-loose)',
      },

      /* -------------------------------------------------------
       * Border radius
       * ------------------------------------------------------- */
      borderRadius: {
        none: 'var(--radius-none)',
        sm:   'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },

      /* -------------------------------------------------------
       * Box shadows
       * ------------------------------------------------------- */
      boxShadow: {
        sm:   'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md:   'var(--shadow-md)',
        lg:   'var(--shadow-lg)',
        xl:   'var(--shadow-xl)',
        none: 'none',
      },

      /* -------------------------------------------------------
       * Z-index scale
       * ------------------------------------------------------- */
      zIndex: {
        base:     'var(--z-base)',
        raised:   'var(--z-raised)',
        dropdown: 'var(--z-dropdown)',
        nav:      'var(--z-nav)',
        overlay:  'var(--z-overlay)',
        modal:    'var(--z-modal)',
        toast:    'var(--z-toast)',
      },
    },
  },
  plugins: [],
};
