// Dimmer with range 15-25 range.
//   you can buy 5w, 10w bulb from market and attach with dimmer.
//   user can set the dial between 15-25.
//   at any point I should be able to see the wattage at bulb.


function dimmer(range,bulb5, bulb10){

    if(range<15 || range>25){
        console.log('Sorry wrong range! Please enter range between 15-25')
        return
    } else {
        var dialPercent = (range-15)*10
        console.log('5w bulbs which are ',bulb5,' 10w bulbs which are ', bulb10,' both are lit ',dialPercent)
    }


}

dimmer(1,1,1)