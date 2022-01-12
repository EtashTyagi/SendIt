export function signup(event, setRendering, setError, setValidationError) {
    event.preventDefault()
    event.stopPropagation();
    let formData = new FormData(event.target);
    fetch('https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/signup/',
        {
            method: 'POST',
            body: formData
        })
        .then(result => (result.json()))
        .catch(reason => {
            setError(reason.toString());
            setRendering("errorSignupModal");
        }).then(data => {
            if (data.success) {
                setError("")
                setValidationError({
                    email: [false, "Please fill out this field."],
                    username: [false, "Please fill out this field."],
                    name: [false, "Please fill out this field."],
                    password: [false, "Please fill out this field."],
                    confirm: [false, "Please fill out this field."]
                })
                setRendering("successSignupModal")
            } else {
                data.message.confirm = [formData.password === formData.confirm, "Passwords don't match!"]
                setValidationError(prev => {
                    return data.message
                })
                setRendering("defaultSignupModal")
            }
        });
}
export function handleFormChange(event, setSignupFields, setValidationError) {
    saveFormState(event, setSignupFields, setValidationError)
    validateSignup(event, setValidationError)
}
function saveFormState(event, setSignupFields, setValidationError) {
    let name = event.target.name
    let value = event.target.value

    setSignupFields(prev => {
        let newSF = {...prev}
        newSF[name] = value
        if (event.target.name === "password" || event.target.name === "confirm") {
            setValidationError(prev => {
                let newVE = {...prev}
                newVE["confirm"] = [newSF["password"] === newSF["confirm"], "Passwords don't match!"]
                return newVE
            })
        }
        return newSF
    })
}
function validateSignup(event, setValidationError) {
    if (event.target.name === "confirm") {
        return
    }
    if (event.target.name === "password") {
        let pass_len = event.target.value.length
        let pass_caps = event.target.value.length - event.target.value.replace(/[A-Z]/g, '').length
        let pass_number = event.target.value.length - event.target.value.replace(/[0-9]/g, '').length
        let pass_special = pass_len - pass_caps - pass_number
        let url = `https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/validate_signup?pass_len=${pass_len}`+
            `&pass_caps=${pass_caps}&pass_number=${pass_number}&pass_special=${pass_special}`
        fetch(url,{
            method: 'GET',
        })
            .then(result => (result.json()))
            .then(data => {
                setValidationError(prev => {
                    let newVE = {...prev}
                    newVE[event.target.name] = data[event.target.name]
                    newVE["confirm"] = [newVE["confirm"]===newVE["password"], "Passwords don't match!"]
                    return newVE
                })
            });
    }
    else {
        let url = `https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/validate_signup?`+
            `${event.target.name}=${event.target.value}`
        fetch(url,{
                method: 'GET',
            })
            .then(result => (result.json()))
            .then(data => {
                setValidationError(prev => {
                    let newVE = {...prev}
                    newVE[event.target.name] = data[event.target.name]
                    return newVE
                })
        });
    }
}
