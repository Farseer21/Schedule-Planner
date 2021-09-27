function dayMedian(isAM){ 
    for(let i=0; i < 12; i++){
        const suffix= isAM ? "AM" : "PM"
        const hour = i == 0 ? 12 : i
        $('#planner').append( "<div id=hour_" + hour + suffix + " class='row'><div class='container'>" + hour + suffix + " </div> </div>")

    }
};
dayMedian(true);
dayMedian(false);


