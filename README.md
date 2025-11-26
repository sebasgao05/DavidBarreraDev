# Portafolio Personal - David Barrera

Portafolio web profesional desarrollado con React, TypeScript y Tailwind CSS, desplegado en AWS.

## 🚀 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Modo Oscuro/Claro**: Cambio de tema dinámico
- **Multiidioma**: Soporte para español e inglés
- **Animaciones Fluidas**: Transiciones y efectos visuales
- **SEO Optimizado**: Metadatos y estructura semántica
- **Performance**: Carga rápida y optimizada

## 🛠️ Tecnologías

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Internacionalización**: React i18next
- **Iconos**: Lucide React
- **Deployment**: AWS S3 + CloudFront

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/sebasgao05/DavidBarreraDev.git

# Configurar proyecto
npm install

# Ejecutar en desarrollo
npm start
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/        # Componentes React
├── contexts/         # Contextos (Theme)
├── data/            # Datos del portafolio
├── hooks/           # Custom hooks
├── i18n/            # Configuración de idiomas
├── styles/          # Estilos CSS
├── types/           # Tipos TypeScript
└── utils/           # Utilidades

scripts/             # Scripts de build y deploy
docs/               # Documentación
public/             # Assets estáticos
```

## 🚀 Deployment en AWS

### Configuración de S3

1. Crear bucket S3 con hosting estático habilitado
2. Configurar políticas de acceso público
3. Subir archivos de build

### Configuración de CloudFront

1. Crear distribución CloudFront
2. Configurar origen S3
3. Habilitar compresión GZIP
4. Configurar certificado SSL

### Deployment

```bash
# Deploy completo
npm run deploy

# Solo build optimizado
npm run build:prod
```

## 📝 Personalización

### Datos Personales

Edita `src/data/portfolio.ts` para actualizar:
- Información personal
- Habilidades técnicas
- Experiencia laboral
- Proyectos
- Certificaciones

### Estilos

Modifica `tailwind.config.js` para personalizar:
- Colores del tema
- Fuentes
- Animaciones
- Breakpoints

### Idiomas

Actualiza `src/i18n/config.ts` para:
- Añadir nuevos idiomas
- Modificar traducciones existentes

## 🎨 Paleta de Colores

- **Primary**: Blue (#3b82f6)
- **Secondary**: Gray (#64748b)
- **Dark**: Custom dark palette
- **Accent**: Gradient combinations

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Lazy loading de imágenes
- Code splitting automático
- Optimización de bundle
- Compresión de assets

## 🔧 Scripts Disponibles

- `npm start`: Servidor de desarrollo
- `npm run build:prod`: Build optimizado para producción
- `npm run deploy`: Deploy a AWS
- `npm run analyze`: Análisis del bundle
- `npm test`: Tests

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

- **Email**: sebasgao05@gmail.com
- **LinkedIn**: [linkedin.com/in/sebasgao05](https://linkedin.com/in/sebasgao05)
- **GitHub**: [github.com/sebasgao05](https://github.com/sebasgao05)