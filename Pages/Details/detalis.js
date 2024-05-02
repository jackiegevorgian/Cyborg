const Menu_Area = document.getElementById('Menu')
const MenuArea_Btn = document.getElementById('Menu_Button')

var count = 1;
MenuArea_Btn.onclick = () => {
   count++
   if (count % 2 == 0) {
      MenuArea_Btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
      Menu_Area.style.height = '300px'
      Menu_Area.style.padding = '20px 30px'
   } else {
      Menu_Area.style.height = '0'
      Menu_Area.style.padding = '0px 30px'
      MenuArea_Btn.innerHTML = '<i class="fa-solid fa-bars"></i>'
   }
}

//...............OtherRelatedGames
const OthRel_Games_Data = [
   {
      name: 'Dota 2',
      rating: `<i class="fa-solid fa-star"></i>`,
      genre: 'Sandbox ',
      download: `<i class="fa-solid fa-download"></i>`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-01.jpg'
   },
   {
      name: 'Dota 2',
      rating: `<i class="fa-solid fa-star"></i>`,
      genre: 'Sandbox',
      download: `<i class="fa-solid fa-download"></i>`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-03.jpg'
   },
   {
      name: 'Dota 2',
      rating: `<i class="fa-solid fa-star"></i>`,
      genre: 'Sandbox',
      download: `<i class="fa-solid fa-download"></i>`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-03.jpg'
   },
   {
      name: 'Dota 2',
      rating: `<i class="fa-solid fa-star"></i>`,
      genre: 'Sandbox ',
      download: `<i class="fa-solid fa-download"></i>`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-02.jpg'
   },
   {
      name: 'Dota 2',
      rating: `<i class="fa-solid fa-star"></i>`,
      genre: 'Sandbox',
      download: `<i class="fa-solid fa-download"></i>`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-02.jpg'
   },
   {
      name: 'Dota 2',
      rating: `<i class="fa-solid fa-star"></i>`,
      genre: 'Sandbox',
      download: `<i class="fa-solid fa-download"></i>`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-01.jpg'
   }

]

 const OthRel_Container = document.createElement('div')
 OthRel_Container.classList.add('OthRel_Container')

 const OtherRelatedArea_Box =document.createElement('div')
 OtherRelatedArea_Box.classList.add('OtherReladetArea_Box')



 const OthRel_Theme = document.createElement('div')
 OthRel_Theme.classList.add('OthRel_Theme')
 OthRel_Theme.innerHTML = '<h2>Other Related</h2> <span>Games</span>'
 OthRel_Container.append(OthRel_Theme)
  OthRel_Games_Data.map((game)=>{
  
   const OthRel_Elem = document.createElement('div')
   OthRel_Elem.classList.add('OthRel_Elem')

   const OtherRelated_ImgBox = document.createElement('div')
   const OtherRelated_Img = document.createElement('img')
   OtherRelated_Img.src = game.img
   OtherRelated_ImgBox.append(OtherRelated_Img)

   const OtherRel_Info_Box = document.createElement('div')
   OtherRel_Info_Box.classList.add('OtherRel_Info_Box')

   const OthRelName_Box = document.createElement('div')
   const OtheRel_Name = document.createElement('h3')
   OtheRel_Name.innerHTML = `<span>${game.name}</span> <span>4.8 ${game.rating}</span>`
   OthRelName_Box.append(OtheRel_Name)

   const OthRelGenre_Box = document.createElement('div')
   const OthRel_Genre = document.createElement('h3');
   OthRel_Genre.innerHTML = `<span>${game.genre}</span> <span> 2.3m ${game.download}</span>`
   OthRelGenre_Box.append(OthRel_Genre)


   OthRel_Elem.append(OtherRelated_ImgBox, OtherRel_Info_Box)
   OtherRel_Info_Box.append(OthRelName_Box, OthRelGenre_Box)
   OtherRelatedArea_Box.append(OthRel_Elem)
   OthRel_Container.append(OtherRelatedArea_Box)


})
document.querySelector('main').append(OthRel_Container)