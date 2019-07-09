<template>
  <div>
    <SHeader title="Apple" />
    <SContainer>
      <div class="menu">
        <SScrollView scroll="y">
  
        </SScrollView>
      </div>
    </SContainer>
    <SFooter :barIndex="1"></SFooter>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style lang="less">
.con {
  display: flex;
  overflow-y: hidden;
}
.menu {
  background: #ccc;
  width: 110px;
  li {
    position: relative;
    height: 50px;
    line-height: 50px;
    z-index: 1;
    transition: 0.6s;
    text-align: center;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0px;
      height: 100%;
      background: #333;
      z-index: -1;
    }
    @keyframes identifier {
      0% {
        width: 0px;
        transform: scale(0);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        width: 100%;
        opacity: 1;
      }
    }
  }
  .active {
    color: #fff;
    &:after {
      animation: identifier 0.4s linear forwards;
    }
  }
}
.commodity {
  background: yellow;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  li {
    width: 46%;
    text-align: center;
    margin-bottom: 20px;
    height: 100px;
    img {
      width: 80px;
    }
    span {
      display: block;
      font-size: 16px;
      color: #333;
    }
  }
}
</style>