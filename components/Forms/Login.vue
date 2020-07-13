<template>
    <form class = "form" @submit.prevent="login">
        <h1 class = "form__title">{{text.login}}</h1>
        <p v-if = "incorrect" class = "form__errorText">Uporabniško ime ali geslo ni pravilno</p>
        <div class = "form__row">
            <label for = "form__username" class = "form__label">Email</label>
            <span class = "form__before form__before--email">
                <input
                type = "text"
                id = "login__username"
                placeholder = "bruce.wayne@batman.com"
                class = "form__input"
                v-model.trim = "email"
                @input = "setEmail($event.target.value)"
                />
            </span>
        </div>
        <div class = "form__row">
            <label for = "form__password" class = "form__label">Geslo</label>
            <span class = "form__before form__before--password">
                <input
                type = "password"
                id = "login__password"
                placeholder = "super_skrivno_geslo"
                class = "form__input"
                v-model.trim.lazy = "password"
                />
            </span>
        </div>
        <div class = "form__row">
            <button type = "submit" :disabled = "disabled" class = "form__submit">Prijava</button>
        </div>
    </form>
</template>

<script>
import gql from 'graphql-tag';
import {email} from 'vuelidate/lib/validators';
import {mapGetters, mapMutations} from 'vuex';

export default {
        computed: {
        ...mapGetters({
            username: 'user/username',
            password: 'user/password',
            email: 'user/email',
            text: 'constants/text'
        })
    },
    data() {
        return {
            disabled: this.email === '',
            incorrect: false
        }
    },
    validations: {
        email: {
            email
        }
    },
    methods: {
        setEmail(val) {
            this.email = val;
            this.$v.email.$touch();
            if(!this.$v.email.$touch()) {
                this.disabled = false;
            }
            else {
                this.disabled = true;
            }
        },
        async login() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            const email = this.email;
            const password = this.password;
            try {
                const response = await this.$apollo.mutate({
                    mutation: gql`mutation login($username: String!, $password: String!) {
                        login(input: {
                            username: $username
                            password: $password
                        })
                        {
                            user {
                                name
                            }
                            token_type
                            access_token
                            refresh_token
                            expires_in
                        }
                    }`,
                    variables: {
                        username: email,
                        password: password
                    }
                });
                const data = response.data.login;
                this.$store.commit('user/setEmail', email);
                this.$store.commit('user/setUsername', data.user.name);
                this.$store.commit('user/setPassword', password);
                this.$store.commit('user/setRefreshToken', data.refresh_token);
                this.$store.commit('user/setAccessToken', data.access_token);
                this.$store.commit('user/setExpiresIn', data.expires_in);
                localStorage.setItem('username', data.user.name);
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
                localStorage.setItem('expires_in', data.expires_in);
            } catch(e) {
                this.incorrect = true;
            }
        }
    }
}
</script>


<style lang="scss">
@import "~/assets/scss/_variables.scss";
.form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5rem 0;
    &__title {
        color: white;
        font-weight: 400;
        font-size: 3rem;
    }
    &__row {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 1.5rem;
        &:last-child {
            margin-bottom: 0;
            margin-top: 1rem;
            align-items: center;
        }
    }
    &__label {
        margin-bottom: .5rem;
        font-size: 1.4rem;
        color: #ccc;
        text-transform: uppercase;
    }
    &__input {
        border: 1px solid #ccc;
        height: 5rem;
        border-radius: var(--border-radius-primary);
        outline: none;
        width: 100%;
        padding-left: 1rem;
        background-color: inherit;
        color: white;
    }
    &__errorText {
        color: var(--color-error);
        font-size: 1.6rem;
        margin: .5rem 0;
        position: relative;
        font-weight: 500;
    }
    &__submit {
        display: flex;
        max-width: 10rem;
        justify-content: center;
        border-radius: var(--border-radius-primary);
        border: 0;
        background-color: var(--color-primary);
        padding: .75rem 1.5rem;
        color: white;
        cursor: pointer;
        transition: filter var(--transition-duration-primary), background-color var(--transition-duration-primary);
        &:hover {
            background-color: var(--color-secondary);
        }
        &[disabled] {
            filter: grayscale(1);
            &:hover {
                background-color: var(--color-primary);
            }
        }
    }
}
</style>
