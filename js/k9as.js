// Initialize radio checkboxes
$('.ui.radio.checkbox').checkbox();

// Function to generate and display the assessment
function generateAssessment() {
  // Get the output element
  var outputElement = document.getElementById('output');

  // Get values from form inputs
  const PatrolsColor = $('input[name="PatrolsColor"]:checked').val() || '';
  const DeploymentsColor = $('input[name="DeploymentsColor"]:checked').val() || '';
  const TotalPatrols = $('#TotalPatrols').val() || '';
  const TotalPatrols2 = $('#TotalPatrols2').val() || '';
  const TotalDeployments = $('#TotalDeployments').val() || '';
  const TotalDeployments2 = $('#TotalDeployments2').val() || '';
  const MessageOiC = $('#MessageOiC').val() || '';

  // Construct the assessment text
  let assessment = `[divbox2=white][center] [k9platlogo=200] [size=170][b]LOS SANTOS POLICE DEPARTMENT[/b][/size] [size=130]METROPOLITAN DIVISION: K-9 PLATOON ACTIVITY ASSESSMENT[/size] [/center] [hr][/hr] [metrologo=25] [b]INTRODUCTION[/b] [hr][/hr] [list=none]The Monthly Activity Assessment is a review of a platoon's activity at the end of each month. It gives an overview of the amount of deployments and general productivity of the platoon during that month and displays each officer's grading, based on a variable quota. The senior and command personnel of the Platoon compile the assessment, based on the written deployment reports and every officer's personnel log. The assessment gives an opportunity for officers to compare their performance to the rest of the platoon and acts as a tool for the department to notice and predict crime rates during certain periods of the year.[/list] [hr][/hr] [metrologo=25] [b]RECORDED AND GRADED AREAS[/b] [hr][/hr] [list=none]Displayed below is a list of all areas that are being graded based on the records we have of them. Next to each area, there is an explanation on how the average is being calculated.
[b]PATROLS[/b] - Canine Patrols fall under this area. The sum of all patrols will be divided by the total amount of personnel up to senior. This division will be split up in equal quarters which determine the quotas for this month. [i](i.e. 0 - 3, 4 - 6, 7 - 9, 10 - 12)[/i]
[b]DEPLOYMENTS[/b] - Deployments such as barricaded subjects or hostage situations fall under this area. This quota is determined by the platoon's supervisory team every month. The quota may change over time, depending on the increasing/decreasing activity.
[b]TRAININGS[/b] - Training such as Interior Search Trainings or Track and Trail Trainings fall under this area. The sum of all training will be split up in equal quarters which determine the quotas for this month.
[b]PERFORMANCE[/b] - Your performance during trainings & situations observed in-field, evaluated by the platoon supervisors.[/list] [hr][/hr] [metrologo=25] [b]GRADING SCORES[/b] [hr][/hr] [list=none] A list of all grading scores and their meaning or value determined by us is displayed below. [b][color=#0000FF]ABOVE & BEYOND[/color][/b] - The effort put in for the month was way above the expectations, reflected in exceptional results. [b][color=#00BF00]GOOD[/color][/b] - The effort put in for the month was above the expectations and there is nothing to note. [b][color=#FFBF40]ACCEPTABLE[/color][/b] - The effort put in for the month has led to meeting the bare minimum, however there is room for improvement. [b][color=#FF0000]POOR[/color][/b] - Bare minimum for the month was not met.[/list] [hr][/hr] [metrologo=25] [b]MESSAGE FROM THE OFFICER IN CHARGE[/b] [hr][/hr] [i]${MessageOiC}[/i] [hr][/hr] [metrologo=25] [b]MONTHLY STATISTICS[/b]
[hr][/hr]
[center][b]TOTAL PATROLS[/b] [size=85] ${TotalPatrols} | [b][color=${PatrolsColor}]${TotalPatrols2}[/color][/size][/b]
[b]TOTAL DEPLOYMENTS[/b] [size=85] ${TotalDeployments} | [b][color=${DeploymentsColor}]${TotalDeployments2}[/color][/size][/b] [/center] [hr][/hr] [metrologo=25] [b]PERSONNEL ACTIVITY ASSESSMENT[/b]
[hr][/hr]`;

  // Array of personnel handlers
  const handlers = [
    { name: "Samuel Courtland — CANINE HANDLER", patrol: $('input[name="PatrolsCourtland"]:checked').val(), deployment: $('input[name="DeploymentsCourtland"]:checked').val(), training: $('input[name="TrainingsCourtland"]:checked').val() },
  //  { name: "Gianfranco Perez — CANINE HANDLER", patrol: $('input[name="PatrolsPerez"]:checked').val(), deployment: $('input[name="DeploymentsPerez"]:checked').val(), training: $('input[name="TrainingsPerez"]:checked').val() },
    { name: "Leon Beckett — CANINE HANDLER", patrol: $('input[name="PatrolsBeckett"]:checked').val(), deployment: $('input[name="DeploymentsBeckett"]:checked').val(), training: $('input[name="TrainingsBeckett"]:checked').val() },
   // { name: "Cole Sanders — CANINE HANDLER", patrol: $('input[name="PatrolsSanders"]:checked').val(), deployment: $('input[name="DeploymentsSanders"]:checked').val(), training: $('input[name="TrainingsSanders"]:checked').val() },
    // { name: "Jada Griffin — CANINE HANDLER", patrol: $('input[name="PatrolsGriffin"]:checked').val(), deployment: $('input[name="DeploymentsGriffin"]:checked').val(), training: $('input[name="TrainingsGriffin"]:checked').val() },
    { name: "Marlene Renaud — CANINE HANDLER", patrol: $('input[name="PatrolsRenaud"]:checked').val(), deployment: $('input[name="DeploymentsRenaud"]:checked').val(), training: $('input[name="TrainingsRenaud"]:checked').val() },
    // { name: "Addison Porter — CANINE HANDLER", patrol: $('input[name="PatrolsPorter"]:checked').val(), deployment: $('input[name="DeploymentsPorter"]:checked').val(), training: $('input[name="TrainingsPorter"]:checked').val() },
   // { name: "Austin Ortega — CANINE HANDLER", patrol: $('input[name="PatrolsOrtega"]:checked').val(), deployment: $('input[name="DeploymentsOrtega"]:checked').val(), training: $('input[name="TrainingsOrtega"]:checked').val() },
   // { name: "Miguel Ruano — CANINE HANDLER", patrol: $('input[name="PatrolsRuano"]:checked').val(), deployment: $('input[name="DeploymentsRuano"]:checked').val(), training: $('input[name="TrainingsRuano"]:checked').val() },
   // { name: "Marcus Stohl — CANINE HANDLER", patrol: $('input[name="PatrolsStohl"]:checked').val(), deployment: $('input[name="DeploymentsStohl"]:checked').val(), training: $('input[name="TrainingsStohl"]:checked').val() },
    { name: "Sol Vazquez — CANINE HANDLER", patrol: $('input[name="PatrolsVazquez"]:checked').val(), deployment: $('input[name="DeploymentsVazquez"]:checked').val(), training: $('input[name="TrainingsVazquez"]:checked').val() },
    { name: "Katarina Orozco — CANINE HANDLER", patrol: $('input[name="PatrolsOrozco"]:checked').val(), deployment: $('input[name="DeploymentsOrozco"]:checked').val(), training: $('input[name="TrainingsOrozco"]:checked').val() },
    { name: "Isiah Warren — CANINE HANDLER", patrol: $('input[name="PatrolsWarren"]:checked').val(), deployment: $('input[name="DeploymentsWarren"]:checked').val(), training: $('input[name="TrainingsWarren"]:checked').val() },
    { name: "Marisa Groomay — CANINE HANDLER", patrol: $('input[name="PatrolsGroomay"]:checked').val(), deployment: $('input[name="DeploymentsGroomay"]:checked').val(), training: $('input[name="TrainingsGroomay"]:checked').val() },
    { name: "Sergio Romero — CANINE HANDLER", patrol: $('input[name="PatrolsRomero"]:checked').val(), deployment: $('input[name="DeploymentsRomero"]:checked').val(), training: $('input[name="TrainingsRomero"]:checked').val() },
    { name: "Deniz Arcian — CANINE HANDLER", patrol: $('input[name="PatrolsArcian"]:checked').val(), deployment: $('input[name="DeploymentsArcian"]:checked').val(), training: $('input[name="TrainingsArcian"]:checked').val() },
    { name: "Jalen Bouknight — CANINE HANDLER", patrol: $('input[name="PatrolsBouknight"]:checked').val(), deployment: $('input[name="DeploymentsBouknight"]:checked').val(), training: $('input[name="TrainingsBouknight"]:checked').val() },
    { name: "Neil Tucker — CANINE HANDLER", patrol: $('input[name="PatrolsTucker"]:checked').val(), deployment: $('input[name="DeploymentsTucker"]:checked').val(), training: $('input[name="TrainingsTucker"]:checked').val() },
    { name: "Marisa Groomay — CANINE HANDLER", patrol: $('input[name="PatrolsGroomay"]:checked').val(), deployment: $('input[name="DeploymentsGroomay"]:checked').val(), training: $('input[name="TrainingsGroomay"]:checked').val() },
    { name: "Vincent Glass — CANINE HANDLER", patrol: $('input[name="PatrolsGlass"]:checked').val(), deployment: $('input[name="DeploymentsGlass"]:checked').val(), training: $('input[name="TrainingsGlass"]:checked').val() },
    { name: "Mac Baxter — CANINE HANDLER", patrol: $('input[name="PatrolsBaxter"]:checked').val(), deployment: $('input[name="DeploymentsBaxter"]:checked').val(), training: $('input[name="TrainingsBaxter"]:checked').val() }

  ];

  // Iterate through handlers and add their information to the assessment
  for (const handler of handlers) {
    assessment += ` [divbox2=transparent][b]${handler.name}[/b][color=transparent]person1[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${handler.patrol}
[*][b]DEPLOYMENTS:[/b] ${handler.deployment}
[*][b]TRAININGS:[/b] ${handler.training}
[/list][/divbox2][br][/br]
`;
  }

  // Close the assessment
  assessment += '[/divbox2]';

  // Set the generated assessment text to the output element
  outputElement.value = assessment;
}

// Click event handler for the "Submit" button
$('#submit').click(generateAssessment);

// Click event handler for the "Copy" button
$('#copy').click(function () {
  var copyText = document.getElementById('output');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
});