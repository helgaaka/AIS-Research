Project AIS
v1 :
==============================================================
menggunakan laravel inertia react
1. menampilkan data dari api dummy (untuk simulasi)
2. koordinat pada map berubah tanpa perlu merefresh page web
==============================================================

v2 : Posisi kapal real time dan history rute
==============================================================
1. pembutan model, migrasi coordinate dan migrasi database
2. penambahan kode routes di web api
3. penambahan kode trackingcontroller (fungsi getTrackingHistory, store untuk postman)
4. penambahan kode di model coordinate
==============================================================

v2.2 : Perapian kode, tampilan halaman dan route halaman
==============================================================
1.  Memperbaiki masalah 
    walaupun data id perangkat sudah menjadi 1 dengan latitude dan longtitude pada database.
    Terdapat masalah di mana ID perangkat dan rute pergerakan tetap terhubung meskipun ID perangkat yang digunakan berbeda. id perangkat berbeda namun rute akan mengikuti data terbaru yang masuk pada database dan tidak memperdulikan id perangkatnya walaupun sudah berbeda.
2.  penambahan fungsi routing menggunakan react-router-dom untuk antisipasi pembuatan halaman baru
    file yang ditambahkan kode halaman = app, web
3.  pemisahan kode agar lebih rapi, terstruktur, dan mudah dimanage.
==============================================================

v3.1 : Penambahan fungsi saat mouse di hover pada rute kapal (history pergerakan) maka akan muncul koordinatnya
==============================================================
dengans logika menggabungkan polyline dan marker sehingga setiap saat ada data baru masuk lalu saat mouse di hover data history pergerakan akan muncul
==============================================================

v3.2 : Penyempurnaan fungsi saat mouse di hover pada rute kapal (history pergerakan) maka akan muncul koordinatnya
==============================================================
dengan logika menambahkan marker pada setiap saat ada data baru masuk lalu saat mouse di hover data history pergerakan akan muncul
==============================================================

v3.3 : Penyempurnaan fungsi icon kapal diklik aka akan muncul koordinatnya (history pergerakan)
==============================================================
koordinat/rute pergerakan muncul saat icon kapal di klik, icon kapal merupakan posisi kapal saat ini, fungsi zoom (saat membuka map maka langsung mengarah ke lokasi yang di set, misal penyebrangan bwi dan bali)
==============================================================

v3.4 : Penyempurnaan fungsi icon kapal diklik aka akan muncul koordinatnya (history pergerakan)
==============================================================
koordinat/rute pergerakan muncul saat icon kapal di klik, icon kapal merupakan posisi kapal saat ini menghilang bila tidak di klik/pilih, fungsi zoom (saat membuka map maka langsung mengarah ke lokasi yang di set, misal penyebrangan bwi dan bali)
==============================================================