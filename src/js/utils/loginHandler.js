export function login(event, setError, setRendering) {
    event.preventDefault()
    event.stopPropagation();
    let formData = new FormData(event.target);
    fetch('https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/login/',
        {
            method: 'POST',
            body: formData
        })
        .then(result => (result.json()))
        .catch(reason => {
            console.log(reason)
            setError(reason.toString());
            setRendering("errorLoginModal");
        }).then(data => {
            console.log(data)
        if (data.success) {
            setError(false)
            setRendering("defaultLoginModal")
            document.cookie = `token=${data["message"]}; expires=Thu, 18 Dec 2100 12:00:00 UTC`;
        } else {
            setError(true)
            setRendering("defaultLoginModal")
        }
    });
}

export function isLoggedIn() {
    let name = "token=";
    let value = "";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            value = c.substring(name.length, c.length);
        }
    }
    fetch('https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/login/',
        {
            method: 'POST',
            body: {"token": value}
        })
        .then(result => (result.json()))
        .catch(reason => {
            console.log(reason)
        }).then(data => {
            return data.success;
        });
}
