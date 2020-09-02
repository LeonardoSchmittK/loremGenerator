let loremTxt=`&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper tellus ac ipsum interdum volutpat. Sed sed pellentesque velit. Phasellus egestas mauris nisi. Fusce euismod tempus magna iaculis rutrum. Etiam ac quam est. Nunc luctus dui sem, vitae sollicitudin tellus facilisis quis. Phasellus eu est sit amet urna tincidunt ornare. Donec neque dolor, feugiat eget imperdiet eu, mollis vel mi. Mauris leo ante, semper sit amet placerat quis, dignissim.</br>
`;

let loremItem=window.document.querySelector('#loremTxt');
let panel=window.document.querySelector('.loremPanel');
let numPa=window.document.querySelector('#numPaInput');

function renderLorem(){ 
  localStorage.setItem('numParagraphs',numPa.value);
  let res= loremTxt.repeat(numPa.value); 
  loremItem.innerHTML=res;
  panel.style.display='block';

};
numPa.value=localStorage.getItem('numParagraphs');
document.body.onload=numPa.focus();