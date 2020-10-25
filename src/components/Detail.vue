<template>
    <div id="Detail">
        <div style="display: none;" id="no_one">{{ $route.params.index }}</div>
        <div id="info">
            <div><span>id: </span>{{ id }}</div>
            <div><span>姓名: </span>{{ name }}</div>
            <div><span>生日: </span>{{ bir }}</div>
            <div style="height: auto">
                <span>爱好: </span>
                <div class="sp">{{ hobby }}</div>
            </div>
            <div style="margin-top: -50px">
                <span>个人简介: </span>
                <div class="sp" id="zsp">{{ introduce }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data(){
            return{
                index: null,
                id: "",
                name: "",
                bir: "",
                hobby: "",
                introduce: "",
            }
        },
        mounted(){

            this.index = parseInt(document.getElementById('no_one').innerText);
            let p = JSON.parse(localStorage.some_info)[this.index];
            // console.log(p)
            this.id = p['id'];
            this.name = p['name'];
            this.hobby = p['hobby'];
            this.bir = p['bir'];
            this.introduce = p['introduce'];
        }
    }
</script>

<style scoped>
    #info div{
        word-wrap:break-word;
        overflow:hidden;
        margin: 10px 0;
        position: relative;
    }
    .sp{
        position: relative;
        top: -35px;
        text-indent: 2.5em;
        line-height: 30px;
    }
    #zsp{
        position: relative;
        text-indent: 4.5em;
        line-height: 30px;
    }
</style>
