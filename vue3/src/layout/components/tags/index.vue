<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 15:37:21
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-21 15:23:29
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/tags/index.vue
 * @Description: 
 * 
-->
<template>
  <ScrollX ref="scrollXRef" class="bg-white dark:bg-dark!">
    <n-tag
      v-for="tag in tagsStore.tags"
      ref="tabRefs"
      :key="tag.path"
      class="px-15 mx-5 rounded-4 cursor-pointer hover:color-primary"
      :type="tagsStore.activeTag === tag.path ? 'primary' : 'default'"
      :closable="tagsStore.tags.length > 1"
      @click="handleTagClick(tag.path)"
      @close.stop="tagsStore.removeTag(tag.path)"
      @contextmenu.prevent="handleContextMenu($event, tag)"
    >
      {{ tag.title }}
    </n-tag>
    <ContextMenu
      v-if="contextMenuOption.show"
      v-model:show="contextMenuOption.show"
      :current-path="contextMenuOption.currentPath"
      :x="contextMenuOption.x"
      :y="contextMenuOption.y"
    />
  </ScrollX>
</template>

<script setup lang="ts">
import ContextMenu from "./ContextMenu.vue";
import ScrollX from "@/components/common/ScrollX.vue";
const route = useRoute();
const router = useRouter();
const tagsStore = useTagsStore();
const tabRefs: any = ref([]);
const scrollXRef: any = ref(null);

const contextMenuOption = reactive({
  show: false,
  x: 0,
  y: 0,
  currentPath: "",
});

watch(
  () => route.path,
  () => {
    const { name, fullPath: path } = route;
    const title = route.meta?.title;
    tagsStore.addTag({ name, path, title });
  },
  { immediate: true }
);

watch(
  () => tagsStore.activeIndex(),
  async (activeIndex: any) => {
    await nextTick();
    const activeTabElement = tabRefs.value[activeIndex]?.$el;
    if (!activeTabElement) return;
    const { offsetLeft: x, offsetWidth: width } = activeTabElement;
    scrollXRef.value?.handleScroll(x + width, width);
  },
  { immediate: true }
);

const handleTagClick = (path) => {
  tagsStore.setActiveTag(path);
  router.push(path);
};

function showContextMenu() {
  contextMenuOption.show = true;
}
function hideContextMenu() {
  contextMenuOption.show = false;
}
function setContextMenu(x, y, currentPath) {
  Object.assign(contextMenuOption, { x, y, currentPath });
}

// 右击菜单
async function handleContextMenu(e, tagItem) {
  const { clientX, clientY } = e;
  hideContextMenu();
  setContextMenu(clientX, clientY, tagItem.path);
  await nextTick();
  showContextMenu();
}
</script>

<style>
.n-tag__close {
  box-sizing: content-box;
  border-radius: 50%;
  font-size: 12px;
  padding: 2px;
  transform: scale(0.9);
  transform: translateX(5px);
  transition: all 0.3s;
}
</style>
