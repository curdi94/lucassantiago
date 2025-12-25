// Configuración centralizada de colecciones
// Para añadir una nueva colección:
// 1. Crear la carpeta en src/assets/ con las imágenes
// 2. Añadir una entrada aquí con { folder: 'nombre_carpeta', name: 'Nombre visible', description: 'Descripción' }

export const collections = [
    {
        folder: 'vacuo',
        name: 'Vacuo',
        description: 'Pueblos que se vacían, casas abandonadas, objetos olvidados. Entre las ruinas emergen vestigios de vidas pasadas, rastros de quienes ya no volverán. Así termina una historia mientras el desarraigo lo cubre todo como un velo de niebla.'
    },
    { folder: 'chic_rural', name: 'Chic Rural', description: '' },
    { folder: 'galardones', name: 'Galardones', description: '' },
    { folder: 'vacas', name: 'Vacas', description: '' },
    { folder: 'recolectores', name: 'Recolectores', description: '' },
    { folder: 'ciudades_intermitentes', name: 'Ciudades Intermitentes', description: '' },
    { folder: 'por_que_lloran_las_mujeres', name: '¿Por qué lloran las mujeres?', description: '' },
    { folder: '28', name: '28', description: '' },
    { folder: 'chosco', name: 'Chosco', description: '' },
    { folder: 'encargos', name: 'Encargos', description: '' },
    { folder: 'varias', name: 'Varias', description: '' },
];

// Mapa folder -> nombre para acceso rápido
export const collectionNames = Object.fromEntries(
    collections.map(c => [c.folder, c.name])
);

// Mapa folder -> descripción para acceso rápido
export const collectionDescriptions = Object.fromEntries(
    collections.map(c => [c.folder, c.description])
);

// Lista de folders para getStaticPaths
export const collectionPaths = collections.map(c => ({ params: { folder: c.folder } }));
