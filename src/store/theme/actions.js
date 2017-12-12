import * as types from './mutation_types'

export default {
    switch_theme : ({commit} , param) => commit (types.SWITCHTHEME , {theme: param})
}