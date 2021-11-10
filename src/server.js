const express = require('express');
const app = express();
const path = require('path');
let PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true, limit: '4mb' }));
app.use(express.json());
app.use(express.static("public"));
app.get('/', (req, res) => {
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
} else { 
  app.use(express.static(path.join(__dirname, './public')));
}
if (process.env.NODE_ENV === 'production') {
      console.log('production');
      res.sendFile(path.join(__dirname, "../dist/index.html"));  
    } else {
      console.log('development');
      res.sendFile(path.join(__dirname, "public/index.html"));
    }
  }
);
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})