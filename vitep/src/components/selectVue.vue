<template>
    <div class="ml-auto mr-auto ">
      <h1 class="flex justify-center text-[#80BC00] font-bold  text-3xl mt-10 mb-40 tablet:mt-0 tablet:text-5xl ml-auto mr-auto">
        PROJENİ SEÇ</h1>
      <div
          class="gap-[150px] mt-[100px] flex flex-col tablet:flex-row tablet:ml-auto tablet:mr-auto tablet:pl-10 tablet:pr-10  items-center  ml-auto mr-auto">
        <div
            class="relative w-[50%] h-[300px] border-2 border-[#FDDF4D] flex flex-col justify-center items-center rounded-3xl">
          <img class="absolute top-[-92px]" src="@/img/yıldırım.svg">
          <h5 class="text-2xl text-[#80BC00] mb-10 mt-[25px]">YURT İÇİ <br> PROJELER</h5>
          <select class="border-b-2 border-b-[#80BC00] w-[80%] mb-10 select-all-[#80BC00]">
            <option class="text-[#737984]">Projeni seç</option>
            <option>Hayvancılık Projesi</option>
            <option>Fırın Projesi</option>
            <option>Şanlıurfa Aile Konaklama Merkezi</option>
            <option>Şanlıurfa Erkek Yetim Eğitim Merkezi</option>
            <option>Şanlıurfa Kız Yetim Eğitim Merkezi</option>
            <option>Gaziantep Yetim Eğitim Merkezi</option>
          </select>
          <div class="absolute bottom-[0] mb-5">
            <a href="#">
              <button class="bg-[#80BC00] text-white h-[40px] w-[100px] rounded-[10px]">DESTEK OL</button>
            </a>
          </div>
        </div>

        <div
            class="relative w-[50%] h-[300px] border-2 border-[#FDDF4D] flex flex-col justify-center items-center rounded-3xl">
          <img class="absolute top-[-92px]" src="@/img/yıldırım.svg">
          <h5 class="text-2xl text-[#80BC00] mb-10 mt-[25px]">YURT DIŞI
            <br> PROJELER</h5>
          <select class="border-b-2 border-b-[#80BC00] w-[80%] mb-10 select-all-[#80BC00]">
            <option class="text-[#737984]">Projeni seç</option>
            <option>
              Dünya Kur’an Okuyor Projesi
            </option>
            <option>
              Suriye Koordinasyon Merkezi
            </option>
            <option>
              TukTuk Aracı Projesi
            </option>
            <option>
              3 Keçi 1 Teke Projesi
            </option>
            <option>
              Dikiş Nakış Eğitim ve Destek
            </option>
            <option>
              Sri Lanka Acil Yardım
            </option>
          </select>
          <div class="absolute bottom-[0] mb-5">
            <a href="#">
              <button class="bg-[#80BC00] text-white h-[40px] w-[100px] rounded-[10px]">DESTEK OL</button>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>