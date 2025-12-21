// Configuración centralizada de colecciones
// Para añadir una nueva colección:
// 1. Crear la carpeta en src/assets/ con las imágenes
// 2. Añadir una entrada aquí con { folder: 'nombre_carpeta', name: 'Nombre visible' }

export const collections = [
    { folder: 'vacuo', name: 'Vacuo' },
    { folder: 'vacas_2_3', name: 'Vacas 2.3' },
    { folder: 'vacas_2_2', name: 'Vacas 2.2' },
    { folder: 'vacas_2_0', name: 'Vacas' },
    { folder: 'recolectores', name: 'Recolectores' },
    { folder: 'ciudades_intermitentes', name: 'Ciudades Intermitentes' },
    { folder: '28', name: '28' },
    { folder: 'chosco', name: 'Chosco' },
    { folder: 'varias', name: 'Varias' },
];

// Mapa folder -> nombre para acceso rápido
export const collectionNames = Object.fromEntries(
    collections.map(c => [c.folder, c.name])
);

// Lista de folders para getStaticPaths
export const collectionPaths = collections.map(c => ({ params: { folder: c.folder } }));
