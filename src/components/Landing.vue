<template>
  <div class="img">
    <div class="img__text">
      <!-- <h3>Welcome To The Laptops Store</h3> -->
      <h3>Welcome To FortuneTech</h3>
      <!-- <p>Your one stop shop for all types of laptops</p> -->
      <p>Your one stop shop for all kinds of electronics</p>
      <router-link to="/" class="link">Shop Now</router-link>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.img {
  position: relative;
  height: 100vh;
  background-attachment: fixed;
  background: linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)),
    url("../assets/img/dell-xps-13.png") no-repeat center center/cover;
    /* opacity: 0.8; */
      animation: 1.5s fadein 0.4s forwards;
     opacity: 0;
     z-index: -1;
    
}
img{

}
.img__text {
  height: 70vh;
  
  /* margin-top: 20%; */
  padding-top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  z-index: 1;
  
}
.img__text > * {
  margin-bottom: 40px;
  font-weight: normal;
 
}
.img__text h3 {
 font-size: 80px;
}
.img__text p {
  font-size: 40px;
  
}
.img__text .link {
  /* background: rgb(122, 18, 18); */
   border: 2px solid   var(--semiPrimary-color);
  padding: 10px 15px;
  border-radius: 10px 10px;
  font-size: 30px;
  
}
.padding {
  background: #333;
  /* height: 20px; */
}

@keyframes  fadein{
    0%{
        opacity: 0;
    }
    25%{
        opacity: 0.2;
    }
      35%{
        opacity: 0.4;
    }
    70%{
        opacity: 0.6;
    }
   100%{
       /* opacity: 0.8; */
       opacity: 1;
   }
}

@media screen and (max-width: 900px) {
  .img {
    position: relative;
    height: 60vh;
  }
  .img__text {
    height: 60vh;
  }
  .img__text > * {
    margin: 5px;
  }
  .img__text h3 {
    margin-bottom: 3px 0;
    font-size: 1.9rem;
  }
  .img__text p {
    font-size: 1.1em;
  }
  .img__text a {
    /* background: rgb(122, 18, 18); */
    padding: 5px 10px;
    border-radius: 10px 10px;
    font-size: 0.9em;
    margin: 0.7em;
  }
  @media screen and (max-width: 674px) {
    .img {
      height: 50vh;
    }
    .img__text {
      margin: 0;
      height: 35vh;
    }
    .img__text > * {
  margin-bottom: 10px;
 
}
    .img__text h3 {
      font-size: 1.8em;
    }
    .img__text p {
      font-size: 1.3em;
    }
    .img__text .link {
      /* background: rgb(122, 18, 18); */
      font-size: 0.9em;
      margin: 0.7em;
      padding: 5px  10px;
    }
  }
}
</style>