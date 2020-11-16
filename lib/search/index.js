import mapper from '../maps/mapper'
import { carddata } from '../../Components/sidebar/index'
import * as _ from 'ramda'

const data = _.reduce((acc, ele) => {
  const data = mapper(ele.section)
  return _.concat(data.data, acc)
}, [])(carddata)

const filtereddata = _.uniq(data)

export default (value, setdata, activetab) => {
  const isEmpty = _.isEmpty(value)

  const data = isEmpty
    ? mapper(activetab).data
    : _.filter((ele) => _.includes(_.toLower(value), _.toLower(ele.appname)))(
        filtereddata
      )

  setdata({ data })

  //console.log('searched data is', data)
}
