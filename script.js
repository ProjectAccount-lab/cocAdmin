function getClanData() {

    fetch("http://www.html.it")
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log("Si è verificato un errore!"))


}

function getSingleMember() {
    fetch("http://www.html.it")
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log("Si è verificato un errore!"))

}

function getIPAddress() {
    const apiKey = "c5a159cd8e2d382d14da3376c4e7adb0";
    const url = "https://api.whatismyip.com/ip.php?key="

    fetch(url + apiKey)
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log("Si è verificato un errore!"))




}