<template>
    <div class="menu-item flex items-center">
        <a href="#">
            {{ title }}
        </a>
    <svg class="h-2 w-7"
      preserve-aspect-ratio="none"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 11 1 L 5.804 6.909 L 1 1"
        stroke="white"
        stroke-width="1.57025"
      ></path>
    </svg>
    <div class="sub-menu">
      <div v-for="(item, i) in items" :key="i" class="menu-item">
        <a :href="item.link">{{ item.title }}</a>
      </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'dropdown',
    props:['title', 'items']
}
</script>