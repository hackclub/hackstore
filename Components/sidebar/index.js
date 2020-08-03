/**@jsx jsx*/

import { jsx } from 'theme-ui'
import Card from './card'

export default ({ imgsrc, section }) => (
  <div
    className='sidebar'
    sx={{
      bg: 'sidebarcolor',
      width: ['40vw', '40vw', '30vw', '20vw'],
      overflow: 'auto',
      overflowX: 'hidden',
      display: ['none', 'flex'],
      flexDirection: 'column',
      alignItems: 'center',
      //  scrollbarWidth: '2'
    }}>
    <img sx={{ width: '80px', mt: 4 }} src='asset3.png' />{' '}
    <h1
      sx={{
        //     borderBottom: '1px solid',
        //    borderColor: 'muted',
        width: '80%',
        textAlign: 'center',
        mt: 2,
      }}>
      <span sx={{ color: 'red' }}>Hack</span> Store
    </h1>
    {carddata.map((ele) => (
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
  { imgsrc: 'icons/linux.png', section: 'Linux' },
  { imgsrc: 'icons/gamingconsole.png', section: 'Games' },
  { imgsrc: 'icons/hacklogorounded.png', section: 'AMA' },
  { imgsrc: 'icons/books.png', section: 'Books' },
  { imgsrc: 'icons/videos.png', section: 'Videos' },
  { imgsrc: 'icons/javascript.png', section: 'Javascript' },
  { imgsrc: 'icons/khanacademy.png', section: 'Khan Academy' },
  { imgsrc: 'icons/workshops.png', section: 'Workshops' },
]
