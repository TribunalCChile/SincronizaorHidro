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
<<<<<<< HEAD
            <div>
                <CButton color="danger" variant="outline" @click="handleDeleteModal">
                    <CIcon :icon="icon.cilTrash" size="lg"/>
                </CButton>
            </div>
            <CForm class="mt-3">
=======
            <CForm>
                <CRow class="justify-content-end">
                    <CCol class="">
                        <CButton @click="deleteClient" color="danger"  variant="outline" >
                            <CIcon :icon="icon.cilTrash" size="lg"/>
                        </CButton>
                    </CCol>
                </CRow>
>>>>>>> cde013cd2844bf5f0c3da6106e8c24b06cb6e32a
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

<<<<<<< HEAD
    <DeleteModal
        :showDeleteModal="showDeleteModal"
        @cerrarDelete="onCloseDeleteModal"
        :client="form"
    >
        <template v-slot:modalTitle>Eliminar Cliente</template>
        <template v-slot:modalBody>
            <b>ADVERTENCIA:</b> Se eliminarán todos los datos de este cliente.
        </template>
        <template v-slot:modalFooter>
        </template>

    </DeleteModal>
=======
    <DeleteModal 
        :showDeleteModal="showDeleteModal"
    >
        <template v-slot:modalTitle>Eliminar Cliente</template>
        <template v-slot:modalBody><b>ADVERTENCIA: Todos los datos del cliente serán eliminados.</b></template>
        <template v-slot:modalFooter></template>
    </DeleteModal> 
>>>>>>> cde013cd2844bf5f0c3da6106e8c24b06cb6e32a
</template>

<script>
    import axios from 'axios';
    import useVuelidate from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
    import { CIcon } from '@coreui/icons-vue';
    import * as icon from '@coreui/icons';
<<<<<<< HEAD
    import DeleteModal from './DeleteModal.vue'; 
=======
    import DeleteModal from './DeleteModal'; 
>>>>>>> cde013cd2844bf5f0c3da6106e8c24b06cb6e32a

    export default {
        name: 'EditUser',
        components: {
            CIcon,
            DeleteModal,
        },
        props: {
            showModal: Boolean,
            client: Object
        },
        components: {
            CIcon,
            DeleteModal
        },
        setup() {
<<<<<<< HEAD
            return { 
                v$: useVuelidate(),
                icon
            }
=======
            return { v$: useVuelidate(), icon }
>>>>>>> cde013cd2844bf5f0c3da6106e8c24b06cb6e32a
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
                successMsg: '',
                showDeleteModal: false,
                
            }
        },
        watch: {
            client: {
                handler(newConfig) {
                    this.setDataClient(newConfig);
                },
                deep: true,
                immediate: true 
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

            handleDeleteModal() {
                this.showDeleteModal = true; 
                
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
<<<<<<< HEAD
            onCloseDeleteModal() {
                this.showDeleteModal = false; 
=======

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
>>>>>>> cde013cd2844bf5f0c3da6106e8c24b06cb6e32a
            }
        }

    }
    
</script>