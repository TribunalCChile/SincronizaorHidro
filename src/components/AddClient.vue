<template>
    <CModal :visible="showModal" @click.native="closeModalOutside">
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
        name: 'AddClient',
        props: {
            showModal: Boolean,
        },
        data() {
            return {
                form: {
                    name: '',
                },
                success: false,
                successMsg: ''
                
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

            async saveClient() {
                try {
                    const response = await axios.post(
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

                    
                } catch(error) {
                    console.error('Error en la solicitud a la API:', error);
                }
                
            }
        }

    }
    
</script>