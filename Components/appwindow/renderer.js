/**@jsx jsx*/
import { jsx, Grid } from 'theme-ui'
import { AppCard } from './index'

export default ({ data, activetab }) => {
  const keyinitial = activetab

  return (
    <Grid
      columns={[1, 1, 2, 4, 5]}
      sx={{
        justifyContent: 'center',
        justifyItems: 'center',
        rowGap: 5,
        pb: 4,
      }}>
      {data.data.map((ele, index) => (
        <AppCard
          imgsrc={ele.imgsrc}
          appname={ele.appname}
          rating={ele.ratings}
          target={ele.target}
          key={`${keyinitial}${ele.appname}`}
        />
      ))}
    </Grid>
  )
}
