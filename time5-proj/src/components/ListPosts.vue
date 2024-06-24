<template>
  <v-sheet>
    <v-slide-group
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="item in Posts"
        :key="item.id"
      >
          <UserPost  
            :username="item.username" 
            :foto="item.foto" 
            :midia="item.midia" 
            :descricao="item.descricao" 
            :rating="item.rating"
            :key="item.id" 
          >
          </UserPost>
      </v-slide-group-item>
    </v-slide-group>

</v-sheet>
</template>
<script>
import { toNumber } from 'lodash';
import UserPost from './UserPost.vue';

export default {
  name: "ListPosts",
  components: {
    UserPost,
  },
  data() {
    return {
      Posts: [
        {
            username: "Clara",
            foto: "https://img.freepik.com/fotos-gratis/foto-na-cabeca-de-uma-mulher-feliz-rindo-e-sorrindo-amplamente_273609-28720.jpg",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            rating: 3,
            midia:[
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
          // maplink: {},
          //userLink: {},

        },
        {
            username: "Geovana",
            foto: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
            midia:[
                {
                    src: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
                },
            ],
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: 5,
          // maplink: {},
          //userLink: {},

        },
        {
            username: "Claudio",
            foto: "https://img.freepik.com/free-photo/portrait-young-man-isolated_23-2149158663.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716681600&semt=ais_user",
            midia:[
                {
                    src: 'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
                },
                {
                    src: 'https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o',
                },
            ],
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: 3,
          // maplink: {},
          //userLink: {},

        }, 
        {
            username: "Clotilde",
            foto: "https://qph.cf2.quoracdn.net/main-qimg-7a4184307bc5fe802570b715259130db-pjlq",
            midia:[
                {
                    src: 'https://fastly.picsum.photos/id/133/2742/1828.jpg?hmac=0X5o8bHUICkOIvZHtykCRL50Bjn1N8w1AvkenF7n93E',
                },
                {
                    src: 'https://fastly.picsum.photos/id/134/4928/3264.jpg?hmac=IcPmWTNClVqLcr7PpqBrfOAvgmJbqw0Z8jZvmsCrC-c',
                },
                {
                    src: 'https://fastly.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4',
                },
            ],
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: 0,
          // maplink: {},
          //userLink: {},

        },
        {
            username: "Bruna",
            foto: "https://hackspirit.com/wp-content/uploads/2023/06/smile.jpg",
            midia:[
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: 2,
          // maplink: {},
          //userLink: {},

        },
        {
            username: "João",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepXPD3u4Ua37SyNejuy9lGja-PnAsg9TNpA&s",
            midia:[
                {
                    src: 'https://fastly.picsum.photos/id/155/3264/2176.jpg?hmac=Zgf_oGMJeg18XoKBFmJgp2DgHMRYuorXlDx5wLII9nU',
                },
            ],
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: 4.5,
          // maplink: {},
          //userLink: {},

        },
      ],
    };
  }
};

</script>

