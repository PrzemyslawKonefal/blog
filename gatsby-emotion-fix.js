fs = require('fs');
const path = './node_modules/@narative/gatsby-theme-novela/gatsby-config.js'

const data = fs.readFileSync(path, 'utf8');
const newData = data.replace('displayName', 'autoLabel')
fs.writeFileSync(path, newData)
