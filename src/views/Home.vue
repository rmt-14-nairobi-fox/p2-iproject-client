<template>
  <div>
    <div class="min-h-screen max-w-screen-lg mx-auto">
      <div class="p-6">
        <Carousel />
      </div>
      <ContentHome />
      <SingleCard />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import ContentHome from "@/components/ContentHome";
import SingleCard from "@/components/HomeSingleCard";

export default {
  name: "Home",
  components: {
    Carousel,
    ContentHome,
    SingleCard,
  },
  created(){
    this.$store.dispatch("getChoice")
  }
};
</script>
