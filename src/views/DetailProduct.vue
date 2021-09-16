<template>
  <div class="detailproduct">
     <Header />
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-breadcrumb">
                <li class="breadcrumb-item"><router-link to="/"><i class="fas fa-home"></i> Home</router-link></li>
                <li class="breadcrumb-item active" aria-current="page"><b>List Product</b></li>
            </ol>
        </nav>
    </div>
    <!-- detail content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item p-3 active">
                    <img  src="../assets/foto-detail.png" class="d-block w-100 img-carousel" alt="carousel">
                </div>
                <div class="carousel-item p-3">
                    <img  src="../assets/foto-detail.png" class="d-block w-100 img-carousel" alt="carousel">
                </div>
                <div class="carousel-item p-3">
                    <img  src="../assets/foto-detail.png" class="d-block w-100 img-carousel" alt="carousel">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <i class="fas fa-arrow-circle-left"></i>
              
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <i class="fas fa-arrow-circle-right"></i>
                
            </a>
            </div>
        </div>
        <div class="col-lg-5 ml-4 mt-4">
          <h2>Nasi Geprek Klenger</h2>
          <p>Harga : <b>Rp. 20.000</b></p>
          <hr>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
                <input style="width:70px;" type="number" placeholder="1" class="form-control"
              />
            </div>
            <label for="jumlah_pemesanan">Keterangan</label>
            <div class="form-group">
              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Berikan catatan kepada kami" rows="4"></textarea>
            </div>                     
            <router-link to="/keranjang"><div class="btn btn-warning">Masukkan Keranjang <i class="fas fa-arrow-right"></i></div></router-link>               
        </div>
      </div>
      <div class="container mt-5">
        <div class="row"> 
            <div class="col-lg-6">
               <div class="menu-kami">
                    <h1><b>Menu</b> Kami</h1>
                </div>
            </div>
            <div class="col-lg-6 text-right">
               <router-link to="list-product">
                 <div class="btn btn-light">
                    <h5><i class="fas fa-eye"></i> Lihat Semua</h5>
                </div>
                </router-link>
            </div>
        </div>
      </div>
      <ListMenu />
    </div>
    <!-- akhir detail content -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ListMenu from '@/components/ListMenu.vue'

export default {
    name:"DetailProduct",
    components: {
    Header,
    ListMenu,
  }
}
</script>

<style>

</style>