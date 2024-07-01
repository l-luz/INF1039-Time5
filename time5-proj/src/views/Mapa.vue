<template>
    <br>
    <v-app :style="{'background-color': '#000'}">
      <v-app-bar app color="purple" dark>
        <v-toolbar-title>Desktop - Mapa</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>Sign Up</v-btn>
        <v-btn text>Sign In</v-btn>
      </v-app-bar>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              <v-text-field 
                v-model="search" 
                append-icon="mdi-magnify" 
                label="Search" 
                single-line 
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-card-subtitle class="pb-0">Mapa</v-card-subtitle>
            <v-card-text>
              <l-map 
                :zoom="zoom" 
                :center="center" 
                style="height: 400px; width: 100%;" 
                ref="map"
                @ready="onMapReady"
              >
                <l-tile-layer
                  :url="url"
                  :attribution="attribution"
                ></l-tile-layer>
                <l-marker :lat-lng="markerLatLng">
                    <l-popup content="PUC - Rio" />
                </l-marker>

              </l-map>
            </v-card-text>
          </v-card>
          <v-card class="mt-3">
            <v-card-subtitle>Informações:</v-card-subtitle>
            <v-card-text>
              Nenhuma informação disponível.
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import "leaflet/dist/leaflet.css";
  import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
  import L from 'leaflet';
  import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
  import "leaflet.locatecontrol/dist/L.Control.Locate.min.js";
  
  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
    },
    data() {
      return {
        search: '',
        zoom: 13,
        center: [-22.9068, -43.1729], // Centro inicial no Rio de Janeiro
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        markerLatLng: [-22.979832, -43.233696]
      };
    },
    methods: {
      onMapReady() {
        // Este método é chamado quando o mapa estiver pronto
        const map = this.$refs.map.mapObject;
        if (map) {
          L.control.locate().addTo(map).start();
  
        //   // Adicionando marcador
        //   L.marker([-22.979832, -43.233696]).addTo(map)
        //     .bindPopup('Puc rio')
        //     .openPopup();
        }
      },
    },
  };
  </script>
  
  <style>
  .leaflet-container {
    height: 100%;
    width: 100%;
  }
  </style>
  