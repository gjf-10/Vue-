<template>
    <div id="app">
        <div id="head">

            <router-link to="/user">用户列表页</router-link>
            <router-link to="/message">评论区</router-link>

        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "App",
}
</script>

<style>
    body{
        margin: 0;
        background: lightskyblue;
    }
    #app{
        padding: 20px;
        width: 382px;
        margin: 0 auto;
    }
    #head a{
        text-decoration: none;
        color: aliceblue;
    }
    #head{
        margin: 10px 0px;
    }
    #head a:hover{
        color: black;
    }
</style>
