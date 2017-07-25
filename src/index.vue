<template>
  <div class="container">
    <p class="title">Amir -- Vue组件库</p>

    <div class="all-demos">
      <div v-for="item in componentsNav" class="item-container">
        <p class="title">{{item.category}}</p>
        <template v-for="components in item.map">
          <a :href="components.url">{{components.name}}</a>
        </template>
      </div>
    </div>
    <p class="clear">
      <a target="_blank" href="https://wiki.sankuai.com/pages/viewpage.action?pageId=674565072">移动端设计规范</a>
      <a target="_blank" href="https://wiki.sankuai.com/pages/viewpage.action?pageId=504677791">PC端设计规范</a>
    </p>
    
  </div>
</template>

<script>
  import componentsNav from './common/componentsNav'
	export default {
		name: 'app',
    data: function () {
      return {
        componentsNav: componentsNav
      }
    }
	}
</script>

<style lang="less" scoped>
@mainColor: #3dc6b6;
.container {
  margin:60px auto;
  width:100%;
  height: 300px;
  text-align: center;

  .title {
    font-size: 30px;
  }

  a {
    font-size: 14px;
    text-decoration: none;
  }

  .all-demos {
    margin-bottom: 20px;

    .item-container {
      float: left;
      width: 300px;
      margin-bottom: 20px;
      .title {
        font-size: 20px;
        color:@mainColor;
      }
      a {
        display: block;
        width:60px;
        margin:0 auto;
        text-align: left;
        color:#000;
        border-radius: 4px;
        margin-bottom: 5px;
      }
    }
  }

}
</style>