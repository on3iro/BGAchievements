'use strict'

import 'normalize.css'
import '../sass/main.scss'

const Elm = require('../../Main.elm')
const mountNode = document.getElementById('main')

// .embed() can take an optional second argument.
// This could e.g. be an object handing inital data to the elm app
Elm.Main.embed(mountNode)
