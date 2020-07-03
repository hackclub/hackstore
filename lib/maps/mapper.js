import homedata from '../Home/index'
import productivitydata from '../Productivity/index'
import musicdata from '../Music/index'
import graphicsdata from '../Graphics/index'
import gamesdata from '../Games/index'
import booksdata from '../Books/index'
import javascriptdata from '../Javascript/index'

export default activetab => {
  switch (activetab) {
    case 'Home':
      return {
        imgsrc: 'icons/homevar.png',
        text: 'home of most awesome  applications',
        data: homedata,
        keyinitial: 'home'
      }
      break
    case 'Productivity':
      return {
        imgsrc: 'icons/productivity.png',
        text: 'applications to boost your productivity',
        data: productivitydata,
        keyinitial: 'productivity'
      }
      break
    case 'Music':
      return {
        imgsrc: 'icons/guitar.png',
        text: 'applications to discover the musician inside you',
        data: musicdata,
        keyinitial: 'music'
      }
      break
    case 'Graphics':
      return {
        imgsrc: 'icons/colorpallete.png',
        text: 'create great grahics with these applications',
        data: graphicsdata,
        keyinitial: 'graphics'
      }
      break
    case 'Games':
      return {
        imgsrc: 'icons/gamingconsole.png',
        text: 'games which makes you happy',
        data: gamesdata,
        keyinitial: 'games'
      }
      break
    case 'Books':
      return {
        imgsrc: 'icons/books.png',
        text: 'books to boost your knowledge',
        data: booksdata,
        keyinitial: 'books'
      }
      break
    case 'Javascript':
      return {
        imgsrc: 'icons/javascript.png',
        text: 'Javascript libraries for making projects',
        data: javascriptdata,
        keyinitial: 'j'
      }
      break
    case 'Workshops':
      return {
        imgsrc: 'icons/workshops.png',
        text: `Hack Club's Workshop for learning and fun`,
        data: javascriptdata,
        keyinitial: 'w'
      }
      break
    default:
      return { imgsrc: 'icons/.png', data: javascriptdata, keyinitial: '' }
      break
  }
}
