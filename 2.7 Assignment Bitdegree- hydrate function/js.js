let HydrateFn = setInterval(function(){

    document.write('Hi my name is what, my name is who?') 

}, 2000);
// cancel after 1 min
setTimeout(StopFn, 1 * 60 * 1000)
// clear the interval
function StopFn() {

    clearInterval(HydrateFn);

}