<template>
    <div class="content">
        <Nav />
        <div align="center">
            <img alt="" src="../assets/logo_umg_sin_fondo.png" width="230px" height="230px" />
        </div>

        <h4>
            Universidad Mariano Gálvez de Guatemala
            <br />
            Coban Alta Verapaz
            <a
                href="https://www.facebook.com/profile.php?id=100057188661392"
                target="_blank"
                rel="noopener"
                >Mas información</a
            >.
        </h4>
        <h4>Intrucciones</h4>
        <ul>
            <li>
                <center>
                    <I>
                        <p>
                            Para poder analizar los comentarios de su pagina debe configurar su
                            cuenta de facebook como desarrollador. Clic en
                            <a
                                href="https://developers.facebook.com/tools/explorer/"
                                target="_blank"
                                rel="noopener"
                                >iniciar sesión</a
                            >.
                        </p>
                    </I>
                </center>
            </li>
        </ul>
        <h4>
            <I>
                “Conoceréis la verdad, y la verdad os hará libres significado”
            </I>
        </h4>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4>Nombre: Yesica Cruz</h4>
        <h4>Carnet: 0902 - 19 - 4609</h4>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/navbar/navbar.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'EditFactura',
    components: {
        Nav,
        Footer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
