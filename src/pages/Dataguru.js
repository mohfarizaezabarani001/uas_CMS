
import DataGuru from "../component/DataGuru";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";


export default function Dataguru(){
    return(
        <>
            <Header/>
            <div class="d-flex align-items-stretch">
                <Sidebar/>
                <DataGuru/>
            </div>

        </>
    )
}