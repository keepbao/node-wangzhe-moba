<template>
      <m-card :title="title" :icon="icon">
      <div class="card-body pt-3">
        <div class="nav jc-between">
          <div class="nav-item" :class="{active: active === i}"
          v-for="(category,i) in categories" :key="i"
          @click="$refs.list.swiper.slideTo(i)">  
          <!-- slideTo表示滚动到 i 这个索引值上 （点击导航文字会滚动到对应页面）-->
            <div class="nav-link">{{category.name}}</div>
          </div>
        </div>
        <div class="pt-3">
          <!-- 表示把当前swiper真实的索引值赋值给active （滚动到对应页面，导航文字会自动高亮） -->
          <swiper ref="list" :options="{autoHeight:true}" @slide-change="() => active = $refs.list.swiper.realIndex">
            <swiper-slide v-for="(category,i) in categories" :key="i">
              <slot name="items" :category="category"></slot>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data(){
    return {
      active: 0
    }
  }
};
</script>

<style>
</style>
