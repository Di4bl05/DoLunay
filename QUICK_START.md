# 🚀 Inicio Rápido - Dolunay Store

## ⚡ 3 Pasos para comenzar

### 1. Instalar dependencias
```bash
pnpm install
```

### 2. Configurar WhatsApp
Abre `src/styles/lunar-theme.ts` y cambia el número:
```typescript
phoneNumber: '+573001234567', // 👈 PON TU NÚMERO AQUÍ
```

### 3. Ejecutar
```bash
pnpm dev
```

Abre → http://localhost:3000

---

## 🎯 Accesos Rápidos

- 🏠 Inicio: `/`
- 🛍️ Productos: `/productos`
- ✨ Solicitar: `/solicitar`
- 🔑 Admin: `/admin`

---

## 📱 Agregar tu primer producto

1. Ve a → `/admin`
2. Click en "Gestionar Productos"
3. Click en "✨ Agregar Producto"
4. Llena el formulario:
   - ✅ Nombre
   - ✅ Precio
   - ✅ Categoría
   - ✅ Descripción
   - ✅ URL de imagen
5. Click en "Crear Producto"
6. ¡Listo! Observa cómo crece tu luna 🌙

---

## 🎨 Personalización Rápida

### Cambiar colores principales
📁 `src/styles/lunar-theme.ts`

### Modificar Header/Footer
📁 `src/components/layout/Header.tsx`
📁 `src/components/layout/Footer.tsx`

### Ajustar meta de "Luna Llena"
En `src/app/admin/productos/page.tsx`:
```typescript
const moonProgress = (products.length / 20) * 100; 
// 👆 Cambia 20 por tu meta
```

---

## 💡 Tips Importantes

### 🖼️ Imágenes de productos
Usa URLs de:
- Imgur
- Cloudinary
- Tu propio servidor
- Formato recomendado: 800x800px

### 📱 WhatsApp
- Formato internacional: +[código país][número]
- Ejemplo Colombia: +573001234567
- Sin espacios ni guiones

### 🎯 Categorías sugeridas
- Ropa
- Accesorios
- Zapatos
- Belleza
- Hogar
- Electrónicos
- Otros

---

## 🐛 Solución de Problemas

### ❌ Error al instalar
```bash
# Prueba con npm en lugar de pnpm
npm install
```

### ❌ Puerto 3000 ocupado
```bash
# Usa otro puerto
pnpm dev -- -p 3001
```

### ❌ Productos no se muestran
1. Verifica que el API esté funcionando: `/api/productos`
2. Revisa la consola del navegador (F12)
3. Asegúrate de haber agregado productos en `/admin`

---

## 📚 Documentación Completa

Ver → `DOLUNAY_GUIDE.md` para documentación detallada

---

## ✅ Checklist Post-Instalación

- [ ] Cambiaste el número de WhatsApp
- [ ] Agregaste al menos 1 producto de prueba
- [ ] Probaste el botón flotante de WhatsApp
- [ ] Verificaste que el diseño se vea bien en móvil
- [ ] Personalizaste los textos del footer
- [ ] Cambiaste el email de contacto

---

## 🌕 ¡Listo!

Tu tienda lunar está lista. Ahora:
1. Agrega productos
2. Comparte el link con tus clientes
3. Responde por WhatsApp
4. ¡A vender! 🎉

**¿Dudas?** Revisa `DOLUNAY_GUIDE.md` 

---

**Hecho con 💜 y magia lunar 🌙**
