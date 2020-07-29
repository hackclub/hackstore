import homedata from '../Home/index'
import productivitydata from '../Productivity/index'
import musicdata from '../Music/index'
import graphicsdata from '../Graphics/index'
import gamesdata from '../Games/index'
import booksdata from '../Books/index'
import javascriptdata from '../Javascript/index'
import programmingdata from '../Programming/index'
import videodata from '../Videos/index'
import amadata from '../Ama/index'
import linuxdata from '../Linux/index'
import khanacademydata from '../KhanAcademy/index'

const map = new Map()

map.set('Home', {
  imgsrc: 'icons/homevar.png',
  text: 'home of most awesome  applications',
  data: homedata,
  keyinitial: 'home'
})

map.set('Productivity', {
  imgsrc: 'icons/productivity.png',
  text: 'applications to boost your productivity',
  data: productivitydata,
  keyinitial: 'productivity'
})

map.set('Music', {
  imgsrc: 'icons/guitar.png',
  text: 'applications to discover the musician inside you',
  data: musicdata,
  keyinitial: 'music'
})

map.set('Graphics', {
  imgsrc: 'icons/colorpallete.png',
  text: 'create great grahics with these applications',
  data: graphicsdata,
  keyinitial: 'graphics'
})

map.set('Games', {
  imgsrc: 'icons/gamingconsole.png',
  text: 'games which makes you happy',
  data: gamesdata,
  keyinitial: 'games'
})

map.set('Books', {
  imgsrc: 'icons/books.png',
  text: 'books to boost your knowledge',
  data: booksdata,
  keyinitial: 'books'
})

map.set('Workshops', {
  imgsrc: 'icons/workshops.png',
  text: `Hack Club's Workshop for learning and fun`,
  data: javascriptdata,
  keyinitial: 'workshops'
})

map.set('Programming', {
  imgsrc: 'icons/programming.png',
  text: `softwares for your programmer journey`,
  data: programmingdata,
  keyinitial: 'programming'
})

map.set('AMA', {
  imgsrc: 'icons/hacklogorounded.png',
  text: `Hack Club's AMA for learning and fun`,
  data: amadata,
  keyinitial: 'ama'
})

map.set('Linux', {
  imgsrc: 'icons/linux.png',
  text: `Some awesome linux distros for you`,
  data: linuxdata,
  keyinitial: 'linux'
})

map.set('Javascript', {
  imgsrc: 'icons/javascript.png',
  text: 'Javascript libraries for making projects',
  data: javascriptdata,
  keyinitial: 'javascript'
})

map.set('Videos', {
  imgsrc: 'icons/videos.png',
  text: `Video tutorials to upskill yourselves`,
  data: videodata,
  keyinitial: 'video'
})

map.set('Khan Academy', {
  imgsrc: 'icons/khanacademy.png',
  text: `Awesome khan academy videos just for you`,
  data: khanacademydata,
  keyinitial: 'khanacademy'
})

export default map
