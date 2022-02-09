<template>
<div>
     <ul>
        <li class="description">
            <div>
                <h4>
                    Digital drugs
                </h4>
                <p>
                    beans rice and potatoes
                </p>
            </div>
        </li>
        <li>
            <figure>
                <img src="src/assets/Images/_MG_5991.JPG" alt="">
                <figcaption>
                    beans
                </figcaption>
            </figure>
        </li>
        <li>
            <figure>
                <img src="src/assets/Images/_MG_7625-Edit-Edit-Edit.jpg" alt="">
                <figcaption>
                    rice
                </figcaption>
            </figure>
        </li>
        <li>
            <figure>
                <img src="src/assets/Images/_MG_8301 (1)-Edit-2.jpg" alt="">
                <figcaption>
                    potatoes
                </figcaption>
            </figure>
         </li>
    </ul>
 </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
    /* border: 1px solid red */
}
body{
   
    height: 90vh;
    
} 
ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
}
ul li{
    /* border: 1px solid red; */
    height: 80%;
    scroll-snap-align: center;
    list-style: none;
}

ul li:not(:first-child){
    padding-left: 15em;
    padding-right: 15em;
}
figure{
    height: 100%;
}
img{
    height: 100%;
}

ul{
    height: 100%;
}

ul .description{
    display: flex;
    align-items: flex-end;
    
}

.description div{
    /* border: 1px solid blue; */
    width: 30em;
   
}
</style>