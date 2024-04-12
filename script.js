



async function getClanData() {

    const myHeaders = new Headers();



    myHeaders.set("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQwNmU5Yjg4LTJjZjEtNGFlMy1iZGMyLWU4ZTI3NDUyMjVhMSIsImlhdCI6MTcxMjg2OTE5Niwic3ViIjoiZGV2ZWxvcGVyLzQ3YWNkYWM0LWEzYTAtZDJjMi0yMWI1LWE4MjgwYzI3YjJlZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkzLjcxLjIyNS4yMjgiXSwidHlwZSI6ImNsaWVudCJ9XX0.3uSeTxn2LROUD7-4Ilq0sYzM_A_qpusI1mXAxcKyvf3gSdJYTqhNUvQLawiRehpdtcTReAomy7AoC2MgTtiX-g");
    myHeaders.set("Content-Type", "application/json");

    

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "no-cors",
      headers: myHeaders,
      
    };
    
    myHeaders.get("Content-Type");
    
    fetch("https://api.clashofclans.com/v1/clans/%232LRRVPULY", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}

getClanData()




function getSingleMember() {
    fetch("http://www.html.it")
        .then(response => {
            console.log(response);
        })
        .catch(_error => console.log("Si è verificato un errore!"))

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
