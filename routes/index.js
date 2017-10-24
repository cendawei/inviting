const fs = require('fs')
const path = require('path')
const {common} = require('../configs')

let routers = {}
fs.readdirSync(__dirname).forEach(file => {
    if(!/^index\.js/.test(file)) {
        routers[path.basename(file, '.js')] = require(path.resolve(__dirname, file))
    }
})

module.exports = function (app) {
    for(let a in routers) {
        app.use(`${common.routePrefix}/${a}`, routers[a])
    }
    app.use(`${common.routePrefix}/(:project|:project/index(.html)?)`, (req, res) => {
        res.render(`${req.params.project}/index.html`, {
            data: {}
        })
    })
    app.use('/', (req, res) => res.end())
}