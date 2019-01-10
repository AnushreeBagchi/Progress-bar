var clickBox= document.getElementById('button');
// var progress= document.getElementById('progress');
var bar= document.getElementById('bar');

clickBox.addEventListener ('click', onClick);

function onClick(){
    $('#bar').append(`<div class='progress'></div>`);
}