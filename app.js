Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">Me ha pulsado {{ count }} veces.</button>'
  })

var app = new Vue({
    el: '#app',
    data: {
      lyric: 'Hello Vue!',
      artista: '',
      cancion:'',
      cargando: false
    },
    methods:{
        async buscar(){
            this.cargando = true
            const response = await fetch("https://api.lyrics.ovh/v1/"+this.artista+"/"+this.cancion+"");
            const data = await response.json();
            if(data.lyric != ""){
                this.lyric = data.lyrics;            
                this.cargando = false
            }
            if(data.error) {
                this.lyric = "Cancion no encontrada";            
                this.cargando = false
            }
            console.log(data);
        },
        encontrado(){
            this.cargando = false
        }
    }
  })

  