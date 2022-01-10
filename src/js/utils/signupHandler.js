function SignupHandler(event, setRendering, setError) {
    event.preventDefault()
    let formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }
    setRendering("waitingSignupModal")
    fetch('https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/signup/',
        {
            method: 'POST',
            body: formData
        })
        .then(result => {console.log(result); setRendering("defaultSignupModal")})
        // TODO: Uncomment when server is ready
        // .catch(reason => {console.log(reason); setRendering("errorSignupModal"); setError(reason.toString())});
}

export default SignupHandler;
