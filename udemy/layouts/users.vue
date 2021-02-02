<template>
    <div>
        <Header/>
        <h1>USER SECTION</h1>
        <nuxt/>
    </div>
</template>

<script>
import Header from '~/components/Header'
export default {
    data (){
        return {
            Header
        }
    }
}
</script>