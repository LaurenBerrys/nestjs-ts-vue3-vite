/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 14:22:38
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-22 14:48:20
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/store/tags.ts
 * @Description: 
 * 
 */
import { defineStore } from 'pinia'
import router from '@/router'
export const WITHOUT_TAG_PATHS = ['/404', '/login']

export const useTagsStore = defineStore('tag', {
  state() {
    return {
      tags: [] as any,
      activeTag: '' as any,
    }
  },
  persist: {
    storage: localStorage,
    paths: ['tags', 'activeTag']
  },
  actions: {
    activeIndex() {
      return this.tags.findIndex((item: any) => item.path === this.activeTag)
    },
    setActiveTag(path) {
      this.activeTag = path
    },
    setTags(tags) {
      this.tags = tags
      console.log(this.tags);
      
    },
    addTag(tag: any = {}) {
      this.setActiveTag(tag.path)
      console.log(this.tags);
      if (!this.tags.some((item: any) => item.path === tag.path)){
        return this.setTags([...this.tags, tag])
      }
    },
    removeTag(path) {
      if (path === this.activeTag) {
        if (this.activeIndex() > 0) {
          router.push(this.tags[this.activeIndex() - 1].path)
        } else {
          router.push(this.tags[this.activeIndex() + 1].path)
        }
      }
      this.setTags(this.tags.filter((tag) => tag.path !== path))
    },
    removeOther(curPath) {
      if (!curPath) {
        curPath = this.activeTag
      }
      this.setTags(this.tags.filter((tag) => tag.path === curPath))
      if (curPath !== this.activeTag) {
        router.push(this.tags[this.tags.length - 1].path)
      }
    },
    removeLeft(curPath) {
      const curIndex = this.tags.findIndex((item) => item.path === curPath)
      const filterTags = this.tags.filter((item, index) => index >= curIndex)
      this.setTags(filterTags)
      if (!filterTags.find((item) => item.path === this.activeTag)) {
        router.push(filterTags[filterTags.length - 1].path)
      }
    },
    removeRight(curPath) {
      const curIndex = this.tags.findIndex((item) => item.path === curPath)
      const filterTags = this.tags.filter((item, index) => index <= curIndex)
      this.setTags(filterTags)
      if (!filterTags.find((item) => item.path === this.activeTag)) {
        router.push(filterTags[filterTags.length - 1].path)
      }
    },
    resetTags() {
      this.setTags([])
      this.setActiveTag('')
    },
  },
})
