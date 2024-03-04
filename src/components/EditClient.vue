<template>
    <CModal :visible="showModal" @click.native="closeModalOutside">
        <CModalHeader>
            <CModalTitle>Editar Cliente</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CAlert color="success"
                :visible="success">
                {{ successMsg }}
            </CAlert>
            <CForm>
                <CRow class="justify-content-end">
                    <CCol class="">
                        <CButton @click="deleteClient" color="danger"  variant="outline" >
                            <CIcon :icon="icon.cilTrash" size="lg"/>
                        </CButton>
                    </CCol>
                </CRow>
                <CFormInput
                    type="text"
                    placeholder="Nombre"
                    aria-describedby="Nombre Cliente"
                    v-model="form.name"
                    @input="setTouched('name')"
                    feedback="Rellene este campo por favor."
                    :invalid="v$.form.name.$error"
                    class="mt-3"

                />
            </CForm>
        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" @click="closeModal">
                Cerrar
            </CButton>
            <CButton color="primary" @click="saveClient">Guardar</CButton>
        </CModalFooter>
    </CModal>

    <DeleteModal 
        :showDeleteModal="showDeleteModal"
    >
        <template v-slot:modalTitle>Eliminar Cliente</template>
        <template v-slot:modalBody><b>ADVERTENCIA: Todos los datos del cliente serán eliminados.</b></template>
        <template v-slot:modalFooter></template>
    </DeleteModal> 
</template>

<script>
    import axios from 'axios';
    import useVuelidate from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
    import { CIcon } from '@coreui/icons-vue';
    import * as icon from '@coreui/icons';
    import DeleteModal from './DeleteModal'; 

    export default {
        name: 'EditUser',
        props: {
            showModal: Boolean,
            client: Object
        },
        components: {
            CIcon,
            DeleteModal
        },
        setup() {
            return { v$: useVuelidate(), icon }
        },
        validations() {
            return {
                form: {
                    name:{
                        required
                    }
                }
            }
        },
        data() {
            return {
                form: {
                    id: '',
                    name: '',
                },
                showDeleteModal: false,
                success: false,
                successMsg: ''
                
            }
        },
        watch: {
            client: {
                handler(newConfig) {
                    this.setDataClient(newConfig);
                },
                deep: true,
                immediate: true // Esto llama a setDataConfig() inmediatamente después de montar el componente
            },
            showModal(newValue) {
                // Si la modal se cierra, restablecer el valor de showModal
                if (!newValue) {
                    this.$emit('update:showModal', false);
                }
            }
        },
        methods: {
            setTouched(theModel) { 
                if(theModel == 'name' || theModel == 'all' )
                {this.v$.form.name.$touch()}
            },
            closeModal() {
                this.$emit('cerrar'); 
                this.success = false;
            },

            closeModalOutside(event) {
                if (event.target === event.currentTarget) {
                    this.closeModal();
                }
            },
            setDataClient(newConfig) {
                if (newConfig) {
                    console.log(newConfig);
                    this.form.id = newConfig.id;
                    this.form.name = newConfig.name;
                    
                } 
            },

            saveClient() {
                this.setTouched('all');
                if(!this.v$.$invalid) {
                    axios.put(
                        this.$store.state.backendUrl + '/clients/' + this.form.id,
                        this.form,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + this.$store.state.token,
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res); 
                        this.successMsg = "Cliente actualizado exitósamente."; 
                        this.success = true; 
                    })
                    .catch((error) =>  {
                        console.log("Error en post: ", error); 
                    })
                }
                
            },

            deleteClient() {
                this.showDeleteModal = true; 
                /* const deletedClient = this.client; 
                axios.delete(
                    this.$store.state.backendUrl + '/clients/' + deletedClient.id,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + this.$store.state.token,
                        }
                    }
                )
                .then((res) => {
                        console.log(res.data); 
                        //this.successMsg = "Cliente eliminado exitósamente."; 
                        //this.success = true; 
                })
                .catch((error) =>  {
                    console.log("Error en post: ", error); 
                }) */
            }
        }

    }
    
</script>