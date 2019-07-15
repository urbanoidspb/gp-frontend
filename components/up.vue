<template>
    <a href="#" class="up"></a>
</template>

<script>
export default {
    name: 'up'
}
</script>

<style scoped>
    .up {
        position: fixed;
        display: block;
        right: 2rem;
        top: 50%;
        width: 3.5rem;
        height: 3.5rem;
        background: url("../assets/up.png") 50% 50% no-repeat;
        background-size: 35%;
        border-radius: 50%;
        background-color: white;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 420px) {
        .up {
            display: none;
        }
    }
</style>