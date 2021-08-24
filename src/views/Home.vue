<template>
  <div class="home">
        <!-- Banner Home -->
    <div class="container-fluid banner shadow-sm">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 anime text-center">アニメ</div>
          <div class="col-lg-8 jumbotron-tag">
            <p>Ayo beri niali "Anime" yang kamu tonton dan sampaikan disini bersama sama kita bantu orang orang menemukan anime yang cocok untuk mereka c⌒っ╹v╹ )っ</p>
            <div class="row text-center justify-content-center">
              <div class="col-md-12">
                <p>Daftar Sekarang dan jadilah Seorang Weebo</p>
              </div>

              <div class="form-banner">
                <input type="submit" value="Log-In" class="form-cl submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Anni Search -->
    <div class="head-search">
      <h1>The<strong>ANIME</strong>search</h1>
      <form class="search-box">
        <input type="search" class="search-field" placeholder="Search Anime" required />
      </form>
    </div>
    <main>
      <div class="cards justify-content-center">
        <div class="card-anime col-md-3">
          <a href="">
            <img src="../assets/naruto.jpg" alt="Anime Image" />
            <h3>Naruto</h3>
          </a>
        </div>
        
      </div>
    </main>
  </div>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  
};
</script>

