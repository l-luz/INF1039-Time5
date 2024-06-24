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
        rating: { type: Float32Array, default: 0 },
        local: { type: String, required: true },
        endereco: { type: String },
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
    <v-card class="mb-2" color="#8CBB36" :id="id" :style="{'width': '410px', 'max-height': showDesc ? '500px' : '315px'}" hover  density="compact" rounded="xl">
        <v-card-title  class="text-subtitle-1 d-flex align-center justify-space-between" >
            <a class="d-flex align-center" href="#" style="text-decoration: none; color: inherit; outline: none;">
                <v-avatar size="40" :image="foto" class="bg-surface-variant" />
                <p style="max-width: 200px; color: white;"
                    class="text-center text-h6 d-inline-block text-truncate"
                > 
                &nbsp {{ username }}
                </p>
            </a>
        </v-card-title>

        <v-card-text style="padding: 0; ">
            <v-carousel hide-delimiter-background height="200px" cycle :show-arrows="false" hide-delimiters>
                <v-carousel-item v-for="(item, i) in midia" :key="i" :src="item.src" cover>
                    <v-rating
                        :model-value="rating"
                        class="ma-5"
                        density="compact"
                        active-color="white"
                        size="x-large"
                        disabled
                        empty-icon="mdi-star"
                    >
                </v-rating>
                <p class="text-uppercase text-center text-h3 d-inline-block text-truncate"
                    style="max-width: 300px; color: white;"
                >
                    {{  local  }}                  
                </p>
                <br />
                <p class="text-center text-h6 d-inline-block text-truncate"
                    style="max-width: 400px; color: white;"
                >
                    {{ endereco }}
                </p>

                </v-carousel-item>
            </v-carousel>
        </v-card-text>
    </v-card>
</template>
