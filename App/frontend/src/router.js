import Vue from "vue";
import router from "vue-router";

const DataMenu = () => import("@/components/DataMenuPage.vue")
// const DataMenuPage = () => import()

Vue.use(Router);
const router = new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "Buku",
            path: "list/buku",
            component: DataMenu
        }
    ]
})

export default router;