/**@jsx jsx*/
import { jsx } from 'theme-ui'
import Sidebar from '../Components/sidebar/index'
import Appwindow from '../Components/appwindow/index'

export default () => (
  <div
    className="MainContainer"
    sx={{
      width: '100%',
      maxHeight: '100vh',
      display: 'flex',
      overflow: 'hidden'
    }}
  >
    <Sidebar />
    <Appwindow />
  </div>
)
