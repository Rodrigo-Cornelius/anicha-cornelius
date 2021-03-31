import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';

const getItems = () => {  
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(
            [
                {
                    id: 1,
                    tittle : 'Maceta 18x20',
                    description: 'Macetas en madera maciza + tierra con abono orgánico (compost) de regalo. Le aplicamos dos manos de protector para madera (color: Roble).',
                    price: 390,
                    pictureURL : "/img/macetaMadera18x20.webp",
                    categoryID: ":1",
                },
                {
                    id: 2,
                    tittle : 'Huerta Vertical De Pared',
                    price: 1700,
                    description: 'Con la compra de estos hermosos maceteros te regalamos una bolsa de COMPOST ORGÁNICO, para comenzar la huerta con el mejor abono natural. Tamaño y color a elección.',
                    pictureURL : '/img/huertaVertical.webp',
                    categoryID: ":4"
                },
                {
                    id: 3,
                    tittle : 'Tabla De Picar Con Diseño',
                    price: 450,
                    description: 'Tablas para picar hechas en madera. Se hacen con diseños personalizados, consulte. También con sus iniciales talladas ($120 adicionales por cada tabla).',
                    pictureURL : '/img/tablaPicarConDiseño.webp',
                    categoryID: ":4"
                },
                {
                    id: 4,
                    tittle : 'Percheros Con Diseños',
                    price: 470,
                    description: 'Percheros artesanales, varios diseños! Tamaño: 20x25.',
                    pictureURL : '/img/percherosDiseñosVarios.webp',
                    categoryID: ":2"
                },
                {
                    id: 5,
                    tittle : 'Percheros Personalizados',
                    price: 890,
                    description: 'Percheros rústicos en madera. Consultar por su diseño personalizado y a medida. Incluye protector de madera y ganchitos ocultos, listo para colgar.',
                    pictureURL : '/img/percherosPersonalizados.webp',
                    categoryID: ":2"
                },
                {
                    id: 6,
                    tittle : 'Repisa/Organizador Para Libros',
                    price: 1850,
                    description: 'Repisa/Organizador para libros y cuadernos. Ideal para tener ordenados los elementos de estudio u oficina. Madera maciza. Tamaño: 60 x 25 x 25. Color a elección. Incluye 2 manos de barniz para una excelente terminación.',
                    pictureURL : '/img/repisaOrganizador.webp',
                    categoryID: ":3"
                },
                {
                    id: 7,
                    tittle : 'Maceta De Madera 50cm X 50cm',
                    price: 1260,
                    description: 'Macetas en madera (2,5cm de espesor), muy reforzadas. Quedan muy bonitas tanto en el exterior de la casa como en el interior. Se le aplica protector de madera para cuidar el producto tanto del sol y el clima como de la humedad de la tierra.',
                    pictureURL : '/img/macetaMadera50x50.webp',
                    categoryID: ":1"
                },
                {
                    id: 8,
                    tittle : 'Marcos Para Cuadros/portaretratos En Madera.',
                    price: 420,
                    description: 'Hermosos marcos para cuadros/portaretratos en madera. Se hacen personalizados del tamaño que necesites.',
                    pictureURL : '/img/marcosCuadrosPortaretratos.webp',
                    categoryID: ":4"
                },
                {
                    id: 9,
                    tittle : 'Percheros Infantiles En Madera. Varios Motivos.',
                    price: 450,
                    description: 'Percheros infantiles, artesanales hechos en madera. Pintados a mano!',
                    pictureURL : '/img/percherosInfantiles.webp',
                    categoryID: ":2"
                },
                {
                    id: 10,
                    tittle : 'Macetas En Madera Con Patas',
                    price: 480,
                    description: 'Macetas en madera de Eucalipto y patitas de Pino. Incluye 2 manos de protector (varios colores disponibles). Medidas: 20cm x 15cm x 15cm.',
                    pictureURL : '/img/macetaConPatas.webp',
                    categoryID: ":1"
                },
                {
                    id: 11,
                    tittle : 'Percheros Rústicos Con Maderas Antiguas.',
                    price: 820,
                    description: 'Fabricados con maderas rurales antiguas. Tipo de madera: Eucalipto colorado. Ganchos de hierro.',
                    pictureURL : '/img/percheroRustico.webp',
                    categoryID: ":2"
                },
                {
                    id: 12,
                    tittle : 'Repisa Triangular',
                    price: 1180,
                    description: 'Bellísimas repisas, ideales para decorar la pared de una habitación. Las fabricamos en madera de Eucalipto y la pintamos del color que elijas (Roble Claro, Nogal, Caoba o Natural). La medida publicada es de 60cm de lado. Igualmente las fabricamos de la medida que tu necesites!',
                    pictureURL : '/img/repisaTriangular.webp',
                    categoryID: ":3"
                },
                {
                    id: 13,
                    tittle : 'Soportes En Madera Para Varias Guitarras',
                    price: 2200,
                    description: 'Hacemos a medida, con el color que elijas y la cantidad de guitarras que necesites. Aplicamos protector para asegurar la durabilidad de la madera. El soporte incluye material acolchado en puntos de contacto para evitar rayar el instrumento. Altura 75cm.',
                    pictureURL : '/img/soporteGuitarra.webp',
                    categoryID: ":3"
                },
            ]
            )
        },2000)
    })
}

const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const {itemId} = useParams();

    useEffect(() => {

        getItems().then(
            (res) => {
                const itemEncontrado = res.find((e)=>{
                    return (
                        `:${e.id.toString()}` === itemId
                    )
                })
                setItem(itemEncontrado);
            }   
        )
    },[itemId]);
    return (
        <>
            <ItemDetail item={item} />
        </>
    )

}

export default ItemDetailContainer;

