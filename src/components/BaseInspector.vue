<template>
  <div class="bj-base-inspector">
    <b-tabs v-model="activeTab">
      <b-tab-item label="Style">
        <section>
          <b-field label="Margin" custom-class="is-small">
            <b-input type="number" size="is-small"></b-input>
            <b-input type="number" size="is-small"></b-input>
            <b-input type="number" size="is-small"></b-input>
            <b-input type="number" size="is-small"></b-input>
          </b-field>
          <b-field label="Padding" custom-class="is-small">
            <b-input type="number" size="is-small"></b-input>
            <b-input type="number" size="is-small"></b-input>
            <b-input type="number" size="is-small"></b-input>
            <b-input type="number" size="is-small"></b-input>
          </b-field>
        </section>
      </b-tab-item>
      <b-tab-item label="Attributes">
        <slot />
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

.bj-base-inspector {

}
</style>
