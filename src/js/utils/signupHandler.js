export function signup(event, setRendering, setError, setValidationError, setLoading) {
    event.preventDefault()
    event.stopPropagation();
    let formData = new FormData(event.target);
    setLoading(true)
    const apiCall = async () => {
        try {
            let res = await fetch('https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/signup/',
                {method: 'POST', body: formData})
            let jsonRes = await res.json()
            if (jsonRes.success) {
                setError("")
                setValidationError({
                    email: [false, "Please fill out this field."],
                    username: [false, "Please fill out this field."],
                    first_name: [false, "Please fill out this field."],
                    last_name: [false, "Please fill out this field."],
                    password: [false, "Please fill out this field."],
                    confirm: [false, "Please fill out this field."]
                })
                setRendering("successSignupModal")
            } else {
                jsonRes.message.confirm = [formData.get("password") === formData.get("confirm"),
                    "Passwords don't match!"]
                setValidationError(prev => {
                    return jsonRes.message
                })
                setRendering("defaultSignupModal")
            }
        } catch (err) {
            setError(err.toString());
            setRendering("errorSignupModal");
        }
    }
    apiCall().then(() => {setLoading(false)})
}
export function handleFormChange(event, setSignupFields, setValidationError) {
    saveFormState(event, setSignupFields, setValidationError)
    validateSignup(event, setValidationError).then()
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
async function validateSignup(event, setValidationError) {
    const time = {"val": 0}
    if (event.timeStamp < time["val"]) {
        return
    } else {
        time["val"] = event.timeStamp
    }
    let url = ""
    if (event.target.name === "confirm") {
        return
    } else if (event.target.name === "password") {
        let pass_len = event.target.value.length
        let pass_caps = event.target.value.length - event.target.value.replace(/[A-Z]/g, '').length
        let pass_number = event.target.value.length - event.target.value.replace(/[0-9]/g, '').length
        let pass_special = pass_len - pass_caps - pass_number
        url = `https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/validate_signup?pass_len=${pass_len}`+
            `&pass_caps=${pass_caps}&pass_number=${pass_number}&pass_special=${pass_special}`
    }
    else {
        url = `https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/validate_signup?` +
            `${event.target.name}=${event.target.value}`
    }
    try {
        const res = await fetch(url, {method: 'GET'});
        const jsonRes = await res.json()
        setValidationError(prev => {
            let newVE = {...prev}
            newVE[event.target.name] = jsonRes[event.target.name]
            return newVE
        })
    } catch (err) {
        setValidationError(prev => {
            let newVE = {...prev}
            for (const kv of Object.entries(newVE)) {
                newVE[kv[0]] = [false, err.message.toString()]
            }
            return newVE
        })
    }
}
