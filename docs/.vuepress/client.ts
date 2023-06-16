import {provide} from "vue";
import {defineClientConfig} from "@vuepress/client";
import InstantSearch from 'vue-instantsearch/vue3/es/index.js';

import Layout from "./theme/layouts/Layout.vue";
import HomeLayout from "./theme/layouts/HomeLayout.vue";

import bottomLinks from "./config-client/bottomLinks";
import documents from "./config-client/documents";
import sidebar from "./config-client/sidebar";
import social from "./config-client/social";
import {onBeforeMount} from "vue";

export default defineClientConfig({
    layouts: {
        Layout,
        HomeLayout
    },
    enhance({app}) {
        app.component('InstantSearch', InstantSearch)
    },
    setup() {
        onBeforeMount(()=>{
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://cdn.weglot.com/weglot.min.js';
            script.async = true;
            script.onload = () => {
                Weglot.initialize({
                    // change to key provided by DeShea
                    api_key: "wg_81b8e0e5154d36a6f5c48e5bc7db13c14"
                });
            };
            document.head.appendChild(script);
        })
        provide('themeConfig', {
            //general
            cloudlinuxSite: "https://tuxcare.com",
            defaultURL: "/",
            githubBranch: "master",
            allowGithubEdit: true,
            githubMainDir: "docs",
            sidebarDepth: 2,
            githubRepository: "cloudlinux/tuxcare-documentation",
            submitRequestURL: "https://www.tuxcare.com/support-portal/",
            tryFreeLink: "https://portal.tuxcare.com/",

            //docs cards
            documents,

            // icons
            arrowDownIcon: "arrows/arrow-down.svg",
            githubEditIcon: 'global/pen.svg',
            footerCustomLogo: 'global/we-are-cloudlinux.svg',
            headerDefaultSearchIcon: 'global/search.svg',
            siteLogo: "global/logo.svg",
            searchSelectIcon: 'arrows/select-down.svg',
            headerSearchIcon: 'global/header-search.svg',

            // Header
            headerSearch: "TuxCare Product Documentation",
            headerSearchPlaceholder: "Search across all TuxCare product documentation",

            //locales
            locales: {
                bottomLinks,
                editLinkText: "Edit this page",
                sidebar,
                siteTitle: "Documentation",
                stayInTouch: "Stay in touch",
                submitRequest: "Submit support request",
                tryFree: "TuxCare Portal Login",
            },

            // Products
            productsList: ['CloudLinux', 'Imunify', 'TuxCare'],
            productsTitle: 'Products',

            //social links for footer
            social,

            // Algolia
            algoliaOptions: {
                apiKey: "17e673c12b93fbf7c4a00159b0ae2de0",
                indexName: "tuxcare",
                appId: "R7FCMJM4P7"
            },

            MAX_ALGOLIA_VISIBLE_RESULT: 10,
            MAX_ALGOLIA_VISIBLE_ROWS: 5,
        })
    }
})
