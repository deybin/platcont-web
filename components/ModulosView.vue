<template>
    <div class="tabs">
        <h2>Mantente conectado y completa tareas con Platcont</h2>
        <div class="container-tabs">
            <!-- <div class="dropdawn-container">
                <div :class="[(interaction.tab == 0) ? 'show' : 'hide']">
                    <button class="btn" type="button" role="button" @click="tabClick(0)">
                        <i class="material-icons">
                            account_balance
                        </i>
                        Financiera
                    </button>
                    <p>Lorem commodo ad aute ea do occaecat elit nulla voluptate laboris non anim
                        commodo.Sunt sit ipsum deserunt deserunt irure ad. Dolor sint dolor commodo
                        pariatur
                        consequat enim laboris laborum tempor sit ipsum eiusmod cillum ea. In minim
                        deserunt
                        veniam amet incididunt est officia aliquip est est. Ea reprehenderit quis magna
                        cupidatat et consequat. Ad cillum voluptate veniam cupidatat. Laborum pariatur
                        non
                        adipisicing labore sit veniam velit et officia tempor culpa pariatur.</p>
                    <img src="/img/platcont-view.png">
                </div>
            </div> -->
            <div class="dropdawn-container">
                <button class="btn" type="button" role="button" @click="tabClick(1)">
                    <i class="material-icons">
                        account_balance_wallet
                    </i>
                    Contabilidad
                </button>
                <div :class="[(interaction.tab == 1) ? 'show' : 'hide']">
                    <p>Lorem commodo ad aute ea do occaecat elit nulla voluptate laboris non anim
                        commodo.Sunt sit ipsum deserunt deserunt irure ad. Dolor sint dolor commodo
                        pariatur
                        consequat enim laboris laborum tempor sit ipsum eiusmod cillum ea. In minim
                        deserunt
                        veniam amet incididunt est officia aliquip est est. Ea reprehenderit quis magna
                        cupidatat et consequat. Ad cillum voluptate veniam cupidatat. Laborum pariatur
                        non
                        adipisicing labore sit veniam velit et officia tempor culpa pariatur.</p>
                    <img src="/img/modulos/contabilidad.jpg">
                </div>
            </div>
            <div class="dropdawn-container">
                <button class="btn" type="button" role="button" @click="tabClick(2)">
                    <i class="material-icons">
                        admin_panel_settings
                    </i>
                    Recursos Humanos
                </button>
                <div :class="[(interaction.tab == 2) ? 'show' : 'hide']">
                    <p>Lorem commodo ad aute ea do occaecat elit nulla voluptate laboris non anim
                        commodo.Sunt sit ipsum deserunt deserunt irure ad. Dolor sint dolor commodo
                        pariatur
                        consequat enim laboris laborum tempor sit ipsum eiusmod cillum ea. In minim
                        deserunt
                        veniam amet incididunt est officia aliquip est est. Ea reprehenderit quis magna
                        cupidatat et consequat. Ad cillum voluptate veniam cupidatat. Laborum pariatur
                        non
                        adipisicing labore sit veniam velit et officia tempor culpa pariatur.</p>
                    <img src="/img/modulos/RRHH.webp">
                </div>
            </div>
            <div class="dropdawn-container">
                <button class="btn" type="button" role="button" @click="tabClick(3)">
                    <i class="material-icons">
                        inventory
                    </i>
                    Stock
                </button>
                <div :class="[(interaction.tab == 3) ? 'show' : 'hide']">
                    <p>Lorem commodo ad aute ea do occaecat elit nulla voluptate laboris non anim
                        commodo.Sunt sit ipsum deserunt deserunt irure ad. Dolor sint dolor commodo
                        pariatur
                        consequat enim laboris laborum tempor sit ipsum eiusmod cillum ea. In minim
                        deserunt
                        veniam amet incididunt est officia aliquip est est. Ea reprehenderit quis magna
                        cupidatat et consequat. Ad cillum voluptate veniam cupidatat. Laborum pariatur
                        non
                        adipisicing labore sit veniam velit et officia tempor culpa pariatur.</p>
                    <img src="/img/modulos/stock.webp">
                </div>
            </div>
            <div class="dropdawn-container">
                <button class="btn" type="button" role="button" @click="tabClick(4)">
                    <i class="material-icons">
                        local_taxi
                    </i>
                    Taxi
                </button>
                <div :class="[(interaction.tab == 4) ? 'show' : 'hide']">
                    <p>Lorem commodo ad aute ea do occaecat elit nulla voluptate laboris non anim
                        commodo.Sunt sit ipsum deserunt deserunt irure ad. Dolor sint dolor commodo
                        pariatur
                        consequat enim laboris laborum tempor sit ipsum eiusmod cillum ea. In minim
                        deserunt
                        veniam amet incididunt est officia aliquip est est. Ea reprehenderit quis magna
                        cupidatat et consequat. Ad cillum voluptate veniam cupidatat. Laborum pariatur
                        non
                        adipisicing labore sit veniam velit et officia tempor culpa pariatur.</p>
                    <img src="/img/modulos/taxi.png">
                </div>
            </div>
            <div class="dropdawn-container">
                <button class="btn" type="button" role="button" @click="tabClick(5)">
                    <i class="material-icons">
                        directions_car
                    </i>
                    Transportes
                </button>
                <div :class="[(interaction.tab == 5) ? 'show' : 'hide']">
                    <p>Lorem commodo ad aute ea do occaecat elit nulla voluptate laboris non anim
                        commodo.Sunt sit ipsum deserunt deserunt irure ad. Dolor sint dolor commodo
                        pariatur
                        consequat enim laboris laborum tempor sit ipsum eiusmod cillum ea. In minim
                        deserunt
                        veniam amet incididunt est officia aliquip est est. Ea reprehenderit quis magna
                        cupidatat et consequat. Ad cillum voluptate veniam cupidatat. Laborum pariatur
                        non
                        adipisicing labore sit veniam velit et officia tempor culpa pariatur.</p>
                    <img src="/img/modulos/transporte.png">
                </div>
            </div>
            <div class="dropdawn-container">
                <button class="btn" type="button" role="button" @click="tabClick(6)">
                    <i class="material-icons">
                        payments
                    </i>
                    Costos
                </button>
                <div :class="[(interaction.tab == 6) ? 'show' : 'hide']">
                    <p>
                        Lorem commodo ad aute ea do occaecat elit nulla voluptate laboris non anim
                        commodo.Sunt sit ipsum deserunt deserunt irure ad. Dolor sint dolor commodo
                        pariatur
                        consequat enim laboris laborum tempor sit ipsum eiusmod cillum ea. In minim
                        deserunt
                        veniam amet incididunt est officia aliquip est est. Ea reprehenderit quis magna
                        cupidatat et consequat. Ad cillum voluptate veniam cupidatat. Laborum pariatur
                        non
                        adipisicing labore sit veniam velit et officia tempor culpa pariatur.
                    </p>
                    <img src="/img/modulos/costos.png">
                </div>
            </div>
            <div class="dropdawn-container">
                <button class="btn" type="button" role="button" @click="tabClick(7)">
                    <i class="material-icons">
                        monetization_on
                    </i>
                    Activos Fijos
                </button>
                <div :class="[(interaction.tab == 7) ? 'show' : 'hide']">
                    <p>
                        Lorem commodo ad aute ea do occaecat elit nulla voluptate laboris non anim
                        commodo.Sunt sit ipsum deserunt deserunt irure ad. Dolor sint dolor commodo
                        pariatur
                        consequat enim laboris laborum tempor sit ipsum eiusmod cillum ea. In minim
                        deserunt
                        veniam amet incididunt est officia aliquip est est. Ea reprehenderit quis magna
                        cupidatat et consequat. Ad cillum voluptate veniam cupidatat. Laborum pariatur
                        non
                        adipisicing labore sit veniam velit et officia tempor culpa pariatur.
                    </p>
                    <img src="/img/modulos/activos.png">
                </div>
            </div>
            <div class="dropdawn-container">
                <button class="btn" type="button" role="button" @click="tabClick(8)">
                    <i class="material-icons">
                        point_of_sale
                    </i>
                    Caja
                </button>
                <div :class="[(interaction.tab == 8) ? 'show' : 'hide']">
                    <p>
                        Lorem commodo ad aute ea do occaecat elit nulla voluptate laboris non anim
                        commodo.Sunt sit ipsum deserunt deserunt irure ad. Dolor sint dolor commodo
                        pariatur
                        consequat enim laboris laborum tempor sit ipsum eiusmod cillum ea. In minim
                        deserunt
                        veniam amet incididunt est officia aliquip est est. Ea reprehenderit quis magna
                        cupidatat et consequat. Ad cillum voluptate veniam cupidatat. Laborum pariatur
                        non
                        adipisicing labore sit veniam velit et officia tempor culpa pariatur.
                    </p>
                    <img src="/img/modulos/caja.webp">
                </div>
            </div>
            <div class="dropdawn-container">
                <button class="btn" type="button" role="button" @click="tabClick(9)">
                    <i class="material-icons">
                        credit_score
                    </i>
                    Financiera
                </button>
                <div :class="[(interaction.tab == 9) ? 'show' : 'hide']">
                    <p>
                        Lorem commodo ad aute ea do occaecat elit nulla voluptate laboris non anim
                        commodo.Sunt sit ipsum deserunt deserunt irure ad. Dolor sint dolor commodo
                        pariatur
                        consequat enim laboris laborum tempor sit ipsum eiusmod cillum ea. In minim
                        deserunt
                        veniam amet incididunt est officia aliquip est est. Ea reprehenderit quis magna
                        cupidatat et consequat. Ad cillum voluptate veniam cupidatat. Laborum pariatur
                        non
                        adipisicing labore sit veniam velit et officia tempor culpa pariatur.
                    </p>
                    <img src="/img/modulos/financiera.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "modulos",
    data() {
        return {
            interaction: {
                tab: 1
            }
        }
    },
    methods: {
        tabClick(index) {
            if (index == this.interaction.tab) this.interaction.tab = 0
            else this.interaction.tab = index
        }
    }
}

</script>