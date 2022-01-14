export function login(event, setError, setRendering, setLoading, closeLogin) {
    event.preventDefault()
    event.stopPropagation();
    let formData = new FormData(event.target);
    setLoading(true)
    const apiCall = async () => {
        try {
            const res = await fetch('https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/login/',
                {method: 'POST', body: formData,})
            const resJson = await res.json()
            if (resJson.success) {
                setError(false)
                localStorage.setItem("Token", resJson.message)
                closeLogin()
            } else {
                setError(true)
                setRendering("defaultLoginModal")
            }
        } catch (err) {
            setError(err.toString());
            setRendering("errorLoginModal");
        }
    }
    apiCall().then(() => {setLoading(false)})
}
export async function isLoggedIn() {
    let token = localStorage.getItem("Token")
    let res = await fetch('https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/auth_status/',
    {method: 'GET', headers: {Authorization: (`Token ${token}`)}})
    if (res.status === 200) {
        return await res.json()
    } else {
        return false
    }
}
