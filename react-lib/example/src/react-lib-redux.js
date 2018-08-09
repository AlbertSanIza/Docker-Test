import { connect } from 'react-redux'
import { Heroes } from 'react-lib'
import actions from './actions'
export default connect(store => store, actions)(Heroes)
