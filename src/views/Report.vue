<template>
    <div class="content">
        <Nav />
        <div class="maincontent">
            <h3>Reporte de Comentarios</h3>
            <b-container class="containermain mt-4">
                <FormComments />
            </b-container>
            <b-container class="containermain mt-4">
                <TableCommets />
            </b-container>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import FormComments from '@/components/Reports/Form.vue'
import TableCommets from '@/components/Reports/Table.vue'
import Nav from '@/components/navbar/navbar.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'Commets',
    components: {
        FormComments,
        TableCommets,
        Nav,
        Footer
    }
}
</script>
