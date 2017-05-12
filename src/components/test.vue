<template>
    <transition name='fade'>
        <div class="col-md-10 thbox">
        <div class="col-md-4 ">
            <form action="" class="form-horizontal">
           <div class="box-body ">
             <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">Email</label>

                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                  </div>
             </div>
             <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">code</label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="code">
                  </div>
             </div>
           </div>
           </form>
            <div class="box box-solid select-view">
            <div class="box-header with-border">
              <h3 class="box-title">Folders</h3>
              <div class="box-tools">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="box-body no-padding">
              <ul class="nav nav-pills nav-stacked">
                <li class="active"><a href="#/test/test1"><i class="fa fa-inbox"></i> Inbox
                  <span class="label label-primary pull-right">12</span></a></li>
                <li><a href="#/test/test2"><i class="fa fa-envelope-o"></i> Sent</a></li>
                <li><a href="#"><i class="fa fa-file-text-o"></i> Drafts</a></li>
                <li><a href="#"><i class="fa fa-filter"></i> Junk <span class="label label-warning pull-right">65</span></a>
                </li>
                <li><a href="#"><i class="fa fa-trash-o"></i> Trash</a></li>
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
    </transition>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .fade-enter-active, .fade-leave-active {
        transition: transform 1s,opacity 1s;
        }
    .fade-enter, .fade-leave-active {
        transform: translateX(30px);
        opacity: 0;
    }
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
</style>
