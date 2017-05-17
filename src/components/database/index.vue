<template>
        
        <div class="col-md-10 thbox">


        <div class="alert alert-info alert-dismissible col-center-block" v-if='alertshow'>
            <button type="button" class="close" @click='alertshow=false'>&times;</button>
            <h4><i class="icon fa fa-info"></i> Alert!</h4>
            Info alert preview. This alert is dismissable.
        </div>
       
        <div class="col-md-4 ">
          <form action="" class="form-horizontal">
           <div class="box-body " v-if="showform">
             <div class="form-group">
                  <!-- <label for="ip" class="col-sm-2 control-label">ip</label> -->

                  <div class="col-sm-12">
                    <input type="text" class="form-control" id="ip" placeholder="ip">
                  </div>
             </div>
             <div class="form-group">
                  <!-- <label for="port" class="col-sm-2 control-label">port</label> -->

                  <div class="col-sm-12">
                    <input type="text" class="form-control" id="port" placeholder="port">
                  </div>
             </div>
             <div class="form-group">
                  <!-- <label for="userid" class="col-sm-2 control-label">userid</label> -->

                  <div class="col-sm-12">
                    <input type="text" class="form-control" id="userid" placeholder="userid">
                  </div>
             </div>
              <div class="form-group">
                  <!-- <label for="password" class="col-sm-2 control-label">psw</label> -->

                  <div class="col-sm-12">
                    <input type="text" class="form-control" id="password" placeholder="password">
                  </div>
             </div>
             <div class="form-group">
              <div class="col-sm-2">
               <button type="button" class="btn btn-primary">提交</button>
               </div>
               <div class="col-sm-2">
               <button type="button" class="btn btn-primary" @click='showform=false'>取消</button>
               </div>
               <div class="col-sm-4">
               <button type="button" class="btn btn-primary" @click='testping'>测试连接</button>
               </div>
             </div>
           </div>
           </form>
            <div class="box box-solid select-view">
            <div class="box-header with-border">
              <h3 class="box-title">已经添加配置</h3>
              <div class="box-tools">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" @click='showform=true'><i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div class="box-body no-padding">
              <ul class="nav nav-pills nav-stacked">
                <li class="active"><a href="#/database/detail"><i class="fa fa-inbox"></i> Inbox
                  <span class="label label-primary pull-right">12</span></a></li>
              </ul>
            </div>
            <!-- /.box-body -->
            </div>
         </div>
         <div class="col-md-5">
             <transition name='fade'>
                <router-view></router-view>
             </transition>
         </div>
        </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data(){
    return {
      showform:false,
      alertshow:false
    }
  },
  methods:{
    ...mapMutations(['getList']),
    testping:function(){
      this.alertshow = true;
    }
  },
  created:function(){
    this.getList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .thbox{
        position: relative;
        top: 20px;
        left:30px;
        
    }
    .select-view{
        margin: 10px;
        width: auto !important;
    }
    .myheight{
        height: 500px;
        margin-top: 10px;
    }
    .col-center-block {  
    position: absolute;
    right: -40px;top: 0;
}  
</style>
