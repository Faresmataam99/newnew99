const fs = require('fs');
const http =require('http');

const server = http.createServer((req,res)=> {
  if(req.url == '/realmadrid') {
    res.write(fs.readFileSync('pages/index.html'));
}
else if (req.url == '/blog') {
    res.write(fs.readFileSync('pages/blog.html'));
}

else {
    const data = fs.readFileSync('pages/404.html');
    res.write(data.toString());
}
res.end();
})
server.listen(3000)

// passwordgenerator

const passwordGenerator =require();
const passwords = password.generate({
  length:20 ,
  uppercase :true ,
  numbers :true ,
});
console.log(passwords);

const nodemailer = require('nodemailer');  // after installing nodemailer of course


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', 
    pass: 'your-email-password'   
  }
});


const mails = {
  from: 'Fares18@gmail.com',
  to: 'adelwinny@gmail.com', 
  subject: 'wesh papi',
  text: 'ay ta3 9elb louz and hamid , ha9 ha9 ha9'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('sent',info.response);})
