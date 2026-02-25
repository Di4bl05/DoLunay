// Tema lunar para Dolunay Store
// "Dolunay" significa "Luna Llena" en turco

export const lunarTheme = {
  colors: {
    // Colores primarios lunares
    moon: {
      50: '#f8f9fc',
      100: '#e8ecf8',
      200: '#d1d9f1',
      300: '#a8b9e5',
      400: '#7a93d5',
      500: '#5570c4',
      600: '#4156b3',
      700: '#354491',
      800: '#2d3a77',
      900: '#283363',
    },
    night: {
      50: '#f4f6fb',
      100: '#e9ecf6',
      200: '#ced5ec',
      300: '#a5b4dc',
      400: '#768fc9',
      500: '#5570b8',
      600: '#4258a4',
      700: '#374785',
      800: '#313e6d',
      900: '#2d365c',
    },
    star: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },
    // Gradientes especiales
    gradient: {
      nightSky: 'from-indigo-900 via-purple-900 to-indigo-800',
      moonGlow: 'from-purple-500 via-pink-500 to-indigo-500',
      fullMoon: 'from-yellow-200 via-yellow-100 to-white',
    }
  },
  
  // Fases de la luna
  moonPhases: [
    { name: 'Nueva', emoji: '🌑', progress: 0 },
    { name: 'Creciente', emoji: '🌒', progress: 12.5 },
    { name: 'Cuarto Creciente', emoji: '🌓', progress: 25 },
    { name: 'Gibosa Creciente', emoji: '🌔', progress: 37.5 },
    { name: 'Luna Llena', emoji: '🌕', progress: 50 },
    { name: 'Gibosa Menguante', emoji: '🌖', progress: 62.5 },
    { name: 'Cuarto Menguante', emoji: '🌗', progress: 75 },
    { name: 'Menguante', emoji: '🌘', progress: 87.5 },
  ],
  
  // Animaciones
  animations: {
    moonFloat: 'animate-[float_6s_ease-in-out_infinite]',
    starTwinkle: 'animate-[twinkle_3s_ease-in-out_infinite]',
    glow: 'animate-[glow_2s_ease-in-out_infinite]',
  }
};

// Configuración de WhatsApp
export const whatsappConfig = {
  phoneNumber: '+573001234567', // Cambiar por el número real
  defaultMessage: '¡Hola! Estoy interesado en los productos de Dolunay Store 🌕',
};

export const adminConfig = {
  // Cambiar por credenciales reales con hash en producción
  defaultPassword: 'dolunay2024',
};
