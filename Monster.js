var player = {
    posX: 5,
    posY: 5,
    bulletCnt: 5,
    energy: 100,
    noiseLvl: 0,
    state: "still",
}
var monster = {
    posX: 30,
    posY: 30,
    knowsPos: false,
    knowsDirection: false,
    speed: 2,
    state: "wandering"
}
var exit = {
    posX:0,
    posY:0,
    lightLvl:2,
}
var E = "East"
var east = "East"
var e = "East"
var East = "East"

var N = "North"
var north = "North"
var n = "North"
var North = "North"

var W = "West"
var West = "West"
var west = "West"
var w = "West"

var S = "South"
var South = "South"
var south = "South"
var s = "South"

var gameover = false

var monsterDirection
var exitCoords
function makeExit(){
   
    var coinflip = Math.floor((Math.random()*2)+1)
    if(coinflip == 1){
        exit.posX = 0
        exit.posY = Math.floor(Math.random()*30)+1

    }else{
        exit.posX = Math.floor(Math.random()*30)+1
        exit.posY = 0

    }
            exitCoords = "("+ exit.posX + "," + exit.posY + ")"
}

console.log("You Are Trapped In an Abandoned Warehouse with the Monster! Find the Exit Before IT finds you...")
console.log("You have a crappy gun with 5 bullets to Defend Yourself, but use them wisely, as every noise you make alerts the Monster to your Location.")
console.log("You can Run, Walk, Sneak, or Shoot in any Cardinal Direction.")
console.log("Good Luck!")
makeExit()

var monsterDistanceY = monster.posY - player.posY 
var monsterDistanceX = monster.posX - player.posX
monsterDirectionUpdate()

function monsterDirectionUpdate(){
    if(!gameover){
    monsterDistanceY = monster.posY - player.posY
    monsterDistanceX = monster.posX - player.posX
    if(Math.abs(monsterDistanceX) <= Math.abs(monsterDistanceY)){
        if(monsterDistanceY > 0){
            monsterDirection = "North"
        }else{monsterDirection = "South"}
    }else if(Math.abs(monsterDistanceX) > Math.abs(monsterDistanceY)){
        if(monsterDistanceX < 0){
            monsterDirection = "West"
        }else{monsterDirection = "East"}
    }
    }
    
}
function monsterStateChange(){
    if(!gameover){
    if(monster.state == "KO3"){
        monster.state = "KO2"
    }else if(monster.state == "KO2"){
        monster.state = "KO1"
    }else if(monster.state == "KO1")
        {monster.state = "wandering"

    }else if(player.noiseLvl < monsterDistanceX && player.noiseLvl < monsterDistanceY){
        monster.state = "wandering"
    }else if(player.noiseLvl >= monsterDistanceX*2 || player.noiseLvl >= monsterDistanceY*2){
        monster.state = "pursuing"
    }else if(player.noiseLvl >= monsterDistanceX || player.noiseLvl >= monsterDistanceY){
        monster.state = "stalking"
    }
}
}
    


function monsterpounce(){
    gameover = true
    console.log(".. And the monster pounces on you! game over..")
    console.log("..Refresh the page to Try Again!")
}

function monsterMovement(){
    if(!gameover){
    if(monster.state == "KO3" || monster.state == "KO2" || monster.state == "KO1"){
        monster.posX += 0

    }else if(monster.state == "wandering"){
        var wanderDirection = Math.floor((Math.random()*4)+1)
        if(monster.posX >= 28){
            monster.posX -= 3
        }else if(monster.posX <= 2){
            monster.posX += 3
        }else if(monster.posY >= 28){
            monster.posY -= 3
        }else if(monster.posY <= 2){
            monster.posY += 3
        }
        else 
        if(wanderDirection == 1){
            //North
            monster.posY += 3
        }else if(wanderDirection == 2){
                //East
                monster.posX += 3
        }else if(wanderDirection ==3){
                //South
                monster.posY -= 3
        }else if(wanderDirection == 4){
                //West
                monster.posX -= 3
        }

    }else if(monster.state == "stalking"){
        if (monsterDirection == "East"){
            //Walks West
            monster.posX -= 3
        }else if(monsterDirection == "West"){
            //Walks East
            monster.posX += 3
        }else if(monsterDirection == "North"){
            //Walks South
            monster.posY -= 3
        }else if(monsterDirection == "South"){
            //Walks North
            monster.posY += 3
        }else  {}
    
    }else if(monster.state == "pursuing"){
        if(monsterDirection == "East"){
            //Running West
            if(Math.abs(monsterDistanceX) >= 7){
            monster.posX -= 7
            }else if(Math.abs(monsterDistanceX) <= 3){
                monsterpounce()
            }else{monster.posX -= monsterDistanceX}


        }else if(monsterDirection == "West"){
            //Running East
            if(Math.abs(monsterDistanceX) >= 7){
            monster.posX += 7
            }else if(Math.abs(monsterDistanceX) <= 3){
                monsterpounce()
            }else (monster.posX += monsterDistanceX)


        }else if(monsterDirection == "North"){
            if(Math.abs(monsterDistanceY) >= 7){
                monster.posY -=7
            }else if(Math.abs(monsterDistanceX <= 3)){
                monsterpounce()
            }else{monster.posY -= monsterDistanceY}
        }

        else if(monsterDirection == "South"){
            if(Math.abs(monsterDistanceY) >= 7){
                monster.posY +=7
            }else if(Math.abs(monsterDistanceX <= 3)){
                monsterpounce()
            }else{monster.posY += monsterDistanceY}
    }
}
monsterPythagorasDistance = Math.floor(Math.sqrt(Math.pow(monsterDistanceX,2)+Math.pow(monsterDistanceY,2)))
}
}

function sneak(direction){
    if(!gameover){
        player.state = "sneaking"

        if(player.noiseLvl > 5){
            player.noiseLvl -= 5
        }else {player.noiseLvl = 1}

    if(direction == "East"){
        player.posX += 1
        direction = "east"
    }else if(direction == "West"){
        player.posX -= 1
        direction = "west"
    }else if(direction == "South"){
        player.posY -= 1
        direction = "south"
    }else if(direction == "North"){
        player.posY += 1
        direction = "north"
    }
    console.log("You Sneaked " + direction + "...")
    if(monkeyInVicinity){
        if(monkeyIsScreaming){
            console.log("..And the monkey DOESN'T STOP SCREAMING!! The monkey shows no sign of stopping unless you get away or shut him up..") 
        }else{
            monkeyIsScreaming = true
            console.log("..And the monkey begins to SCREAM! The monkeys screams drown out the quick shuffling of the monster approaching..")
        }
    }else{randomChimp()}
    boundaryCheck()
    monsterStateChange()
    monsterMovement()
    monsterDirectionUpdate()
    exitDirectionChange()
    monkeyCheck()
    
}
}

function walk(direction){
    player.state = "walking"
    if(!gameover){
        if(player.noiseLvl > 10){
            player.noiseLvl -= 5
        }else{player.noiseLvl = 5}
    if(direction == "East"){
        player.posX += 3
        direction = "east"
    }else if(direction == "West"){
        player.posX -= 3
        direction = "west"
    }else if(direction == "South"){
        player.posY -= 3
        direction = "south"
    }else if(direction == "North"){
        player.posY += 3
        direction = "north"
    }
    
    console.log("You Walked " + direction + "...")
    if(monkeyInVicinity){
        if(monkeyIsScreaming){
            console.log("..And the monkey DOESN'T STOP SCREAMING!! The monkey shows no sign of stopping unless you get away or shut him up..") 
        }else{
            monkeyIsScreaming = true
            console.log("..And the monkey begins to SCREAM! The monkeys screams drown out the quick shuffling of the monster approaching..")
        }
    }else{randomChimp()}
    checkForExit()
    boundaryCheck()
    monsterStateChange()
    monsterMovement()
    exitDirectionChange()
    monsterDirectionUpdate()
    monkeyCheck()
}
}

function run(direction){
    if(!gameover){
        if(player.noiseLvl > 15){
            player.noiseLvl -= 5
        }else{player.noiseLvl = 10}
player.state = "running"
    if(direction == "East"){
        player.posX += 5
        
    }else if(direction == "West"){
        player.posX -= 5
        
    }else if(direction == "South"){
        player.posY -= 5
        
    }else if(direction == "North"){
        player.posY += 5
        
    }
    console.log("You Ran " + direction + "!")
    if(monkeyInVicinity){
        monkeyInVicinity = false
        monkeyIsScreaming = false
        console.log("..And the monkey has ceased screaming.. for now. you hear him shuffling away, repositioning to scream again..")
    }else{randomChimp()}
    checkForExit()
    monsterStateChange()
    monsterMovement()
    monsterDirectionUpdate()
    boundaryCheck()
    exitDirectionChange()
    monkeyCheck()
}
}

function shoot(direction){
    if(!gameover){
    player.noiseLvl += 20

    if(direction == "East"){
        player.bulletCnt -= 1
        direction = "East"
    }else if(direction == "West"){
        player.bulletCnt -= 1
        direction = "West"
    }else if(direction == "South"){
        player.bulletCnt -= 1
        direction = "South"
    }else if(direction == "North"){
        player.bulletCnt -= 1
        direction = "North"
    }else if(direction == "The Monkey"){
        player.bulletCnt -=1
    }
        monsterDirectionUpdate()
        boundaryCheck()
        
    

var bulletRandom
console.log("You Pulled the Trigger Facing " + direction + "...")
var youHitMsg = ".. And You Hit the monster! You see it hit the ground, unconscious " + monsterPythagorasDistance + " feet " + monsterDirection + " from you. It's out of commission for the time being.."
var youMissMsg = ".. And You Miss! Now the monster knows exactly where you are.."
if(player.bulletCnt >= 1){
    if(monsterDirection == direction){
        if(monsterDirection == "East" || monsterDirection == "West"){
            var shotDifficulty = Math.floor(Math.abs(monsterDistanceX)*3.33)
            var bulletRandom = Math.floor(Math.random()*100)
            if(bulletRandom >= shotDifficulty){
                console.log(youHitMsg)
                monster.state = "KO3"
            }else{console.log(youMissMsg)}
        }else if(monsterDirection == "North" || monsterDirection == "South"){
            var shotDifficulty = Math.abs(monsterDistanceY)*3.33
            var bulletRandom = Math.floor(Math.random()*100)
            if(bulletRandom > shotDifficulty){
                console.log(youHitMsg)
                monster.state = "KO3"
            }else{console.log(youMissMsg)}
        }
        }
        if(direction == "The Monkey" && monkeyInVicinity){
            console.log("..And you hit the monkey square in the chest. He clutches his heart and falls dramatically, never to scream again..")
            monkeyCanAppear = false
            monkeyInVicinity = false
            monkeyIsScreaming = false
        }else if(direction == "The Monkey" && !monkeyInVicinity && !monkeyCanAppear){
            console.log("..Again? You are cruel.. the monkey is already dead, and you shoot his lifeless body again, sending it sliding across the floor..")}
            else if(direction == "The Monkey" && !monkeyInVicinity){
                console.log("..Monkey? What Monkey? Are you crazy? You just shot an imaginary monkey and now the monster knows where you are!")
            }
    }else{console.log("..And You are out of Bullets..")}
    monsterStateChange()
    monsterMovement()
    exitDirectionChange()
}
}
var monkeyInVicinity = false
var monkeyIsScreaming = false
var monkeyCanAppear = true
var clipping = false
var monsterDistanceApx
var monsterDistanceApxPhrase
var monsterPythagorasDistance
var randomChimpNumberBank = []
var randomChimpNumber

function randomChimp(){
    
    if(monsterPythagorasDistance <= 3){
        if(monster.state == "wandering" || monster.state == "stalking"){
        monsterDistanceApxPhrase = "let out a soft breath, directly"
        }else if(monster.state == "pursuing"){
        monsterDistanceApxPhrase = "get ready to pounce on you, directly"
        }
    }else if(monsterPythagorasDistance < 7){
        if(monster.state == "wandering"){
        monsterDistanceApxPhrase = "clicking its tongue quickly"
        }else if(monster.state == "stalking"){
            monsterDistanceApxPhrase = "approaching slowly"
        }else if(monster.state == "pursuing"){
            monsterDistanceApxPhrase = "chasing you down"
        }
    }else if(monsterPythagorasDistance < 15){
        if(monster.state == "wandering" || monster.state == "stalking"){
        monsterDistanceApxPhrase = "Rustling"
        }else if(monster.state == "pursuing"){
            monsterDistanceApxPhrase = "Shuffling closer"
        }
    }else if(monsterPythagorasDistance < 25){
        if(monster.state == "stalking" || monster.state == "wandering"){
        monsterDistanceApxPhrase = "Mehodically searching"
        }else if(monster.state == "pursuing"){
        monsterDistanceApxPhrase = "and its footsteps getting louder"
        }
    }else{
        if(monster.state == "pursuing"){
        monsterDistanceApxPhrase = "let out a gut wrenching screech"}
        else if(monster.state == "wandering" || monster.state  == "stalking")
            {monsterDistanceApxPhrase = "faintly moving around"}
    }

    if(!gameover){
    randomChimpNumber = Math.floor(Math.random()*25)+1
    randomChimpNumberBank.push(randomChimpNumber)
    if(!clipping){
    if(randomChimpNumber <= 15){
        if(monster.state !== "KO3" && monster.state !== "KO2" && monster.state !== "KO1"){
            if(player.state =="walking" || player.state == "sneaking"){
                    console.log("..And you can hear the monster " + monsterDistanceApxPhrase + " to the " + monsterDirection + "...")
            }else if(player.state == "running"){
                    console.log("and In your panic, you Hear the Monster in the " + monsterDirection + ", not sure how far, or how close...")
            }
        }else{console.log("..And you can still hear the monster's Labored breathing, trying to get back up..")}


    }else if(randomChimpNumber == 16){
        if(player.state == "walking"){
            player.noiseLvl = 15
            console.log("..And step on a metal trash can lid, it slides across the floor before you can lift your foot from it..")
        }else if(player.state == "sneaking"){
            console.log("..And catch yourself right before you step on a metal trash can lid.")
        }else if(player.state == "running"){
        noiseLvl = 25
        console.log(".. And Tripped on A Metal Trash Can Lid, Making a Huge Sound!")
        }

    }else if(randomChimpNumber == 17){
        if(player.state == "walking"){
            player.noiseLvl = 8
            console.log("..And hit your face on a Support Column, making little sound, but it hurt..")
        }else if(player.state == "sneaking"){
            console.log("..And come face to face with a Support Column. Good thing you saw it before you walked through..")
        }else if(player.state == "running"){
        player.noiseLvl = 15
        console.log("..Directly Into a Support Column, making a Small Thud.")
    }


    }else if(randomChimpNumber == 18){
        if(player.state == "walking"){
            player.bulletCnt += 3
            console.log("..And almost Step on a Box of Bullets on the Ground. Looking inside, you narrowly missed squashing the 3 left inside.")
        }else if(player.state == "sneaking"){
            player.bulletCnt += 3
            console.log("..And look down to see a Box of Bullets on the ground! looking inside, there are 3 left!")
        }else if(player.state == "running"){
        console.log(".. And Step on a Box of Bullets on the Ground. Looking inside, there were 3 Left, before you squashed them..")
        }


    }else if(randomChimpNumber == 19){
        if(player.state == "walking"){
            console.log("..And find a box of bullets on the Ground!.. But it's Empty.")
        }else if(player.state == "sneaking"){
            console.log("..And come across a box of bullets on the Ground!.. But it's Empty.")
        }else if(player.state == "running"){
        console.log(".. And Step on a Box of Bullets on the Ground!.. But it's Empty.")
        }


    }else if(randomChimpNumber == 20){
        console.log(".. And Caught a glimpse of Light Outside toward the " + exitDirection + "!")


    }else if(randomChimpNumber == 21){
        if(monkeyCanAppear){
            if(player.state == "walking"){
                monkeyInVicinity = true
                console.log("..And arrive at an impass with a small monkey in front of you. He is silent. He doesn't want to be. ")
            }else if(player.state == "sneaking"){
                monkeyInVicinity = true
                console.log("..And you see a small monkey directly in front of you. You don't think he knows you're here..")
            }else if(player.state == "running"){
                player.noiseLvl = 50
                monkeyIsScreaming = true
                console.log(".. And a MONKEY APPEARS RIGHT IN FRONT OF YOU!! HE STARTS HOWLING LIKE A BANSHEE!!..")
            }
        }



    }else if(randomChimpNumber == 22){
        console.log("..And NOTHING EVER HAPPENS")


    }else if(randomChimpNumber == 23){
        if(player.state == "walking"){
            console.log("..And before you on the ground is box of bullets. There is one left inside!")
            player.bulletCnt += 1
        }if(player.state == "sneaking"){
            console.log("..And come across a box of bullets on the ground! looking inside there is a single bullet left..")
            player.bulletCnt += 1
        }else if(player.state == "running"){
            console.log("..And you step on a box of bullets on the ground. Looking inside, there was 1 left in it, before you squashed it.");player.bulletCnt+=1
        }

    }else if(randomChimpNumber == 24){
if(player.state == "walking"){
        console.log("..And ]looking around you catch a glint in the monster's eyes. It is " + monsterPythagorasDistance + " feet " + monsterDirection + " from you...")
}else if(player.state == "sneaking"){
        console.log("..And from careful observation you can make out the shape of the monster " + monsterPythagorasDistance + " feet away to the " + monsterDirection + "...")
}else if(player.state == "running"){
    console.log("..And frantically swiveling your head you catch a glimpse of the monster to the " + monsterDirection + "...")
}

    }
    else{console.log("soon™")}}
}
}

function boundaryCheck(){
    if(!gameover){
    if(player.posX < 0 || player.posX > 30 || player.posY < 0 || player.posY > 30){
        if(player.posX < 0){
            clipping = true
            player.posX = 0
        }else if(player.posX > 30){
            clipping = true
            player.posX = 30
        }else if(player.posY < 0){
            clipping = true
            player.posY = 0
        }else if(player.posY > 30){
            clipping = true
            player.posY = 30
        }
        if(player.state == "running"){
            player.noiseLvl = 25
            console.log("..and end up face-first into the wall. You made quite a thud..")
            setTimeout(()=> clipping = false, .1)
        }else if(player.state == "walking"){
            player.noiseLvl = 15
            console.log("..and find yourself met with a wall. The sound of touching it reverberates through the room..")
            setTimeout(()=> clipping = false, .1)
        }else if(player.state == "sneaking"){
            player.noiseLvl = 5
            console.log("..and see that there is a wall right in front of you. Luckily for you, you saw it before you ran into it..")
            setTimeout(()=> clipping = false, .1)
        }
    }
}
}

var exitDistanceX = exit.posX - player.posX 
var exitDistanceY = exit.posY - player.posY
var exitDirection
function exitDirectionChange(){
    if(!gameover){
    exitDistanceX = exit.posX - player.posX
    exitDistanceY = exit.posY - player.posY
    if(Math.abs(exitDistanceX) < 2*Math.abs(exitDistanceY) && Math.abs(exitDistanceY) < 2*Math.abs(exitDistanceX)){
        if(exitDistanceX > 0){
            if(exitDistanceY > 0){
                exitDirection = "Northeast"
            }else if(exitDistanceY < 0){
                exitDirection = "Southeast"
            }

        }else if(exitDistanceX < 0){
            if(exitDistanceY > 0){
                exitDirection = "Northwest"
            }else if(exitDistanceY < 0){
                exitDirection = "Southwest"
            }
        }
    }else if(Math.abs(exitDistanceX) >= 2*Math.abs(exitDistanceY)){
        if(exitDistanceX > 0){
            exitDirection = "East"
        }else if(exitDistanceX < 0){
            exitDirection = "West"
        }
    }else if(Math.abs(exitDistanceY) >= 2*Math.abs(exitDistanceX)){
        if(exitDistanceY < 0){
            exitDirection = "South"
        }else if(exitDistanceY > 0){
            exitDirection = "North"
        }
    }
}
}

function checkForExit(){
    if((player.posX < exit.posX+2 && player.posX > exit.posX -2) 
        &&
      ( player.posY < exit.posY + 2 && player.posY > exit.posY -2)){
        gameover = true 
        console.log("..And You made it to the exit! You leave the monster behind and enjoy the light of day..")
        console.log("..Refresh the page to play again!")
    }
}

function monkeyCheck(){
    if(monkeyIsScreaming){
        player.noiseLvl = 50
    }
}

//Ways to improve monster:
//Create a way for the monster to approach locations rather than live updating player location
//Make more random chimp events and instead of having random events happen every turn randomize at the beginning where-the various random events are and have you run into them.
//More variety in random events
//MMore than one way of describing the monster's distence
//(i.e. instead of "shuffling toward you", you can have that and 3 other different statements so it doesn't look like youre reusing phrases)
//live type the responses using monsterTypeWrite.js
