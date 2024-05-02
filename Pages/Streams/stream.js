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
const FeaturedGames_Theme = document.createElement('div');
FeaturedGames_Theme.classList.add('FeauturedGames_Theme')
FeaturedGames_Theme.innerHTML = '<h3>Featured</h3> <span>Games</span>'
document.querySelector('.slider').append(FeaturedGames_Theme)
//.......................Games sl. ..........

document.addEventListener('DOMContentLoaded', function () {
   const FeatGame_Slides = document.querySelector('.slides');

   let curentSlide = 0;
   function showSlide(index) {
      let newTransformValue
      if (window.innerWidth > 1024) {
         newTransformValue = -index * 200 + 'px';
      } else if (window.innerWidth >= 768) {
         newTransformValue = -index * 585 + 'px';
      } else if (window.innerWidth > 552) {
         newTransformValue = -index * 305 + 'px';
      } else {
         newTransformValue = -index * 310 + 'px';
      }
      if (newTransformValue < 0) {
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

//....................Top Streamers.................

const TopStreamers_Data = [
   {
      number: '01',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-01.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'LahutaM'
   },
   {
      number: '02',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-02.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'Kengan'
   },
   {
      number: '03',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-03.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'Areluwa'
   },
   {
      number: '04',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-04.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'Omeg'
   },
   {
      number: '05',
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-01.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'GangTeam'
   }
]

const TopStr_Theme = document.createElement('div');
TopStr_Theme.classList.add('TopStr_Theme')
TopStr_Theme.innerHTML = '<h1>Top</h1> <span>Streamers</span>'

const TopStreamers_Container = document.createElement('div')
TopStreamers_Container.classList.add('TopStreamers_Container')

const TopStreamers_Box = document.createElement('div')
TopStreamers_Box.classList.add('TopStreamers_Box')

TopStreamers_Data.map((streamers) => {
   const TopStr_Elem = document.createElement('div');
   TopStr_Elem.classList.add('TopStr_Elem')

   const TopStr_Info = document.createElement('div');
   TopStr_Info.classList.add('TopStr_Info')
   const Info1 = document.createElement('div');
   const TopStr_Number = document.createElement('span');
   const TopStr_Img = document.createElement('img');
   const TopStr_Icon = document.createElement('span');
   const TopStr_Name = document.createElement('h3');
   TopStr_Img.src = streamers.img;
   TopStr_Number.innerText = streamers.number;
   TopStr_Name.innerHTML = `${streamers.icon} ${streamers.name}`;
   TopStr_Icon.innerText = streamers.number;
   Info1.append(TopStr_Number, TopStr_Img, TopStr_Name)
   TopStr_Info.append(Info1)

   const TopStrButton_Box = document.createElement('div');
   const TopStr_Button = document.createElement('button');
   TopStr_Button.innerText = 'Follow'
   TopStrButton_Box.append(TopStr_Button)

   window.addEventListener('resize', () => {
      if (window.innerWidth <= 1024 && window.innerWidth > 552) {
         TopStrButton_Box.style.display = 'none'
         Info1.append(TopStr_Button)
      } else if (window.innerWidth <= 552) {
         TopStrButton_Box.style.display = 'block'
         TopStrButton_Box.append(TopStr_Button)
         TopStr_Info.append(TopStrButton_Box)
      }
   })

   TopStr_Info.append(TopStrButton_Box)
   TopStr_Elem.append(TopStr_Info)
   TopStreamers_Box.append(TopStr_Elem)
   TopStreamers_Container.append(TopStr_Theme, TopStreamers_Box)
   document.querySelector('.Slider-Downloads').append(TopStreamers_Container)
})
//................. most popular live stream

const MPLiveStream_Data = [
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-05.jpg',
      userimg: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-01.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'Kengan Omeg',
      info: 'Just Talking With Fans',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon: '<i class="fa-solid fa-gamepad"></i>'
   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-06.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      userimg: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-02.jpg',
      name: 'LahutaMalc',
      info: 'CS-GO 36 Hours Live Stream',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon: '<i class="fa-solid fa-gamepad"></i>'
   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-07.jpg',
      userimg: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-03.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'Areluwa',
      info: 'Maybe Nathej Allnight Chillin',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon: '<i class="fa-solid fa-gamepad"></i>'
   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-08.jpg',
      userimg: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-04.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'NewGangTeam',
      info: 'Live Streaming Till Morning',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon: '<i class="fa-solid fa-gamepad"></i>'
   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-07.jpg',
      userimg: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-01.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'LahutaMalc',
      info: 'CS-GO 36 Hours Live Stream',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon: '<i class="fa-solid fa-gamepad"></i>'
   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-08.jpg',
      userimg: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-02.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'Kengan Omeg',
      info: 'Just Talking With Fans',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon: '<i class="fa-solid fa-gamepad"></i>'
   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-05.jpg',
      userimg: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-03.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: 'Areluwa',
      info: 'Maybe Nathej Allnight Chillin',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon: '<i class="fa-solid fa-gamepad"></i>'
   },
   {
      img: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/stream-06.jpg',
      userimg: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-04.jpg',
      icon: `<i class="fa-sharp fa-solid fa-circle-check"></i>`,
      name: ' NewGangTeam',
      info: 'Live Streaming Till Morning',
      hovericoneye: '<i class="fa-solid fa-eye"></i>',
      hovergameicon: '<i class="fa-solid fa-gamepad"></i>'
   }
]

const MostPopularLiveStream_Container = document.createElement('div')
MostPopularLiveStream_Container.classList.add('MostPopularLiveStream_Container')
const MPLiveSt_Theme = document.createElement('div');
MPLiveSt_Theme.classList.add('MPLiveSt_Theme')
MPLiveSt_Theme.innerHTML = '<h3>Most Popular</h3> <span>Live Stream</span>'
const MPLiveSTBtn_Box = document.createElement('div')


const MPLiveST_Btn = document.createElement('button')
MPLiveST_Btn.innerText = 'Load More Stream'
MPLiveSTBtn_Box.append(MPLiveST_Btn)

const MostPopularLiveStream_Box = document.createElement('div')
MostPopularLiveStream_Box.classList.add('MostPopularLiveStream_Box')

MPLiveStream_Data.map((live) => {
   const MPLiveStream_Elem = document.createElement('div')
   MPLiveStream_Elem.classList.add('MPLiveStream_Elem')

   const MPLiveStImg_Box = document.createElement('div');
   MPLiveStImg_Box.classList.add('MPLiveStImg_Box')
   const MPLiveSt_Img = document.createElement('img');
   LiveSImg_HoverBox = document.createElement('div');
   LiveSImg_HoverBox.innerHTML = `<a href='#'>${live.hovericoneye} 12K</a> <a href='#'>${live.hovergameicon} CS-GO</a>`;
   MPLiveSt_Img.src = live.img
   MPLiveStImg_Box.append(MPLiveSt_Img, LiveSImg_HoverBox)

   const MPLiveStreamInfo_Container = document.createElement('div')
   MPLiveStreamInfo_Container.classList.add('MPLiveStreamInfo_Container')

   const MPLiveStreamUser_Img_Box = document.createElement('div')
   const MPLiveStreamUser_Img = document.createElement('img')
   MPLiveStreamUser_Img.src = live.userimg
   MPLiveStreamUser_Img_Box.append(MPLiveStreamUser_Img)

   const MPLiveStreamIcon_Box = document.createElement('div')
   const MPLiveStream_Name = document.createElement('h3')
   const MPLiveStream_Info = document.createElement('h2')
   MPLiveStream_Name.innerHTML = `${live.icon} ${live.name}`
   MPLiveStream_Info.innerText = live.info
   MPLiveStreamIcon_Box.append(MPLiveStream_Name, MPLiveStream_Info)


   MPLiveStreamInfo_Container.append(MPLiveStreamUser_Img_Box, MPLiveStreamIcon_Box)
   MPLiveStream_Elem.append(MPLiveStImg_Box, MPLiveStreamInfo_Container)
   MostPopularLiveStream_Box.append(MPLiveStream_Elem)
   MostPopularLiveStream_Container.append(MPLiveSt_Theme, MostPopularLiveStream_Box, MPLiveSTBtn_Box)
   document.querySelector('main').append(MostPopularLiveStream_Container)
})

