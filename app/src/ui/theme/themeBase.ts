const themeBase = {
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    primary: '#B620E0',
    onPrimary: '#ffffff',
    inputBorder: '#cccccc',
    onImage: '#ffffff',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 48, 64],
  space: ['0', '4px', '8px', '16px', '24px', '32px', '48px', '64px', '80px'],
  radii: [0, 4, 8, 12, 16, 24, 32, 48, 64],
  fontFamily: {primary: 'Roboto', alt: 'Roboto'},
  boxShadow: {
    shadowColor: '#c3c3c3',
    shadowOffset: '4px 6px',
    shadowOpacity: 0.5,
    shadowRadius: '10px',
    elevation: '3',
  },
};

export type ThemeBase = typeof themeBase;

export default themeBase;
