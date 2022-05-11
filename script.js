const app = new Vue({

  el: '#app',

  data:{
    nomeUtente: "",
    isLoading: true,
  },

  methods:{
    stampa10(){
      for( let i = 0; i < 10; i++ ){
    
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(res =>{
        console.log(res.data.response);
        this.nomeUtente += res.data.response + "   ";
        })
      }
    }
  },

  mounted(){
    this.stampa10();
  }

})