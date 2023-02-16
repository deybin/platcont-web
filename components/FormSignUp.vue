<template>
    <main>
        <div class="container-register">
            <div class="center-register">
                <h2>Crear cuenta
                </h2>
                <!-- <img class="logo__img" src="/img/logo.png" alt="logo"> -->
                <hr class="divider">
            </div>
            <!-- start form -->
            <div class="body-register">
                <div class="content-register">
                    <form>
                        <!-- Email address input-->
                        <div class="floating">
                            <input class="control" name="fullname" type="text" placeholder="Nombres y Apellidos">
                            <label for="fullname">Nombres y
                                Apellidos
                            </label>
                        </div>
                        <!-- Email address input-->
                        <div class="floating">
                            <input class="control" name="email" type="email" placeholder="Correo">
                            <label for="email">Correo Electronico</label>
                        </div>
                        <!-- Email address input-->
                        <div class="floating">
                            <input class="control" name="telefono" type="tel" placeholder="Telefono">
                            <label for="tel">Teléfono</label>
                        </div>
                        <!-- Password -->
                        <div class="floating">
                            <input class="control" name="password" type="password" placeholder="password">
                            <label for="password">Contraseñá</label>
                        </div>
                        <!-- Password confirm-->
                        <div class="floating">
                            <input class="control" name="password" type="password" placeholder="password">
                            <label for="password">
                                Confirmar Contarseña
                            </label>
                        </div>
                        <!-- <NuxtLink to="">Terminos y condiciones</NuxtLink> -->
                        <div class="d-grid">
                            <button class="btn-register">
                                <NuxtLink to="/signup">Crear Cuenta
                                </NuxtLink>
                            </button>
                            <button class="btn-back">
                                <NuxtLink to="/login">Regresar
                                </NuxtLink>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- end form -->
        </div>
    </main>
</template>  