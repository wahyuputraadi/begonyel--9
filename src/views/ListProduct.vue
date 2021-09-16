<template>
    <div class="listProduct">
         <Header />
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-breadcrumb ">
                    <li class="breadcrumb-item"><router-link to="/"><i class="fas fa-home"></i> Home></router-link></li>
                    <li class="breadcrumb-item active" aria-current="page"><b>List Product</b></li>
                </ol>
            </nav>
            <div class="input-group mb-2">
                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Mau makan apa hari ini . . .">
                <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fas fa-search"></i></div>
                </div>
            </div>
        </div>
        <ListMenu />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ListMenu from '@/components/ListMenu.vue'

export default {
    name : 'ListProduct',
    components: {
    Header,
    ListMenu
  }
}
</script>

<style>

</style>