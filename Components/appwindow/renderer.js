/**@jsx jsx*/
import { jsx, Grid } from 'theme-ui'
import { connect } from 'react-redux'
import { AppCard } from './index'
import mapper from '../../lib/maps/mapper'
const Renderer = ({ activetab }) => {
  const keyinitial = mapper(activetab).keyinitial

  return (
    <Grid
      columns={[1, 1, 2, 4, 5]}
      sx={{
        justifyContent: 'center',
        justifyItems: 'center',
        rowGap: 5,
        pb: 4
      }}
    >
      {mapper(activetab).data.map((ele, index) => (
        <AppCard
          imgsrc={ele.imgsrc}
          appname={ele.appname}
          rating={ele.ratings}
          target={ele.target}
          key={`${keyinitial}${index}`}
        />
      ))}
    </Grid>
  )
}

export default connect(
  state => ({
    activetab: state.activetab
  }),
  null
)(Renderer)
