import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from "./TopNavbar";

function App() {
      // TODO: Sort This Mess
      return (
        <div className="d-flex flex-column">
            <TopNavbar/>
            <div style={{height: "40vh", background: "#212529", color: "white"}} onClick={
                  () => {
                        fetch('https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/users/')
                            .then(res => res.json()).then(result => console.log(result))
                  }
            }>
            </div>
            <div style={{height: "24.7vh", background: "#343a40"}}>
            </div>
            <div style={{height: "15.3vh", background: "#495057"}}>
            </div>
            <div style={{height: "9.4vh", background: "#6c757d"}}>
            </div>
            <div style={{height: "5.8vh", background: "#adb5bd"}}>
            </div>
            <div style={{height: "3.6vh", background: "#ced4da"}}>
            </div>
            <div style={{height: "1.2vh", background: "#dee2e6"}}>
            </div>
        </div>
      );
}

export default App;
