<script lang="ts" setup>
const title = 'Jasa Titip War Tiket Konser'
const description = 'Beli tiket konser idola kamu tanpa ribet. Kami siap membantu kamu mendapatkan tiket dengan mudah dan cepat.'
// const resolve = resolveComponent
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/ProfilePicture.jpeg',
  ogUrl: '',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/ProfilePicture.jpeg',
  twitterCard: 'summary_large_image',
  keywords: 'jastip tiket, war tiket konser, jasa titip tiket'
})

const reasonCards = ref([
  {
    title: 'Mudah & Praktis',
    description: 'Kami urus semuanya untuk kamu.',
    icon: 'streamline-stickies-color:sent-from-computer'
    // customIcon: 'icons-effortless'
  },
  {
    title: 'Cepat & Ditangani Manusia',
    description: 'Ditangani oleh tim asli, bukan bot.',
    icon: 'streamline-stickies-color:face-id-1'
  },
  {
    title: 'Aman & Transparan',
    description: 'Update real-time melalui WA.',
    icon: 'streamline-stickies-color:validation-1-duo'
  },
  {
    title: 'Harga Jelas',
    description: 'Tanpa biaya tersembunyi.',
    icon: 'streamline-stickies-color:reciept-1'
  }
])
</script>

<template>
  <div>
    <UPageHero
      title="Jasa Titip War Tiket Konser"
      description="Beli tiket konser idola kamu tanpa ribet. Kami siap membantu kamu mendapatkan tiket dengan mudah dan cepat."
      headline="Sejak 2024"
      orientation="horizontal"
      :ui="{ root: 'px-2 md:px-5 lg:px-10', title: 'text-gray-azure', headline: 'text-pastel-azure drop-shadow' }"
    >
      <img
        src="@/assets/images/ticket.png"
        alt="Ticket Illustration"
        class="hidden lg:block drop-shadow-2xl"
      >
      <template #links>
        <button class="py-4 px-10 rounded-full bg-gradient-to-r from-pastel-azure to-pastel-turqoise cursor-pointer shadow">
          <span class="drop-shadow text-white font-semibold text-lg">Pesan Sekarang</span>
        </button>
      </template>
    </UPageHero>
    <!-- <icons-effortless class="w-24" /> -->
    <UPageSection
      id="why"
      title="Mengapa Memilih Kami?"
      description="Kami menawarkan layanan jastip tiket konser yang mudah, cepat, dan terpercaya. Berikut beberapa alasan mengapa kamu harus memilih kami:"
      :ui="{ root: 'px-2 md:px-5 lg:px-10', title: 'text-gray-azure' }"
    >
      <UPageGrid class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <UPageCard
          v-for="(card, index) in reasonCards"
          :key="index"
          v-bind="card"
          reverse
          :ui="{
            wrapper: 'flex flex-col justify-center items-center text-center',
            leadingIcon: 'text-pastel-azure size-24'
          }"
        >
          <!-- <component
            :is="resolve(card.customIcon)"
            v-if="card.customIcon"
            class="w-24 h-24 size-24"
          /> -->
          <!-- <icons-effortless class="size-24 drop-shadow-lg" /> -->
          <!-- <template
            v-if="card.customIcon"
            #leading
          >
            <component
              :is="resolve(card.customIcon)"
              class="w-24 h-24 size-24"
            />
          </template> -->
        </UPageCard>
      </UPageGrid>
    </UPageSection>
    <UPageSection
      id="trusted"
      :ui="{ root: 'px-2 md:px-5 lg:px-10' }"
    >
      <UPageCTA
        title="Siap War Tiket?"
        description="Mulai sekarang dan gunakan layanan jasa titip war tiket konser kami."
        :links="[{
          label: 'Contact Us',
          to: '/contact',
          target: '_blank'
        }]"
        :ui="{
          root: 'border-none ring-0',
          wrapper: 'flex flex-col justify-center items-center text-center border-none',
          title: 'text-3xl text-gray-azure',
          links: 'w-fit py-4 px-10 rounded-full bg-gradient-to-r from-pastel-azure to-pastel-turqoise text-white font-semibold !text-lg shadow'
        }"
      />
    </UPageSection>
  </div>
</template>
