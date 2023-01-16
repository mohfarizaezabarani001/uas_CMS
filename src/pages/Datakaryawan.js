
import DataKaryawan from "../component/DataKaryawan";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";


export default function Datakaryawan(){
    return(
        <>
            <Header/>
            <div class="d-flex align-items-stretch">
                <Sidebar/>
                <DataKaryawan/>
            </div>

        </>
    )
}