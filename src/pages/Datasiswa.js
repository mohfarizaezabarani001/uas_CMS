
import DataSiswa from "../component/DataSiswa";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";


export default function Datasiswa(){
    return(
        <>
            <Header/>
            <div class="d-flex align-items-stretch">
                <Sidebar/>
                <DataSiswa/>
            </div>

        </>
    )
}