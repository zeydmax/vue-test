<template>
        <div class="flex-two-col">
            <div class="flex-two-col__first">
                <h2>My channels</h2>
                <ul>
                    <li>First Channel</li>
                    <li>Second Channel</li>
                </ul>
                <h2>Assigned Channels</h2>
                <ul>
                    <li>Third Channel</li>
                </ul>
            </div>
            <div class="flex-two-col__second">
                <h2>Edit Profile</h2>
                {{text}}
                <button v-on:click="updateText">Click to Die</button>
                <input type="text" name="name" id="name" :value="this.$store.state.edit.value" v-on:input="handleChange">
            </div>
        </div>
</template>

<script>
export default {
    name: 'FansForm',
    data: function() {
        return {
            text: ''
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

        h2 {
            padding: 24px 24px 16px;
        }

        ul {
            list-style: none;
        }
    }

    &__second {
        flex: 1 1;
        max-width: 880px;
        padding: 24px;
    }
}
</style>