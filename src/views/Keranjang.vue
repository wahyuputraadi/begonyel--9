<template>
  <div class="keranjang">
      <Header />
       <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/"><i class="fas fa-home"></i> Home</router-link></li>
                <li class="breadcrumb-item active" aria-current="page"><b>List Product</b></li>
            </ol>
        </nav>
    </div>
      <div class="container">
          <div class="row">
              <div class="col">
                  <table class="table">
                    <thead>
                        <tr>
                            <th scope="col-lg-2">Gambar</th>
                            <th scope="col-lg-2">Nama</th>
                            <th scope="col-lg-3">Keterangan</th>
                            <th scope="col-lg-1">Jumlah</th>
                            <th scope="col-lg-2">Harga</th>
                            <th scope="col-lg-1">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col-lg-2"><img class="img-keranjang" src="../assets/nasi-ayam-keranjang.png" alt=""></td>
                            <td class="col-lg-2">Nasi Geprek Klenger</td>
                            <td class="col-lg-3">Pedes level 3 yaa, mantapp loor</td>
                            <td class="col-lg-1">1</td>
                            <td class="col-lg-2">Rp. 20.000</td>
                            <td class="col-lg-1"><i class="fas fa-trash-alt"></i></td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <div class="row">
                    <div class="col text-right">
                        <h6><b>Total Harga : <span class="ml-5">Rp 20.000</span></b></h6>
                    </div>
                </div>
                <div class="row justify-content-end mt-5">
                    <div class="col-lg-4">
                        <div class="form-group">
                        <label for="jumlah_pemesanan">Nama</label>
                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Nama Pemesan" rows="1"></textarea>
                            </div> 
                        </div>
                        <label for="jumlah_pemesanan">Nomor</label>
                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Nomor Meja" rows="1"></textarea>
                            </div>                     
                        <router-link to="/success"><div class="btn btn-warning mt-3">Pesan Sekarang <i class="fas fa-arrow-right"></i></div></router-link>               
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    name:"Keranjang",
    components:{
        Header,
    }
}
</script>

<style>
.keranjang .img-keranjang {
    width: 100%;
    height: 120px;
    border-radius: 10px;
    object-fit: cover;
}
.keranjang .fa-trash-alt {
    color: #d83d3d;
}
</style>