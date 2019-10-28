<template>
  <div class="row">
    <div class="col-md-5" style="padding-top: 8px;">
      Showing 1 to 30 of 186 records
    </div>
    <div class="col-md-7 text-right">
      <ul class="pagination pagination-custom">
        <li class="page-item disabled">
          <a class="page-link no-radius">{{ $t('pagination.first') }}</a>
        </li>
        <li class="page-item disabled">
          <a class="page-link no-radius">{{ $t('pagination.previous') }}</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active">
          <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link no-radius" href="#">{{ $t('pagination.next') }}</a>
        </li>
        <li class="page-item">
          <a class="page-link no-radius" href="#">{{ $t('pagination.last') }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    data: function () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>