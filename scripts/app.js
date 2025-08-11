/// Create a new Vue app
const app = Vue.createApp({
    /// Define the data for the app
    data() {
        return {
            RandomUserProfile:{
                Name:'',
                Age:'',
                Avatar:''
            },
            WeatherModule:{
                City:'London',
                Province:'Ontario',
                Country:'Canada',
                Temperature:'',
                Wind:'',
                Description:''
            },
            DictionaryModule:{
                Word:'',
                Phonetic:'',
                Definition:''
            }
        };
    },
    /// this will load the data on page load
    created(){
        this.fetchRandomUserProfile();
        this.fetchWeatherModule();
        this.fetchDictionaryModule();
    },
    /// Define the methods for the app
    methods: {
        fetchRandomUserProfile(){
            fetch('https://comp6062.liamstewart.ca/random-user-data')
            .then(response => response.json())
            .then(data => {
                this.RandomUserProfile = data;
            })
            .catch(error =>{
                console.log(error);
            });
            
        },
        fetchWeatherModule(){
            fetch('https://comp6062.liamstewart.ca/weather-data')
            .then(response => response.json())
            .then(data => {
                this.WeatherModule = data;
            })
            .catch(error =>{
                console.log(error);
            });
        },
        fetchDictionaryModule(){
            fetch('https://comp6062.liamstewart.ca/api/define?word=Bottle')
            .then(response=> response.json())
            .then(data=>{
                this.DictionaryModule=data;
            })
            .catch(error =>{
                console.log(error);
            });
        }
    }
});

/// Mount the Vue app to the div with id "app"
app.mount('#app');
