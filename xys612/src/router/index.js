import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

// HomePage
const HomePage = () =>
    import ('@/views/Home/HomePage')
const FAMPage = () =>
    import ('@/views/Home/FAMPage')
const InfoCardDetail = () =>
    import ('@/components/InfoCardDetail')
const InfoCardList = () =>
    import ('@/components/InfoCardList')


// BlogPage
const BlogPageSlot = () =>
    import ('@/views/Blog/BlogPageSlot')
const BlogPage = () =>
    import ('@/views/Blog/BlogPage')
const BlogDetailPage = () =>
    import ('@/views/Blog/BlogDetailPage')
const TagsPage = () =>
    import ('@/views/Blog/TagsPage')


// CodePage
const CodePage = () =>
    import ('@/views/Code/CodePage')


// ToolPage
const ToolPage = () =>
    import ('@/views/Tool/ToolPage')


const ErrorPage = () =>
    import ('@/views/ErrorPage')

const routes = [{
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/test/:type',
        props: true,
        component: () =>
            import ('@/views/Test'),
    },
    {
        path: '/code',
        component: CodePage,
    },
    {
        path: '/blog',
        component: BlogPageSlot,
        children: [{
                path: '',
                component: BlogPage,
            },
            {
                path: 'detail',
                component: BlogDetailPage,
            },
        ]
    },
    {
        path: '/tags/:tagName',
        props: true,
        component: TagsPage,
    },
    {
        path: '/tool',
        component: ToolPage,
    },
    {
        path: '/:type',
        component: FAMPage,
        props: true,
        children: [{
                path: '',
                component: InfoCardList,
            },
            {
                path: 'detail',
                component: InfoCardDetail,
            }
        ]
    },
    // {
    //     path: '/film',
    //     component: FilmPage,
    //     children: [{
    //             path: '',
    //             component: InfoCardList,
    //         },
    //         {
    //             path: 'detail',
    //             component: InfoCardDetail,
    //         }
    //     ]
    // },
    {
        path: '/*',
        component: ErrorPage,
    },
]

const router = new VueRouter({
    routes,
    mode: 'hash',
})

export default router;