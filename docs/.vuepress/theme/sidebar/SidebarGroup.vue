<template>
  <div
      class="sidebar-group"
      :class="{ first, collapsable }"
  >
    <DropdownTransition>
      <ul
          ref="items"
          class="sidebar-group-items"
          v-if="open || !collapsable"
      >
        <template v-for="(section, sIdx) in sections" :key="sIdx">
          <template v-if="section.header">
            <li>
              <SidebarSectionHeader
                  :item="section.header"
                  :collapsible="true"
                  :expanded="!collapsedSections[section.key]"
                  @toggle="toggleSection(section.key)"
              />
              <DropdownTransition>
                <ul
                    v-if="!collapsedSections[section.key]"
                    class="sidebar-section-items"
                >
                  <li v-for="(child, cIdx) in section.items" :key="cIdx">
                    <SidebarLink
                        :closeSidebarDrawer="closeSidebarDrawer"
                        :item="child"
                    />
                  </li>
                </ul>
              </DropdownTransition>
            </li>
          </template>
          <template v-else>
            <li v-for="(child, cIdx) in section.items" :key="cIdx">
              <SidebarLink
                  :closeSidebarDrawer="closeSidebarDrawer"
                  :item="child"
              />
            </li>
          </template>
        </template>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import SidebarLink from './SidebarLink.vue'
import SidebarSectionHeader from './SidebarSectionHeader.vue'
import DropdownTransition from "../components/DropdownTransition.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  first: {
    type: Boolean,
    required: true
  },
  open: {
    type: Boolean,
    required: true
  },
  collapsable: {
    type: Boolean,
    required: true
  },
  closeSidebarDrawer:{
    type: Function,
    default: () => {}
  }
})

const sections = computed(() => {
  const children = props.item?.children || []
  const result = []
  let current = { header: null, items: [], key: '__leading__' }
  for (const child of children) {
    if (child?.type === 'section-header') {
      if (current.header || current.items.length) result.push(current)
      current = { header: child, items: [], key: child.title || `section-${result.length}` }
    } else {
      current.items.push(child)
    }
  }
  if (current.header || current.items.length) result.push(current)
  return result
})

const collapsedSections = reactive({})

const toggleSection = (key) => {
  collapsedSections[key] = !collapsedSections[key]
}
</script>

<style lang="stylus">
@import '../../styles/config.styl'

.sidebar-group
  &:not(.first)
    margin-top 1em

  .sidebar-group
    padding-left 0.5em

  &:not(.collapsable)
    .sidebar-heading
      cursor auto
      color inherit

.sidebar-heading
  color $sidebarHeadingColorText
  cursor pointer
  font-size 0.95em
  padding 0 1.5rem
  margin 0 1.2rem 1.5rem 1.6rem
  height 2.5625rem
  line-height 2.5625rem
  background-color #f2f4f5
  border-radius 4px
  font-weight 600

  &.open, &:hover
    color inherit

  .arrow
    position relative
    top -0.12em
    left 0.5em

  &.open .arrow
    top -0.18em

.sidebar-group-items
  transition height .1s ease-out
  overflow hidden

.sidebar-section-items
  padding 0
  margin 0
  list-style-type none
  overflow hidden
</style>
