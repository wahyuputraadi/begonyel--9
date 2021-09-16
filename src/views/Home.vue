<template>
  <div class="home">
     <Header />
     <Banner />
     <Carousel />
     <div class="container mt-5">
        <div class="row"> 
            <div class="col-lg-6">
               <div class="menu-kami">
                    <h1><b>Menu</b> Kami</h1>
                </div>
            </div>
            <div class="col-lg-6 text-right">
               <router-link to="list-product"><div class="btn btn-light">
                    <h5><i class="fas fa-eye"></i> Lihat Semua</h5>
                </div></router-link>
            </div>
        </div>
      </div>
      <ListMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Carousel from '@/components/Carousel.vue'
import ListMenu from '@/components/ListMenu.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Carousel,
    ListMenu,
  }
}
</script>

