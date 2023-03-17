function saturdayFun(action="roller-skate") {
    return `This Saturday, I want to ${action}!`;
}


const mondayWork = function(action="go to the office") {
    return `This Monday, I will ${action}.`;
}


const wrapAdjective = function(visualFlair="*") {
    return function(s="special") {
        return `You are ${visualFlair}${s}${visualFlair}!`
    }
}