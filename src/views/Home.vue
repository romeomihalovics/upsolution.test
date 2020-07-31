<template>
  <div class="home">
    <firstSection/>
    <secondSection/>
    <thirdSection/>
  </div>
</template>

<script>
import firstSection from '@/components/firstSection.vue'
import secondSection from '@/components/secondSection.vue'
import thirdSection from '@/components/thirdSection.vue'

export default {
  name: 'Home',
  metaInfo () {
    return {
      title: 'Beni\'s - Főoldal',
      meta: [
        {
          name: 'description',
          content: 'Upsolution front end test task ("Beni\'s")'
        }
      ]
    }
  },
  components: {
    firstSection,
    secondSection,
    thirdSection
  }
}
</script>
