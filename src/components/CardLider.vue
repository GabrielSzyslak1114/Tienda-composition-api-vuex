<template>


            <div class="box">
                <div class="imgBx">
                    <img :src="require(`../../public/images/${lider.imgName}.${lider.imgExtension}`)" alt="">
                </div>
                <div class="content">
                    <h2>{{lider.title}}<br><span></span></h2>
                </div>
            </div>
       

</template>

<script>

export default {
    props:['lider']


    

}
</script>

<style lang="scss" scoped>



        .box{
        position: relative;
        width: 300px;
        height: 300px;
        display: flex;
        margin: 40px;
        &:hover{
           .imgBx{
                transform: translate(-35px, -35px);
           }
            .content{
                transform: translate(35px, 35px );
            }
        }
        @media (max-width: 768px) {
            &:hover{
           .imgBx{
                transform: translate(0px, -35px);
           }
            .content{
                transform: translate(0px, 35px );
            }
        }
        }
            .imgBx{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transition: 0.5s ease-in-out;
                z-index: 2;
                    img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    }
            }
            .content{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgb(184, 14, 14);
                z-index: 1;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                transition: 0.5s ease-in-out;
                padding: 10px;
                h2{
                    font-size: 20px;
                    color: #ffff;
                    font-weight: 500;
                    line-height: 20px;
                    letter-spacing: 1px;
                    text-align: center;
                    
                    span{
                        font-size: 14px;
                        font-weight: 300;
                        letter-spacing: 2px;
                    }
                }
            }
    }
    







</style>