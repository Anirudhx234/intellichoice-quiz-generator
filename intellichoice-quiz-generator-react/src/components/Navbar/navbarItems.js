export const navbarItems = [
    {
        title: 'Home',
        path: '/home',
        id: 'home',
        class: 'left'
    },
    {
        title: 'Pracitce',
        path: '/practice',
        id: 'practice',
        class: 'left',
        submenu: [
            {
                title: "Grades",
                path: "/practice/grades",
                class: "dropdown"
            },
            {
                title: "Topics",
                path: "/practice/topics",
                class: "dropdown"
            }
        ]
    },
    {
        title: 'Login',
        path: '/login',
        id: 'login',
        class: 'right'
    },
    {
        title: 'Signup',
        path: '/signup',
        id: 'signup',
        class: 'right'
    }
]