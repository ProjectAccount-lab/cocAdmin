getIPAddress()




async function getClanData() {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQwNmU5Yjg4LTJjZjEtNGFlMy1iZGMyLWU4ZTI3NDUyMjVhMSIsImlhdCI6MTcxMjg2OTE5Niwic3ViIjoiZGV2ZWxvcGVyLzQ3YWNkYWM0LWEzYTAtZDJjMi0yMWI1LWE4MjgwYzI3YjJlZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkzLjcxLjIyNS4yMjgiXSwidHlwZSI6ImNsaWVudCJ9XX0.3uSeTxn2LROUD7-4Ilq0sYzM_A_qpusI1mXAxcKyvf3gSdJYTqhNUvQLawiRehpdtcTReAomy7AoC2MgTtiX-g";
    const clanTag = encodeURIComponent("#2lrrvpuly");
    const url = `https://api.clashofclans.com/v1/clans/${clanTag}`;

    const requestOptions = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
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
