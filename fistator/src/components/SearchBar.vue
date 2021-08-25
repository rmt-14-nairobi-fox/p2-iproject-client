<template>
  <div style="display: flex; flex-direction: column; align-items: center; margin-top: 50px;">
        <h4 style="margin-bottom: 50px; text-align: center;">Feel free to choose your fish!</h4>
        <div style="display: flex">
            <div class="input-group">
                <div class="form-outline" style="width: 350px;">
                    <input type="search" id="form1" class="form-control" placeholder="Search here(ex: Tuna, Red Snapper, etc)">
                </div>
                <button type="button" class="btn btn-primary" style="margin-bottom: 50px;">
                    <i class="fas fa-search">Submit</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchBar"
}
</script>

<style>

</style>