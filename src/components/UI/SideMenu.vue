<template>
    <div class="side-menu">
        <div class='side-menu__header'>
            <h2>{{title}}</h2>
        </div>
        <ul>
            <li v-for="link in links" :key="link.id">
                <router-link class="side-menu__link" active-class="side-menu__link_active" :to="link.to">{{link.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'SideMenu',
    props: {
        title: String,
        links: Array
    },
}
</script>

<style lang='scss'>
.side-menu {
    background: #fff;
    border-radius: 4px;

    &__header {
        display: flex;
        justify-content: flex-start;
        padding: 16px 24px;
        border-bottom: 1px solid $border;

        h2 {
            font-size: 18px;
            font-weight: bold;
            color: $font-light;
        }
    }
    ul {
        list-style: none;
    }

    &__link {
        display: flex;
        padding: 12px 24px;
    }
}
</style>