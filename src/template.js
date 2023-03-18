const managerBox = manager => 
`
<div class="bodyContainer">
  <h1 class="box1">
    <div class="boxHeader"> ${manager.getName()} <div class="occupation">${manager.icon} ${manager.getRole()} </div> </div>
   <div class="contentContainer">
    <div class="boxContentId"> ID: ${manager.getId()} </div>
    <div class="boxContentEmail">Email: <a href="mailto: ${manager.getEmail()}" class="email">${manager.getEmail()}</a></div>
    <div class="boxContentOffice">Office Num: ${manager.getOfficeNum()}</div>
   </div>   
  </h1>
`

const engineerBox = engineer =>
`
<div class="bodyContainer">
  <h1 class="box1">
    <div class="boxHeader"> Name ${engineer.getName()} <div class="occupation"> ${engineer.icon} ${engineer.getRole()} </div> </div>
   <div class="contentContainer">
    <div class="boxContentId">ID:${engineer.getId()} </div>
    <div class="boxContentEmail"> Email: <a href="mailto: ${manager.getEmail()}" class="email">${manager.getEmail()}</a></div>
    <div class="boxContentOffice">GitHub Account: <a class="subClassA" href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a> </div>
   </div>   
  </h1>
`

const internBox = intern =>
`
<div class="bodyContainer">
  <h1 class="box1">
    <div class="boxHeader"> Name <div class="occupation"> Occupation </div> </div>
   <div class="contentContainer">
    <div class="boxContentId">ID: ${intern.getId()} </div>
    <div class="boxContentEmail">Email: <a href="mailto: ${manager.getEmail()}" class="email">${manager.getEmail()}</a></div>
    <div class="boxContentOffice">School: ${intern.getSchool()} </div>
   </div>   
  </h1>
`
const cardGroup = teamCurr => {
  let template = '';

  for(let i = 0; i < teamCurr.length; i++){
      if(teamCurr[i].getRole() === 'Engineer'){
          template += engineerBox(teamCurr[i]);
      }
      else if(teamCurr[i].getRole() === 'Intern'){
          template += internBox(teamCurr[i]);
      }
      else if(teamCurr[i].getRole() === 'Manager'){
          template += managerBox(teamCurr[i]);
      }
  } return htmlTemplate
}

const htmlPrint = data =>
`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>  </title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="stylesheet" type="text/css" href="./style.css" />
  <link rel="icon" href="favicon.png">
</head>

<header class="main-header">
  <nav class="navHeader"> 
   <label class="dashboard"> My Team Setup </lavbel>
  </nav>
 </header>

<body>
        ${cardGroup(data)}
</body>

<script src="./script.js"></script>
</html>
`

module.exports = htmlPrint;