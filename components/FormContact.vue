<template>
    <main>
        <div class="container-form">
            <div class="content-center">
                <h2>Contacta a Platcont</h2>
                <hr class="divider">
                <p>
                    No dudes en comunicarte con nosotros, haznos llegar tus dudas y con gusto te ayudamos.
                </p>
            </div>
            <!-- start form -->
            <div class="form-body">
                <div class="form-content">
                    <form>
                        <!-- Name input-->
                        <div class="form-floating">
                            <input class="form-control" name="name" type="text" placeholder="Nombres">
                            <label for="name">Nombre</label>
                        </div>
                        <!-- Email address input-->
                        <div class="form-floating">
                            <input class="form-control" name="email" type="email" placeholder="Correo">
                            <label for="email">Correo</label>
                        </div>
                        <!-- Phone number input-->
                        <div class="form-floating">
                            <input class="form-control" name="telefono" type="tel" placeholder="Telefono">
                            <label for="email">Teléfono</label>
                        </div>
                        <!-- Message input-->
                        <div class="form-floating">
                            <textarea class="form-control textarea" name="asunto" type="text" placeholder="Escribe algo aqui tu comentario...."></textarea>
                            <label for="message">Comentario</label>
                        </div>
                        <div class="d-grid">
                            <div class="button">
                                <button class="button-green" id="button-send">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- end form -->
            <div class="contact-message">
                <div class="social">
                    <nuxt-link to="tel://924-700-200" target=" _blank">
                        <img src="/img/icons/phone.png" alt="telefono" width="50">
                    </nuxt-link>
                    <h5 class="font-weight-bold">Telefono +51 924700200</h5>
                    <nuxt-link to="tel://924-700-200" target=" _blank">
                        <img src="/img/icons/mail.png" alt="mail" width="50">
                    </nuxt-link>
                    <h5 class="font-weight-bold">platcont@hotmail.com</h5>
                    <nuxt-link to="https://api.whatsapp.com/send?phone=51924700200" target=" _blank">
                        <img src="/img/icons/whatsapp.png" alt="whatsapp" width="50">
                    </nuxt-link>
                    <p class="text-muted">
                        Escribeme al whatsapp es más rapido
                    </p>
                    <div>+51 924700200</div>
                </div>
    
            </div>
        </div>
    </main>
</template>