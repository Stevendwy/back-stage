<template>
  <div class="uploadimg">
      <img-upload
      class="boxcss"
      :canEdit="canEdit"
      :imgData="imgData"
      @uploadImg="uploadImg"
      :src="imgSrc"
      :multiple="multiple"
      :maxlength="imgMax"
      :clear="clearImgData"
      :change="upDataImg">
      </img-upload>
  </div>
</template>

<script>
import imgUpload from './uploadimgbody'

export default {
  data (){
      return {
          canEdit: true,
          multiple: true,
          imgSrc: '',
          imgMax: 6,
          clearImgData: true,
          imgData: {},
          upDataImg: false,
      }
  },
  methods: {
      uploadImg () {
        //   upimg strike 
      }
  },
  components: {
      imgUpload
  }
}
</script>

<style>
    .uploadimg{
        display: inline-block;
        width: auto;
        min-width: 80% ;
        height: auto;
        padding: 10px;
        border: 1px solid #f2f2f2; 
    }
</style>


