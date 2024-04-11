getIPAddress()




async function getClanData() {
    const key = "3d25287c-4768-4354-adc3-24b99bf8a17a";
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
