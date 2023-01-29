var jokesarr =['The man who invented knock-knock jokes should get a no bell prize',
'How do you make holy water? You boil the hell out of it.',
'A blind man walked into a bar… And a table… And a chair…'];



var joke= jokesarr[Math.floor(Math.random()*jokesarr.length)]

//document.write(joke);

document.addEventListener('click',()=>
{
    document.getElementById("para").innerHTML= joke;
    document.write(joke);
})