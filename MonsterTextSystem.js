function inputConversion(){
    if(inputTXT.value == 'walk south' || inputTXT.value == 'Walk south' || inputTXT.value == 'walk South' || inputTXT.value == 'Walk South'){
        walk(s)
    }else if(inputTXT.value == 'walk east' || inputTXT.value == 'Walk east' ||inputTXT.value == 'walk East' || inputTXT.value == 'Walk East'){
        walk(e)
    }else if(inputTXT.value == 'walk north' || inputTXT.value == 'Walk north' ||inputTXT.value == 'walk North' || inputTXT.value == 'Walk North'){
        walk(n)
    }else if((inputTXT.value == 'walk west' || inputTXT.value == 'Walk west' ||inputTXT.value == 'walk West' || inputTXT.value == 'Walk West')){
        walk(w)


    }else if(inputTXT.value == 'run east' || inputTXT.value == 'Run east' ||inputTXT.value == 'run East' || inputTXT.value == 'Run East'){
        run(e)
    }else if(inputTXT.value == 'run west' || inputTXT.value == 'Run west' ||inputTXT.value == 'run West' || inputTXT.value == 'Run West'){
        run(w)
    }else if(inputTXT.value == 'run south' || inputTXT.value == 'Run south' ||inputTXT.value == 'run South' || inputTXT.value == 'Run South'){
        run(s)
    }else if(inputTXT.value == 'run north' || inputTXT.value == 'Run north' ||inputTXT.value == 'run North' || inputTXT.value == 'Run North'){
        run(n)
    }

    else if(inputTXT.value == 'sneak east' || inputTXT.value == 'Sneak east' ||inputTXT.value == 'sneak East' || inputTXT.value == 'Sneak East'){
        sneak(e)
    }else if(inputTXT.value == 'sneak west' || inputTXT.value == 'Sneak west' ||inputTXT.value == 'sneak West' || inputTXT.value == 'Sneak West'){
        sneak(w)
    }else if(inputTXT.value == 'sneak south' || inputTXT.value == 'Sneak south' ||inputTXT.value == 'sneak South' || inputTXT.value == 'Sneak South'){
        sneak(s)
    }else if(inputTXT.value == 'sneak north' || inputTXT.value == 'Sneak north' ||inputTXT.value == 'sneak North' || inputTXT.value == 'Sneak North'){
        sneak(n)
    }


    else if(inputTXT.value == 'shoot east' || inputTXT.value == 'Shoot east' ||inputTXT.value == 'shoot East' || inputTXT.value == 'Shoot East'){
        shoot(e)
    }else if(inputTXT.value == 'shoot west' || inputTXT.value == 'Shoot west' ||inputTXT.value == 'shoot West' || inputTXT.value == 'Shoot West'){
        shoot(w)
    }else if(inputTXT.value == 'shoot south' || inputTXT.value == 'Shoot south' ||inputTXT.value == 'shoot South' || inputTXT.value == 'Shoot South'){
        shoot(s)
    }else if(inputTXT.value == 'shoot north' || inputTXT.value == 'Shoot north' ||inputTXT.value == 'shoot North' || inputTXT.value == 'Shoot North'){
        shoot(n)
    }else if(inputTXT.value == 'shoot monkey' || inputTXT.value == 'Shoot monkey' || inputTXT.value == 'shoot Monkey' || inputTXT.value == 'Shoot Monkey'){
        shoot("The Monkey")
    }
}