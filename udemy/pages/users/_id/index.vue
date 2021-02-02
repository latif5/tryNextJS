<template>
    <p>This single user ID: {{ $route.params.id }}</p>
</template>

<script>
export default {
    validate(data){
        return data.params.id != 'text'
    }
}
</script>