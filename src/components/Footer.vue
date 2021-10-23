<template>
  <div class="footer-h8 ">
    <div class="footer-h8-left flex items-center">
      <img
        src="https://i.postimg.cc/Y2NMhk3W/Logo-Hacktiv8-bordered-1.png"
        alt=""
        class="logo-hacktiv8 img-logo"
      />
      <h1 class="mr-3 accent-orange-text font-thin text-xl">X</h1>
      <div class="flex items-center">
        <img class="h-12 mr-1" src="https://ik.imagekit.io/ztg2jcaeb0e/Companies/LOGO_H5raSFUVQ.png?updatedAt=1627915336751" >
      </div>
    </div>
    <div class="footer-h8-bottom-row">
      <div class="social-links flex">
        <a
          href="https://twitter.com/hacktiv8id"
          target="_blank"
          class="social-link hover-link w-inline-block"
          ><img
            src="https://img.icons8.com/metro/26/ffffff/twitter.png"
            alt=""
            class="social-link-image"/></a
        ><a
          href="https://www.facebook.com/hacktiv8id"
          target="_blank"
          class="social-link hover-link w-inline-block"
          ><img
            src="https://img.icons8.com/metro/26/ffffff/facebook-new--v2.png"
            alt=""
            class="social-link-image"/></a
        ><a
          href="https://instagram.com/hacktiv8id"
          target="_blank"
          class="social-link hover-link w-inline-block"
          ><img
            src="https://img.icons8.com/metro/26/ffffff/instagram-new.png"
            alt=""
            class="social-link-image"/></a
        ><a
          href="https://www.youtube.com/c/hacktiv8"
          target="_blank"
          class="social-link hover-link w-inline-block"
          ><img
            src="https://img.icons8.com/metro/26/ffffff/youtube.png"
            class="social-link-image"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hacktiv-footer'
}
</script>

<style scoped>
.footer-h8 {
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  background-color: #2C394B;
  border-top: 1px solid #FF4C29;
}

.footer-h8-bottom-row {
  margin-right: 20px;
}
.footer-h8-bottom-links {
  display: flex;
  justify-content: space-between;
  color: #a59e9c;
  font-size: 15px;
}

.logo-hacktiv8 {
  max-width: 100px;
  padding: 20px;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
}
.social-link {
  margin-right: 20px;
  color: #7d7e7e;
}

.social-link-image:hover {
  animation: rotation 8s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.img-logo {
  transition: transform 0.7s ease-in-out;
}
.img-logo:hover {
  transform: rotate(360deg);
}
</style>
