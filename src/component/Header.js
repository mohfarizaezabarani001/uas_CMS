export default function Header () {
    return(
        <>
            <header className="header">
            <nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow"><a href="#" className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead"><i className="fas fa-align-left" /></a><a href="index.html" className="navbar-brand font-weight-bold text-uppercase text-base">Bubbly Dashboard</a>
                <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
                <li className="nav-item">
                    <form id="searchForm" className="ml-auto d-none d-lg-block">
                    <div className="form-group position-relative mb-0">
                        <button type="submit" style={{top: '-3px', left: 0}} className="position-absolute bg-white border-0 p-0"><i className="o-search-magnify-1 text-gray text-lg" /></button>
                        <input type="search" placeholder="Search ..." className="form-control form-control-sm border-0 no-shadow pl-4" />
                    </div>
                    </form>
                </li>
                </ul>
            </nav>
            </header>
        </>
    )
}
