<template>
    <div class="layout-main">
        <div class="layout-header">
            <h2>
                Buscar un Plan
            </h2>
            <p>
                Tanto si quieres conectarte con familiares y amigos, como aprender de forma remota o
                colaborar con tu equipo, hay un plan de Microsoft 365 que satisface tus necesidades.
            </p>
        </div>
    </div>
    <div class="layout-container">
        <div class="container-card">
            <div class="container-card__items">
                <div class="item-card">
                    <div class="card">
                        <img class="card__img"
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/personal-family?resMode=sharp2&amp;op_usm=1.5,0.65,15,0&amp;wid=1099&amp;hei=880&amp;qlt=75">
                        <div class="card__body orange">
                            <p class="body__title before">
                                <button class="title__btn" type="button" role="button" @click="collapseClick(1)">
                                    Pequeña Empresa
                                </button>
                            </p>
                            <div :class="[(interaction.collapse == 1) ? 'collapse-show' : 'collapse-hide']">
                                <div class="items__center">
                                    <p>Mantente al día con un plan para ti y para tu familia.</p>
                                    <div class="center__price">
                                        <span>S./</span>
                                        <span class="size-1">150</span>
                                        <span>/mes</span>
                                    </div>
                                </div>
                            </div>
                            <div class="items__link__group">
                                <nuxt-link class="btn orange" to="/modulos">
                                    Ver más acerca de los modulos
                                </nuxt-link>
                                <div>
                                    <nuxt-link class="btn__link" @click="showModule(1)">
                                        Agrega más modulos a tu plan
                                    </nuxt-link>
                                    <div>
                                        <!-- Modulos -->
                                        <div :class="[(interaction.module == 1) ? 'collapse-show' : 'collapse-hide']">
                                            <div class="items-modulos">
                                                <label>
                                                    <input class="checkbox-items" type="checkbox" id="cbox1"
                                                        value="first_checkbox">
                                                    <span>
                                                        <i class="material-icons">
                                                            account_balance
                                                        </i>
                                                        Financiera
                                                    </span>
                                                </label>
                                            </div>

                                            <div>
                                                <label>
                                                    <input class="checkbox-items" type="checkbox" id="cbox1"
                                                        value="first_checkbox">
                                                    <span>
                                                        <i class="material-icons">
                                                            point_of_sale
                                                        </i>
                                                        Caja
                                                    </span>
                                                </label>
                                            </div>

                                            <div>
                                                <label>
                                                    <input class="checkbox-items" type="checkbox" id="cbox1"
                                                        value="first_checkbox">
                                                    <span>
                                                        <i class="material-icons">
                                                            apartment
                                                        </i>
                                                        Multisucursal
                                                    </span>
                                                </label>
                                            </div>

                                            <div>
                                                <label>
                                                    <input class="checkbox-items" type="checkbox" id="cbox1"
                                                        value="first_checkbox">
                                                    <span>
                                                        <i class="material-icons">
                                                            account_balance_wallet
                                                        </i>
                                                        Contabilidad
                                                    </span>
                                                </label>
                                            </div>

                                            <div>
                                                <label>
                                                    <input class="checkbox-items" type="checkbox" id="cbox1"
                                                        value="first_checkbox">
                                                    <span>
                                                        <i class="material-icons">
                                                            inventory
                                                        </i>
                                                        Stock
                                                    </span>
                                                </label>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-card">
                    <div class="card">
                        <img class="card__img"
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/personal-family?resMode=sharp2&amp;op_usm=1.5,0.65,15,0&amp;wid=1099&amp;hei=880&amp;qlt=75">
                        <div class="card__body blue">
                            <p class="body__title">
                                <button class="title__btn" type="button" role="button" @click="collapseClick(2)">
                                    Mediana Empresa
                                </button>
                            </p>
                            <div :class="[(interaction.collapse == 2) ? 'collapse-show' : 'collapse-hide']">
                                <div class="items__center">
                                    <p>
                                        Permite que tus empleados con herramientas colaboren de forma segura y trabaja
                                        desde cualquier lugar.
                                    </p>
                                    <div class="center__price">
                                        <span>S./</span>
                                        <span class="size-1">250</span>
                                        <span>/mes</span>
                                    </div>

                                </div>
                            </div>
                            <div class="items__link__group">
                                <nuxt-link class="btn blue" to="/modulos">
                                    Ver más acerca de los modulos
                                </nuxt-link>
                                <div>
                                    <nuxt-link class="btn__link" @click="showModule(2)">
                                        Agrega más modulos a tu plan
                                    </nuxt-link>
                                    <!-- Modulos -->
                                    <div :class="[(interaction.module == 2) ? 'collapse-show' : 'collapse-hide']">
                                        <div class="items-modulos">
                                            <label>
                                                <input class="checkbox-items" type="checkbox" id="cbox1"
                                                    value="first_checkbox">
                                                <span>
                                                    <i class="material-icons">
                                                        account_balance
                                                    </i>
                                                    Financiera
                                                </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label>
                                                <input class="checkbox-items" type="checkbox" id="cbox1"
                                                    value="first_checkbox">
                                                <span>
                                                    <i class="material-icons">
                                                        point_of_sale
                                                    </i>
                                                    Caja
                                                </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label>
                                                <input class="checkbox-items" type="checkbox" id="cbox1"
                                                    value="first_checkbox">
                                                <span>
                                                    <i class="material-icons">
                                                        apartment
                                                    </i>
                                                    Multisucursal M ax 3
                                                </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label>
                                                <input class="checkbox-items" type="checkbox" id="cbox1"
                                                    value="first_checkbox">
                                                <span>
                                                    <i class="material-icons">
                                                        account_balance_wallet
                                                    </i>
                                                    Contabilidad
                                                </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label>
                                                <input class="checkbox-items" type="checkbox" id="cbox1"
                                                    value="first_checkbox">
                                                <span>
                                                    <i class="material-icons">
                                                        inventory
                                                    </i>
                                                    Stock
                                                </span>
                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-card">
                    <div class="card">
                        <img class="card__img"
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/personal-family?resMode=sharp2&amp;op_usm=1.5,0.65,15,0&amp;wid=1099&amp;hei=880&amp;qlt=75">
                        <div class="card__body green">
                            <p class="body__title">
                                <button class="title__btn" type="button" role="button" @click="collapseClick(3)">
                                    Grande Empresa
                                </button>
                            </p>
                            <div :class="[(interaction.collapse == 3) ? 'collapse-show' : 'collapse-hide']">
                                <div class="items__center">
                                    <p>
                                        Permite que tus empleados con herramientas colaboren de forma segura y trabaja
                                        desde cualquier lugar.
                                    </p>
                                    <div class="center__price">
                                        <span>S./</span>
                                        <span class="size-1">650</span>
                                        <span>/mes</span>
                                    </div>
                                </div>
                            </div>
                            <div class="items__link__group">
                                <nuxt-link class="btn green" to="/modulos">
                                    Ver más acerca de los modulos
                                </nuxt-link>
                                <div>
                                    <nuxt-link class="btn__link cta" @click="showModule(3)">
                                        Agrega más modulos a tu plan
                                    </nuxt-link>
                                     <!-- Modulos -->
                                     <div :class="[(interaction.module == 3) ? 'collapse-show' : 'collapse-hide']">
                                        <div class="items-modulos">
                                            <label>
                                                <input class="checkbox-items" type="checkbox" id="cbox1"
                                                    value="first_checkbox">
                                                <span>
                                                    <i class="material-icons">
                                                        account_balance
                                                    </i>
                                                    Financiera
                                                </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label for="cbox2">
                                                <input class="checkbox-items" type="checkbox" id="cbox2"
                                                    value="second_checkbox" @click="checkedClick(2)">
                                                <span>
                                                    <i class="material-icons">
                                                        point_of_sale
                                                    </i>
                                                    Caja
                                                </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label for="cbox3">
                                                <input class="checkbox-items" type="checkbox" id="cbox3"
                                                    value="third_checkbox" @click="checkedClick(3)">
                                                <span>
                                                    <i class="material-icons">
                                                        apartment
                                                    </i>
                                                    Multi Sucursal Ilimitado
                                                </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label for="cbox4">
                                                <input class="checkbox-items" type="checkbox" id="cbox4"
                                                    value="fourth_checkbox" @click="checkedClick(4)">
                                                <span>
                                                    <i class="material-icons">
                                                        account_balance_wallet
                                                    </i>
                                                    Contabilidad
                                                </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label for="cbox5">
                                                <input class="checkbox-items" type="checkbox" id="cbox5"
                                                    value="fifth_checkbox" @click="checkedClick(5)">
                                                <span>
                                                    <i class="material-icons">
                                                        inventory
                                                    </i>
                                                    Stock
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
export default {
    name: "PreciosView",
    mounted() {

    },
    data() {
        return {
            interaction: {
                collapse: 0,
                module: 0
            }
        }
    },
    methods: {
        collapseClick(index) {
            if (index == this.interaction.collapse) this.interaction.collapse = 0
            else this.interaction.collapse = index
        },
        showModule(index) {
            if (this.interaction.module) this.interaction.module = 0
            else this.interaction.module = index
        }
    }
}
</script>