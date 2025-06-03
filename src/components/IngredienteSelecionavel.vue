<template>
    <button 
        class="ingrediente"
        @click="aoClicar()"
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

    const emit = defineEmits<{
        (e: 'adicionarIngrediente', ingrediente: string): void;
        (e: 'removerIngrediente', ingrediente: string): void;
    }>();
    
    const aoClicar = () => {
        selecionado.value = !selecionado.value;

        if (selecionado.value) {
            emit('adicionarIngrediente', props.ingrediente);
        } else {
            emit('removerIngrediente', props.ingrediente); 
        }
    };
</script>


<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>