const express = require('express')
const app = express()
const { exec } = require('child_process');

app.use(express.static('public'))

app.get('/open', function (req, res) {
  res.send('I\'m openning Slack')

exec('open /Applications/Slack.app/Contents/MacOS/Slack', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
