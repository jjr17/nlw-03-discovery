// create map

const map = L.map("mapid").setView([-23.0439433, -47.3743414], 15);

// create and add titleLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon

  marker && map.removeLayer(marker);

  // add icon layer

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar campo de fotos

function addPhotoField() {

  // pegar o container de fotos #images

  const container = document.querySelector('#images');

  // pegar o container para duplicar .new-upload

  const fieldsContainer = document.querySelectorAll('.new-upload');

  // realizar o clone da última imagem adicionada.

  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  // verificar se o campo está vazio, se sim, não adicionar ao container de imagens

  const input = newFieldContainer.children[0];

  if(input.value == "") {
      return; 
  }

  // limpar o campo antes de adicionar ao container de imagens

  input.value = "";

  // adicionar o clone ao container de #images

  container.appendChild(newFieldContainer);
}

// deletar campo de fotos 

function deleteField(event) {

    // limpar campo 
    
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return;
    }

    // deletar campo inteiro

    span.parentNode.remove();
}

// select yes or no 

function toggleSelect(event) {

  // retirar a classe .active (dos botões)

  document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'));

  // colocar a classe .active nesse botão clicado

  const button = event.currentTarget
  button.classList.add('active')

  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')

  input.value = button.dataset.value
  
}

// DESAFIO VALIDAÇÃO DE LATITUDE E LONGITUDE NO FRONTEND

// function validate(event) {

//   // validar se lat e lng estão preenchidos
//   const latLngEmpty = document.querySelectorAll('.map-container input').value;
  
//   if([latLngEmpty] == '') {
//     event.preventDefault()
//     alert('Favor definir a localização do orfanato no mapa!')
//     return true   
//   }
  
// }

