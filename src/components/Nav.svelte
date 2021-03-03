<script>
  let segment = 'Home';
  let logo = '{ HUVISON }'
  
  function changeNavItem(event) {
      segment = event.srcElement.innerText;
  }
</script>

<style>

</style>

<header class="w-full absolute left-0 top-0 p-6 lg:p-32">
    <div class="flex justify-between">
      <div>
        <h1 class="text-3xl font-bold text-white">{logo}</h1>
      </div>
      
      <div>
        <ul class="flex">
          <li class="ml-24">
            <a href=".">
              <div class="flex items-center justify-end">
<!--                <h1 class="ml-3 text-3xl font-bold text-huvison-secondary">1</h1>-->
                <div class="w-10 border-b border-solid border-huvison-secondary"></div>
              </div>
              <div class="text-right text-huvison-secondary">Home</div>
            </a>
          </li>
          <li class="ml-24">
            <a href="about">
              <div class="flex items-center justify-end">
<!--                <h1 class="ml-3 text-3xl font-bold text-huvison-secondary">2</h1>-->
                <div class="w-10 border-b border-solid border-huvison-secondary"></div>
              </div>
              <div class="text-right text-huvison-secondary">About</div>
            </a>
          </li>
          <li class="ml-24">
            <a href="projects">
              <div class="flex items-center justify-end">
<!--                <h1 class="ml-3 text-3xl font-bold text-huvison-secondary">3</h1>-->
                <div class="w-10 border-b border-solid border-huvison-secondary"></div>
              </div>
              <div class="text-right text-huvison-secondary">Projects</div>
            </a>
          </li>

          <li class="ml-24">
            <a href="blog">
              <div class="flex items-center justify-end">
<!--                <h1 class="ml-3 text-3xl font-bold text-huvison-secondary">4</h1>-->
                <div class="w-10 border-b border-solid border-huvison-secondary"></div>
              </div>
              <div class="text-right text-huvison-secondary">Blog</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
