<template>
    <div>
        <Navbar />
        <main>
            <slot></slot>
        </main>
        <!-- <footer>&copy; Brayan - {{ currentYear }}</footer> -->
    </div>
</template>

<script setup>
// import { Script } from 'vm';

//utilizar muchas propiedades, permite ingresar al head de la aplicacion
useHead({
    title: "Platcont",
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/logo.png'
        },
        {
            rel: "stylesheet",
            href: "/assets/css/style.css",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        },
        {
            rel: "stylesheet",
            href: "/assets/fonts/MWF-MDL2.css"
        }
        ,
        {
            rel: "stylesheet",
            href: "/assets/fonts/MWF-FLUENT-ICONS.css"
        }

    ]
})

const currentYear = new Date().getUTCFullYear();

</script>