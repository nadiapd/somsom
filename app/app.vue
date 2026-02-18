<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const mainMenu: NavigationMenuItem[] = [
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Events',
    to: '/events'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
]
</script>

<template>
  <UApp>
    <UHeader
      :toggle="false"
      :ui="{
        header: 'h-24 md:h-32',
        root: 'h-24 md:h-32'
      }"
    >
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-22 drop-shadow hover:drop-shadow-lg" />
        </NuxtLink>
      </template>
      <template #right>
        <UNavigationMenu
          :items="mainMenu"
          :ui="{
            link: 'font-semibold text-lg text-gray-azure hover:text-pastel-azure before:bg-transparent hover:before:bg-transparent focus-visible:before:bg-transparent data-[state=open]:before:bg-transparent'
          }"
        />
      </template>
      <!-- IF MOBILE and TOGGLE is TRUE -->
      <!-- <template #right>
        <UNavigationMenu
          :items="mainMenu"
          :ui="{
            link: 'text-lg text-gray-azure hover:text-pastel-azure before:!bg-transparent hover:before:!bg-transparent data-[state=open]:before:!bg-transparent'
          }"
          class="hidden md:flex"
        />
      </template>
      <template #body>
        <UNavigationMenu
          :items="mainMenu"
          orientation="vertical"
          :ui="{
            link: 'text-lg text-gray-azure hover:text-pastel-azure before:!bg-transparent hover:before:!bg-transparent'
          }"
        />
      </template> -->
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator
      label="#FromFriendsForFans"
      :ui="{
        label: 'italic text-gray-700 font-semibold text-lg'
      }"
    />
    <p> Ini testing script</p>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Somsom Jastip © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://www.instagram.com/somsom.tik"
          target="_blank"
          icon="i-simple-icons-instagram"
          aria-label="Instagram"
          class="font-semibold text-lg text-gray-azure hover:text-pastel-azure before:bg-transparent hover:before:bg-transparent focus-visible:before:bg-transparent data-[state=open]:before:bg-transparent"
        />
      </template>
    </UFooter>
  </UApp>
</template>
