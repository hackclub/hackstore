/**@jsx jsx*/
import { jsx, Input, Flex, Box } from 'theme-ui'
import Icon from '@hackclub/icons'
export default ({ onChange }) => (
  <Flex
    sx={{
      width: [300],
      borderRadius: [5],
      bg: 'white',
      border: '1px solid grey',
    }}>
    <input
      placeholder='search hackstore'
      className='search'
      onChange={() => {
        onChange(
          document ? document.getElementsByClassName('search')[0].value : null
        )
      }}
      sx={{
        display: 'inline-block',
        width: [300],
        border: 'none',
        pl: 4,
        py: 3,
        borderRadius: [5],
      }}
    />
    <Icon
      size={[50]}
      sx={{ position: 'relative', right: [2], fill: 'black' }}
      glyph='search'
    />
  </Flex>
)
