<template>
    <CModal :visible="showModal" @click.native="closeModalOutside">
        <CModalHeader>
            <CModalTitle>Nuevo Usuario</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CAlert color="success"
                :visible="success">
                {{ successMsg }}
            </CAlert>
            <CForm>
                <CRow>
                    <CCol class="col-12">
                        <v-select
                            v-model="form.profile_id"
                            :options="profiles"
                            :reduce="profile => profile.id"
                            label="name"
                            placeholder="Seleccione un perfil..."
                            
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            type="text"
                            placeholder="Nombre"
                            aria-describedby="Nombre Usuario"
                            v-model="form.name"
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            type="email"
                            placeholder="Correo electronico"
                            aria-describedby="Correo electrónico"
                            v-model="form.email"
                        />
                    </CCol>
                    <CCol class="col-6 mt-4">
                        <CFormInput
                            type="password"
                            placeholder="Contraseña"
                            aria-describedby="Contraseña"
                            v-model="form.password"
                        />
                    </CCol>
                    <CCol class="col-6 mt-4">
                        <CFormInput
                            type="password"
                            placeholder="Repetir Contraseña"
                            aria-describedby="Repetir Contraseña"
                            v-model="form.password_confirmation"
                        />
                    </CCol>
                </CRow>
                
            </CForm>
        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" @click="closeModal">
                Cerrar
            </CButton>
            <CButton color="primary" @click="saveUser">Guardar</CButton>
        </CModalFooter>
    </CModal>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'AddUser',
        props: {
            showModal: Boolean,
        },
        data() {
            return {
                form: {
                    profile_id: '',
                    name: '',
                    email:'',
                    password: '',
                    password_confirmation: '',
                },
                profiles: [],
                success: false,
                successMsg: ''
                
            }
        },

        mounted(){
            this.getProfiles(); 
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

            async getProfiles() {
                try {
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/profile',
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + this.$store.state.token,
                            }
                        }
                    );
                    
                    this.profiles = response.data; 
                    
                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                    // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            }, 

            saveUser() {
                
                try {
                    axios.post(
                        this.$store.state.backendUrl + '/users',
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
                        this.successMsg = "Usuario creado exitósamente";
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