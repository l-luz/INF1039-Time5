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
        rating: {type: Float32Array, default: 0}
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
    <v-card :class="'ma-4'" color="#8CBB36" :id="id" :style="{'width': '340px', 'max-height': showDesc ? '500px' : '315px'}" hover class="mb-2" density="compact" >
        <v-card-title class="text-subtitle-1 d-flex align-center justify-space-between" >
            <a class="d-flex align-center" href="#" style="text-decoration: none; color: inherit; outline: none;">
                <v-avatar size="40" :image="foto" class="bg-surface-variant" />
                <p> {{ username }}</p>
            </a>
        </v-card-title>

        <v-card-text style="padding: 0; ">
            <v-carousel hide-delimiter-background height="200px" cycle :show-arrows="false" >
                <v-carousel-item v-for="(item, i) in midia" :key="i" :src="item.src" cover>
                    <v-rating
                        v-model="rating"
                        class="ma-5"
                        density="comfortable"
                        color="white"
                        disabled
                    >
                </v-rating>

                </v-carousel-item>
            </v-carousel>
        </v-card-text>
    </v-card>
</template>
