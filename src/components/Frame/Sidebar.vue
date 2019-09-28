<template>
  <sidebar-menu :menu="menu" />
</template>
 
<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'SIDEBAR',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/subject',
                        title: 'Subject',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/personal-info',
                        title: 'Personal-Info',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/accounts',
                        title: 'Accounts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/accounts/logout',
                                title: 'Logout'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script> 
<style>
  menu:icon {
    color: white;
  }
</style>