<template>
    <!-- Hero image -->
    <b-jumbotron header="#makenokiagreatagain" v-bind:fluid="true" class="text-center">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
    </b-jumbotron>

</template>

<style scoped>
.jumbotron{
    background-image: url('../assets/hero-bg@2x.jpg');
    background-size:cover;
    background-color:#C9C9FF;
}
@media all and (max-width: 1200px) { /* screen size until 1200px */
   .jumbotron h1{
    font-size: 2em;
    }
}

</style>
