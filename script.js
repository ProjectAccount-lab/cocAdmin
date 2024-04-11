// getIPAddress()
getClanData()

function getClanData() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQwNmU5Yjg4LTJjZjEtNGFlMy1iZGMyLWU4ZTI3NDUyMjVhMSIsImlhdCI6MTcxMjg2OTE5Niwic3ViIjoiZGV2ZWxvcGVyLzQ3YWNkYWM0LWEzYTAtZDJjMi0yMWI1LWE4MjgwYzI3YjJlZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkzLjcxLjIyNS4yMjgiXSwidHlwZSI6ImNsaWVudCJ9XX0.3uSeTxn2LROUD7-4Ilq0sYzM_A_qpusI1mXAxcKyvf3gSdJYTqhNUvQLawiRehpdtcTReAomy7AoC2MgTtiX-g");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    myHeaders.append("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Methods X-Requested-With, content-type, Authorization");
    myHeaders.append("Access-Control-Allow-Credentials", "true");
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    
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
