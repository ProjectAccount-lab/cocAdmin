// getIPAddress()
getClanData()

function getClanData() {
    const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNjNjdkMDY1LTZhYzUtNDY2OS04MzkwLTEyMWQ0YjVjNDNmOCIsImlhdCI6MTcxMjY1ODIyMSwic3ViIjoiZGV2ZWxvcGVyLzQ3YWNkYWM0LWEzYTAtZDJjMi0yMWI1LWE4MjgwYzI3YjJlZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkzLjcxLjIyNS4yMjgiXSwidHlwZSI6ImNsaWVudCJ9XX0.7UQRdwWLvt_030Ug_c6hwXvwNOngc74nDKoLQy2qgj7GQd0-tTKROkllSCKLJtomB7tReeXzSeSn9JkzSvqZJQ";
    const url = "https://api.clashofclans.com/v1/clans/%232LRRVPULY"
    

    fetch(url,{
        method: "GET",
        mode: "no-cors",
        headers: {
            "Access-Control-Allow-Origin":"*",
            "Accept": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNjNjdkMDY1LTZhYzUtNDY2OS04MzkwLTEyMWQ0YjVjNDNmOCIsImlhdCI6MTcxMjY1ODIyMSwic3ViIjoiZGV2ZWxvcGVyLzQ3YWNkYWM0LWEzYTAtZDJjMi0yMWI1LWE4MjgwYzI3YjJlZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkzLjcxLjIyNS4yMjgiXSwidHlwZSI6ImNsaWVudCJ9XX0.7UQRdwWLvt_030Ug_c6hwXvwNOngc74nDKoLQy2qgj7GQd0-tTKROkllSCKLJtomB7tReeXzSeSn9JkzSvqZJQ"
          }

    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data)
    });


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
