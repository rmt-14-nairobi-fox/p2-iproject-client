import Vue from "vue";
import Cloudinary, { CldImage } from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: "stories-for-all" },
  components: [CldImage],
});

export default Cloudinary