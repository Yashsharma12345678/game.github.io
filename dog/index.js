let playerstate= "fall"
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change',function(e){
    playerstate = e.target.value;
})


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const canvaswidth = canvas.width = 600
const canvasheight = canvas.height = 600

const playerimage = new Image ();
playerimage.src = "shadow_dog.png";

let spriteheight= 523 
let spritewidth = 575


let framespeed = 0
let staggerframe = 5

const spriteanimations = []
const animationstates = [
    {
        name :'idle',
        frames :7,
    },
    {
        name :'jump',
        frames :7,
    },
    {
        name :'fall',
        frames :7,
    },
    {
        name :'run',
        frames :9,
    },
    {
        name :'dizzy',
        frames :11,
    },
    {
        name :'sit',
        frames :5,
    },
    {
        name :'roll',
        frames :7,
    },
    {
        name :'bite',
        frames :7,
    },
    {
        name :'ko',
        frames :12,
    },
    {
        name :'gethit',
        frames :4,
    },
]

animationstates.forEach((state,index) => {
    let frames = {
        loc:[]
    }

    for(let i = 0;i< state.frames; i++){
        let positionx = i * spritewidth;
        let positiony = index * spriteheight;
        frames.loc.push({x : positionx , y : positiony})
    }
    spriteanimations[state.name] = frames; 
})





let x = 0
function animate (){
    c.clearRect(0,0,canvaswidth,canvasheight)
    let position = Math.floor(framespeed/staggerframe )% spriteanimations[playerstate].loc.length;
    framex = spritewidth * position
    framey = spriteanimations[playerstate].loc[position].y
    c.drawImage(playerimage,framex,framey,  spritewidth,spriteheight,0,0,spritewidth,spriteheight)
    requestAnimationFrame(animate)
  

    framespeed++

}

animate();
