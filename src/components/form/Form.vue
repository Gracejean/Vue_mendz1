<template>
    <div class = "col-if -4 -auto" style = "margin -top:25px" v-show="text">
        <input type="text" class="form-control" v-model="message"/>
    </div>
</template>    
    <script>
        export default{
            beforeCreate(){
                console.log("beforeCreate")
            },
            created(){
                console.log("created")
            },
            beforeMount(){
                console.log("beforeMounted")
            },
            mounted(){
                console.log("mounted")
            },
            beforeUpdate(){
                console.log("beforeUpdated")
            },
            updated(){
                console.log("updated")
            },
            beforeDestroyed(){
                console.log("destroyed")
            },
            data(){

            }

        }