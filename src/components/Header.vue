<template>
    <div id="app">
       <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light bg-white">
                            <router-link class="navbar-brand" to="/"><img class="logo" src="../assets/logobegonyel.png" alt="logo"></router-link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                <router-link class="nav-link active" to="/"><b>Home</b> <span class="sr-only">(current)</span></router-link>
                                <router-link class="nav-link" to="/list-product">Menu Makanan</router-link>
                                <router-link class="nav-link" to="/keranjang">Keranjang <i class="fas fa-shopping-bag"></i></router-link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
 name: 'Header',
  components: {
    // HelloWorld
  }
}
</script>

<style>

</style>