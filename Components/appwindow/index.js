/**@jsx jsx*/

import { jsx, Grid, Box, Flex } from 'theme-ui'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Renderer from './renderer'
import Workshops from './workshops'

import store from '../../State/store/index'
import { activetabchanged } from '../../State/actions/index'

import search from '../../lib/search/index'

import { carddata } from '../sidebar/index'

import mapper from '../../lib/maps/mapper'

import SearchBar from './searchbar'

const AppWindow = ({ activetab }) => {
  const [data, setdata] = useState(mapper(activetab))

  useEffect(() => {
    setdata(mapper(activetab))
    return () => null
  }, [activetab])

  return (
    <div
      className='appwindow'
      sx={{
        flex: 1,
        bg: 'containercolor',
        height: '100vh',
        overflow: 'auto',
        display: activetab === 'Workshops' ? 'flex' : '',
        flexDirection: activetab === 'Workshops' ? 'column' : '',
      }}>
      <div
        className='appwindowHead'
        sx={{
          pt: 4,
          width: '100%',
          justifyContent: 'center',
          background: `linear-gradient(107.91deg, #EC3750 0.04%, #AE0018 97.9%)`,
          color: 'background',
          pb: 5,
          alignItems: 'center',
        }}>
        <Flex
          sx={{
            position: 'absolute',
            zIndex: 3,
            right: [2, 3, 4, 5],
            top: [2, 3],
          }}>
          <SearchBar
            onChange={(newValue) => search(newValue, setdata, activetab)}
          />
        </Flex>
        <div sx={{ color: 'white', width: '100%' }}>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
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
        className='mobileSelector'
        sx={{
          overflow: 'scroll',
          pt: 5,
          display: [null, 'none'],
        }}>
        {carddata.map((ele) => (
          <img
            sx={{ width: '100px' }}
            key={ele.imgsrc}
            src={ele.imgsrc}
            onClick={() => store.dispatch(activetabchanged(ele.section))}
          />
        ))}
      </Grid>
      <br sx={{ display: [null, 'none'] }} />
      <div
        sx={{
          pt: activetab === 'Workshops' ? [0] : [5],
          flex: activetab === 'Workshops' ? 1 : '',
        }}>
        {activetab === 'Workshops' ? (
          <Workshops />
        ) : (
          <Renderer data={data} activetab={activetab} />
        )}
      </div>
    </div>
  )
}

export const AppCard = ({ imgsrc, appname, rating, target }) => (
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
        cursor: 'pointer',
      },
    }}
    onClick={() => {
      console.log(target)
      window.open(
        target
          ? `./app/${target}`
          : `./app/${appname == 'C++' ? 'Cplus' : appname.split(' ')[0]}`,
        '_blank'
      )
    }}
    /**Note: Name of C++ had some issues hence used the above mapping of Cplus */
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
        color: '',
      }}>
      {appname}
    </h2>
    <div sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
      {looparray.map((ele) =>
        ele <= rating ? (
          <img sx={{ width: '20px' }} src='starfilled.png' />
        ) : (
          <img sx={{ width: '20px' }} src='starblank.png' />
        )
      )}
    </div>
  </div>
)

export default connect(
  (state) => ({
    activetab: state.activetab,
  }),
  null
)(AppWindow)

//used for star rating system
const looparray = [1, 2, 3, 4, 5]
