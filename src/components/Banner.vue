<template>
    <div id="app">
        <div class="banner">
           <!-- <div class="container"> -->
               <div class="row">
                   <div class="col-lg-6 m-auto">    
                       <div class="text-banner">
                            <h3>FoodMarket</h3>
                            <h1>Waktunya <br> pilih menu <span>favorite</span> kamu</h1>
                            <h3>mulai dari  <b>Rp 20.000</b></h3>
                            <div class="row mt-4">
                                <div class="col">
                                    <router-link to="/list-product"> <div class="btn btn-light mr-3">Lihat Menu</div></router-link>
                                    <router-link to="/detail-product"><div class="btn btn-warning">Pesan <i class="fas fa-arrow-right"></i></div></router-link>
                                </div>
                            </div>
                       </div>
                   </div>
                   <div class="col-lg-6">
                       <img class="img-banner" src="../assets/foodBanner.png" alt="foodbanner">
                   </div>
               </div>
           <!-- </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name : 'Banner',
}
</script>

<style lang="en">
 
</style>