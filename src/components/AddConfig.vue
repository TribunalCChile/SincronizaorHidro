<template>
    <CModal :visible="showModal" @click.native="closeModalOutside">
        <CModalHeader>
            <CModalTitle>Crear configuración de servidores</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CAlert color="success"
                :visible="success">
                {{ successMsg }}
            </CAlert>
            <CForm>
                <CRow>
                    <CCol class="col-12 mt-4">
                        <v-select 
                            v-model="form.client_id"
                            :options="configs"
                            :reduce="config => config.client_id"
                            @option:selected="setData"
                            label="clientName"
                            placeholder="Seleccione..."
                        />
                       
                        
                    </CCol>
                    <CCol class="col-6 mt-4">
                        <CFormInput
                            label="Zeus Host"
                            type="text"
                            placeholder=""
                            aria-describedby="Zeus Host"
                            v-model="form.zeusHost"
                        />
                    </CCol>
                    <CCol class="col-6 mt-4">
                        <CFormInput
                            label="Zeus Puerto"
                            type="text"
                            placeholder=""
                            aria-describedby="Zeus Puerto"
                            v-model="form.zeusPort"
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            type="text"
                            placeholder="Zeus Username"
                            aria-describedby="Zeus username"
                            v-model="form.zeusUsername"
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            type="text"
                            placeholder="Zeus Password"
                            aria-describedby="Zeus password"
                            v-model="form.zeusPassword"
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            type="text"
                            placeholder="Zeus Auth Pass"
                            aria-describedby="Zeus Auth Pass"
                            v-model="form.zeusAuthPass"
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            type="text"
                            placeholder="DGA Username"
                            aria-describedby="DGA username"
                            v-model="form.dgaUsername"
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            type="text"
                            placeholder="DGA Password"
                            aria-describedby="DGA password"
                            v-model="form.dgaPassword"
                        />
                    </CCol>
                </CRow>
                
            </CForm>
        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" @click="closeModal">
                Cerrar
            </CButton>
            <CButton color="primary" @click="saveConfig">Guardar</CButton>
        </CModalFooter>
    </CModal>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'AddConfig',
        props: {
            showModal: Boolean,
        },
        data() {
            return {
                form: {
                    client_id: '',
                    name: '',
                    zeusHost: 'zeus.microcom.es',
                    zeusPort: '4040',
                    zeusUsername: '',
                    zeusPassword: '',
                    zeusAuthPass: '',
                    dgaUsername: '',
                    dgaPassword: ''
                },
                configs: [],
                success: false,
                successMsg: ''
                
            }
        },

        mounted() {
            this.getUsersConfig();
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
            setData(option) {
                console.log("OPTION: ",option);
            },

            async getUsersConfig() {
                try {
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/client_configs',
                        {
                        params: {
                            'client': 1
                        },
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + this.$store.state.token,
                        }
                        }
                    );
                    
                    this.configs = response.data.map(config => ({
                        ...config,
                        clientName: config.client.name
                    }));
                    console.log(this.configs[0])

                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                    // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            }, 

            async saveConfig() {
                console.log("form: ",this.form); 
                try {
                    const response = await axios.post(
                        this.$store.state.backendUrl + '/client_configs',
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
                        this.successMsg = "Configuración añadida exitósamente"; 
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