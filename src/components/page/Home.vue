<template>
  <div id="pages" :class="[getTheme]">
      <n-header @tools="changePages"></n-header>
      <section class="container" :class="{'hide': table}">
          <n-add></n-add>
          <n-list></n-list>
          <n-sidebar :is-show="tools"
                    @cleardialog="clearData"
                    @uploadData="uploadData"
                    @opentable="table = true; tools = false"
                    @opentheme="theme = treu; tools = false"></n-sidebar>
      </section>
      <transition name="dialog">
          <n-dialog v-show="dialog" :msg="tips" @close="table = false"></n-dialog>
          <n-theme :is-show="theme" @close="theme = false"></n-theme>
          <n-footer></n-footer>
      </transiton>   
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import nHeader from './header.vue';
    import nFooter from './footer.vue';
    import nAdd from './event_add.vue';
    import nTable from './event_table.vue';
    import nList from './event_list.vue';
    import nSidebar from './sidebar.vue';
    import nDialog from './dialog.vue';
    import nTheme from './theme.vue';

    export default {
        data () {
            return {
                tools: false,
                dialog: false,
                table: false,
                theme: false,
                dialog_type: '',
                tips: '',
                del_info: {
                    index: 0,
                    id: 0
                }
            }
        },
        components: {
            nHeader, nAdd, nSidebar, nDialog, nTable, nList, nTheme, nFooter
        },
        computed:mapState([
            "getTheme"
        ]),
        methods: {
            clearData(){
                this.tools = false;
                this.dialog = true;
                this.dialog_type = 'clear';
                this.tips = '清空后无法恢复，确认清空吗？';
            },
            delData(index,id){
                this.dialog = true;
                this.dialog_type = 'del';
                this.tips = '删除后无法恢复，确认删除吗？';
                this.del_info = {
                    index: index,
                    id : id
                }
            },
            uploadData(){
                this.tools = false;
                this.dialog = true;
                this.dialog_type = 'upload';
                this.tips = 'upload';
            },
            sureDialog(){
                const self = this;
                switch (self.dialog_type){
                    case 'clear':
                        self.$store.dispatch('clearevent');
                        self.$toast('清空数据成功');
                        break;
                    case 'del':
                        self.$store.dispatch('delevent',self.del_info);
                        self.$toast('删除成功');
                        break;
                }
                this.dialog = false;
            },
            changePages(){
                if(this.table){
                    this.table = !this.table;
                }else if(this.theme){
                    this.theme = !this.theme;
                }else{
                    this.tools = !this.tools
                }
            }
        }

    }
</script>
<style lang="scss" rel="stylesheet/scss" src="../../../static/theme.scss"></style>
<style lang="scss">
    ul{
        list-style: none;
    }
    .container{
        width:100%;
        padding: 0 10px;
        max-width:800px;
        margin:auto;
        box-sizing: border-box;
        &.hide{
            display: none;
        }
    }
    .dialog-enter-active, .dialog-leave-active {
        transition: opacity .3s;
    }
    .dialog-enter, .dialog-leave-to{
        opacity: 0;
    }
</style>
