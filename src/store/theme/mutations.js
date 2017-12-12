import * as func from '../function.js'

export default {
    SWITCHTHEME (state , obj) {
        states.theme = obj.theme
        func.theme_local.set(states)
    }
}