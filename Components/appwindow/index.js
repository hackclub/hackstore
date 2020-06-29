/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'
import { connect } from 'react-redux'
import Renderer from './renderer'

import homedata from '../../lib/Home/index'
import store from '../../State/store/index'
import { activetabchanged } from '../../State/actions/index'

import productivitydata from '../../lib/Productivity/index'
import musicdata from '../../lib/Music/index'
import graphicsdata from '../../lib/Graphics/index'
import gamesdata from '../../lib/Games/index'
import booksdata from '../../lib/Books/index'
import javascriptdata from '../../lib/Javascript/index'

import { carddata } from '../sidebar/index'
import card from '../sidebar/card'

const AppWindow = ({ activetab }) => (
  <div
    className="appwindow"
    sx={{ flex: 1, bg: 'containercolor', height: '100vh', overflow: 'auto' }}
  >
    <div
      className="appwindowHead"
      sx={{
        pt: 4,
        width: '100%',
        justifyContent: 'center',
        // display: 'flex',
        background: `linear-gradient(107.91deg, #EC3750 0.04%, #AE0018 97.9%)`,
        color: 'background',
        pb: 5,
        alignItems: 'center'
      }}
    >
      {/**Ele */}
      <div sx={{ color: 'white', width: '100%' }}>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <img
            sx={{ width: ['100px', '120px'], justifySelf: 'end' }}
            src={mapper(activetab).imgsrc}
          />
          <h1 sx={{ ml: [2, 4], fontSize: [5, 6] }}>{activetab}</h1>
        </div>
        <div sx={{ width: '100%', textAlign: 'center' }}>
          <h1 sx={{ mt: 0 }}>{mapper(activetab).text}</h1>
        </div>
      </div>
    </div>

    <Grid
      columns={[carddata.length]}
      className="mobileSelector"
      sx={{
        overflow: 'auto',
        scrollbarWidth: 'none',
        pt: 5,
        display: [null, 'none']
      }}
    >
      {carddata.map(ele => (
        <img
          sx={{ width: '100px' }}
          key={ele.imgsrc}
          src={ele.imgsrc}
          onClick={() => store.dispatch(activetabchanged(ele.section))}
        />
      ))}
    </Grid>
    <br sx={{ display: [null, 'none'] }} />
    <div sx={{ pt: [5] }}>
      <Renderer />
    </div>
  </div>
)

export const AppCard = ({ imgsrc, appname, rating }) => (
  <div
    sx={{
      //       border: '1px solid',
      pt: 4,
      pb: [4, 2],
      width: ['300px', '200px'],
      bg: 'white',
      borderRadius: 10,
      boxShadow: `0px 4px 30px rgba(0, 0, 0, 0.25)`,
      ':hover': {
        transform: 'scale(1.1)',
        cursor: 'pointer'
      }
    }}
    onClick={() => {
      window.open(`./app/${appname.split(' ')[0]}`, '_blank')
    }}
  >
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <img sx={{ width: '80px' }} src={imgsrc} />
    </div>
    <h2
      sx={{
        m: 0,
        mx: 'auto',
        width: '80%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
        textAlign: 'center',
        color: ''
      }}
    >
      {appname}
    </h2>
    <div sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
      {looparray.map(ele =>
        ele <= rating ? (
          <img sx={{ width: '20px' }} src="starfilled.png" />
        ) : (
          <img sx={{ width: '20px' }} src="starblank.png" />
        )
      )}
    </div>
  </div>
)

export default connect(
  state => ({
    activetab: state.activetab
  }),
  null
)(AppWindow)

//used for star rating system
const looparray = [1, 2, 3, 4, 5]

//the function which is mapping elements

export const mapper = activetab => {
  switch (activetab) {
    case 'Home':
      return {
        imgsrc: 'icons/homevar.png',
        text: 'home of most awesome  applications',
        data: homedata
      }
      break
    case 'Productivity':
      return {
        imgsrc: 'icons/productivity.png',
        text: 'applications to boost your productivity',
        data: productivitydata
      }
      break
    case 'Music':
      return {
        imgsrc: 'icons/guitar.png',
        text: 'applications to discover the musician inside you',
        data: musicdata
      }
      break
    case 'Graphics':
      return {
        imgsrc: 'icons/colorpallete.png',
        text: 'create great grahics with these applications',
        data: graphicsdata
      }
      break
    case 'Games':
      return {
        imgsrc: 'icons/gamingconsole.png',
        text: 'games which makes you happy',
        data: gamesdata
      }
      break
    case 'Books':
      return {
        imgsrc: 'icons/books.png',
        text: 'books to boost your knowledge',
        data: booksdata
      }
      break
    case 'Javascript':
      return {
        imgsrc: 'icons/javascript.png',
        text: 'Javascript libraries for making projects',
        data: javascriptdata
      }
      break
    default:
      return { imgsrc: 'icons/.png', data: javascriptdata }
      break
  }
}

/*
*
export default connect(
  state => ({
    displayGateEditor: state.displayGateEditor,
    code: state.code,
    activetab: state.activetab
  }),
  {
    ActionCodeUpdate,
    ActionUrlUpdate
  }
)(AppWindow)
 */
