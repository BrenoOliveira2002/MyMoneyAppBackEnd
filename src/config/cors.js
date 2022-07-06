module.exports = (req, res, next) => {

    res.header('Acess-control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header("Acess-Control-Allow-Headers", 'Origin, X-Requested-With, Content-type, Accept')
    next()
}