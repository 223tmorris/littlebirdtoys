var states = document.getElementById('states');
states.onchange = function(){
  console.log('toy index: ' + states.selectedIndex);
  console.log('toy name: ' + states.options[states.selectedIndex].text);
  console.log(states.value + '.jpg');
  document.getElementById('postcard').style.backgroundImage = url('plane1.jpg');
}
