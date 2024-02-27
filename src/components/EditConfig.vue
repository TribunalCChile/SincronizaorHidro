<template>
    <CModal :visible="showModal" @click.native="closeModalOutside">
        <CModalHeader>
            <CModalTitle>Editar configuración de servidores</CModalTitle>
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
                            v-model="form.client_config_id"
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
                            label="Zeus Username"
                            type="text"
                            placeholder="Zeus Username"
                            aria-describedby="Zeus username"
                            v-model="form.zeusUsername"
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            label="Zeus Password"
                            type="text"
                            placeholder="Zeus Password"
                            aria-describedby="Zeus password"
                            v-model="form.zeusPassword"
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            label="Zeus Auth Pass"
                            type="text"
                            placeholder="Zeus Auth Pass"
                            aria-describedby="Zeus Auth Pass"
                            v-model="form.zeusAuthPass"
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            label="DGA Username"
                            type="text"
                            placeholder="DGA Username"
                            aria-describedby="DGA username"
                            v-model="form.dgaUsername"
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            label="DGA Password"
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
    import VueMultiselect from 'vue-multiselect'

    export default {
        name: 'EditConfig',
        components: {
            VueMultiselect,
        },
        props: {
            showModal: Boolean,
            configClient: Object,
        },
        data() {
            return {
                form: {
                    id: '',
                    client_id: '',
                    name: '',
                    zeusHost: '',
                    zeusPort: '',
                    zeusUsername: '',
                    zeusPassword: '',
                    zeusAuthPass: '',
                    dgaUsername: '',
                    dgaPassword: ''
                },
                configs: []
                
            }
        },
        watch: {
            configClient: {
                handler(newConfig) {
                    this.setDataConfig(newConfig);
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
            this.getUsersConfig();  
        },

        methods: {
            setData(options) {
                console.log("option: ",options);
            },
            async saveConfig() {
                try {
                    const response = await axios.put(
                        this.$store.state.backendUrl + '/client_configs/' + this.form.id,
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
                        this.successMsg = "Configuración actualizada correctamente."; 
                        this.success = true; 
                    })
                    .catch((error) =>  {
                        console.log("Error en post: ", error); 
                    })

                    
                } catch(error) {
                    console.error('Error en la solicitud a la API:', error);
                }
                
            },
            setDataConfig(newConfig) {
                console.log("SET DATA: ", newConfig);
                if (newConfig) {
                    console.log(newConfig);
                    this.form.id = newConfig.id; 
                    this.form.client_id = newConfig.client_id;
                    this.form.name = newConfig.name;
                    this.form.zeusHost = newConfig.zeusHost;
                    this.form.zeusPort = newConfig.zeusPort.toString();
                    this.form.zeusUsername = newConfig.zeusUsername;
                    this.form.zeusPassword = newConfig.zeusPassword;
                    this.form.zeusAuthPass = newConfig.zeusAuthPass;
                    this.form.dgaUsername = newConfig.dgaUsername;
                    this.form.dgaPassword = newConfig.dgaPassword; 
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
                    console.log(this.configs)

                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                    // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            }, 
        }

    }
    
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>