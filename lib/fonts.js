import { Dancing_Script, Montserrat, Playfair_Display } from 'next/font/google'

/** Polices auto-hébergées par Next. Pas de feuille Google bloquante. */
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: false,
  variable: '--font-dancing',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
  preload: false,
  variable: '--font-playfair',
})

export const fontVariables = `${montserrat.variable} ${dancing.variable} ${playfair.variable} ${montserrat.className}`
