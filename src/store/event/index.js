import * as func from '../function'
import mutations from './mutations'
import actions from './action'

const state = func.local.get() || {
	event: [],
	count: 0
}

export default {
	state,
	actions,
	mutations
}