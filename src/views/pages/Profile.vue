<template>
    <CRow class="mt-4">
        <CCol class="col-8">
            <CCard>
                <CCardBody>
                    <CCardTitle>Usuario</CCardTitle>
                    <CForm>
                        <CRow class="mt-5">
                            <CCol class="col-6">
                                <CFormInput
                                    label="Correo electrónico"
                                    v-model="form.email"
                                    disabled
                                ></CFormInput>
                            </CCol>
                            <CCol class="col-6">
                                <CFormInput
                                    label="Rut"
                                    v-model="form.rut"
                                ></CFormInput>
                            </CCol>
                            <CCol class="col-12 mt-4">  
                                <CFormInput
                                    label="Nombres"
                                    v-model="form.names"
                                ></CFormInput>
                            </CCol>
                            <CCol class="col-6 mt-4">
                                <CFormInput
                                    label="Apellido Paterno"
                                    v-model="form.surname1"
                                ></CFormInput>
                            </CCol>
                            <CCol class="col-6 mt-4">
                                <CFormInput
                                    label="Apellido Materno"
                                    v-model="form.surname2"
                                ></CFormInput>
                            </CCol>
                        </CRow>
                        <CButton size="lg" color="primary" shape="rounded-pill" class="mt-4">
                            Guardar
                        </CButton>
                    </CForm>
                </CCardBody>
            </CCard>
        </CCol>
        <CCol class="col-4">
            <CCard>
                <CCardBody>
                    <CCardTitle>Cambiar contraseña</CCardTitle>
                    <div class="mt-5">
                        <CFormInput
                        label="Contraseña actual"
                        placeholder="Contraseña"
                        class=""
                        ></CFormInput>
                    
                    </div>
                    <div class="mt-4">
                        <CFormInput
                            label="Nueva contraseña"
                            placeholder="Nueva contraseña"
                        ></CFormInput>
                    </div>
                    <div class=mt-4>
                        <CFormInput
                            label="Confirmar contraseña"
                            placeholder="Confirmar contraseña"
                        ></CFormInput>
                    </div>
                    <CButton size="lg" color="primary" shape="rounded-pill" class="mt-4"
                    >Cambiar contraseña</CButton>
                </CCardBody>
            </CCard>
        </CCol>

    </CRow>
    
</template>
<script>
import axios from 'axios';

    export default {
        name: 'Profile',
        data() {
            return {
                form: {
                    email: '', 
                    rut: '',
                    names: '',
                    surname1: '',
                    surname2: ''
                }
            }
        },

        mounted() {
            this.getDataAccount(); 
        },

        methods: {
            async getDataAccount() {
                const response = await axios.get(
                    this.$store.state.backendUrl + '/account',
                    {
                        headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + this.$store.state.token,
                        }
                    }
                ); 

                this.setDataAccount(response.data); 
            },

            setDataAccount(data) {
                this.form.email = data.email; 
                this.form.rut = data.rut; 
                this.form.names = data.names; 
                this.form.surname1 = data.surname1; 
                this.form.surname2 = data.surname2; 
            }
        }
    }
</script>