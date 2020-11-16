<!--
Description
@authors Your Name (you@example.org)
@date    2020-11-15 10:42:04
@version 1.0.0
-->
<template>
  <div ref="page-list" @scroll="scroll">
    <slot></slot>
  </div>
</template>

<script>
import {throttle} from 'throttle-debounce'
export default {
    props:{
        height: {
            type: Number,
            default: 100
        }
    },
    methods: {
        scroll: throttle(500, function(e){
            this.$nextTick(()=>{
                let target = e.currentTarget || e.target
                console.log(target)
                if( target.clientHeight + target.scrollTop + 100 >= target.scrollHeight) {
                    this.$emit('scrollEnd')
                }
            })
           
        }),
    }
}
</script>

<style lang="css" scoped>
  
</style>
