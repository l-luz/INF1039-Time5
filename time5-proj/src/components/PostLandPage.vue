<script>
import { uniqueId } from "lodash";

export default {
    name: 'PostLandPage',
    props: {
        username: { type: String, required: true },
        foto: { type: String, required: false },
        midia: {
            type: Array, required: false,
            validator(value) {
                return value.every(item => typeof item.src === 'string');
            }
        },
        descricao: { type: String },
        // maplink: {},
        //userLink: {},
    },
    data() {
        return {
            id: uniqueId("post-"),
            showDesc: false,
            like: false,
        }
    },
}

</script>
<template>
    <v-card :class="'ma-4'" :id="id" :style="{'width': '340px', 'max-height': showDesc ? '500px' : '315px'}" hover class="mb-2" density="compact" >
        <v-card-title class="text-subtitle-1 d-flex align-center justify-space-between" >
            <a class="d-flex align-center" href="#" style="text-decoration: none; color: inherit; outline: none;">
                <v-avatar size="40" :image="foto" class="bg-surface-variant" />
                <p> {{ username }}</p>
            </a>
            <a class="d-flex align-end" href="#" style="text-decoration: none; color: inherit; outline: none;">
                <v-icon class="me-1" icon="mdi-map-outline"></v-icon>
            </a>
        </v-card-title>

        <v-card-text style="padding: 0; ">
            <v-carousel hide-delimiter-background height="200px" cycle :show-arrows="false" >
                <v-carousel-item v-for="(item, i) in midia" :key="i" :src="item.src" cover />
            </v-carousel>
        </v-card-text>
            <v-card-actions>
              <v-btn :icon="like ? 'mdi-heart' : 'mdi-heart-outline'" @click="like = !like"></v-btn>
              <v-btn icon="mdi-share" />
              <v-btn :icon="showDesc ? 'mdi-information-off-outline' : 'mdi-information-outline'" @click="showDesc = !showDesc"/>
            </v-card-actions>
            <div style="max-height: 150px; overflow-y: auto;">
                <p v-if="showDesc" class="text-medium-emphasis px-3" > {{ descricao }} {{ descricao }}</p>
            </div>
    </v-card>
</template>
