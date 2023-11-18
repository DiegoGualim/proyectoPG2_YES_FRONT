<template>
    <div style="margin-bottom: 5rem">
        <b-navbar toggleable="lg" type="dark" variant="success" id="navbar">
            <b-navbar-brand href="/"
                ><img
                    src="../../assets/logo_umg.jpeg"
                    class="d-inline-block align-top resize"
                    alt=""
                />Proyecto PG2</b-navbar-brand
            >

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav v-if="type === 'admin'">
                    <b-nav-item
                        ><router-link to="/report">Reporte de Comentarios</router-link></b-nav-item
                    >
                    <b-nav-item-dropdown text="Admin">
                        <b-dropdown-item
                            ><router-link class="dropdown-item" to="/user"
                                >User</router-link
                            ></b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <b-navbar-nav v-else-if="type === 'user'">
                    <b-nav-item><router-link to="/infoimg">Imagenes</router-link></b-nav-item>
                </b-navbar-nav>

                <!-- demooo -->
                <b-navbar-nav v-else-if="type === 'demo'"> </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <span class="material-icons"> person </span>
                        </template>
                        <b-dropdown-item @click="signOut()">Cerrar Sesión</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'Nav',
    data() {
        return {
            type: localStorage.type
        }
    },
    methods: {
        signOut() {
            localStorage.type = undefined
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>
