import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import OfferZone from '@/views/OfferZone.vue'
import BestSeller from "@/views/BestSeller.vue";
import Card from "@/components/Card.vue";


const routes = [
    {path: '/', name: 'Home', component: Home},
    {path:'/offer-zone', name:'OfferZone', component: OfferZone},
    {path:'/best-seller', name:'BestSeller', component: BestSeller},
    {path:'/card', name:'Card', component: Card}
]

const  router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;