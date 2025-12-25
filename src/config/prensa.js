// Configuración de apariciones en prensa
// Para añadir una nueva entrada, añade un objeto con:
// - url: enlace al artículo (requerido)
// - titulo: título del artículo (requerido)
// - medio: nombre del periódico/medio (requerido)
// - fecha: fecha de publicación YYYY-MM-DD (requerido)
// - imagen: URL de la imagen (opcional, si no hay se muestra placeholder)
// - esVideo: true si el contenido es un video (opcional)

export const prensa = [
    {
        url: "https://www.lne.es/occidente/2024/12/10/chosco-convierte-joya-taller-artista-112468172.html",
        titulo: "El chosco se convierte en joya en el taller del artista rural Lucas Santiago",
        medio: "La Nueva España",
        fecha: "2024-12-10",
        imagen: "https://estaticos-cdn.prensaiberica.es/clip/5d4d4cdb-1a6a-4456-9094-2625cfd9d633_16-9-discover-aspect-ratio_default_0_x1485y499.webp"
    },
    {
        url: "https://www.lne.es/asturianos/tineo/2023/08/07/joyero-rescata-tesoro-perdido-aldea-90727684.html",
        titulo: "El joyero que rescata el tesoro perdido en la aldea",
        medio: "La Nueva España",
        fecha: "2023-08-07",
        imagen: "https://estaticos-cdn.prensaiberica.es/clip/fed853d6-bc0a-49c3-81a2-4042e7312b01_16-9-discover-aspect-ratio_default_0.jpg",
        esVideo: true
    },
    {
        url: "https://www.lne.es/occidente/2020/12/28/lucas-santiago-gustaria-gente-llevara-26793859.html",
        titulo: "Lucas Santiago: \"Me gustaría que la gente llevara mis joyas como una demostración de identidad rural\"",
        medio: "La Nueva España",
        fecha: "2020-12-28",
        imagen: "https://estaticos-cdn.prensaiberica.es/clip/863a8826-cfa8-459a-ae64-2f023211f36b_21-9-aspect-ratio_default_1013812.webp"
    },
    {
        url: "https://tamtampress.es/2019/04/06/lucas-santiago-ofrece-una-visita-guiada-por-su-exposicion-de-joyeria-rural-vacas-2-3-en-el-cla/",
        titulo: "Lucas Santiago ofrece una visita guiada por su exposición de joyería rural \"VACAS 2.3\" en el CLA",
        medio: "Tam-Tam Press",
        fecha: "2019-04-06",
        imagen: "https://tamtampress.es/wp-content/uploads/2019/04/1-lucas-cla.jpg"
    },
    {
        url: "https://tamtampress.es/2019/02/22/lucas-santiago-abre-en-el-cla-la-exposicion-de-joyeria-rural-contemporanea-vacas-2-3/",
        titulo: "«Vacas 2.3», la joyería rural contemporánea del asturiano Lucas Santiago, en el CLA",
        medio: "Tam-Tam Press",
        fecha: "2019-02-22",
        imagen: "https://tamtampress.es/wp-content/uploads/2019/02/1-lucas-santiago.jpg"
    },
    {
        url: "https://www.diariodeleon.es/cultura/190218/114812/artista-invento-joyeria-rural.html",
        titulo: "El artista que inventó la joyería rural",
        medio: "Diario de León",
        fecha: "2019-02-18",
        imagen: "https://imagenes.diariodeleon.es/files/og_thumbnail/uploads/2024/01/19/65aaaa88df461.jpeg"
    },
    {
        url: "https://www.lne.es/occidente/2015/08/19/deseo-cumplido-joyero-lucas-santiago-19744254.html",
        titulo: "El deseo cumplido del joyero Lucas Santiago",
        medio: "La Nueva España",
        fecha: "2015-08-19",
        imagen: "https://estaticos-cdn.prensaiberica.es/clip/2e8e0f14-fe38-4b94-b6a1-e275796a992c_16-9-aspect-ratio_default_0.webp"
    },
    {
        url: "https://www.lne.es/occidente/2009/05/19/lucas-santiago-joya-tineo-21531645.html",
        titulo: "Lucas Santiago, la joya de Tineo",
        medio: "La Nueva España",
        fecha: "2009-05-19",
        imagen: "https://estaticos-cdn.prensaiberica.es/clip/f3d226d4-a8fd-4f53-9899-027bbbfc9b54_16-9-aspect-ratio_default_0.webp"
    },
    {
        url: "https://evaristovalle.com/d-10-abril-inauguracion-vacuo-lucas-santiago-joyeria-rural-contemporanea/",
        titulo: "Inauguración «Vacuo. Lucas Santiago. Joyería rural contemporánea»",
        medio: "Fundación Museo Evaristo Valle",
        fecha: "2022-04-07",
        imagen: "https://evaristovalle.com/wp-content/uploads/2022/03/Portada-web-800-x-952-e1649329566883.jpg"
    },
    {
        url: "https://tineosuscosasylasmias.blogspot.com/2009/08/lucas-santiago-o-el-amor-lo-rural.html",
        titulo: "Lucas Santiago o el amor a lo rural convertido en joyas",
        medio: "Tineo, sus cosas y las mías",
        fecha: "2009-08-06",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeYCB6b-ZFjoGjYHEX1t-Ev00t8QKUGZcHkR3TdC3SU2K9dOtWIEY7fKk4t5M2Va5BQF2U1B8KLv9KFgN1FdZGioW6YLOCz84FjcKHwOkBPY8IZz6uFsRndiFGF2duirq64t722Zc5IYTP/s320/Lucas+Santiago.+Montaje+fotogr%C3%A1fico+de+Jorge+Luis+Alonso+Pel%C3%A1ez.jpg"
    },
    {
        url: "https://www.elcomercio.es/asturias/occidente/joyas-olvido-mundo-20201122000823-ntvo.html",
        titulo: "Joyas contra el olvido del mundo rural",
        medio: "El Comercio",
        fecha: "2020-11-22",
        imagen: "https://s1.ppllstatics.com/elcomercio/www/multimedia/202011/22/media/cortadas/60098891--1248x828.JPG"
    }
];

// Artículos ordenados por fecha (más recientes primero)
export const prensaOrdenada = [...prensa].sort((a, b) =>
    new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
);

// Los 3 más recientes para el dropdown
export const prensaReciente = prensaOrdenada.slice(0, 3);

// Función helper para formatear fecha
export function formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr);
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                   'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return `${fecha.getDate()} ${meses[fecha.getMonth()]} ${fecha.getFullYear()}`;
}
