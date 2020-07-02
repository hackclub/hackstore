import homedata from '../Home/index'
import productivitydata from '../Productivity/index'
import musicdata from '../Music/index'
import graphicsdata from '../Graphics/index'
import gamesdata from '../Games/index'
import booksdata from '../Books/index'
import javascriptdata from '../Javascript/index'

export const mapper = activetab => {
  switch (activetab) {
    case 'Home':
      return {
        imgsrc: 'icons/homevar.png',
        text: 'home of most awesome  applications',
        data: homedata,
        keyinitial: 'h'
      }
      break
    case 'Productivity':
      return {
        imgsrc: 'icons/productivity.png',
        text: 'applications to boost your productivity',
        data: productivitydata,
        keyinitial: 'p'
      }
      break
    case 'Music':
      return {
        imgsrc: 'icons/guitar.png',
        text: 'applications to discover the musician inside you',
        data: musicdata,
        keyinitial: ''
      }
      break
    case 'Graphics':
      return {
        imgsrc: 'icons/colorpallete.png',
        text: 'create great grahics with these applications',
        data: graphicsdata,
        keyinitial: ''
      }
      break
    case 'Games':
      return {
        imgsrc: 'icons/gamingconsole.png',
        text: 'games which makes you happy',
        data: gamesdata,
        keyinitial: ''
      }
      break
    case 'Books':
      return {
        imgsrc: 'icons/books.png',
        text: 'books to boost your knowledge',
        data: booksdata,
        keyinitial: ''
      }
      break
    case 'Javascript':
      return {
        imgsrc: 'icons/javascript.png',
        text: 'Javascript libraries for making projects',
        data: javascriptdata,
        keyinitial: ''
      }
      break
    default:
      return { imgsrc: 'icons/.png', data: javascriptdata, keyinitial: '' }
      break
  }
}
