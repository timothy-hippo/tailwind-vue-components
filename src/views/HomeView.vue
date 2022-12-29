<template>
  <div>
    <header class="text-gray-600 body-font fixed">
      <div class="container p-5">
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <router-link to="/progress-bar" class="mr-5 hover:text-gray-900">ProgressBar</router-link>
          <router-link to="/rabbit-button" class="mr-5 hover:text-gray-900">RabbitButton</router-link>
          <router-link to="/accordion-menu-item" class="mr-5 hover:text-gray-900">AccordionMenuItem</router-link>
          <router-link to="/simple-calendar" class="mr-5 hover:text-gray-900">SimpleCalendar</router-link>
          <router-link to="/modal-view" class="mr-5 hover:text-gray-900">Modal</router-link>
          <router-link to="/dark-mode-switcher" class="mr-5 hover:text-gray-900">DarkModeSwitcher</router-link>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
