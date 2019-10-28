<template>
  <div>
    <h1 class="page-header">
      {{ $t(subject_name) }}
    </h1>
    <ol class="breadcrumb">
      <li v-for="(breadcrumb, index) in breadcrumbs" v-if="index !== (breadcrumbs.length - 1)">
        <router-link :to="{ name: breadcrumb.pathName }">{{ $t(breadcrumb.name) }}</router-link>
      </li>
      <li v-else class="active">{{ $t(breadcrumb.name) }}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "Breadcrumbs",
    props: {
      subject_name: {
        type: String,
        required: true,
      },
      breadcrumbs: {
        type: Array,
        required: true,
      }
    },
  }
</script>

<style scoped>

</style>