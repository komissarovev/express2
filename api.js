let servers = [
    {id:1,name:'google',status:'working'},
    {id:2,name:'yandex',status:'working'},
    {id:3,name:'aws',status:'working'},
    {id:4,name:'microsoft',status:'pending'}
]

const getServers = (req,res) => {
    res.status(200).json(servers)
}

module.exports.getServers = getServers