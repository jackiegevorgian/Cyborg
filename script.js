//..........Menu.......
const Menu_Area = document.getElementById('Menu')
const MenuArea_Btn = document.getElementById('Menu_Button')

var count = 1;
MenuArea_Btn.onclick = () =>{
   count++
   if (count % 2 == 0) {
      MenuArea_Btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
      Menu_Area.style.height = '300px'
      Menu_Area.style.padding = '20px 30px'
   }else{
      Menu_Area.style.height = '0'
      Menu_Area.style.padding = '0px 30px'
      MenuArea_Btn.innerHTML ='<i class="fa-solid fa-bars"></i>'
   }
}

//...............Banner

const Banner_Box = document.createElement('div');
Banner_Box.setAttribute('class', 'Banner_Box');

const Banner_Info = document.createElement('div');
Banner_Info.setAttribute('class', 'Banner_Info');

const Banner_Wel_Box = document.createElement('div');
const Banner_Wel = document.createElement('h3');
Banner_Wel.innerText = 'Welcome To Cyborg';
Banner_Wel_Box.append(Banner_Wel)

const BannerWelText_Box = document.createElement('div');
const BannerWel_Text = document.createElement('h1');
BannerWel_Text.innerHTML = '<span>BROWSE</span> OUR POPULAR GAMES HERE';
BannerWelText_Box.append(BannerWel_Text)

const BannerBtn_Box = document.createElement('div');
const Banner_Btn = document.createElement('button');
Banner_Btn.innerText = 'Browse Now';
BannerBtn_Box.append(Banner_Btn)
Banner_Info.append(Banner_Wel_Box, BannerWelText_Box, BannerBtn_Box)
Banner_Box.append(Banner_Info,)
//..............................................Most popular...............
const PopularArea_Data = [
   {
      name: 'Fortnite',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Sandbox',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-01.jpg'
   },
   {
      name: 'PubG',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Battle S',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-02.jpg'
   },
   {
      name: 'Dota2',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Steam-X',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg'

   },
   {
      name: 'CS-GO',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Legendary',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-04.jpg'

   },
   {
      name: 'Mini Craft',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Legendary',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-05.jpg'
   },
   {
      name: 'Eagles Fly',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Matrix Games',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-06.jpg'
   },
   {
      name: 'Warface',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Max 3D',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-07.jpg'
   },
   {
      name: 'Warcraft',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Legend',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-08.jpg'
   }
]
const Populars_Area_Container = document.createElement('div');
Populars_Area_Container.classList.add('Populars_Area_Container');

const PopularsArea_Box = document.createElement('div');
PopularsArea_Box.classList.add('Populars_Area_Box');

const Area_Them_Box = document.createElement('div');
Area_Them_Box.classList.add('Area_Them_Box')
Area_Them_Box.innerHTML = '<h2>Most Popular</h2> <span>Right Now</span>';

const Area_Btn_Box = document.createElement('div');
const Area_Btn = document.createElement('button');
Area_Btn.innerText = 'Discover Popular'
Area_Btn_Box.append(Area_Btn)

PopularArea_Data.map((area) => {
   const PopularArea = document.createElement('div');
   PopularArea.classList.add('PopularArea');
   const Area_Img_Box = document.createElement('div');
   Area_Img_Box.classList.add('Area_Img_Box')
   const Area_Img = document.createElement('img');
   Area_Img.src = area.img;
   Area_Img_Box.append(Area_Img)

   const Populars_Area_Info = document.createElement('div')
   Populars_Area_Info.classList.add('Populars_Area_Info')

   const Area_Name_Box = document.createElement('div');
   const Area_Name = document.createElement('h4');
   const reiting = document.createElement('span');
   reiting.innerHTML = area.reiting
   Area_Name.innerText = area.name;
   Area_Name_Box.append(Area_Name, reiting)

   const Area_Genre_Box = document.createElement('div');
   const download = document.createElement('span');
   download.innerHTML = area.download;
   const Area_Genre = document.createElement('h4');
   Area_Genre.innerText = area.genre;
   Area_Genre_Box.append(Area_Genre, download);
   
   PopularArea.append(Area_Img_Box, Populars_Area_Info)
   PopularsArea_Box.append(PopularArea)
   Populars_Area_Info.append(Area_Name_Box, Area_Genre_Box,)
})
Populars_Area_Container.append(Area_Them_Box, PopularsArea_Box, Area_Btn_Box)
//......................................Gaming Library.....

const GamingLibraryArea_Box = [
   {
      name: 'Dota 2',
      genre: 'Sandbo',
      namedate: 'Date Added',
      date: '24/08/2036',
      hourstext: 'Hours Played',
      hours: '634 H 22 Mins',
      curarea: 'Currently',
      down: 'Downloaded',
      btn: 'Downloaded',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-01.jpg'
   },
   {
      name: 'Fortnite',
      genre: 'Sandbo',
      namedate: 'Date Added',
      date: '22/06/2036',
      hourstext: 'Hours Played',
      hours: '740 H 52 Mins',
      curarea: 'Currently',
      down: 'Downloaded',
      btn: 'Download',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-02.jpg'
   },
   {
      name: 'CS-GO',
      genre: 'Sandbo',
      namedate: 'Date Added',
      date: '21/04/2036',
      hourstext: 'Hours Played',
      hours: '892 H 14 Mins',
      curarea: 'Currently',
      down: 'Downloaded',
      btn: 'Downloaded',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-03.jpg'
   }
]

const Library_Container = document.createElement('div');
Library_Container.classList.add('Library_Container')

const LibraryText_Box = document.createElement('div');
LibraryText_Box.classList.add('LibraryText_Box')
LibraryText_Box.innerHTML = '<h2> Your Gaming </h2> <span>Library</span>'

const Library_Box = document.createElement('div');
Library_Box.classList.add('Library_Box');

const Library_Btn_Box = document.createElement('div');
const Library_Btn = document.createElement('button');
Library_Btn.innerText = 'View Your Library'
Library_Btn_Box.append(Library_Btn)
//..........................................................

GamingLibraryArea_Box.map((library) => {
   const Library = document.createElement('div');
   Library.classList.add('Library');
   //...............................
   const LibraryImg_Box = document.createElement('div');
   LibraryImg_Box.classList.add('Library_Img_Box')
   const Library_Img = document.createElement('img');
   Library_Img.src = library.img;
   LibraryImg_Box.append(Library_Img)

   const LibraryArea_Info = document.createElement('div');
   LibraryArea_Info.classList.add('LibraryArea_Info')

   const LibraryName_Box = document.createElement('div');
   const Library_Genre = document.createElement('h5');
   Library_Genre.innerText = library.genre;
   const Library_Name = document.createElement('h4');
   Library_Name.innerText = library.name;
   LibraryName_Box.append(Library_Name, Library_Genre)


   const LibraryDataName_Box = document.createElement('div');
   const Library_Data = document.createElement('h5');
   Library_Data.innerText = library.date;
   const LibraryData_Name = document.createElement('h4');
   LibraryData_Name.innerText = library.namedate;
   LibraryDataName_Box.append(LibraryData_Name, Library_Data)


   const LibHourText_Box = document.createElement('div');
   const Library_Hours = document.createElement('h5');
   Library_Hours.innerText = library.hours;
   const LibHour_Text = document.createElement('h4');
   LibHour_Text.innerText = library.hourstext;
   LibHourText_Box.append(LibHour_Text, Library_Hours)


   const LibraryCuar_Box = document.createElement('div');
   const Lib_Down = document.createElement('h5');
   Lib_Down.innerText = library.down;
   const Library_Cuar = document.createElement('h4');
   Library_Cuar.innerText = library.curarea;
   LibraryCuar_Box.append(Library_Cuar, Lib_Down)


   const LibDownBtn_Box = document.createElement('div');
   const LibDown_Btn = document.createElement('button');
   LibDown_Btn.innerText = library.btn
   LibDownBtn_Box.append(LibDown_Btn)

   LibraryArea_Info.append(LibraryName_Box,LibraryDataName_Box,LibHourText_Box,LibraryCuar_Box,LibDownBtn_Box)
   Library.append(LibraryImg_Box, LibraryArea_Info);
   Library_Box.append(Library)
   Library_Container.append(LibraryText_Box,Library_Box, Library_Btn_Box)

})


document.getElementById('main').append(Banner_Box, Populars_Area_Container, Library_Container)



















