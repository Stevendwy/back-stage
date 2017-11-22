import * as func from '../function'
import mutations from './mutations'
import actions from './action'

const state = func.theme_local.get() || {
	theme: 'blue'
}

export default {
	state,
	actions,
	mutations
}