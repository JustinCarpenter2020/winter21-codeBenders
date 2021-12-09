
// const nations = ['Fire Nation', 'Earth Kingdom', 'Water Tribe', 'Air Nomads']

const nations = [{name: 'Fire Nation', id:'1', benders: [{name:'zuko', img: 'https://e7.pngegg.com/pngimages/955/948/png-clipart-zuko-aang-cosplay-costume-nickelodeon-aang-fictional-character-cartoon.png'}, {name: 'Iroh', img: 'https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/avatar/characters/iroh-character-web-desktop.png?height=0&width=480&matte=true&crop=false'}], color: 'danger'}, {name: 'Earth Kingdom', id: '2', benders: [{name:'Toph', img: 'https://upload.wikimedia.org/wikipedia/en/4/46/Toph_Beifong.png'}], color: 'success'}, {name: 'Water Tribe', id:'3', benders: [{name:'Katara', img: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Katara.png'}], color: 'primary'}, {name: 'Air Nomads', id:'4', benders: [{name:'Ang', img: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png'}], color: 'info'}]


// for (let index = 0; index < nations.length; index++) {
//   const n = nations[index];
  
// }
function draw(){
  let template = ''
  nations.forEach(n => {template += /*html*/` <div class="col-6">
  <h1 class="">
  <span class="text-shadow p-2">${n.name}</span>
</h1>
  <button class="btn btn-${n.color}" onclick="drawBenders('${n.id}')">BENDERS</button>
  <div id="${n.name}"></div>
</div>`})
document.getElementById('nations').innerHTML = template
}


function drawBenders(id) {
  let template = ''
  let currentNation = nations.find(n => n.id == id)
  currentNation.benders.forEach(b => {template += /*html*/`
  <img class="bender-img" src="${b.img}" />
  <p>${b.name}</p>
  `})
  document.getElementById(currentNation.name).innerHTML = template
}


draw()