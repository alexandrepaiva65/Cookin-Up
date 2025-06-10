<template>
  <section class="selecionar-receitas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>

    <p class="paragrafo-lg resultados-encontrados">
        Resultados encontrados: 8
    </p>

    <p class="paragrafo-lg">
        Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
    </p>

    <!-- <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategoria 
          :categoria="categoria" 
          @adicionar-ingrediente="emit('adicionarIngrediente', $event)"
          @remover-ingrediente="emit('removerIngrediente', $event)"
          />
      </li>
    </ul> -->

    <BotaoPrincipal
      texto="Editar Lista"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BotaoPrincipal from './BotaoPrincipal.vue'

</script>

<style scoped>
.selecionar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titulo-receitas {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}
.resultados-encontrados {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 0.5rem;
}
</style>