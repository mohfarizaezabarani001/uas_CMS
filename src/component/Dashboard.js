export default function Dashboard(){
    return(
        <>
            <div class="container-fluid px-xl-5">
              <section class="py-5">
                <div class="row">
                  <div class="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                    <div class="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                      <div class="flex-grow-1 d-flex align-items-center">
                        <div class="dot mr-3 bg-violet"></div>
                        <div class="text">
                          <h6 class="mb-0">Data Siswa</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                    <div class="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                      <div class="flex-grow-1 d-flex align-items-center">
                        <div class="dot mr-3 bg-green"></div>
                        <div class="text">
                          <h6 class="mb-0">Data Dosen</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                    <div class="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                      <div class="flex-grow-1 d-flex align-items-center">
                        <div class="dot mr-3 bg-blue"></div>
                        <div class="text">
                          <h6 class="mb-0">Data Karyawan</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </>
    )
}