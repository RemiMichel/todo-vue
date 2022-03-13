<template>
  <div class="sticky-top nav-bar">
    <img class="margin-s width-sm height-sm rounded-btn logo" src="@/assets/initial4.png" alt="About"
         v-on:click="$router.push(resolve_route(ROUTES.ABOUT))">
    <nav class="" aria-label="breadcrumb" style="display: inline-block">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-color-main" :to="resolve_route(ROUTES.HOME)"><i class="fa fa-home"></i></router-link>
        </li>
        <template v-for="(item, index) in current_route.matched">
          <li v-if="item && index !== ($router.currentRoute.matched.length-1)" class="margin-0 breadcrumb-item">
            <router-link class="text-color-main" :to="resolve_route_by_path(item.path)">{{ item.name }}</router-link>
          </li>
          <li v-else class="margin-0 breadcrumb-item active" aria-current="page">
            {{ item.name }}
          </li>
        </template>
      </ol>
    </nav>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: 'NavBar',
  computed: {
    ...mapState(
        {current_route:"current_route"}
    )
  }
}
</script>
