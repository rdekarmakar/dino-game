// Typography configuration for kid-friendly fonts

export const typography = {
  // Font Families
  fonts: {
    regular: 'System',
    bold: 'System',
    // When custom fonts are loaded:
    // primary: 'Fredoka-Regular',
    // bold: 'Fredoka-Bold',
    // display: 'Baloo2-Bold',
  },

  // Font Sizes - Larger for kids
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    md: 18, // Minimum for kids
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
  },

  // Font Weights
  fontWeight: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },

  // Line Heights
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: -0.05,
    tight: -0.025,
    normal: 0,
    wide: 0.025,
    wider: 0.05,
    widest: 0.1,
  },

  // Text Styles - Predefined text styles for consistency
  textStyles: {
    // Headings
    h1: {
      fontSize: 36,
      fontWeight: '700' as const,
      lineHeight: 1.25,
      letterSpacing: 0,
    },
    h2: {
      fontSize: 32,
      fontWeight: '700' as const,
      lineHeight: 1.25,
      letterSpacing: 0,
    },
    h3: {
      fontSize: 28,
      fontWeight: '600' as const,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 24,
      fontWeight: '600' as const,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h5: {
      fontSize: 20,
      fontWeight: '500' as const,
      lineHeight: 1.4,
      letterSpacing: 0,
    },

    // Body text
    body: {
      fontSize: 18,
      fontWeight: '400' as const,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    bodyLarge: {
      fontSize: 20,
      fontWeight: '400' as const,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    bodySmall: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 1.5,
      letterSpacing: 0,
    },

    // UI text
    button: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 1.2,
      letterSpacing: 0.025,
    },
    buttonLarge: {
      fontSize: 24,
      fontWeight: '700' as const,
      lineHeight: 1.2,
      letterSpacing: 0.025,
    },
    buttonSmall: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 1.2,
      letterSpacing: 0.025,
    },

    // Game-specific text
    score: {
      fontSize: 32,
      fontWeight: '700' as const,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    timer: {
      fontSize: 28,
      fontWeight: '600' as const,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    label: {
      fontSize: 16,
      fontWeight: '500' as const,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    caption: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 1.4,
      letterSpacing: 0,
    },

    // Special styles
    display: {
      fontSize: 48,
      fontWeight: '700' as const,
      lineHeight: 1.1,
      letterSpacing: 0,
    },
    displayLarge: {
      fontSize: 60,
      fontWeight: '700' as const,
      lineHeight: 1.1,
      letterSpacing: 0,
    },
  },
};

// Helper function to get text style
export const getTextStyle = (styleName: keyof typeof typography.textStyles) => {
  return typography.textStyles[styleName];
};

// Recommended kid-friendly font families from Google Fonts
export const recommendedFonts = [
  'Fredoka One',
  'Baloo 2',
  'Poppins',
  'Comic Neue',
  'Quicksand',
  'Nunito',
  'Raleway',
  'Lato',
];
