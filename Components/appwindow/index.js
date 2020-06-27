/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'
import { connect } from 'react-redux'
import Renderer from './renderer'

import homedata from '../../lib/Home/index'
import productivitydata from '../../lib/Productivity/index'
import musicdata from '../../lib/Music/index'
import graphicsdata from '../../lib/Graphics/index'
import gamesdata from '../../lib/Games/index'
import booksdata from '../../lib/Books/index'

const AppWindow = ({ activetab }) => (
  <div
    className="appwindow"
    sx={{ flex: 1, bg: 'containercolor', height: '100vh', overflow: 'auto' }}
  >
    <div
      className="appwindowHead"
      sx={{ pt: 4, width: '100%', justifyContent: 'center', display: 'flex' }}
    >
      <img src={mapper(activetab).imgsrc} />
      <h1 sx={{ ml: [2, 4] }}>{activetab}</h1>
    </div>
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
      pb: 2,
      width: '200px',
      bg: 'white',
      boxShadow: `0px 4px 30px rgba(0, 0, 0, 0.25)`,
      ':hover': {
        transform: 'scale(1.1)',
        cursor: 'pointer'
      }
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

export const mapper = activetab => {
  switch (activetab) {
    case 'Home':
      return { imgsrc: 'icons/homevar.png', data: homedata }
      break
    case 'Productivity':
      return { imgsrc: 'icons/productivity.png', data: productivitydata }
      break
    case 'Music':
      return { imgsrc: 'icons/guitar.png', data: musicdata }
      break
    case 'Graphics':
      return { imgsrc: 'icons/colorpallete.png', data: graphicsdata }
      break
    case 'Games':
      return { imgsrc: 'icons/gamingconsole.png', data: gamesdata }
      break
    case 'Books':
      return { imgsrc: 'icons/books.png', data: booksdata }
      break
    default:
      return { imgsrc: 'icons/.png', data: '' }
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
