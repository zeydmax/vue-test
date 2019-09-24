<template>
    <div class="header">
        <div class="header__content">
            <router-link class="header__link" to="/"><img src="../../assets/logo.png" alt="logo"></router-link>
            <ul>
                <li v-for="link in links" :key="link.id" >
                    <router-link 
                        exact
                        class="header__link"
                        active-class="header__link_active"
                        :to="link.to">
                        {{link.title}}
                    </router-link>
                </li>
                <hr :class="hrClass"/>
            </ul>
        </div>
    </div>
</template>

<script>
const links = [
    {
        title: 'HOME',
        id: 1,
        to: '/'
    },
    {
        title: 'EDIT',
        id: 2,
        to: '/edit'
    }
]
export default {
    name: 'Header',
    data() {
        return {
            links,
            hrClass: this.$route.name === 'Edit' ? 'two' : 'one'
        }
    },
    watch: {
        $route (to, from) {
            this.hrClass = this.$route.name === 'Edit' ? 'two' : 'one'
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 64px;
    display: flex;
    padding: 12px 50px;
    background: #fff;
    border-bottom: 1px solid $background;

    &__content {
        display: inline-flex;
        width: 100%;
        align-items: center;

        & > ul {
            list-style: none;
            position: relative;
            display: flex;
            align-items: center;

            hr {
                position: absolute;
                width: 58%;
                border: 2px solid $main;
                bottom: -5px;
                transition: 0.3s ease-in-out;

                &.one {
                    margin-left: 0;
                    width: 58%;
                }
                &.two {
                    margin-left: 50%;
                    width: 55%;
                }
            }

            li {
                &:nth-of-type(1):hover ~ hr {
                    margin-left: 0%;
                    width: 58%;
                }
                &:nth-of-type(2):hover ~ hr {
                    margin-left: 50%;
                    width: 55%;
                }
            }

        }
    }

    &__link {
        display: flex;
        padding: 16px 12px;
        font-size: 18px;

        img {
            width: 48px;
            height: 48px;
        } 

        &_active {
            color: $main;
        }

    }
}
</style>