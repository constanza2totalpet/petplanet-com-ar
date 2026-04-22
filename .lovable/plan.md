

## Sección de reseñas de Mercado Libre (manual / curada)

Voy a crear una nueva sección **"Lo que opinan los clientes"** en la página de Crystal Cat, ubicada **entre "Consejos" y "Próximamente"**, con reseñas reales de Mercado Libre que vos me vas a pasar.

### Diseño

Encabezado con calificación general:
- Logo/badge "Mercado Libre" + estrellas grandes (ej: ★ 4.8) + cantidad de opiniones
- Subtítulo: "Reseñas reales de compradores verificados"

Grid de cards (3 columnas en desktop, 1 en mobile):
- Estrellas (1–5) en amarillo
- Texto de la reseña (con `line-clamp-5` para uniformidad)
- Nombre del comprador + fecha
- Pequeño badge "Compra verificada" en color suave

CTA al final:
- Botón outline "Ver todas las opiniones en Mercado Libre" → abre el link del producto en nueva pestaña

### Estilo visual

- Fondo: `bg-muted/30` para alternar con la sección anterior
- Cards: borde sutil, sombra suave al hover, esquinas redondeadas (consistente con resto de la página)
- Estrellas con ícono `Star` de lucide-react (filled/outline)
- Tipografías y colores existentes (`brand-yellow` para estrellas, `crystal` para acentos)

### Datos

Mientras me pasás las reseñas reales, dejo **4 reseñas placeholder** realistas que luego vos reemplazás fácil editando un array al inicio del archivo:

```ts
const reviews = [
  { name: "...", date: "...", rating: 5, text: "..." },
  ...
]
```

### Archivos a modificar

- `src/pages/CrystalCat.tsx` — agregar sección `<ReviewsSection>` inline (siguiendo el patrón actual del archivo, sin crear componente separado salvo que prefieras)
- Importar `Star` de `lucide-react`

### Lo que necesito de vos después

1. Las 4–6 reseñas reales (texto, nombre, fecha, estrellas) copiadas de la página de ML
2. La calificación general y cantidad de opiniones que muestra ML hoy

Cuando aprobes, lo implemento con placeholders y después los reemplazamos con los datos reales.

