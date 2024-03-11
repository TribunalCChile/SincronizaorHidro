<template>
    <CModal :visible="showAddModal" @close="closeModal">
        <CModalHeader>
            <CModalTitle>Nuevo Cliente</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CAlert color="success"
                :visible="success">
                {{ successMsg }}
            </CAlert>
            <CForm>
                <CFormInput
                    type="text"
                    placeholder="Nombre"
                    aria-describedby="Nombre Cliente"
                    @input="setTouched('name')"
                    v-model="form.name"
                    feedback="Rellene este campo por favor."
                    :invalid="v$.form.name.$error"
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
</template>

<script>
    import axios from 'axios';
    import useVuelidate from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
    export default {
        name: 'AddClient',
        props: {
            showAddModal: Boolean,
        },
        setup() {
            return { v$: useVuelidate() }
        },
        emits: ['cerrarAddModal'],
        data() {
            return {
                form: {
                    name: '',
                },
                success: false,
                successMsg: ''
                
            }
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
        methods: {
            closeModal() {
                this.$emit('cerrarAddModal'); 
                this.success = false; 
                this.form.name = '';
                this.v$.$reset();
            },

            closeModalOutside(event) {
                if (event.target === event.currentTarget) {
                    this.closeModal();
                }
            },

            setTouched(theModel) { 
                if(theModel == 'name' || theModel == 'all' )
                {this.v$.form.name.$touch()}
            },
            
            saveClient() {
                this.setTouched('all');
                if(!this.v$.$invalid) {
                    axios.post(
                        this.$store.state.backendUrl + '/clients',
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
                        this.successMsg = "Cliente añadido exitósamente."; 
                        this.success = true; 
                    })
                    .catch((error) =>  {
                        console.log("Error en post: ", error); 
                    })

                }
                    
            }
        }

    }
    
</script>