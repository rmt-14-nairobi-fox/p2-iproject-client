<template>
  <div
    class="mt-12 grid grid-cols-2 content-center mx-auto items-center w-10/12"
  >
    <!-- CAROUSEL -->
    <div class="carousel relative rounded relative shadow-xl max-w-6xl">
      <div class="carousel-inner relative w-full">
        <!--Slide 1-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div
          class="carousel-item absolute opacity-0 bg-center"
          style="
            height: 500px;
            background-image: url(https://mdbootstrap.com/img/new/slides/052.jpg);
          "
        ></div>
        <label
          for="carousel-3"
          class="
            control-1
            w-10
            h-10
            ml-2
            md:ml-10
            absolute
            cursor-pointer
            hidden
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-blue-700
            leading-tight
            text-center
            z-10
            inset-y-0
            left-0
            my-auto
            flex
            justify-center
            content-center
          "
        >
          <i class="fas fa-angle-left mt-3"></i>
        </label>
        <label
          for="carousel-2"
          class="
            next
            control-1
            w-10
            h-10
            mr-2
            md:mr-10
            absolute
            cursor-pointer
            hidden
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-blue-700
            leading-tight
            text-center
            z-10
            inset-y-0
            right-0
            my-auto
          "
        >
          <i class="fas fa-angle-right mt-3"></i>
        </label>

        <!--Slide 2-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          class="carousel-item absolute opacity-0 bg-center"
          style="
            height: 500px;
            background-image: url(https://mdbootstrap.com/img/new/slides/043.jpg);
          "
        ></div>
        <label
          for="carousel-1"
          class="
            control-2
            w-10
            h-10
            ml-2
            md:ml-10
            absolute
            cursor-pointer
            hidden
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-blue-700
            leading-tight
            text-center
            z-10
            inset-y-0
            left-0
            my-auto
          "
        >
          <i class="fas fa-angle-left mt-3"></i>
        </label>
        <label
          for="carousel-3"
          class="
            next
            control-2
            w-10
            h-10
            mr-2
            md:mr-10
            absolute
            cursor-pointer
            hidden
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-blue-700
            leading-tight
            text-center
            z-10
            inset-y-0
            right-0
            my-auto
          "
        >
          <i class="fas fa-angle-right mt-3"></i>
        </label>

        <!--Slide 3-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          class="carousel-item absolute opacity-0"
          style="
            height: 500px;
            background-image: url(https://mdbootstrap.com/img/new/slides/054.jpg);
          "
        ></div>
        <label
          for="carousel-2"
          class="
            control-3
            w-10
            h-10
            ml-2
            md:ml-10
            absolute
            cursor-pointer
            hidden
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-blue-700
            leading-tight
            text-center
            z-10
            inset-y-0
            left-0
            my-auto
          "
        >
          <i class="fas fa-angle-left mt-3"></i>
        </label>
        <label
          for="carousel-1"
          class="
            next
            control-3
            w-10
            h-10
            mr-2
            md:mr-10
            absolute
            cursor-pointer
            hidden
            font-bold
            text-black
            hover:text-white
            rounded-full
            bg-white
            hover:bg-blue-700
            leading-tight
            text-center
            z-10
            inset-y-0
            right-0
            my-auto
          "
        >
          <i class="fas fa-angle-right mt-3"></i>
        </label>

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="
                carousel-bullet
                cursor-pointer
                block
                text-4xl text-white
                hover:text-blue-700
              "
            >
              •
            </label>
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="
                carousel-bullet
                cursor-pointer
                block
                text-4xl text-white
                hover:text-blue-700
              "
            >
              •
            </label>
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-3"
              class="
                carousel-bullet
                cursor-pointer
                block
                text-4xl text-white
                hover:text-blue-700
              "
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
    <div class="max-w-2xl">
      <div class="w-full w-auto px-4 mr-auto ml-auto">
        <div
          class="
            text-gray-600
            p-3
            text-center
            inline-flex
            items-center
            justify-center
            w-16
            h-16
            mb-6
            shadow-lg
            rounded-full
            bg-gray-100
          "
        >
          <i class="fas fa-user-friends text-xl"></i>
        </div>
        <h3 class="text-3xl mb-2 font-semibold leading-normal">
          Working with us is a pleasure
        </h3>
        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          Don't let your uses guess by attaching tooltips and popoves to any
          element. Just make sure you enable them first via JavaScript.
        </p>
        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to go. Just
          make sure you enable them first via JavaScript.
        </p>
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          class="font-bold text-gray-800 mt-8"
        >
          Check Tailwind Starter Kit!
        </a>
      </div>
    </div>
    <!-- Details -->
    <div class="flex flex-wrap items-center mt-32">
      <div class="w-full w-auto px-4 mr-auto ml-auto">
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            bg-white
            w-full
            mb-6
            shadow-lg
            rounded-lg
            bg-pink-600
          "
        >
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
            class="w-full align-middle rounded-t-lg"
          />
          <blockquote class="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              class="absolute left-0 w-full block"
              style="height: 95px; top: -94px"
            >
              <polygon
                points="-30,95 583,95 583,65"
                class="text-pink-600 fill-current"
              ></polygon>
            </svg>
            <h4 class="text-xl font-bold text-white">Top Notch Services</h4>
            <p class="text-md font-light mt-2 text-white">
              The Arctic Ocean freezes every winter and much of the sea-ice then
              thaws every summer, and that process will continue whatever
              happens.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accommodation",
};
</script>

<style>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
