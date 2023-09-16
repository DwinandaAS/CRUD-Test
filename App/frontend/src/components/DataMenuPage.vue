<template>
    <DataMenuList :buku="buku"/>
    <div v-if="!buku">Loading...</div>
  <pre v-else>{{ buku }}</pre>
</template>

<script>
import DataMenuList from '../components/DataMenu.vue'
import axios from 'axios'

export default {
    name: "DataMenuPage",
    components: {
        DataMenuList
    },
    data() {
        return {
            loading: false,
            buku: [],
        }
    },
    form: {
        tittle: "",
        description: "",
        author: "",
        price: ""
    },
    methods: {
        async created() {
        let response = await axios.get('/api/buku');
        let buku = response.data[0];
        console.log(buku)
        this.buku = buku;
        }
    },
    mounted() {
        this.created()
    }
}
</script>