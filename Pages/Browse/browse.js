//.........menu..........
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
//..................Featured games..........
const FeaturedGames_Theme = document.createElement('div');
FeaturedGames_Theme.classList.add('FeauturedGames_Theme')
FeaturedGames_Theme.innerHTML = '<h3>Featured</h3> <span>Games</span>'
document.querySelector('.slider').append(FeaturedGames_Theme)
//.......................Games sl. ..........

document.addEventListener('DOMContentLoaded', function () {
   const FeatGame_Slides = document.querySelector('.slides');

   let curentSlide = 0;
   function showSlide(index) {
      let newTransformValue = -index * 45 + '%';
      if(newTransformValue =='-225%') {
         newTransformValue = '0%';
      }
      FeatGame_Slides.style.transform = 'translateX(' + newTransformValue + ')';
   }

   function nextSlide() {
      curentSlide = (curentSlide + 1) % document.querySelectorAll('.Feauture_Ggame').length;
      showSlide(curentSlide)
   }

   setInterval(() => {
      nextSlide()
   }, 3000);

   FeaturedGames_Data.map((game) => {

      const FeaturedGame_Box = document.createElement('div')
      FeaturedGame_Box.classList.add('FeaturedGame_Box')

      const Feature_Game = document.createElement('div');
      Feature_Game.classList.add('Feauture_Ggame')


      const FGamesImg_Box = document.createElement('div');
      FGamesImg_Box.classList.add('FGamesImg_Box')
      const FGames_Img = document.createElement('img');
      FGames_Img.src = game.img;
      FGamesImg_Box.append(FGames_Img)


      const FGames_Info = document.createElement('div');
      FGames_Info.classList.add('FGames_Info')

      const FGNames_Box = document.createElement('div');
      const FG_Names = document.createElement('h3');
      const FG_Rating = document.createElement('span');
      FG_Rating.innerHTML = game.rating
      FG_Names.innerText = game.name;
      FGNames_Box.append(FG_Names, FG_Rating)

      const FGGenre_Box = document.createElement('div');
      const FG_Genre = document.createElement('h3');
      const FG_Down = document.createElement('span');
      FG_Down.innerHTML = game.download
      FG_Genre.innerText = game.genre
      FGGenre_Box.append(FG_Genre, FG_Down)

      Feature_Game.append(FGamesImg_Box, FGames_Info)
      FGames_Info.append(FGNames_Box, FGGenre_Box,)
      FeatGame_Slides.append(Feature_Game)
   })
})

const FeaturedGames_Data = [
   {
      name: 'CS-GO',
      rating: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: '249K Downloads ',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/featured-01.jpg'
   },
   {
      name: 'Gamezer',
      rating: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: '249K Downloads',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/featured-02.jpg'
   },
   {
      name: 'Island Rusty',
      rating: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: '249K Downloads',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/featured-03.jpg'
   },
   {
      name: 'CS-GO',
      rating: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: '249K Downloads ',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/featured-01.jpg'
   },
   {
      name: 'Gamezer',
      rating: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: '249K Downloads',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/featured-02.jpg'
   },
   {
      name: 'Island Rusty',
      rating: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: '249K Downloads',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/featured-03.jpg'
   }

]
//.........................................
const TopDownloaded_AreaContainer = document.createElement('div');
TopDownloaded_AreaContainer.classList.add('TopDownloaded_AreaContainer')
document.querySelector('.Slider-Downloads').append(TopDownloaded_AreaContainer)

const TopDownloaded_Theme = document.createElement('div');
TopDownloaded_Theme.classList.add('TopDownloaded_Theme')
TopDownloaded_Theme.innerHTML = '<h3>Top</h3> <span>Downloaded</span>'
TopDownloaded_AreaContainer.append(TopDownloaded_Theme)

const TopDownloaded_AreaBtn = document.createElement('div')
const TopDownloaded_Btn = document.createElement('button')
TopDownloaded_Btn.innerText = 'View All Game';
TopDownloaded_AreaBtn.append(TopDownloaded_Btn)

const TopDownloaded_Area = [
   {
      name: 'Fortnite',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Sandbox',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-01.jpg',
      down: `<i class="fa-solid fa-download"></i>`
   },
   {
      name: 'CS-GO',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Legendary',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-02.jpg',
      down: `<i class="fa-solid fa-download"></i>`

   },
   {
      name: 'PubG',
      reiting: `<i class="fa-solid fa-star"></i> 4.8`,
      genre: 'Battle S',
      download: `<i class="fa-solid fa-download"></i> 2.3m`,
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-03.jpg',
      down: `<i class="fa-solid fa-download"></i>`
   }
]

TopDownloaded_Area.map((top) => {

   const TopDownloaded_AreaBox = document.createElement('div')
   TopDownloaded_AreaBox.classList.add('TopDownloaded_AreaBox')

   const TopDownloaded_Elem = document.createElement('div');
   TopDownloaded_Elem.classList.add('TopDownloaded_Elem')

   const TopDownloadedImg_Box = document.createElement('div');
   TopDownloadedImg_Box.classList.add('TopDownloadedImg_Box');
   const TopDownloaded_Img = document.createElement('img');
   TopDownloaded_Img.src = top.img;
   TopDownloadedImg_Box.append(TopDownloaded_Img)

   const TopDownloaded_Info = document.createElement('div');
   TopDownloaded_Info.classList.add('TopDownloaded_Info')

   const TopDownloaded_Name_Box = document.createElement('div');
   const TopDownloaded_Name = document.createElement('h3');
   const TopDownloaded_Genre = document.createElement('h3');
   TopDownloaded_Genre.innerText = top.genre;
   TopDownloaded_Name.innerText = top.name
   TopDownloaded_Name_Box.append(TopDownloaded_Name, TopDownloaded_Genre)

   const TopDownloaded_RaitingBox = document.createElement('div');
   const TopDownloaded_AreaDownloaded = document.createElement('span');
   const TopDownloaded_Down = document.createElement('a');
   const TopDownloaded_Reit = document.createElement('span');
   TopDownloaded_Reit.innerHTML = top.reiting
   TopDownloaded_AreaDownloaded.innerHTML = top.download;
   TopDownloaded_Down.innerHTML = top.down;
   TopDownloaded_RaitingBox.append(TopDownloaded_Reit, TopDownloaded_AreaDownloaded, TopDownloaded_Down)


   TopDownloaded_Elem.append(TopDownloadedImg_Box, TopDownloaded_Info)
   TopDownloaded_Info.append(TopDownloaded_Name_Box, TopDownloaded_RaitingBox)
   TopDownloaded_AreaContainer.append(TopDownloaded_Elem, TopDownloaded_AreaBtn)
})
//............................
const StartLiveStream_Container = document.createElement('div');
StartLiveStream_Container.classList.add('StartLiveStream_Container')

const SLS_Theme = document.createElement('div');
SLS_Theme.classList.add('SLS_Theme')
SLS_Theme.innerHTML = '<h3>How To Start Your</h3> <span>Live Stream</span>'
StartLiveStream_Container.append(SLS_Theme)

const SLSBtn_Box = document.createElement('div')
const SLS_Btn = document.createElement('button')
SLS_Btn.innerText = 'Go To Profile'
SLSBtn_Box.append(SLS_Btn)

const StartLiveStream = [
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/service-01.jpg',
      name: 'Go To Your Profile',
      text: 'Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.'

   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/service-02.jpg',
      name: 'Live Stream Button',
      text: `If you wish to support us, you can make a <a href = '#'>small contribution via PayPal </a> to info [at] templatemo.com`


   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/service-03.jpg',
      name: 'You Are Live',
      text: 'You are not allowed to redistribute this templates downloadable ZIP file on any other template collection website.'

   }
]

const StartLiveStream_Box = document.createElement('div')
StartLiveStream_Box.classList.add('StarLiveStream_Box');
StartLiveStream.map((start) => {

   const StartLiveStream = document.createElement('div');
   StartLiveStream.classList.add('StartLiveStream');

   const SlSImg_Box = document.createElement('div');
   SlSImg_Box.classList.add('SLSImg_Box')
   const SLS_Img = document.createElement('img');
   SLS_Img.src = start.img;
   SlSImg_Box.append(SLS_Img)

   
  const SLSInfo_Box = document.createElement('div');
   SLSInfo_Box.classList.add('SLSInfo_Box')

   const SLSName_Box = document.createElement('div');
   const SLS_Name = document.createElement('h3');
   SLS_Name.innerText = start.name
   SLSName_Box.append(SLS_Name)

   const SLSText_Box = document.createElement('div');
   const SLS_Text = document.createElement('h4');
   SLS_Text.innerHTML = start.text
   SLSText_Box.append(SLS_Text)

   StartLiveStream.append(SlSImg_Box, SLSInfo_Box)
   SLSInfo_Box.append(SLSName_Box, SLSText_Box)
   StartLiveStream_Box.append(StartLiveStream)
   StartLiveStream_Container.append(StartLiveStream_Box, SLSBtn_Box)
   document.querySelector('main').append(StartLiveStream_Container)
})

//.......Most Popular Live Stream

const LiveStream_Container = document.createElement('div');
LiveStream_Container.classList.add('LiveStream_Container')

const LiveS_Theme = document.createElement('div');
LiveS_Theme.classList.add('LiveS_Theme')
LiveS_Theme.innerHTML = '<h2>Most Popular</h2> <span>Live Stream</span>'
LiveStream_Container.append(LiveS_Theme)


const LiveS_BtnBox = document.createElement('div')
const LiveS_Btn = document.createElement('button')
LiveS_Btn.innerText = 'Discover All Streams'
LiveS_BtnBox.append(LiveS_Btn)

const LiveStream_Box = document.createElement('div')
LiveStream_Box.classList.add('LiveStream_Box')

const LiveStream_Data = [
   {
      icon: '<i class="fa-solid fa-check"></i>',
      userimg: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-01.jpg',
      name: 'KenganC',
      genre: 'Just Talking With Fans',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-01.jpg',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon:'<i class="fa-solid fa-gamepad"></i>'
   },
   {
      icon: '<i class="fa-solid fa-check"></i>',
      userimg:'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-02.jpg',
      name: 'LunaMa',
      genre: 'CS-GO 36 Hours Live Stream',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-02.jpg',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon:'<i class="fa-solid fa-gamepad"></i>'
   },
   {
      icon: '<i class="fa-solid fa-check"></i>',
      userimg:'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-03.jpg',
      name: 'Areluwa',
      genre: 'Maybe Nathej Allnight Chillin',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-03.jpg',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon:'<i class="fa-solid fa-gamepad"></i>'
   },
   {
      icon: '<i class="fa-solid fa-check"></i>',
      userimg: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-04.jpg',
      name: 'GangTm',
      genre: ' Live Streaming Till Morning',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-04.jpg',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon:'<i class="fa-solid fa-gamepad"></i>'
   }

]
LiveStream_Data.map((stream) => {
   LiveStream_Elem = document.createElement('div');
   LiveStream_Elem.classList.add('LiveStream_Elem')

   LiveSImg_Box = document.createElement('div');
   LiveSImg_Box.classList.add('LiveSImg_Box')
   LiveSImg_HoverBox = document.createElement('div');
   LiveSImg_HoverBox.innerHTML = `<a href='#'>${stream.hovericoneye} 12K</a> <a href='#'>${stream.hovergameicon} CS-GO</a>`;
   LiveS_Img = document.createElement('img');
   LiveS_Img.src = stream.img
   LiveSImg_Box.append(LiveS_Img,LiveSImg_HoverBox)

   LiveSInfo_Box = document.createElement('div');
   LiveSInfo_Box.classList.add('LiveSInfo_Box')

   LiveSName_Box = document.createElement('div');
   LiveS_Name = document.createElement('h3')
   LiveS_Icon = document.createElement('span')
   LiveS_UserImg = document.createElement('img')
   LiveS_UserImg.src = stream.userimg;
   LiveS_Name.innerText = stream.name;
   LiveS_Icon.innerHTML = stream.icon;
   LiveSName_Box.append( LiveS_UserImg,LiveS_Icon, LiveS_Name)

   LiveSGenre_Box = document.createElement('div');
   LiveS_Genre = document.createElement('h2');
   LiveS_Genre.innerText = stream.genre;
   LiveSGenre_Box.append(LiveS_Genre)

   LiveStream_Elem.append(LiveSImg_Box, LiveSInfo_Box)
   LiveSInfo_Box.append(LiveSName_Box, LiveSGenre_Box)
   LiveStream_Container.append(LiveStream_Box,LiveS_BtnBox)
   LiveStream_Box.append(LiveStream_Elem)
   document.querySelector('main').append(LiveStream_Container)
})
