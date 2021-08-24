<template>
  <div>
    <Navbar />  
    <div class="max-w-screen-lg  mx-auto">
      <div class="p-6">
        <Carousel />  
      </div>
      <ContentHome />
      <SingleCard />
      <Footer />
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import ContentHome from '@/components/ContentHome'
import SingleCard from '@/components/HomeSingleCard'
import Footer from '@/components/Footer'

export default {
  name: "Home",
  components: {
    Navbar,
    Carousel,
    ContentHome,
    SingleCard,
    Footer
  },
};
</script>
