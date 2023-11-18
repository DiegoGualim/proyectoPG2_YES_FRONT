<template>
    <div class="m-3">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-row>
                <b-col
                    ><b-form-group
                        id="input-group-1"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="ID FACEBOOK"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.id_face"
                            placeholder=""
                            required
                        ></b-form-input> </b-form-group
                ></b-col>
                <b-col
                    ><b-form-group
                        id="input-email"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="ACCESS TOKEN"
                        label-for="input-email"
                    >
                        <b-form-input
                            id="input-2"
                            v-model="form.access_tok"
                            placeholder=""
                            required
                        ></b-form-input> </b-form-group
                ></b-col>
            </b-row>

            <div class="mt-3">
                <b-button
                    :disabled="buttonDisabled"
                    type="submit"
                    variant="primary bg-success"
                    class="mt-4"
                    style="min-width: 14rem"
                    >Consultar Commets</b-button
                >
            </div>
        </b-form>
    </div>
</template>

<script>
import { requestHandler } from '@/helpers/requestHandler'
import { requestOptions } from '@/helpers/requestOptions'
import EventBus from '@/bus'

export default {
    name: 'Form',
    data() {
        return {
            form: {
                id_face: '',
                access_tok: ''
            },
            show: true,
            buttonDisabled: false
        }
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault()
            this.buttonDisabled = true
            console.log(this.form)
            const reconsultation = await requestHandler
                .async_fetch(
                    `${process.env.VUE_APP_BACKEND}/api/sentimental/${this.form.id_face}/${this.form.access_tok}`,
                    requestOptions.get()
                )
                .then(() => {
                    this.showToast()
                })
            console.log(reconsultation)
            EventBus.$emit('updateUserTable')
            this.buttonDisabled = false
            ;(this.form.id_face = ''),
                (this.form.access_tok = ''),
                // Trick to reset/clear native browser form validation state
                (this.show = false)
            this.$nextTick(() => {
                this.show = true
            })
            //this.$router.push({name:"user"});
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            ;(this.form.id_face = ''),
                (this.form.access_tok = ''),
                // Trick to reset/clear native browser form validation state
                (this.show = false)
            this.$nextTick(() => {
                this.show = true
            })
        },
        showToast() {
            // Use a shorter name for this.$createElement
            const h = this.$createElement
            // Increment the toast count
            // Create the message
            const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
                h('strong', 'Usuario Registrado con Éxito')
            ])
            // Pass the VNodes as an array for message and title
            this.$bvToast.toast([vNodesMsg], {
                solid: true,
                variant: 'info',
                toaster: 'b-toaster-top-right',
                noCloseButton: true
            })
        }
    }
}
/**
 * style="background-color:#6E6658; padding:3rem;"
 * https://codepen.io/wfigueiredo/pen/BVmzzy
 */
</script>
