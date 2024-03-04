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
    import useVuelidate from '@vuelidate/core';
    import { required, integer, minValue } from '@vuelidate/validators';

    export default {
        name: 'EditUser',
        props: {
            showModal: Boolean,
            user: Object
            
        },
        setup() {
            return { v$: useVuelidate() }
        },
        data() {
            return {
                form: {
                    id: '',
                    name: '',
                    profile_id: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                success: false, 
                successMsg: '',
                profiles: []
                
            }
        },
        validations() {
            return {
                form: {
                    profile_id:{
                        required
                    },
                    name: {
                        required
                    },
                    email: {
                        required
                    },
                    password: {
                        required
                    },
                    password_confirmation: {
                        required
                    },    
                }
            }
        },

        watch: {
            user: {
                handler(newConfig) {
                    this.setDataUser(newConfig);
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
        
        mounted() {
            this.getProfiles(); 
        },
        methods: {
            setTouched(theModel) { 
                if(theModel == 'profile_id' || theModel == 'all' )
                {this.v$.form.profile_id.$touch()}

                if(theModel == 'name' || theModel == 'all'){
                    this.v$.form.name.$touch()
                } 
                if(theModel == 'email' || theModel == 'all' )
                {
                    this.v$.form.email.$touch()
                }

                if(theModel == 'passowrd' || theModel == 'all' )
                {
                    this.v$.form.password.$touch()
                }
                if(theModel == 'password_confirmation' || theModel == 'all' )
                {
                    this.v$.form.password_confirmation.$touch()
                } 
            },
            closeModal() {
                this.$emit('cerrar'); 
            },

            closeModalOutside(event) {
                if (event.target === event.currentTarget) {
                    this.closeModal();
                }
            },
            setDataUser(newConfig) {
                if (newConfig) {
                    console.log(newConfig);
                    this.form.id = newConfig.id; 
                    this.form.profile_id = newConfig.profile_id; 
                    this.form.name = newConfig.name;
                    this.form.email = newConfig.email;
                    this.form.password = newConfig.password; 
                    this.form.password_confirmation = newConfig.password_confirmation; 
                    
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
                    console.log("PROFILES: ", this.profiles);

                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                    // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            }, 


            saveUser() {
                this.setTouched('all'); 
                if (!this.v$.$invalid) {
                    axios.put(
                        this.$store.state.backendUrl + '/users/' + this.form.id,
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
                        this.successMsg = "Usuario actualizado exitósamente."; 
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