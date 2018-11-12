<template>
  <div class="container">
    <div class="loader"></div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    position: relative;
    min-height: 300px;
  }

  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #f00; /* Blue */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: auto;
    margin-top: 120px;
    animation: spin 2s linear infinite;
    position: absolute;
    top: 0px;
    left: 0px;
    left: 50%;
    margin-left: -15px;
    z-index: 1;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
</style>