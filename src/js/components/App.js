import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from "./TopNavbar";

function App() {
      return (
        <div className="d-flex flex-column" style={{height:"100vh", background:"linear-gradient(135deg, darkslateblue, mediumslateblue, dodgerblue, mediumslateblue,darkslateblue)"}}>
            <TopNavbar/>
        </div>
      );
}

export default App;
