import {connect} from 'react-redux'
import RootLayout from 'layouts/Root'
import {setNotifier} from 'actions/notifier'

const mapState = state => ({

})

const mapDispatch = dispatch => ({
	mountNotify: ref => dispatch(setNotifier(ref)),
})

export default connect(mapState, mapDispatch)(RootLayout)
