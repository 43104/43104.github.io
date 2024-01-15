document.addEventListener("DOMContentLoaded", () => {
    let myButton = document.querySelector("button");
    function question(){
        //test function
        //asks user if cool
        let cool = prompt("Are you cool?");
        //prompts user to try again
        if (cool === "yes"){
            alert("Welcome to the gang.")
        }
        //if user answer does not equal "yes" or "Yes", print you are gay
        else {
            alert("you are gay");
            let askagain = prompt("again?");
            if(askagain === "no") {
                alert("cringe")
            }
            if(askagain === "yes"){
                alert("yayy")
                let recool = prompt("Are you cool?");
                if (recool === "yes" || "Yes"){
                    alert("Welcome to the gang. if you said 'no' ur gay and im going to find where you live and give you the most raw backshots ever")
                }
            }
        }
        
    }
    myButton.onclick = () => {
        question();
    };
});