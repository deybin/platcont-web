<template>
    <main>
        <div class="container-login">
            <div class="center-login">
                <!-- <img class="logo__img" src="/img/logo.png" alt="logo"> -->
                <h2>Iniciar Sesión</h2>
                <hr class="divider">
                <!-- start form -->
                <div class="form-body-login">
                    <div class="form-content">
                        <form :id="interaction.form_id">
                            <!-- Email address input-->
                            <div class="floating">
                                <input class="control" name="email" type="email" placeholder="Correo">
                                <label for="email">Correo</label>
                            </div>
                            <!-- Password -->
                            <div class="floating">
                                <input class="control" name="password_admin" type="password" placeholder="password">
                                <label for="password">Contraseñá</label>
                            </div>
                            <NuxtLink to="#">¿Has olvidado tu contraseña?</NuxtLink>
                            <div class="d-grid">
                                <button class="btn-register">
                                    <NuxtLink to="/signup">Crear Cuenta
                                    </NuxtLink>
                                </button>
                                <button type="button" class="btn-ingresar" @click="login">
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- end form -->
            </div>
        </div>
    </main>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
    name: 'FormLogin',
    created() {
        // sessionStorage.setItem("url_base", "http://192.168.0.10:5000")
        console.log(this.auth);
    },
    data() {
        return {
            auth:
                useState('auth'),
            dom: {
                email: "",
                password_admin: ""
            },
            interaction: {
                form_id: uuidv4()
            }
        }
    },
    methods: {
        login() {
            this.auth = true;
            //    console.log(useAuth());
            navigateTo('micuenta')
            //    useHydration ('auth', (value) => value, this.auth);
            // console.log(this.auth);
            let dat = newDataGenerate(this.interaction.form_id)
            if (!dat.status) return false
            let data = dat.data
            // API("user/login", { data, method: "PUT", token: "false" }).then(response => {
            //     sessionStorage.setItem("cokie-token", response.token)
            //     // this.$route.push({name: MiCuenta })
            // })
        }
        // signupHandler(){
        //     // let dat = newDataGenerate(this.interaction.form_id)
        //     if(!dat.status) return false
        //     let data = dat.data

        // }
    },
};
</script>