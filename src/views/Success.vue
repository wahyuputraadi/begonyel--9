<template>
  <div class="success">
      <Header />
      <div class="row text-center mt-4">
          <div class="col">
              <img class="img-success" src="../assets/success.png" alt="img-success">
              <h2 class="mt-4">Yeayy Berhasil</h2>
              <p class="my-3">Kamu akan menerima pesananmu Dalam <br> Beberapa saat lagi</p>
              <router-link to="/" class="btn btn-warning">Pesan Kembali <i class="fas fa-redo-alt"></i></router-link>
          </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {  
    name:"Success",
    components : {
    Header
    }
}
</script>

<style>
    .img-success {
        width: 250px;
        height: auto;
    }
</style>