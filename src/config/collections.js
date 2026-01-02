// Configuración centralizada de colecciones
// Para añadir una nueva colección:
// 1. Crear la carpeta en src/assets/ con las imágenes
// 2. Añadir una entrada aquí con { folder: 'nombre_carpeta', name: 'Nombre visible', description: 'Descripción' }

export const collections = [
    {
        folder: 'vacuo',
        name: 'Vacuo',
        description: `El continente se deshace y el contenido se diluye. Entre las ruinas deshabitadas y abandonadas aparecen como tesoros sin valor alguno, objetos, útiles ya inútiles, restos como rastros de esa manera de vivir que ya se fue hace mucho tiempo. Retazos de las vivencias de sus moradores que ya no volverán, ni sus hijos, ni los hijos de sus hijos. Así termina una historia que comenzó tiempo atrás, así el desarraigo cae con todo su peso, como un velo de niebla que lo cubre todo y lo hace invisible. Esas piezas sin valor material alguno mutan en nuevos objetos, "joyas", se exhiben en antiguas mesitas donde antaño se guardaba lo más preciado, lo más cercano, los anhelos y quizá los sueños de una vida mejor en otro lugar. Alzan su voz para decirnos que no son objetos vacuos, reivindican nuestra memoria, nuestro no-ólvido y sólo ruegan un momento de atención, un pequeño espacio en nuestros corazones.`
    },
    { folder: 'chic_rural', name: 'Chic Rural', description: '' },
    { folder: 'vacas', name: 'Vacas', description: ''},
    { folder: 'galardones', name: 'Galardones', description: 'Galardones realizados por encargo' },
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
