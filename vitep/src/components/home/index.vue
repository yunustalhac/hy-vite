<!--bismillah-->
<template>
  <div class="box-border p-0 m-0 max-w-[980px] ml-auto mr-auto">
    <div class="h-[100vh] flex justify-center items-center">
      <div class="max-w-[940px] ml-auto mr-auto ">
        <login class="pl-10 pr-10 flex items-center"/>
      </div>
    </div>
    <div class="tablet:p-20 p-5">
      <phagraf/>
    </div>

    <div>
      <surec/>
    </div>

    <div class="mt-24">
      <list/>
    </div>

    <div class="mt-[100px]">
      <select-vue/>
    </div>

    <div>
      <footer-page/>
    </div>


  </div>
</template>

<script setup>

import Login from "@/components/login.vue";
import Phagraf from "@/components/phagraf.vue";
import SelectVue from "@/components/selectVue.vue";
import List from "@/components/list.vue";
import Surec from "@/components/surec.vue";
import FooterPage from "@/components/footerPage.vue";
</script>

<style  scoped>

</style>