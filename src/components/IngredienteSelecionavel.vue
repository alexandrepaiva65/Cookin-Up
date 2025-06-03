<template>
    <button 
        class="ingrediente"
        @click="selecionado = !selecionado"
        :aria-pressed="selecionado"
        >
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tag from './Tag.vue';

    const props = defineProps<{
        ingrediente: string;    
    }>();

    const selecionado = ref(false);
</script>


<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>