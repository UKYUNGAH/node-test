/* 피글렛 예제
var figlet = require("figlet"); //figlet 요구한다
//실행하면 hello world 라고 꾸민글자가 잘나옴~~
figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
}); 
*/

/* npm예제
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000) */

/* 예시로 간단하게 사용해보기
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.json({'sound' : '멍멍'}) // 이게 더 명시적으로 사용가능함
//   res.send({'sound' : '멍멍'})
})

app.get('/cat', (req, res) => {
//   res.send('고양이')
  res.json({'sound': '야옹'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) */

/* 파라미터로 사용하기
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 변수로 받기 가능 user뒤에 id를 받을때 :콜론이 필요함+파라미터 이름
app.get('/user/:id', (req, res) => {
  const q = req.params; //요청 들어온것중에 파람스를 받아서 사용하기
  console.log(q)

  res.json({'userid' : q.id}) // 이게 더 명시적으로 사용가능함
})

app.get('/cat', (req, res) => {
//   res.send('고양이')
  res.json({'sound': '야옹'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) */

/* 쿼리로 사용하기
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 변수로 받기 가능 user뒤에 id를 받을때 :콜론이 필요함+파라미터 이름
app.get('/user/:id', (req, res) => {

  const q = req.query; //쿼리로 사용하기
  console.log(q.q);
  console.log(q.name);
  console.log(q.age);

  res.json({'userid' : q.name}) // 이게 더 명시적으로 사용가능함
})


app.get('/cat', (req, res) => {
//   res.send('고양이')
  res.json({'sound': '야옹'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) */

// 동물소리 api 만들기
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    // const p = req.params; 간편하게 하는법
    const { name } = req.params; //name에 바로 들어감

    if(name == 'dog'){
        res.json({'sound': '멍멍'})
    }else if(name == 'cat'){
        res.json({'sound': '야옹'})
    }else if(name == 'pig'){
        res.json({'sound': '꿀꿀'})
    }else {
        res.json({'sound': '알수없음'})
    }

    console.log(name);

  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 