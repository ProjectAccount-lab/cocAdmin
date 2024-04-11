getIPAddress()




async function getClanData() {
    const key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNkMjUyODdjLTQ3NjgtNDM1NC1hZGMzLTI0Yjk5YmY4YTE3YSIsImlhdCI6MTcxMjg3NTkxMiwic3ViIjoiZGV2ZWxvcGVyLzQ3YWNkYWM0LWEzYTAtZDJjMi0yMWI1LWE4MjgwYzI3YjJlZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkzLjcxLjIyNS4yMjgiXSwidHlwZSI6ImNsaWVudCJ9XX0.JYjzAfUbQ4lKkAk4qF7VjxFubixw1RviLJeFZ_pQ6Gw5nph4c0FasMGSVEdRsNbJpaRixSz58BdQ1Fjo3bwjfA";
    const clanTag = "%232lrrvpuly"
    const url = `https://api.clashofclans.com/v1/clans/${clanTag}`;

    const requestOptions = {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Authorization": `Bearer ${key}`,
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Output dei dati recuperati
    } catch (error) {
        console.error("Si è verificato un errore durante il recupero dei dati del clan:", error);
    }
}

// Chiamata alla funzione per recuperare i dati del clan
getClanData();




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
