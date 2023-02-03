// const _ = require('lodash');

// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems);   

const http = require('http')

const server = http.createServer((req,res) => {
    res.end(`
        <p style="text-align:center; font-family:poppins">
        Hello World</p>
        <script>
        alert("Hello World");
        </script>
    `)
}) 

server.listen(1000)
