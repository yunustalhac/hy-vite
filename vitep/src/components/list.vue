<template>
  <h1 class="flex text-center justify-center text-[#80BC00] font-bold text-3xl mt-10 mb-5 tablet:mt-0 tablet:text-5xl ml-auto mr-auto">
    PROJENİN <br> KAZANIMLARI
  </h1>

  <div>
    <ul class="flex flex-col gap-14 text-[#737984] pr-14 pl-14">
      <li
          v-for="i in listItem"
          :key="i"
          class="before:content-['.'] before:mr-2 before:text-black before:text-3xl">
        {{i.itemText}}
      </li>
    </ul>
  </div>
</template>

<script setup>

const listItem = [
  {
    id: 1,
    itemText: "Doğal, temiz ve yenilenebilir enerjiden elde edilen gelir ile sürdürülebilir insani yardım faaliyetleri yapılacaktır. Bu sayede, zekat ve sadaka bağışları ile tek seferlik veya kısa vadeli insani yardım faaliyetleri, yerini sadaka-i câriye şekline dönüştürülmüş ve sürdürülebilir insani yardım modeline bırakmış olacaktır."
  },
  {
    id: 2,
    itemText: "    Barınma, beslenme, eğitim gibi birçok alanda gerekli olan uzun vadeli yatırımların fonu teminat altına alınmış olacaktır. Çünkü insani yardımın en önemli amacı, muhtaç kimseleri içinde bulundukları olumsuz şartlardan kurtarmaktır. Özellikle eğitim-öğretim faaliyetleri uzun vadeli ve büyük bütçeler gerektiren yardım alanlarıdır."
  },
  {
    id: 3,
    itemText: "    Yenilenebilir enerjinin yardım modeline dönüştürülmesi ile hem enerji üretim merkezinde hem de buradan elde edilen fonlarla yapılan eğitim, sağlık, barınma ve diğer yardım alanlarında istihdam sağlanmış olacaktır."
  },
  {
    id: 4,
    itemText: "    Yaklaşık 50 yıldan beri, insanlığın vazgeçilmez sınavı olan iklim değişikliği ve küresel ısınmaya karşı yenilenebilir enerji kaynakları kullanılmış olacak ve doğaya zarar veren fosil yakıtlar ile sera gazı etkisi azaltılmış olup gelecek kuşakların yaşamı korunmuş olacaktır."
  },
  {
    id: 5,
    itemText: "    Birleşmiş Milletler sürdürülebilir kalkınma hedeflerinden olan erişilebilirlik ve temiz enerji hedefine uygun olarak, insanlığın genel problemlerinin çözümüne katkı sağlanacaktır."
  },
  {
    id: 6,
    itemText: "    Bu sistem sayesinde insani yardım kapasitesi büyüyüp faaliyet alanları genişleyecek ve milyonlarca yetim, mazlum ve mağdur insana ulaşma imkânı ortaya çıkacaktır."
  },
  {
    id: 7,
    itemText: "    En önemlisi de bu proje, destek verenler için kıyamete kadar devam edecek bir sadaka-i cariyeye dönüşecektir."
  },
  {
    id: 8,
    itemText: "    Ülkemizin ve miletimizin yardımsever kimliğini sınırlarımızın ötesine taşıyabiliriz."
  },

]
</script>

<style lang="scss" scoped>

</style>