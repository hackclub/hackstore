/**@jsx jsx*/
import { jsx, Grid } from 'theme-ui'
import { connect } from 'react-redux'
import { mapper, AppCard } from './index'

const Renderer = ({ activetab }) => (
  <Grid
    columns={[1, 1, 2, 4]}
    sx={{ justifyContent: 'center', justifyItems: 'center', rowGap: 5, pb: 4 }}
  >
    {mapper(activetab).data.map(ele => (
      <AppCard
        imgsrc={ele.imgsrc}
        appname={ele.appname}
        rating={ele.ratings}
        key={ele.key}
      />
    ))}
  </Grid>
)

export default connect(
  state => ({
    activetab: state.activetab
  }),
  null
)(Renderer)
