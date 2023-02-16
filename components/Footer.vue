<template>
    <div class="container-foot">
        <div class="content-container">
            <!-- <div class="row">
                <div class="footer-menu">
                    <p>Platcont</p>
                    <ul class="platcont-items">
                        <li class="list">
                            <nuxt-link to="/modulos" class="text-light">Modulos</nuxt-link>
                        </li>
                        <li class="list">
                            <nuxt-link to="/whyplatcont" class="text-light">¿Por qué Platcont?</nuxt-link>
                        </li>
                        <li class="list">
                            <nuxt-link to="/precios" class="text-light">Precios</nuxt-link>
                        </li>
                        <li class="list">
                            <nuxt-link to="/contactanos" class="text-light">Contáctanos</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-sociales">
                    <p>Redes Sociales</p>
                    <div class="red-social">
                        <p>
                            <nuxt-link to="https://twitter.com/?lang=es" target=" _blank">
                                <img src="/img/icons/twitter.png" alt="twitter" width="30">
                            </nuxt-link>
                            Twitter
                        </p>
                    </div>
                    <div class="red-social">
                        <p>
                            <nuxt-link to="https://www.youtube.com" target=" _blank">
                                <img src="/img/icons/youtube.png" alt="youtube" width="30">
                            </nuxt-link>
                            Youtube
                        </p>
                    </div>
                    <div class="red-social">
                        <p>
                            <nuxt-link to="https://www.facebook.com" target=" _blank">
                                <img src="/img/icons/facebook_messenger.png" alt="facebook" width="30">
                            </nuxt-link>
                            Facebook
                        </p>
                    </div>
                    <div class="red-social column-2">
                        <p>
                            <nuxt-link to="https://api.whatsapp.com/send?phone=51924700200" target=" _blank">
                                <img src="/img/icons/whatsapp.png" alt="facebook" width="30">
                            </nuxt-link>
                            whatsApp
                        </p>
                    </div>
                </div>
                <div class="footer-contactos">
                    <p>Contáctanos</p>
                    <ul class="platcont-items">
                        <li class="list border-bottom">
                            <nuxt-link to="tel:+51924-700-200" class="text-light">Celular:
                                924-700-200
                            </nuxt-link>
                        </li>
                        <li class="list border-bottom">
                            <nuxt-link to="mailto:platcont@hotmail.com" Subject="Aquí%20el%20asunto%20del%20mail" 
                            class="text-light">Correo
                                Electrónico: platcont@hotmail.com
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div> -->
            <div class="FooterContainer-up">
                <div class="u-wrapper FooterGrid-up">
                    <div class="SloganSection">
                        <figure>
                            <nuxt-link to="/">
                                <img loading="lazy" src="/img/logo.png" alt="Platcont">
                            </nuxt-link>
                        </figure>
                        <p>
                            <span>
                                PLATCONT es más que un software. De la mano con un servicio
                                permanente de soporte, aseguramos el éxito de tu proyecto
                                y te acompañamos en tu crecimiento.
                            </span>
                        </p>
                    </div>
                    <div class="SocialLayout">
                        <span>Siguenos en nuestras redes:</span>
                        <nuxt-link to="https://twitter.com" class="SocialItem" target="_blank" rel="noreferrer">
                            <img class="svg-inline" src="/img/icons/twitter.png">
                        </nuxt-link>
                        <nuxt-link to="https://www.youtube.com/channel/UC55-mxUj5Nj3niXFReG44OQ" class="SocialItem"
                            target="_blank" rel="noreferrer">
                            <img class="svg-inline" src="/img/icons/youtube.png">
                        </nuxt-link>
                        <nuxt-link to="https://facebook.com/" class="SocialItem" target="_blank" rel="noreferrer">
                            <img class="svg-inline" src="/img/icons/facbook.png">
                        </nuxt-link>
                        <nuxt-link to="https://www.instagram.com/" class="SocialItem" target="_blank" rel="noreferrer">
                            <img class="svg-inline" src="/img/icons/instagram.png">
                        </nuxt-link>
                    </div>
                    <div class="CategoriesSection">
                        <div to="" class="Category" style="border-left:solid 3px #FFBB00"><nuxt-link
                                to="/modulos">Contabilidad</nuxt-link>
                            <div class="Arrow"></div>
                        </div>
                        <div to="" class="Category" style="border-left:solid 3px #218371"><nuxt-link
                                to="/modulos">Recursos
                                Humanos</nuxt-link>
                            <div class="Arrow"></div>
                        </div>
                        <div to="" class="Category" style="border-left:solid 3px #1476B8"><nuxt-link
                                to="/modulos">Stock</nuxt-link>
                            <div class="Arrow"></div>
                        </div>
                        <div to="" class="Category" style="border-left:solid 3px #CE3B3E"><nuxt-link
                                to="/modulos">Taxi</nuxt-link>
                            <div class="Arrow"></div>
                        </div>
                        <div to="" class="Category" style="border-left:solid 3px #81439D"><nuxt-link
                                to="/modulos">Transportes</nuxt-link>
                            <div class="Arrow"></div>
                        </div>
                        <div to="" class="Category" style="border-left:solid 3px #FF8D0A">
                            <nuxt-link to="/modulos">Costos</nuxt-link>
                            <div class="Arrow"></div>
                        </div>
                        <div to="" class="Category" style="border-left:solid 3px #17871D"><nuxt-link
                                to="/modulos">Activos Fijos</nuxt-link>
                            <div class="Arrow"></div>
                        </div>
                        <div to="" class="Category" style="border-left:solid 3px #C92387">
                            <nuxt-link to="/modulos">Caja</nuxt-link>
                            <div class="Arrow">
                            </div>
                        </div>
                        <div to="" class="Category" style="border-left:solid 3px #23BEC9">
                            <nuxt-link to="/modulos">Financiera</nuxt-link>
                            <div class="Arrow">
                            </div>
                        </div>
                    </div>
                    <div class="ContactsLayout">
                        <span>Contactanos</span>
                        <div class="Contacts">
                            <nuxt-link to="tel://924-700-200" target=" _blank">
                                <!-- <img src="/img/icons/phone.png" alt="facebook" width="50"> -->
                                <i class="material-icons">
                                    phone_android
                                </i>
                            </nuxt-link>
                            <h5 class="font-weight-bold">Telefono +51 924700200</h5>
                        </div>
                        <div class="Contacts">
                            <nuxt-link to="mail:platcont@hotmail.com" target=" _blank">
                                <!-- <img src="/img/icons/mail.png" alt="mail" width="50"> -->
                                <i class="material-icons">
                                    email
                                </i>
                            </nuxt-link>
                            <h5 class="font-weight-bold">platcont@hotmail.com</h5>
                        </div>
                    </div>
                    <!-- <div class="AwardsLayout">
                        <span>Grande Empresas</span>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>