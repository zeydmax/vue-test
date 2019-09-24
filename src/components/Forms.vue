<template>
    <div class="forms">
        <div class="forms__header">
            <h2>Forms Edit</h2>
        </div>
        <div class="forms__content">
            <form action="">
                <div 
                    class="forms__input"
                    v-for="input in inputs"
                    :key="input.name"
                >
                    <input 
                        :id="input.name" 
                        type="text"
                    >
                    <label :for="input.name">{{input.label}}</label>
                </div>
                
            </form>
        </div>
    </div>  
</template>

<script>
const inputs = [
    {
        label: 'First Name',
        name: 'firstname',
    },
    {
        label: 'Last Name',
        name: 'lastname'
    },
    {
        label: 'Username',
        name: 'username'
    },
    {
        label: 'Email',
        name: 'email'
    }
]
export default {
    name: 'Forms',
    data() {
        return {
            inputs
        }
    }
}
</script>

<style lang="scss" scoped>
.forms {
    background: #fff;
    border-radius: 4px;

    &__content {
        display: flex;
        padding: 24px;
        max-width: 70%;

        form {
            display: flex;
            flex-wrap: wrap;
        }
    }

    &__header {
        padding: 16px 24px;
        border-bottom: 1px solid $border;
        display: flex;
        justify-content: flex-start;

        h2 {
            font-weight: bold;
            font-size: 20px;
        }
    }

    &__input {
        position: relative;
        margin-right: 16px;
        margin-bottom: 16px;

        label {
            position: absolute;
            font-size: 14px;
            top: -6px;
            left: 6px;
            background: #fff;
            color: $font-main;
            font-weight: bold;
            z-index: 10;
            transition: 0.2s ease-in;
        }

        input {
            border: 2px solid $border;
            border-radius: 8px;
            transition: 0.2s ease-in;
            padding: 6px;
            position: relative;
            z-index: 9;

            &:focus {
                border-color: $main;

                & ~ label {
                    color: $main;
                }
            }
        }
    }
}
</style>