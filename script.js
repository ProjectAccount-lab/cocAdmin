// getIPAddress()
getClanData()
 let api = proccess.env.API_TOKEN


function getClanData() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer%s" + api);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    myHeaders.append("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Methods X-Requested-With, content-type, Authorization");
    myHeaders.append("Access-Control-Allow-Credentials", "true");
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Referer","https://projectaccount-lab.github.io/");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      mode: "no-cors",
      redirect: "follow"
    };
    
    try {
        fetch("https://api.clashofclans.com/v1/clans/%232lrrvpuly", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(response))
      

    } catch (error) {
        (error) => console.error(error);
    }
    
}




function getSingleMember() {
    fetch("http://www.html.it")
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log("Si è verificato un errore!"))

}

function getIPAddress() {


    fetch("https://api.ipify.org?format=json", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })

}
