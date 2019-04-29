<template>
  <div class="bj-layout-inspector">
    <b-tabs v-model="activeTab">
      <b-tab-item label="attrs">
        <section>
          <b-field label="Item Count" custom-class="is-small">
            <b-numberinput controls-position="compact"
              v-model="data.attrs.itemCount"
              size="is-small"
              min="1"
              max="10"/>
          </b-field>
        </section>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      activeTab: 0,
    }
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.bj-layout-inspector {

}
</style>
