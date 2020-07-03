/**@jsx jsx*/
import { jsx, Button } from 'theme-ui'

export default () => (
  <div
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <div
      sx={{
        bg: 'white',
        border: '2px solid',
        width: '300px',
        color: 'primary',
        borderRadius: 15,
        height: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: [null, null, 4],
        mb: [4, 4, 0],
        ':hover': {
          cursor: 'pointer',
          color: 'white',
          bg: 'primary'
        }
      }}
      onClick={() => {
        window.open('https://workshops.hackclub.com/')
      }}
    >
      <h2>{`Launch Workshops >`}</h2>
    </div>
  </div>
)
