/**@jsx jsx*/

import { jsx } from 'theme-ui'
import Card from './card'

export default ({ imgsrc, section }) => (
  <div
    className="sidebar"
    sx={{
      bg: 'sidebarcolor',
      width: ['40vw', '40vw', '30vw', '20vw'],
      overflow: 'auto',
      overflowX: 'hidden',
      display: ['none', 'flex'],
      flexDirection: 'column',
      alignItems: 'center',
      scrollbarWidth: 'none'
    }}
  >
    <img sx={{ width: '80px', mt: 4 }} src="hackclublogo.svg" />{' '}
    <h1
      sx={{
        //     borderBottom: '1px solid',
        //    borderColor: 'muted',
        width: '80%',
        textAlign: 'center'
      }}
    >
      <span sx={{ color: 'red' }}>Hack</span> Store
    </h1>
    {carddata.map(ele => (
      <Card key={ele.imgsrc} imgsrc={ele.imgsrc} section={ele.section} />
    ))}
  </div>
)

export const carddata = [
  { imgsrc: 'icons/homevar.png', section: 'Home' },
  { imgsrc: 'icons/productivity.png', section: 'Productivity' },
  { imgsrc: 'icons/guitar.png', section: 'Music' },
  { imgsrc: 'icons/programming.png', section: 'Programming' },
  { imgsrc: 'icons/colorpallete.png', section: 'Graphics' },
  { imgsrc: 'icons/gamingconsole.png', section: 'Games' },
  { imgsrc: 'icons/books.png', section: 'Books' },
  { imgsrc: 'icons/javascript.png', section: 'Javascript' },
  { imgsrc: 'icons/workshops.png', section: 'Workshops' }
]
