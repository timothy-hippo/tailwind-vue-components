<template>
  <div>
    <header class="text-gray-600 body-font fixed">
      <div class="container p-5">
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <router-link to="/progress-bar" class="mr-5 hover:text-gray-900">ProgressBar</router-link>
          <router-link to="" class="mr-5 hover:text-gray-900">Second Link</router-link>
          <router-link to="" class="mr-5 hover:text-gray-900">Third Link</router-link>
          <router-link to="" class="mr-5 hover:text-gray-900">Fourth Link</router-link>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
