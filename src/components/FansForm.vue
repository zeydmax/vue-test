<template>
        <div class="flex-two-col">
            <div class="flex-two-col__first">
                <SideMenu title="Navigation" :links="links" />
            </div>
            <div class="flex-two-col__second">
                <transition name='fade' mode='in-out'>
                    <router-view />
                </transition>
                <button v-on:click="updateText">Click to Die</button>
                <input type="text" name="name" id="name" :value="this.$store.state.edit.value" v-on:input="handleChange">
            </div>
        </div>
</template>

<script>
import SideMenu from './UI/SideMenu'

const links = [
    {
        title: 'Form',
        to: 'edit/form',
        id: 1
    }
]

export default {
    name: 'FansForm',
    components: {
        SideMenu
    },
    data: function() {
        return {
            text: '',
            links
        }
    },
    computed: {
        textReversed: function() {
            const newText = this.text.split('').reverse().join('');
            return newText;
        }
    },
    methods: {
        updateText: function() {
            this.text = 'Omae wa mou shindeiru';
            console.log('NANI?!');
        },
        handleChange(event) {
            const value = event.target.value;
            this.$store.dispatch('changeInput', value)
        }
    },
    destroyed() {
        this.$store.dispatch('unmountState')
    }
}
</script>

<style lang="scss">
.flex-two-col {
    display: flex;
    justify-content: center;

    &__first {
        min-width: 280px;
        max-width: 280px;
        margin-right: 20px;
    }

    &__second {
        flex: 1 1;
        max-width: 880px;
    }
}
</style>