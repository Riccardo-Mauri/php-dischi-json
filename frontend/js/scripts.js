const { createApp } = Vue;

createApp({
    data() {
        return {
           
        };
    },
    created() {
        axios
            .get('http://localhost/php-dischi-json/backend/api.php')
            .then((res) => {
                console.log(res.data);
            }
            )
    }
}).mount('#app');