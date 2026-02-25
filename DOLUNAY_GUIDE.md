# 🌕 Dolunay Store - Luna Llena de Oportunidades

¡Bienvenida a Dolunay Store! Una tienda en línea completamente renovada con un hermoso tema lunar y funcionalidades completas para gestionar productos y conectar con clientes.

## ✨ ¿Qué significa Dolunay?

**Dolunay** significa "Luna Llena" en turco. Como la luna que crece cada noche hasta alcanzar su plenitud, tu tienda crece con cada producto que agregas y cada cliente satisfecho.

## 🌙 Características Principales

### 1. **Tema Lunar Completo**
- 🎨 Diseño de colores inspirado en la noche, con tonos morados, índigos y dorados
- 🌟 Animaciones de fases lunares que representan el progreso de la tienda
- ✨ Efectos de estrellas y brillo en el fondo
- 🌙 Componente de `MoonPhase` interactivo que muestra el progreso

### 2. **Panel de Administración**
Acceso: `/admin`

**Características:**
- 📊 Dashboard con estadísticas en tiempo real
- 🏪 Gestión completa de productos (CRUD)
  - Añadir productos con nombre, precio, categoría, descripción e imagen
  - Editar productos existentes
  - Eliminar productos
  - Marcar disponibilidad
- 🌕 Indicador de "Luna Llena" - Meta: 20 productos = Luna Llena
- 📈 Visualización del progreso con animaciones lunares

**Cómo usar:**
1. Ve a `/admin`
2. Haz clic en "Gestionar Productos"
3. Usa el botón "Agregar Producto" para añadir al catálogo
4. Completa el formulario con los detalles
5. ¡Observa cómo tu luna se va llenando! 🌑 → 🌕

### 3. **Sistema de WhatsApp Integrado**

**Botón Flotante:**
- 💚 Botón de WhatsApp flotante en todas las páginas
- 🌙 Diseño con efecto de luna y pulso animado
- 📱 Abre WhatsApp directamente con mensaje pre-llenado

**En Tarjetas de Productos:**
- 💬 Botón de WhatsApp en cada producto
- 📦 Mensaje automático con:
  - Nombre del producto
  - ID del producto
  - Precio
  - Pregunta sobre disponibilidad

**Formato del mensaje:**
```
¡Hola! 🌕 Me interesa este producto:

📦 *Nombre del Producto*
🆔 ID: 12345
💰 Precio: $99.99

¿Está disponible?
```

### 4. **Catálogo de Productos Mejorado**
- 🎨 Tarjetas de productos con diseño lunar
- 🌙 Badges de disponibilidad animados
- ✨ Efectos hover suaves y elegantes
- 👁️ Botón "Ver Detalles" para más información
- 💚 Botón directo de WhatsApp en cada tarjeta

### 5. **Página Principal Renovada**
- 🌌 Hero section con fondo de estrellas animadas
- 🌙 Sección "Fases de la Luna" explicando el proceso de compra
- ✨ Beneficios visualizados con iconos y colores lunares
- 📱 Call-to-actions prominentes a WhatsApp

### 6. **Componentes Personalizados**

#### `MoonPhase.tsx`
Componente que muestra las fases de la luna basado en un porcentaje:
```tsx
<MoonPhase 
  phase={50}        // 0-100
  size="lg"         // sm, md, lg, xl
  showLabel={true}  // Mostrar nombre de fase
  animated={true}   // Animaciones
/>
```

#### `FloatingWhatsApp.tsx`
Botón flotante de WhatsApp:
```tsx
<FloatingWhatsApp 
  phoneNumber="573001234567"
  message="Mensaje personalizado"
  productInfo={{
    id: "123",
    name: "Producto",
    price: 99.99
  }}
/>
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+
- pnpm (o npm)

### Instalación
```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Iniciar producción
pnpm start
```

### Configuración de WhatsApp
1. Abre `src/styles/lunar-theme.ts`
2. Cambia el número de teléfono:
```typescript
export const whatsappConfig = {
  phoneNumber: '+573001234567', // TU NÚMERO AQUÍ
  defaultMessage: '¡Hola! Estoy interesado en los productos de Dolunay Store 🌕',
};
```

## 📂 Estructura del Proyecto

```
dolunay-store/
├── src/
│   ├── app/
│   │   ├── (store)/              # Rutas públicas
│   │   │   ├── productos/        # Catálogo
│   │   │   └── solicitar/        # Formulario de solicitud
│   │   ├── admin/                # Panel de administración
│   │   │   ├── page.tsx          # Dashboard
│   │   │   └── productos/        # Gestión de productos
│   │   ├── api/
│   │   │   └── productos/        # API REST de productos
│   │   ├── globals.css           # Estilos globales + animaciones
│   │   ├── layout.tsx            # Layout principal
│   │   └── page.tsx              # Página de inicio
│   ├── components/
│   │   ├── lunar/                # Componentes temáticos
│   │   │   ├── MoonPhase.tsx     # Fases de la luna
│   │   │   └── FloatingWhatsApp.tsx  # WhatsApp flotante
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Header con tema lunar
│   │   │   └── Footer.tsx        # Footer con tema lunar
│   │   └── products/
│   │       ├── ProductCard.tsx   # Tarjeta de producto
│   │       └── ProductGrid.tsx   # Grid de productos
│   ├── lib/
│   │   └── db.ts                 # Base de datos mock
│   ├── styles/
│   │   └── lunar-theme.ts        # Configuración del tema
│   └── types/
│       └── index.ts              # TypeScript types
```

## 🎨 Paleta de Colores Lunar

```css
Noche: from-indigo-900 via-purple-900 to-indigo-800
Luna Llena: from-yellow-200 via-yellow-100 to-white
Estrellas: yellow-300 con animación pulse
Acentos: purple-500, pink-500, indigo-600
```

## 💡 Ideas para Mejorar

### Funcionalidades Adicionales Sugeridas:

1. **Sistema de Categorías con Luna**
   - Cada categoría tiene su propia fase lunar
   - Visual progress por categoría

2. **Notificaciones Lunares**
   - Notificaciones cuando hay productos nuevos
   - "La luna está llena" cuando alcanzas la meta

3. **Descuentos en Luna Llena**
   - Ofertas especiales cuando el progreso alcanza 100%
   - Timer para siguiente "luna llena"

4. **Galería de Imágenes**
   - Múltiples imágenes por producto
   - Carousel lunar

5. **Sistema de Favoritos**
   - "Mi Constelación" - productos guardados
   - Lista de deseos con tema estelar

6. **Reviews de Clientes**
   - Sistema de calificación con estrellas (literalmente ⭐)
   - Comentarios de clientes

7. **Blog Lunar**
   - Tips de compras
   - Novedades de la tienda
   - Historias de clientes satisfechos

8. **Carrito de Compras**
   - "Cesta Lunar" para productos
   - Checkout integrado con WhatsApp

9. **Búsqueda Avanzada**
   - Filtros por precio, categoría, disponibilidad
   - Búsqueda con autocompletado

10. **Multi-idioma**
    - Español / Turco (por el origen del nombre)
    - Inglés para expansión

## 🔐 Seguridad

**Importante:** Para producción, considera:

1. **Autenticación del Admin**
   - Implementar sistema de login real
   - JWT o NextAuth.js
   - Proteger rutas `/admin`

2. **Base de Datos Real**
   - Migrar de mock a MongoDB, PostgreSQL, etc.
   - Variables de entorno para credenciales

3. **Validación de Formularios**
   - Validación del lado del servidor
   - Sanitización de inputs

4. **Rate Limiting**
   - Limitar llamadas a la API
   - Protección contra spam

## 📱 Responsive Design

El diseño está completamente optimizado para:
- 📱 Móviles (< 640px)
- 📱 Tablets (640px - 1024px)
- 💻 Desktop (> 1024px)

Todos los componentes usan Tailwind CSS con clases responsive (`md:`, `lg:`, etc.)

## 🌟 Animaciones Implementadas

```css
.animate-float      /* Luna flotante */
.animate-pulse      /* Estrellas parpadeantes */
.animate-spin       /* Loaders */
.animate-bounce     /* Elementos destacados */
```

## 🤝 Soporte

¿Necesitas ayuda? Contáctame:
- 💬 WhatsApp: +57 300 123 4567
- 📧 Email: info@dolunay.com
- 🌙 Siempre brillando para ti

---

## 📝 Changelog

### v1.0.0 - Lanzamiento "Luna Llena" 🌕

**Nuevo:**
- ✨ Tema lunar completo
- 🏪 Panel de administración funcional
- 💚 Integración de WhatsApp
- 🌙 Componente MoonPhase
- 📱 Diseño responsive
- 🎨 Animaciones suaves
- 🌟 Header y Footer renovados
- 📦 Tarjetas de productos mejoradas
- 🔄 API REST para productos
- 📊 Dashboard con estadísticas

---

**¡Gracias por usar Dolunay Store! Que tu negocio brille tan fuerte como la luna llena 🌕✨**
