# 🌕 Dolunay Store - Luna Llena de Oportunidades

> **Dolunay** significa "Luna Llena" en turco 🇹🇷

Una tienda en línea moderna con tema lunar, panel de administración completo y sistema de WhatsApp integrado.

![Version](https://img.shields.io/badge/version-1.0.0-purple)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

---

## ✨ Características Principales

- 🌙 **Tema Lunar Completo** - Diseño inspirado en las fases de la luna
- 🏪 **Panel Admin** - Gestión completa de productos (CRUD)
- 💚 **WhatsApp Integrado** - Botón flotante y mensajes automáticos con info de productos
- 📱 **100% Responsive** - Optimizado para móviles, tablets y desktop
- 🎨 **Animaciones Suaves** - Efectos visuales elegantes y profesionales
- ⚡ **Next.js 15** - Última versión con App Router
- 🎯 **TypeScript** - Type-safe en todo el proyecto
- 🌟 **Fases Lunares** - Sistema de progreso visual único

---

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
pnpm install

# Configurar WhatsApp (edita src/styles/lunar-theme.ts)
phoneNumber: '+573001234567'  # 👈 Tu número aquí

# Ejecutar en desarrollo
pnpm dev

# Abrir → http://localhost:3000
```

**Ver:** [`QUICK_START.md`](./QUICK_START.md) para guía detallada paso a paso

---

## 📂 Estructura del Proyecto

```
dolunay-store/
├── src/
│   ├── app/
│   │   ├── (store)/           # Tienda pública
│   │   │   ├── productos/     # Catálogo
│   │   │   ├── solicitar/     # Solicitudes
│   │   │   ├── amazon/        # Sección Amazon
│   │   │   ├── shein/         # Sección Shein
│   │   │   └── temu/          # Sección Temu
│   │   ├── admin/             # Panel de administración 
│   │   │   ├── productos/     # CRUD de productos
│   │   │   └── pedidos/       # Gestión de pedidos
│   │   └── api/               # API REST
│   │       ├── productos/     # Endpoints de productos
│   │       ├── pedidos/       # Endpoints de pedidos
│   │       └── solicitudes/   # Endpoints de solicitudes
│   ├── components/
│   │   ├── lunar/             # 🌙 Componentes temáticos
│   │   │   ├── MoonPhase.tsx  # Fases de la luna
│   │   │   └── FloatingWhatsApp.tsx  # WhatsApp flotante
│   │   ├── layout/            # Header y Footer
│   │   ├── products/          # Componentes de productos
│   │   ├── forms/             # Formularios
│   │   └── ui/                # Componentes UI básicos
│   ├── lib/
│   │   └── db.ts              # Funciones de base de datos
│   ├── styles/
│   │   ├── lunar-theme.ts     # ⚙️ Configuración del tema
│   │   └── theme.ts           # Tema adicional
│   └── types/
│       └── index.ts           # Tipos TypeScript
├── public/
│   └── images/                # Imágenes estáticas
├── DOLUNAY_GUIDE.md           # 📖 Guía completa
└── QUICK_START.md             # ⚡ Guía rápida
```

---

## 🎯 Páginas Principales

| Ruta | Descripción | Acceso |
|------|-------------|--------|
| `/` | Página de inicio con hero lunar | 🌍 Público |
| `/productos` | Catálogo completo de productos | 🌍 Público |
| `/solicitar` | Formulario de solicitud de productos | 🌍 Público |
| `/admin` | Dashboard de administración | 🔒 Admin |
| `/admin/productos` | Gestión CRUD de productos | 🔒 Admin |
| `/admin/pedidos` | Ver y gestionar pedidos | 🔒 Admin |

---

## 🌙 Componentes Lunares Únicos

### MoonPhase Component
Muestra las fases de la luna con animaciones:

```tsx
import MoonPhase from '@/components/lunar/MoonPhase';

<MoonPhase 
  phase={50}        // 0-100 (0 = nueva, 50 = llena, 100 = llena)
  size="lg"         // sm, md, lg, xl
  showLabel={true}  // Mostrar nombre de la fase
  animated={true}   // Activar animaciones
/>
```

**Fases disponibles:**
- 🌑 Luna Nueva (0-12.5%)
- 🌒 Creciente (12.5-25%)
- 🌓 Cuarto Creciente (25-37.5%)
- 🌔 Gibosa Creciente (37.5-50%)
- 🌕 Luna Llena (50-62.5%)
- 🌖 Gibosa Menguante (62.5-75%)
- 🌗 Cuarto Menguante (75-87.5%)
- 🌘 Menguante (87.5-100%)

### FloatingWhatsApp Component
Botón flotante de WhatsApp con mensajes personalizados:

```tsx
import FloatingWhatsApp from '@/components/lunar/FloatingWhatsApp';

<FloatingWhatsApp 
  phoneNumber="573001234567"
  message="Mensaje personalizado"
  productInfo={{
    id: "123",
    name: "Producto Ejemplo",
    price: 99.99
  }}
/>
```

**Características:**
- ✅ Botón flotante con efecto de pulso
- ✅ Mensaje pre-llenado con datos del producto
- ✅ Tooltip informativo al hacer hover
- ✅ Animaciones suaves
- ✅ Badge de notificación con luna 🌕

---

## 🎨 Sistema de Diseño Lunar

### Paleta de Colores

```css
/* Colores Nocturnos */
🌑 Noche:      from-indigo-900 via-purple-900 to-indigo-800
🌌 Cielo:      from-purple-600 to-indigo-600

/* Colores Lunares */
🌕 Luna Llena: from-yellow-200 via-yellow-100 to-white
🌙 Brillo:     yellow-300, yellow-400

/* Acentos */
⭐ Estrellas:  yellow-300 con animate-pulse
💜 Acentos:    purple-500, pink-500, indigo-600
💚 WhatsApp:   green-500, green-600
```

### Animaciones Personalizadas

```css
@keyframes float       /* Luna flotante (6s) */
@keyframes twinkle     /* Estrellas parpadeantes (3s) */
@keyframes glow        /* Efecto de brillo (2s) */
@keyframes shimmer     /* Efecto shimmer */
```

---

## 📱 Configuración de WhatsApp

### 1. Configuración Básica

Edita `src/styles/lunar-theme.ts`:

```typescript
export const whatsappConfig = {
  phoneNumber: '+573001234567',  // 👈 Cambia por tu número
  defaultMessage: '¡Hola! Estoy interesado en los productos de Dolunay Store 🌕',
};
```

### 2. Formato Internacional

```
+[código de país][número sin 0]

Ejemplos:
- 🇨🇴 Colombia:  +573001234567
- 🇲🇽 México:    +525512345678
- 🇪🇸 España:    +34612345678
- 🇦🇷 Argentina: +541112345678
- 🇵🇪 Perú:      +51987654321
```

### 3. Mensajes Automáticos

Cuando un cliente hace clic en WhatsApp desde un producto:

```
¡Hola! 🌕 Me interesa este producto:

📦 *Vestido de Noche Elegante*
🆔 ID: 12345
💰 Precio: $99.99

¿Está disponible?
```

---

## 💡 Funcionalidades Implementadas

### ✅ Completado

- [x] Sistema de tema lunar completo
- [x] Componente de fases lunares animadas
- [x] Integración de WhatsApp flotante
- [x] Panel de administración CRUD
- [x] Gestión de productos (Crear, Leer, Actualizar, Eliminar)
- [x] Tarjetas de productos con botón WhatsApp
- [x] Sistema de categorías con filtros
- [x] Loader animado con luna
- [x] Badges de disponibilidad
- [x] Efectos hover elegantes
- [x] Header/Footer con tema lunar
- [x] Página de inicio renovada
- [x] Catálogo de productos mejorado
- [x] Sistema de progreso lunar (meta: 20 productos = luna llena)
- [x] Responsive design completo
- [x] Animaciones CSS personalizadas
- [x] TypeScript en todo el proyecto

### 🚧 Por Implementar (Sugerencias)

- [ ] Sistema de autenticación para admin
- [ ] Base de datos real (MongoDB/PostgreSQL)
- [ ] Carrito de compras funcional
- [ ] Sistema de pagos integrado
- [ ] Multi-idioma (Español/Turco/Inglés)
- [ ] Sistema de reviews y calificaciones
- [ ] Newsletter con tema lunar
- [ ] Galería de imágenes múltiples
- [ ] Búsqueda avanzada con filtros
- [ ] Sistema de favoritos "Mi Constelación"
- [ ] Blog lunar con tips de compras
- [ ] Notificaciones push
- [ ] Modo oscuro/claro

---

## 📚 Documentación Adicional

### Guías Disponibles

- 📖 **Guía Completa:** [`DOLUNAY_GUIDE.md`](./DOLUNAY_GUIDE.md)
  - Características detalladas
  - Estructura completa del proyecto
  - Guía de uso del panel admin
  - Paleta de colores y diseño
  - Ideas de mejoras futuras
  - FAQ

- ⚡ **Inicio Rápido:** [`QUICK_START.md`](./QUICK_START.md)
  - Instalación en 3 pasos
  - Configuración rápida
  - Solución de problemas comunes
  - Checklist post-instalación

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 15.x | Framework React con App Router |
| **React** | 19.x | Biblioteca UI |
| **TypeScript** | 5.x | Lenguaje type-safe |
| **Tailwind CSS** | 3.4.x | Framework CSS utility-first |
| **PostCSS** | 8.x | Procesador CSS |
| **Autoprefixer** | 10.x | Prefijos CSS automáticos |
| **ESLint** | 9.x | Linter de código |

---

## 🎯 Casos de Uso

### Para Emprendedores 👩‍💼

- Monta tu tienda en línea en minutos
- Sin necesidad de inventario físico
- Gestiona pedidos desde WhatsApp
- Panel admin intuitivo

### Para Desarrolladores 👨‍💻

- Código limpio y bien estructurado
- TypeScript para mayor seguridad
- Componentes reutilizables
- Diseño escalable

### Para Diseñadores 🎨

- Sistema de diseño lunar único
- Paleta de colores cohesiva
- Animaciones fluidas
- UI/UX moderna

---

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Otros Proveedores

Compatible con:
- ▲ Vercel
- 🟢 Netlify
- 🔵 Railway
- ⚫ Render
- 🟣 Fly.io

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! 

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📧 Contacto y Soporte

- 💬 **WhatsApp:** +57 300 123 4567
- 📧 **Email:** info@dolunay.com
- 🌙 **Lema:** Siempre brillando para ti

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 🙏 Agradecimientos

- 🎨 Inspiración: La belleza de las fases lunares
- 💡 Concepto: "Dolunay" - Luna Llena en turco
- 🌟 Comunidad open source de Next.js y React

---

<div align="center">

## 🌕 ¡Tu tienda lista para brillar!

**Hecho con 💜 y magia lunar 🌙**

*"Como la luna que ilumina la noche, iluminamos tu camino de compras"*

---

### Fases de Desarrollo

🌑 → 🌒 → 🌓 → 🌔 → **🌕 ¡COMPLETO!**

---

### ⭐ Si te gusta este proyecto, dale una estrella ⭐

</div>

## Features

- **Themed Sections**: 
  - Products available for ordering from **Temu**, **Shein**, and **Amazon**.
  - A section for users to **request unavailable products**.
  - An **admin area** for managing daily products and orders.

- **Design**: The application incorporates a color palette of pink, white, black, and gold to create an appealing and modern aesthetic.

- **SEO Optimization**: The project is optimized for search engines to enhance visibility and reach.

## Project Structure

The project is organized as follows:

```
dolunay-store
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── (store)
│   │   │   ├── temu
│   │   │   │   └── page.tsx
│   │   │   ├── shein
│   │   │   │   └── page.tsx
│   │   │   ├── amazon
│   │   │   │   └── page.tsx
│   │   │   ├── productos
│   │   │   │   └── [id]
│   │   │   │       └── page.tsx
│   │   │   └── solicitar
│   │   │       └── page.tsx
│   │   ├── admin
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── productos
│   │   │   │   └── page.tsx
│   │   │   └── pedidos
│   │   │       └── page.tsx
│   │   └── api
│   │       ├── productos
│   │       │   └── route.ts
│   │       ├── pedidos
│   │       │   └── route.ts
│   │       └── solicitudes
│   │           └── route.ts
│   ├── components
│   │   ├── layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── products
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ProductDetails.tsx
│   │   ├── forms
│   │   │   ├── OrderForm.tsx
│   │   │   └── RequestForm.tsx
│   │   └── ui
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   ├── lib
│   │   ├── db.ts
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── types
│   │   └── index.ts
│   └── styles
│       └── theme.ts
├── public
│   ├── images
│   │   └── logo.svg
│   └── favicon.ico
├── package.json
├── pnpm-lock.yaml
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── .eslintrc.json
├── .env.local.example
└── README.md
```

## Getting Started

To get started with the Dolunay project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd dolunay-store
   ```

2. **Install dependencies**:
   ```
   pnpm install
   ```

3. **Run the development server**:
   ```
   pnpm dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for checking out the Dolunay online store project! We hope you enjoy building and using this application.