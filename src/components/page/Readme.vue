<template>
  <div id="pages" :class="[getTheme]">
      <n-header @tools="changePages"></n-header>
      <section class="container" :class="{'hide': table}">
          <n-add></n-add>
          <n-list></n-list>
          <n-sidebar :is-show="tools"
                    @cleardialog="clearData"
                    @uploadData="uploadData"
                    @opentable="table = true; tools = false"
                    @opentheme="theme = treu; tools = false"></n-sidebar>
      </section>
      
  </div>
</template>
