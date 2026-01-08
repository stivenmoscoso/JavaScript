// // ============================================
// // ARRAYS AVANZADOS Y PROGRAMACIÓN DECLARATIVA
// // EN JAVASCRIPT - CÓDIGOS DE EJEMPLOS
// // ============================================

// // ============================================
// // 1. MAP - TRANSFORMAR DATOS
// // ============================================

// // Ejemplo básico: Duplicar edades
// const misGatitos = [
//     { nombre: 'Milo', edad: 1 },
//     { nombre: 'Cleo', edad: 2 }
// ];

// const gatitosmasViejos = misGatitos.map((gatito) => ({
//     ...gatito,
//     edad: gatito.edad * 2
// }));

// console.log("Originales (no cambiaron):");
// console.log(misGatitos);
// console.log("Transformados (edad duplicada):");
// console.log(gatitosmasViejos);

// // ============================================
// // 2. FILTER - SELECCIONAR ELEMENTOS
// // ============================================

// // Ejemplo 1: Filtrar strings por longitud
// const todosLosGatitos = ['bigotes', 'patitas', 'ojosazules', 'ronroneo'];
// const gatitosGrandes = todosLosGatitos.filter(gatito => gatito.length > 7);

// console.log("Gatitos originales:", todosLosGatitos);
// console.log("Gatitos con más de 7 letras:", gatitosGrandes);
// // Resultado: ['ojosazules', 'ronroneo']

// // Ejemplo 2: Gatitos jóvenes
// const poblacionGatuna = [
//     { nombre: 'Salem', edad: 3 },
//     { nombre: 'Kitty', edad: 1 },
//     { nombre: 'Garfield', edad: 5 },
//     { nombre: 'Whiskers', edad: 1 }
// ];

// const gatitosJovenes = poblacionGatuna.filter(gatito => gatito.edad < 2);

// console.log("Gatitos originales:", poblacionGatuna);
// console.log("Gatitos jóvenes (edad < 2):", gatitosJovenes);
// /*
// Resultado: [
//   { nombre: 'Kitty', edad: 1 },
//   { nombre: 'Whiskers', edad: 1 }
// ]
// */

// // ============================================
// // 3. REDUCE - AGREGAR Y ACUMULAR
// // ============================================

// // Ejemplo 1: Sumar puntos
// const puntosPorArañazo = [5, 10, 3, 7];
// const totalPuntos = puntosPorArañazo.reduce((acumulador, actual) => acumulador + actual, 0);

// console.log("Total de puntos por arañazos:", totalPuntos);
// // Resultado: 25

// // Ejemplo 2: Contar ocurrencias
// const palabras = ['gato', 'perro', 'gato', 'pajaro', 'gato'];
// const conteoGatos = palabras.reduce((contador, palabra) => {
//     return palabra === 'gato' ? contador + 1 : contador;
// }, 0);

// console.log("Número de veces que aparece 'gato':", conteoGatos);
// // Resultado: 3

// // Ejemplo 3: Agrupar por propiedad
// const compras = [
//     { producto: 'comida', precio: 50 },
//     { producto: 'juguete', precio: 30 },
//     { producto: 'comida', precio: 40 }
// ];

// const totalPorProducto = compras.reduce((acumulado, compra) => {
//     acumulado[compra.producto] = (acumulado[compra.producto] || 0) + compra.precio;
//     return acumulado;
// }, {});

// console.log("Total gastado por producto:", totalPorProducto);
// // Resultado: { comida: 90, juguete: 30 }

// // ============================================
// // 4. ENCADENAMIENTO DE MÉTODOS
// // ============================================

// const gatitosConPeso = [
//     { nombre: 'Bolt', peso: 4 },
//     { nombre: 'Puff', peso: 2 },
//     { nombre: 'Shadow', peso: 5 },
//     { nombre: 'Fluffy', peso: 3 }
// ];

// const pesoTotalGatitosLigeros = gatitosConPeso
//     .filter(g => g.peso < 5)      // Filtra gatitos ligeros
//     .map(g => g.peso * 1.1)        // Aumenta peso un 10%
//     .reduce((acc, peso) => acc + peso, 0); // Suma los pesos

// console.log("Peso total de gatitos ligeros con aumento:", pesoTotalGatitosLigeros);
// // Resultado: 9.9

// // Ejemplo más complejo: procesar compras
// const todasLasCompras = [
//     { categoria: 'comida', precio: 50, impuesto: 0.16 },
//     { categoria: 'juguete', precio: 30, impuesto: 0.16 },
//     { categoria: 'comida', precio: 40, impuesto: 0.16 },
//     { categoria: 'accesorio', precio: 20, impuesto: 0.08 }
// ];

// const totalConImpuesto = todasLasCompras
//     .filter(compra => compra.categoria !== 'accesorio') // Solo comida y juguete
//     .map(compra => ({
//         ...compra,
//         precioFinal: compra.precio * (1 + compra.impuesto)
//     }))
//     .reduce((total, compra) => total + compra.precioFinal, 0);

// console.log("Total de compras con impuesto (sin accesorios):", totalConImpuesto);
// // Resultado: 134.8


// // ============================================
// // 5. INMUTABILIDAD - PROTEGER DATOS ORIGINALES
// // ============================================

// const datosOriginales = [
//     { id: 1, nombre: 'Producto A', stock: 10 },
//     { id: 2, nombre: 'Producto B', stock: 5 }
// ];

// // Estos métodos NO modifican el array original
// const datosModificados = datosOriginales
//     .map(producto => ({
//         ...producto,
//         stock: producto.stock + 5
//     }));

// console.log("Originales (intactos):", datosOriginales);
// console.log("Modificados (nuevo array):", datosModificados);


// // ============================================
// // 6. TRANSFORMACIÓN DE DATOS DE API REAL
// // ============================================

// // URL real de The Cat API (Lista de razas)
// const API_URL = 'https://api.thecatapi.com/v1/breeds';

// fetch(API_URL)
//     .then(res => res.json())
//     .then(razas => {

//         console.log("Ejemplo gatuno:", razas[0]);

//         // 1. FILTER: Solo razas con nivel de afecto alto (>4) Y que tengan imagen
//         const gatosTop = razas
//             .filter(raza => raza.affection_level >= 4)
//             .slice(0, 10); // Limitamos a 10 resultados



//         // 2. MAP: Transformamos para quedarnos solo con lo que nos interesa
//         const fichaGatos = gatosTop.map(raza => ({
//             raza: raza.name,
//             origen: raza.origin,
//             temperamento: raza.temperament,
//             nivelAfecto: raza.affection_level,
//             inteligencia: raza.intelligence,
//         }));

//         console.log("Top 10 gatos amigables:", fichaGatos);

//         // 3. REDUCE: Promedio de inteligencia de estos 10 gatos
//         const promedioInteligencia = fichaGatos.reduce((suma, gato) => {
//             return suma + gato.inteligencia;
//         }, 0) / fichaGatos.length;

//         console.log(`Inteligencia promedio: ${promedioInteligencia.toFixed(1)}/5`);
//     })
//     .catch(err => console.error("Error gatuno:", err));


// ============================================
// 7. CASOS DE USO REALES
// ============================================

// Caso 1: Calcular promedio de calificaciones por cada estudiante mostrando nombre y promedio, filtrar promedios >= 8 y ordenar de mayor a menor
const estudiantes = [
    { nombre: 'Ana', calificaciones: [8, 9, 7] },
    { nombre: 'Bruno', calificaciones: [9, 9, 8] },
    { nombre: 'Carlos', calificaciones: [6, 7, 8] },
    { nombre: 'Diana', calificaciones: [10, 10, 10] }
];

const promedio = estudiantes
.map(est => ({ nombre: est.nombre, promedio: est.calificaciones.reduce((a, b) => a + b, 0) / est.calificaciones.length }))
.filter(est => est.promedio >= 9)
.sort((a, b) => b.promedio - a.promedio);   

console.log("Estudiantes con promedio >= 9 ordenados:", promedio);
console.log("Resultado esperado: [{ nombre: 'Diana', promedio: 10 }, { nombre: 'Bruno', promedio: 8.67 }]");