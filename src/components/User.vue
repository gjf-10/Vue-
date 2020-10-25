<template>
    <div>
        <table>
            <tr>
                <td>id</td>
                <td>姓名</td>
                <td>生日</td>
                <td>操作</td>
            </tr>
            <tr v-for="(info, index) in all_info">
                <td>{{ info.id }}</td>
                <td>{{ info.name }}</td>
                <td>{{ info.bir }}</td>
                <td>
                    <a href="javascript:void(0)" @click="update(index)">更新</a> |
                    <a href="javascript:void(0)" @click="del(index)">删除</a> |
                    <router-link :to="`/detail/${index}`">查看详情</router-link>
                </td>
            </tr>
        </table>
        <hr>
        <div>
            <span>用户名：</span><input type="text" v-model="name"><br>
            <span>生日：</span><input type="date" v-model="bir"><br>
            <span>爱好：</span><textarea cols="20" rows="4" v-model="hobby"></textarea><br>
            <span>个人简介: </span><textarea cols="20" rows="4" v-model="introduce"></textarea><br>
            <button @click="addUser" v-show="isShow1">添加用户</button>
            <button @click="update_true" v-show="isShow">修改</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                all_info: [],
                id: '',
                name: '',
                hobby: "",
                bir: "",
                introduce: "",
                isShow: false,
                isShow1: true,
                index: null,
            }
        },
        created() {
            let p = JSON.parse(localStorage.some_info)
            for (let n = 0; n < p.length; n++) {
                this.all_info.push(p[n])
                console.log(p[n])
            }
        },
        methods: {
            addUser() {
                console.log(this.name, this.hobby);
                let id1 = 1;
                if (this.all_info.length) {
                    id1 = this.all_info.length + 1
                }
                let info = {'id': id1, 'name': this.name, 'bir': this.bir,'hobby': this.hobby, 'introduce': this.introduce}

                this.all_info.unshift(info)
            },
            del(index){
                if(confirm("确定删除？")){
                    this.all_info.splice(index, 1)
                }

            },
            update(index){
                this.index = index;
                this.isShow = true;
                this.isShow1 = false;
                this.id = this.all_info[index].id;
                this.name = this.all_info[index].name;
                this.bir = this.all_info[index].bir;
                this.hobby = this.all_info[index].hobby;
                this.introduce = this.all_info[index].introduce;
            },
            update_true(){
                this.all_info.splice(this.index, 1);
                let info = {'id': this.id, 'name': this.name, 'bir': this.bir, 'hobby': this.hobby, 'introduce': this.introduce};
                this.all_info.unshift(info);
                this.isShow = false;
                this.isShow1 = true;
                this.id = '';
                this.name = '';
                this.hobby = '';
                this.bir = '';
                this.introduce = '';
            }

        },
        updated() {
            localStorage.some_info = JSON.stringify(this.all_info);
        }
    }
</script>

<style scoped>
    span {
        display: inline-block;
        width: 80px;
        height: 40px;
        /*padding-top: 20px;*/
    }

    table {
        border-collapse: collapse;
    }

    td {
        width: 100px;
        height: 40px;
        text-align: center;
        vertical-align: middle;
        border: 1px solid black;
    }
    a{
        text-decoration: none;
        color: darkviolet;
    }
    a:hover{
        color: darkgray;
    }
</style>
