const { createApp } = Vue;

createApp({
    data() {
        return {
           disks : []
        };
    },
    created() {
        axios
            .get('http://localhost/php-dischi-json/backend/api.php')
            .then((res) => {
                console.log(res.data);
                this.disks = res.data;
            }
            )
    }
}).mount('#app');