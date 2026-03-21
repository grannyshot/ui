import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  prefix: 'gs',
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  outdir: 'src/styled-system',
  outExtension: 'js',
  jsxFramework: 'react',

  globalCss: {
    'body': {
      fontFamily: 'sans',
      color: 'fg',
      bg: 'bg',
      lineHeight: '1.5',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    'button, input, select, textarea': {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      color: 'inherit',
    },
    'a': {
      color: 'inherit',
      textDecoration: 'none',
    },
    'img, svg': {
      display: 'block',
      maxWidth: '100%',
    },
  },

  conditions: {
    light: '[data-theme=light] &',
    dark: '[data-theme=dark] &',
  },

  theme: {
    tokens: {
      colors: {
        white: { value: '#ffffff' },
        black: { value: '#000000' },

        gray: {
          50: { value: '#fafafa' },
          100: { value: '#f4f4f5' },
          200: { value: '#e4e4e7' },
          300: { value: '#d4d4d8' },
          400: { value: '#a1a1aa' },
          500: { value: '#71717a' },
          600: { value: '#52525b' },
          700: { value: '#3f3f46' },
          800: { value: '#27272a' },
          900: { value: '#18181b' },
          950: { value: '#09090b' },
        },
        emerald: {
          50: { value: '#ecfdf5' },
          100: { value: '#d1fae5' },
          200: { value: '#a7f3d0' },
          300: { value: '#6ee7b7' },
          400: { value: '#34d399' },
          500: { value: '#10b981' },
          600: { value: '#059669' },
          700: { value: '#047857' },
          800: { value: '#065f46' },
          900: { value: '#064e3b' },
        },
        red: {
          400: { value: '#f87171' },
          500: { value: '#ef4444' },
          600: { value: '#dc2626' },
        },
        amber: {
          400: { value: '#fbbf24' },
          500: { value: '#f59e0b' },
          600: { value: '#d97706' },
        },
        blue: {
          400: { value: '#60a5fa' },
          500: { value: '#3b82f6' },
          600: { value: '#2563eb' },
        },
      },

      fonts: {
        sans: { value: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif" },
        mono: { value: "'GeistMono', 'SF Mono', 'Fira Code', monospace" },
      },

      fontSizes: {
        xs: { value: '12px' },
        sm: { value: '14px' },
        md: { value: '16px' },
        lg: { value: '18px' },
        xl: { value: '20px' },
        '2xl': { value: '24px' },
        '3xl': { value: '30px' },
        '4xl': { value: '36px' },
        '5xl': { value: '48px' },
      },

      fontWeights: {
        regular: { value: '400' },
        medium: { value: '500' },
        semibold: { value: '600' },
        bold: { value: '700' },
      },

      lineHeights: {
        tight: { value: '1.25' },
        normal: { value: '1.5' },
        relaxed: { value: '1.625' },
      },

      letterSpacings: {
        tighter: { value: '-0.02em' },
        tight: { value: '-0.01em' },
        normal: { value: '0em' },
        wide: { value: '0.01em' },
      },

      spacing: {
        0: { value: '0px' },
        1: { value: '4px' },
        2: { value: '8px' },
        3: { value: '12px' },
        4: { value: '16px' },
        5: { value: '20px' },
        6: { value: '24px' },
        8: { value: '32px' },
        10: { value: '40px' },
        12: { value: '48px' },
        16: { value: '64px' },
        20: { value: '80px' },
        24: { value: '96px' },
      },

      radii: {
        none: { value: '0px' },
        sm: { value: '4px' },
        md: { value: '8px' },
        lg: { value: '12px' },
        xl: { value: '16px' },
        '2xl': { value: '20px' },
        full: { value: '9999px' },
      },

      shadows: {
        xs: { value: '0 1px 2px rgba(0, 0, 0, 0.05)' },
        sm: { value: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)' },
        md: { value: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)' },
        lg: { value: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)' },
        xl: { value: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)' },
      },

      durations: {
        fast: { value: '100ms' },
        normal: { value: '200ms' },
        slow: { value: '300ms' },
        slower: { value: '500ms' },
      },

      easings: {
        ease: { value: 'ease' },
        easeIn: { value: 'cubic-bezier(0.4, 0, 1, 1)' },
        easeOut: { value: 'cubic-bezier(0, 0, 0.2, 1)' },
        easeInOut: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
        spring: { value: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
      },
    },

    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: { base: '{colors.white}', _dark: '{colors.gray.950}' } },
          subtle: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.900}' } },
          muted: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.800}' } },
          inverse: { value: { base: '{colors.gray.950}', _dark: '{colors.white}' } },
        },
        fg: {
          DEFAULT: { value: { base: '{colors.gray.950}', _dark: '{colors.gray.50}' } },
          muted: { value: { base: '{colors.gray.500}', _dark: '{colors.gray.300}' } },
          subtle: { value: { base: '{colors.gray.400}', _dark: '{colors.gray.500}' } },
          inverse: { value: { base: '{colors.white}', _dark: '{colors.gray.950}' } },
        },
        border: {
          DEFAULT: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.800}' } },
          muted: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.900}' } },
          focus: { value: { base: '{colors.emerald.500}', _dark: '{colors.emerald.400}' } },
        },
        accent: {
          DEFAULT: { value: { base: '{colors.emerald.500}', _dark: '{colors.emerald.500}' } },
          hover: { value: { base: '{colors.emerald.600}', _dark: '{colors.emerald.400}' } },
          muted: { value: { base: '{colors.emerald.200}', _dark: '{colors.emerald.900}' } },
          subtle: { value: { base: '{colors.emerald.50}', _dark: '#064e3b33' } },
          fg: { value: { base: '{colors.white}', _dark: '{colors.white}' } },
        },
        success: {
          DEFAULT: { value: { base: '{colors.emerald.600}', _dark: '{colors.emerald.400}' } },
          subtle: { value: { base: '{colors.emerald.50}', _dark: '#064e3b33' } },
        },
        warning: {
          DEFAULT: { value: { base: '{colors.amber.500}', _dark: '{colors.amber.400}' } },
          subtle: { value: { base: '#fffbeb', _dark: '#78350f33' } },
        },
        error: {
          DEFAULT: { value: { base: '{colors.red.500}', _dark: '{colors.red.400}' } },
          subtle: { value: { base: '#fef2f2', _dark: '#7f1d1d33' } },
        },
        info: {
          DEFAULT: { value: { base: '{colors.blue.500}', _dark: '{colors.blue.400}' } },
          subtle: { value: { base: '#eff6ff', _dark: '#1e3a5f33' } },
        },
      },
    },
  },
})