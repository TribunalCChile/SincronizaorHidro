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
                <CFormInput
                    type="text"
                    placeholder="Nombre"
                    aria-describedby="Nombre Cliente"
                    v-model="form.name"
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
    export default {
        name: 'EditUser',
        props: {
            showModal: Boolean,
            client: Object
        },
        data() {
            return {
                form: {
                    id: '',
                    name: '',
                },
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
            closeModal() {
                this.$emit('cerrar'); 
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

            async saveClient() {
                try {
                    const response = await axios.put(
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

                    
                } catch(error) {
                    console.error('Error en la solicitud a la API:', error);
                }
                
            }
        }

    }
    
</script>