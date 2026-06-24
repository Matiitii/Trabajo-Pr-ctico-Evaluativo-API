let botonFotoDelDia = document.querySelector('.botonFotoDelDia')
let botonEleccion = document.querySelector('.botonEleccion')
let botonHasta = document.querySelector('.botonHasta')
let botonCount = document.querySelector('.botonCount')


let imagenDelDia = document.querySelector('.fotoDelDia')
let imagenDATE = document.querySelector('.fotoDATE')


let titulo = document.querySelector('.title')
let tituloDATE = document.querySelector('.titleDATE')
let tituloHASTA = document.querySelector('.titleHASTA')


let videoDelDia = document.querySelector('.videoDelDia')
let videoDATE = document.querySelector('.videoDATE')


let date = document.querySelector('.date')
let dateDESDE = document.querySelector('.dateDESDE')
let dateHASTA = document.querySelector('.dateHASTA')


let cantidadF = document.querySelector('.cantidadN')
let imgOvideoDesdeHasta = document.querySelector('.imgOvideoDesdeHasta')
let contenedorCount = document.querySelector('.contedorCount')
let error = document.querySelector('.error')
let errorDesdeHasta = document.querySelector('.errorDesdeHasta')

let hoy = new Date().toISOString().split('T')[0]; 


botonFotoDelDia.onclick = function () {
    fetch('https://api.nasa.gov/planetary/apod?api_key=8Zaw1E8Ttxz6woLUSyVRAOU41tlIaNy2hsnGHH0K')
        .then(res => res.json())
        .then(fotos => {
            console.log(fotos)
            titulo.textContent = fotos.title
            if (fotos.media_type == 'video') {
                videoDelDia.style.display = "block";
                videoDelDia.src = fotos.url
            } else {
                imagenDelDia.src = fotos.hdurl
                imagenDelDia.style.display = "block";


            }
        })
}



botonEleccion.onclick = function () {
if (date.value <= hoy) {
    error.style.display = "none";
 fetch(`https://api.nasa.gov/planetary/apod?api_key=8Zaw1E8Ttxz6woLUSyVRAOU41tlIaNy2hsnGHH0K&date=${date.value}`)
        .then(res => res.json())
        .then(fotos => {
            videoDATE.style.display = "none";
            imagenDATE.style.display = "none";
            console.log(fotos)
            tituloDATE.textContent = fotos.title
            if (fotos.media_type == 'video') {
                videoDATE.src = fotos.url
                videoDATE.style.display = "block";
            } else {
                imagenDATE.src = fotos.hdurl
                imagenDATE.style.display = "block";


            }
        })
}else {
    error.textContent = "Afortunadamente/desafortunadamente no podemos ver el futuro! Coloca una fecha actual o del pasado."
}
} 
   

botonHasta.onclick = function () {
    if (dateDESDE.value && dateHASTA.value <= hoy) {
    errorDesdeHasta.style.display = "none";
    fetch(`https://api.nasa.gov/planetary/apod?api_key=8Zaw1E8Ttxz6woLUSyVRAOU41tlIaNy2hsnGHH0K&start_date=${dateDESDE.value}&end_date=${dateHASTA.value}`)
        .then(res => res.json())
        .then(fotos => {
            imgOvideoDesdeHasta.style.display = "none";
           imgOvideoDesdeHasta.innerHTML = " "
           for (let index = 0; index < fotos.length; index++) {
            console.log(fotos[index])
            if (fotos[index].media_type == 'image') {
               imgOvideoDesdeHasta.style.display = "block";
            imgOvideoDesdeHasta.innerHTML += ` 
                                            <img class="imgContenedor" src="${fotos[index].url}" alt="${fotos[index].title}"  style="display: block;">
                                            `
                                           

           } else {
            imgOvideoDesdeHasta.style.display = "block";
             imgOvideoDesdeHasta.innerHTML +=`
                                             <iframe class="imgContenedor"  src="${fotos[index].url}" frameborder="0" style="display: block;"></iframe>
                                            `
                                            
           }
        }}) 
        } else {
             errorDesdeHasta.textContent = "Afortunadamente/desafortunadamente no podemos ver el futuro! Coloca una fecha actual o del pasado."
        }
}


botonCount.onclick = function () {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=8Zaw1E8Ttxz6woLUSyVRAOU41tlIaNy2hsnGHH0K&count=${cantidadF.value}`)
        .then(res => res.json())
        .then(fotos => {
         contenedorCount.style.display = "none";
           contenedorCount.innerHTML = " "
           for (let index = 0; index < fotos.length; index++) {
            console.log(fotos[index])
            if (fotos[index].media_type == 'image') {
               contenedorCount.style.display = "block";
            contenedorCount.innerHTML += ` 
                                            <img class="imgContenedor" src="${fotos[index].url}" alt="${fotos[index].title}"  style="display: block;">
                                            `
           } else {
            contenedorCount.style.display = "block";
             contenedorCount.innerHTML +=`
                                             <iframe class="imgContenedor"  src="${fotos[index].url}" frameborder="0" style="display: block;"></iframe>
                                            `

           }
        }}) 
        } 


