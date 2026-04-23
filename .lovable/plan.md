

## Reseñas sin nombres de comprador

Como no tenés los nombres, ajusto la sección de reseñas para que se vea bien sin ese dato.

### Opción elegida: "Comprador verificado"

En lugar del nombre, cada card muestra:
- Ícono de avatar genérico (círculo con inicial o ícono `User` de lucide-react)
- Texto **"Comprador verificado"** en lugar del nombre
- Fecha (si la tenés) o se omite

Esto es lo que hacen muchos sitios cuando las reseñas son anónimas y mantiene la credibilidad.

### Qué necesito de vos

Solo el **texto** de cada reseña y las **estrellas** (1–5). La fecha es opcional.

Ejemplo del formato que me podés pasar:

```
1. ★★★★★ — "Excelente producto, dura muchísimo y no huele nada."
2. ★★★★☆ — "Muy bueno, mi gato se adaptó rápido."
3. ★★★★★ — "La mejor piedra que probé hasta ahora."
```

### Cambios en el código

- `src/pages/CrystalCat.tsx`:
  - Actualizar el array `reviews` quitando el campo `name` (o reemplazándolo por `"Comprador verificado"` fijo)
  - En la card: reemplazar el nombre por un avatar circular pequeño + texto "Comprador verificado"
  - La fecha queda opcional (se renderiza solo si existe)

### Mientras tanto

Si querés, dejo las **4 reseñas placeholder actuales** pero ya con el formato anónimo aplicado, así ves cómo queda visualmente. Cuando me pases los textos reales los reemplazo en un toque.

