<template>
    <div>
        <input type="text" v-model="remark">
        <button @click="launch">发表留言</button>
        <p v-for="(comm, i) in msgs" :key="i">
            {{ comm }}
            <button @click="del(i)">删除</button>
        </p>

        <p>总留言数：{{ msgs.length }} <button @click="del_all" v-show="isShow">删除所有</button></p>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                remark: "",
                msgs: [],
                isShow: false,
            }
        },
        created(){
            // 有数据则显示 删除所有按钮，否则不显示删除所有按钮
            let p = JSON.parse(localStorage.msgs)
            for (let n = 0; n < p.length; n++) {
                this.msgs.push(p[n])
                console.log(p[n])
            }
            // console.log(JSON.parse(localStorage.msgs).length)


            if(this.msgs.length){
                this.isShow = true
            }
            else{
                this.isShow = false
            }
        },
        // 将留言板中的数据存储在localStorage中
        updated(){
            localStorage.msgs = JSON.stringify(this.msgs);
        },
        methods: {

            launch() {
                // 如果评论内容为空，不允许发表评论
                if(!this.remark){
                    return
                }
                // 评论内容不为空，评论内容放在最前面
                this.msgs.unshift(this.remark);
                // 点击发表评论后，将评论内容发表在留言板中，将remark清空
                this.remark = "";
                // 如果是该留言板有内容，就将删除所有按钮显示
                if(this.msgs[0]){
                    this.isShow = true
                }
            },
            del(comm){
                if(confirm("确定删除？")){
                    this.msgs.splice(comm, 1);
                    if(!this.msgs.length){
                        this.isShow = false
                    }
                    else{
                        this.isShow = true
                    }
                }
            },
            del_all(){
                if(confirm("确定删除？")) {
                    this.msgs = [];
                    this.isShow = false
                }
            }
        }
    }
</script>

<style scoped>

</style>
