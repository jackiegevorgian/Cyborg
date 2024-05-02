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
//................Your Most Popular clips....
const YMostPopularClips_Data = [
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/clip-01.jpg',
      name: 'First Clip',
      icon: '<i class="fa-solid fa-play"></i>',
      icon2: '<i class="fa-solid fa-eye"></i>',
      iconnum: '250'
   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/clip-02.jpg',
      name: 'Second Clip',
      icon: '<i class="fa-solid fa-play"></i>',
      icon2: '<i class="fa-solid fa-eye"></i>',
      iconnum: '183'
   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/clip-03.jpg',
      name: 'Third Clip',
      icon: '<i class="fa-solid fa-play"></i>',
      icon2: '<i class="fa-solid fa-eye"></i>',
      iconnum: '141'
   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/clip-04.jpg',
      name: 'Fourth Clip',
      icon: '<i class="fa-solid fa-play"></i>',
      icon2: '<i class="fa-solid fa-eye"></i>',
      iconnum: '91'

   }
]
const MostPopularClips_Container = document.createElement('div')
MostPopularClips_Container.classList.add('MostPopularClips_Container')

const MostPC_Theme = document.createElement('div')
MostPC_Theme.classList.add('MostPC_Theme')
MostPC_Theme.innerHTML = '<h2> Your Most Popular</h2> <span>Clips</span>'


const MostPopularClips_Box = document.createElement('div')
MostPopularClips_Box.classList.add('MostPopularClips_Box')

const MostPopularClipsBtn_Box = document.createElement('div')
const MostPopularClips_Btn = document.createElement('button')
MostPopularClips_Btn.innerText = 'Load More Clips'
MostPopularClipsBtn_Box.append(MostPopularClips_Btn)

YMostPopularClips_Data.map((popular) => {
   const YMostPopularClips_Elem = document.createElement('div')
   YMostPopularClips_Elem.classList.add('YMostPopularClips_Elem')

   const YMostPopClipsImg_Box = document.createElement('div')
   YMostPopClipsImg_Box.classList.add('YMPopularClipsImg_Box')
   const YMostPopClips_Img = document.createElement('img')
   const MostPopularClips_Icon = document.createElement('a')
   MostPopularClips_Icon.href = 'https://www.youtube.com/watch?v=r1b03uKWk_M'
   YMostPopClips_Img.src = popular.img
   MostPopularClips_Icon.innerHTML = `${popular.icon}`
   YMostPopClipsImg_Box.append(YMostPopClips_Img, MostPopularClips_Icon)

   const MostPopularClips_Info = document.createElement('div')
   MostPopularClips_Info.classList.add('MostPopularClips_Info')
   const MostPopularClips_Name = document.createElement('h3')
   const MostPopularClipsEye_Icon = document.createElement('span')
   MostPopularClips_Name.innerText = popular.name
   MostPopularClipsEye_Icon.innerHTML = `<span> ${popular.icon2} ${popular.iconnum}</span>`
   MostPopularClips_Info.append(MostPopularClips_Name, MostPopularClipsEye_Icon)

   YMostPopularClips_Elem.append(YMostPopClipsImg_Box, MostPopularClips_Info)
   MostPopularClips_Box.append(YMostPopularClips_Elem)
   MostPopularClips_Container.append(MostPC_Theme, MostPopularClips_Box, MostPopularClipsBtn_Box)
   document.querySelector('main').append(MostPopularClips_Container )

})

//......Gameing Lib....
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
      btn: 'Downloaded',
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
   Library_Container.append(LibraryText_Box,Library_Box,)
   document.querySelector('main').append(Library_Container )

})

