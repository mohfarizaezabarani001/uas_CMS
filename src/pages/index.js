import Dashboard from "../component/Dashboard";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

export default function Home (){
    return(
        <>
            <Header/>
            <div class="d-flex align-items-stretch">
                <Sidebar/>
                <Dashboard/>
            </div>

        </>
    )
}