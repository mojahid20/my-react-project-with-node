const express = require('express');
const  cors = require('cors')
const res = require('express/lib/response');
const { application } = require('express');
const app = express()
const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello mojahid!')
  })
const users=[
    {id:1, name:'mojaid',email:'mojahid@gamil.com',phone:546456},
    {id:2, name:'halsn',email:'mojahid@gamil.com',phone:546456},
    {id:3, name:'mojaid',email:'moid@gamil.com',phone:546456},
    {id:4, name:'jamal',email:'mojahid@gamil.com',phone:546456},
    {id:5, name:'mojaid',email:'jahid@gamil.com',phone:546456},
    {id:6, name:'kamal',email:'moja@gamil.com',phone:546456},
    {id:7, name:'jalal',email:'mojahid@gamil.com',phone:546456},
]
  app.get('/users', (req, res)=>{
     if(req.query.name){
         const search= req.query.name.toLocaleLowerCase();
         const mached= users.filter(user=> user.name.toLocaleLowerCase().includes(search));
         res.send(mached);

     }
     else{
        res.send(users);
     }
      
  })

  app.get('/user/:id', (req,res)=>{
      console.log(req.params); 
      const id=(req.params.id);
      const user= users.find(u=> u.id==id);
      res.send(user)
  })

  app.post('/user',(req, res)=>{
      console.log('request', req.body);
      const user=req.body;
      user.id=users.length +1;
      users.push(user)
      res.send(user);
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })