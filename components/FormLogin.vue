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
                        <form>
                            <!-- Email address input-->
                            <div class="floating">
                                <input class="control" name="email" type="email" placeholder="Correo">
                                <label for="email">Correo</label>
                            </div>
                            <!-- Password -->
                            <div class="floating">
                                <input class="control" name="password" type="password" placeholder="password">
                                <label for="password">Contraseñá</label>
                            </div>
                            <NuxtLink to="#">¿Has olvidado tu contraseña?</NuxtLink>
                            <div class="d-grid">
                                <button class="btn-register">
                                    <NuxtLink to="/signup">Crear Cuenta
                                    </NuxtLink>
                                </button>
                                <button class="btn-ingresar">
                                    <NuxtLink to="/micuenta">Ingresar
                                    </NuxtLink>
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