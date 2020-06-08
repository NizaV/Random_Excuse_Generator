window.onload = () => {
    //declare the variables who, what, when
    let who = [ "My Cousin", "His Docter", "The Maniac", "The Tourist"];
    //and assign at least 4 values for each
    let what = [ "broke an arm", "won a million dollars", "broke a world record", "enjoys skydiving"];
    let when = [ "last night", "over the weekend", "in your dreams", "during the pandemic"];
    //selecct a random who, what, and when
    var selectedWho = who[Math.floor(Math.random() * who.length)];
    var selectedWhat = what[Math.floor(Math.random() * what.length)];
    var selectedWhen = when[Math.floor(Math.random() * when.length)];
    //concatenate who + what + when 
    let excuse = `${selectedWho + " " + selectedWhat + " " + selectedWhen + "!"}`;
    //print webpage
    document.getElementById("title").innerHTML = excuse;
}