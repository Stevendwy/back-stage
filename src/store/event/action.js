export default {
	addEvent: ({commit}, param) => commit('ADDEVENT',{item:param}),
	eventDone: ({commit}, param) => {
		commit('EVENTDONE', {id:param})
	},

	eventTodo: ({commit}, param) => {
		commit('EVENTODO', {id:param})
	},

	eventCancel: ({commit}, param) => {
		commit('EVENTCANCEL', {id:param})
	},

	clearEvent: ({commit}, param) => {
		commit('CLEAREVENT')
	},

	delEvent: ({commit},param) => {
		commit('DELEVENT', param)
	},

	editEvent: ({commit}, param) => {
		commit('EDITEVENT',param)
	},

	uploadEvent: () => {
		commit('UPLOADEVENT',param)
	}
}