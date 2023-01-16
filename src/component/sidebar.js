export default function Sidebar(){
    return(
        <>
        <div id="sidebar" className="sidebar py-3">
        <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">MAIN</div>
        <ul className="sidebar-menu list-unstyled">
            <li className="sidebar-list-item"><a href="index.html" className="sidebar-link text-muted active"><span>Home</span></a></li>
            <li className="sidebar-list-item"><a href="Datasiswa" className="sidebar-link text-muted"><span />Data Siswa</a></li>
            <li className="sidebar-list-item"><a href="Dataguru" className="sidebar-link text-muted"><span>Data Guru</span></a></li>
            <li className="sidebar-list-item"><a href="Datakaryawan" className="sidebar-link text-muted"><span>Data Karyawan</span></a></li>
            <li className="sidebar-list-item"><a href="login.html" className="sidebar-link text-muted"><i className="o-exit-1 mr-3 text-gray" /><span>Log Out</span></a></li>
        </ul></div>

        </>

    )
}
