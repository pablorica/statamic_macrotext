//--------------------------------------------------------------------------
// Tailwind site configuration
//--------------------------------------------------------------------------
//
// Use this file to completely define the current sites design system by
// adding and extending to Tailwinds default utility classes.
//

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  presets: [],
  theme: {
    // Here we define the default colors available. If you want to include
    // all default Tailwind colors you should extend the colors instead.
    colors: {
        black:    '#000',
        grey:     '#D9D8D6',
        white:    '#fff',
        //lightblue: '#65B2E8',
        //darkblue: '#000F9F',
        //pink: '#E96BB0',
        //yellow: '#FFCD00',
        // Neutrals: neutral colors, with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
        neutral: {
            DEFAULT: colors.slate['800'],
            ...colors.slate
        },
        // Primary: primary brand color with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
        primary: {
            //DEFAULT: 'oklch(53.24% 0.301 290.86 / <alpha-value>)'
            DEFAULT: '#000'
        },
    },
    extend: {
        //Extend new colours (and overwrite Peak colors)
        colors: {
            blue:     '#0083C1',
            darkgrey: '#1D252C',
            gainsboro:'#E5E4E2',
            green:    '#00AD41', 
            orange:   '#FC6D3A',   
            slategrey:'#A5AAAB',      
        },
        // Extend the default Tailwind height with our own values.
        height: {
            '120': '30rem',
        },
        // Set default transition durations and easing when using the transition utilities.
        transitionDuration: {
            DEFAULT: '300ms',
        },
        transitionTimingFunction: {
            DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        animation: {
            appearsin: 'appearsIn 1.2s ease forwards',
            appearsout: 'appearsOut 0.6s ease forwards',
            fadeandmovein: 'fadeAndMoveIn 0.7s 0.15s forwards ease',
            fadeandmoveout: 'fadeAndMoveOut 0.7s 0.15s forwards ease',
            menuin: 'menuIn 0.5s ease-in-out forwards',
            menuout: 'menuOut 0.5s ease-in-out forwards',
            movefooterup: 'moveFooterUp 0.5s cubic-bezier(0.830, 0.865, 0.515, 0.925) forwards',
            movefooterdown: 'moveFooterDown 0.5s cubic-bezier(0.830, 0.865, 0.515, 0.925) forwards',
            fillscreen: 'fillScreen 1s cubic-bezier(0.830, 0.865, 0.515, 0.925) forwards',
        },
    },
    // that is actual animation
    keyframes: theme => ({
        appearsIn: {
            '0%': { 
              opacity: 0,
              transform: 'translateY(40px)',
              },
            '100%': { 
              opacity: 1,
              transform: 'translateY(0)',
            },
        },
        appearsOut: {
            '0%': { 
                opacity: 1,
                transform: 'translateY(0)',  
            },
            '100%': { 
                opacity: 0,
                transform: 'translateY(40px)',
            },
        },  
        fadeAndMoveIn: {
            '0%':{
              opacity: 0,
              transform: 'translateY(20px)',
            },
            '100%':{
                opacity: 1,
                transform: 'translateY(0)',
            }
        },
        fadeAndMoveOut: {
            '0%':{
                opacity: 1,
                transform: 'translateY(0)',
            },
            '100%':{
                opacity: 0,
                transform: 'translateY(20px)',
            }
        }, 
        menuIn: {
            '0%': { 
                opacity: 0,
                zIndex: 10,
            },
            '100%': { 
              opacity: 1,
              zIndex: 10,
            },
        },
        menuOut: {
              '0%': { 
                visibility: 'visible',
                opacity: 1,
                zIndex: 10,
                },
              '100%': { 
                visibility: 'hidden',
                opacity: 0,
                zIndex: -10,
              },
        }, 
        moveFooterUp: {
            '0%': { 
                top: '100%',
              },
            '100%': { 
                top: 'calc(100% - 30rem)',
            },
        },
        moveFooterDown: {
            '0%': { 
                top: 'calc(100% - 30rem)',
              },
            '100%': { 
                top: '100%',
            },
        },  
        fillScreen: {
            '0%': { 
                top: 'calc(100% - 30rem)',
                backgroundColor: 'orange',
              },
            '100%': { 
                top: 0, // '6.61rem'
                backgroundColor: 'white',
            },
        },  
    }),
    // Remove the font families you don't want to use.
    fontFamily: {
      mono: [
        // Use a custom mono font for this site by changing 'Anonymous' to the
        // font name you want and uncommenting the following line.
        // 'Anonymous',
        ...defaultTheme.fontFamily.mono,
      ],
      sans: [
        // Use a custom sans serif font for this site by changing 'Gaultier' to the
        // font name you want and uncommenting the following line.
        'Constructure Sans',
        ...defaultTheme.fontFamily.sans,
      ]
    },
    // The font weights available for this site.
    //fontWeight: {
      // hairline: 100,
      // thin: 200,
      // light: 300,
      // normal: 400, 
      // medium: 500,
      // semibold: 600,
      // bold: 700,
      // extrabold: 800,
      // black: 900,
    //},
    fontSize: {
        sm: '0.778rem', // 14px (original: 0.8rem <-> 16px)
        base: '1rem', // 18px
        xl: '1.25rem', // 22.5px
        '2xl': '1.5rem', // 27px 
        '3xl': '1.875rem', // 33.75px
        '4xl': '2.25rem', // 40.5px
        '5xl': '3rem', // 54px
        '6xl': '4.2rem', // 76px (original: 3.75rem <-> 75px)
        '7xl': '5.2rem', // 93.6px (original: 4.5rem <-> 90px)
        '8xl': '6rem', // 120px
        '9xl': '8rem', // 160 px
        '10xl': '10rem', 
    },
    letterSpacing: { //tracking
        //tightest: '-.075em',
        //tighter: '-.05em',
        tight: '-2.04px',// (original: -.025em),
        normal: '-0.2px', // (original: 0),
        '2xl': '-0.28px',  // custom,
        //wide: '.025em',
        //wider: '.05em',
        //widest: '.1em',
        //widest: '.25em',
    },
    lineHeight: { //leading
        nav: '0.95',
        none: '1',
        tight: '1.01',  // (original: 1.25),   
        snug: '1.2',    // (original: 1.375),
        '2xl': '32px',  // custom,
        '5xl': '58px',  // custom,
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        ':root': {
            // Fluid typography from 1 rem to 1.2 rem with fallback to 20px.
            fontSize: '18px', // original '20px'
            letterSpacing: '-0.2px',
            lineHeight: '1.2',
            fontWeight: '450',
            
            // Safari resize fix.
            minHeight: '0vw',
        },
        // Default color transition on links unless user prefers reduced motion.
        '@media (prefers-reduced-motion: no-preference)': {
          'a': {
            transition: 'color .3s ease-in-out',
          },
        },
        'html': {
            color: theme('colors.neutral.DEFAULT'),
            //--------------------------------------------------------------------------
            // Set sans, serif or mono stack with optional custom font as default.
            //--------------------------------------------------------------------------
            // fontFamily: theme('fontFamily.mono'),
            fontFamily: theme('fontFamily.sans'),
            // fontFamily: theme('fontFamily.serif'),
        },
        'mark': {
          backgroundColor: theme('colors.primary.DEFAULT'),
          color: theme('colors.white')
        },
        'small': {
            fontSize: '14px',
            lineHeight: '1.2',
            display: 'block',
          },
      })
    }),

    // Custom components for this particular site.
    plugin(function({ addComponents, theme }) {
        const components = {
          // Overwrites .fluid-container defined in tailwind.config.peak.js
          '.fluid-container': {
              width: '100%',
              maxWidth: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              // Use safe-area-inset together with default padding for Apple devices with a notch.
              paddingLeft: `calc(env(safe-area-inset-left, 0rem) + ${theme('padding.10')})`,
              paddingRight: `calc(env(safe-area-inset-right, 0rem) + ${theme('padding.10')})`,
          },
          // Overwrites .outer-grid defined in tailwind.config.peak.js
          '.outer-grid': {
              paddingTop: 0,
              paddingBottom: 0,
              rowGap: 0,
          },
        }
        addComponents(components)
    }),

    // Custom utilities for this particular site.
    plugin(function({ addUtilities, theme, variants }) {
      const newUtilities = {
      }
      addUtilities(newUtilities)
    }),
  ]
}
