<template>
    <CModal size="lg" class="modal-class" :visible="showModal" @close="closeModal">
        <CModalHeader>
            <CModalTitle>Agregar nuevo dispositivo</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CAlert color="success"
                :visible="success">
                {{ successMsg }}
            </CAlert>
            <CForm>
                <CRow>
                    <CCol class="col-12">
                        <CFormCheck
                            v-model="form.enabled" 
                            label="Habilitado" 
                            class="mr-5" 
                            
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <label class="mb-2">Seleccionar cliente</label>
                        <v-select
                            v-model="form.client_id"
                            :options="clients"
                            :reduce="client => client.id"
                            @option:selected="getUserConfig"
                            placeholder="Seleccione..."
                            label="name"

                        >
                        </v-select>
                    </CCol>
                    <CCol class="col-6 mt-4">
                        <label class="mb-2">Seleccionar configuración</label>
                        <v-select
                            v-model="form.client_config_id"
                            :options="configs"
                            :reduce="config => config.id"
                            placeholder="Seleccione..."
                            label="zeusHost"    
                        />
                    </CCol>
                    <CCol class="col-6 mt-4">
                        <label class="mb-2">Seleccionar periodicidad </label>
                        <v-select 
                            v-model="form.schedule_id" 
                            :options="schedules"
                            :reduce="schedule => schedule.id"
                            :searchable="true"
                            label="name"
                            placeholder="Seleccione"
                        
                        />
                    </CCol>
                    <CCol class="col-12 mt-4">
                        <CFormInput
                            label="Nombre"
                            type="text"
                            placeholder="Nombre"
                            aria-describedby="nombre"
                            v-model="form.zeusName"
                        />
                    </CCol>
                    <CCol class="col-6 mt-4">
                        <CFormInput
                            label="Zeus Código"
                            type="text"
                            placeholder="Zeus código"
                            aria-describedby="Zeus código"
                            v-model="form.zeusCode"
                        />
                    </CCol>
                    <CCol class="col-6 mt-4">
                        <CFormInput
                            label="DGA Código"
                            type="text"
                            placeholder="DGA código"
                            aria-describedby="DGA código"
                            v-model="form.dgaCode"
                        />
                    </CCol>
                    <CCol class="col-4 mt-4">
                        <CFormInput
                            label="Canal: Nivel Freático"
                            type="number"
                            placeholder="Canal: Nivel Freático"
                            aria-describedby="Nivel Freático"
                            v-model="form.channelNivelFreatico"
                        />
                    </CCol>
                    <CCol class="col-4 mt-4">
                        <CFormInput
                            label="Canal: Caudal"
                            type="number"
                            placeholder="Canal: Caudal"
                            aria-describedby="Caudal"
                            v-model="form.channelCaudal"
                        />
                    </CCol>
                    <CCol class="col-4 mt-4">
                        <CFormInput
                            label="Canal: Totalizador"
                            type="number"
                            placeholder="Canal: Totalizador"
                            aria-describedby="Totalizador"
                            v-model="form.channelTotalizador"
                        />
                    </CCol>
                    
                    <CCol class="col-6 mt-4">
                        <CFormInput
                            label="Canal: Altura Limnimétrica"
                            type="number"
                            placeholder="Canal: Altura limnimétrica"
                            aria-describedby="Altura Limnimétrica"
                            v-model="form.channelAlturaLimnimetrica"
                        />
                    </CCol>
                </CRow>
                
            </CForm>
        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" @click="closeModal">
                Cerrar
            </CButton>
            <CButton color="primary" @click="saveDevice">Guardar</CButton>
        </CModalFooter>
    </CModal>
</template>

<script>
    import axios from 'axios';
    import VueMultiselect from 'vue-multiselect'

    export default {
        name: 'AddConfig',
        components: {
            VueMultiselect,
        },
        props: {
            showModal: Boolean,
        },
        data() {
            return {
                form: {
                    enabled: false,
                    client_id: null,
                    client_config_id: null,
                    schedule_id: null,
                    zeusName: '',
                    zeusCode: '',
                    channelNivelFreatico: 0,
                    channelCaudal: 0,
                    channelTotalizador: 0,
                    channelAlturaLimnimetrica: 0,
                    
                    
                },
                schedules: [],
                configs: [],
                clients: [],
                selected: null,
                options: [],
                success: false,
                successMsg: ''
            }
        },

        mounted() {
            //this.getUserConfig();
            this.getClients(); 
            this.getSchedules(); 
        },
        watch: {
            showModal(newValue) {
                // Si la modal se cierra, restablecer el valor de showModal
                if (!newValue) {
                    this.$emit('update:showModal', false);
                }
            }
        },
        methods: {
            closeModal() {
                console.log("Cerrandose modal")
                this.$emit('cerrar'); 
            },

            closeModalOutside(event) {
                console.log("Cerrándose modal en funcion2");
                const modalContent = document.querySelector(".modal-class");
                if (!modalContent.contains(event.target)) {
                    console.log("Entra al if");
                    this.closeModal();
                }
            },

            async getSchedules() {
                try {
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/schedules',
                        {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + this.$store.state.token,
                        }
                        }
                    );
                    
                    this.schedules = response.data;
                    console.log(this.schedules[0]); 

                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                    // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            }, 
            async getClients() {
                try {
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/clients',
                        {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + this.$store.state.token,
                        }
                        }
                    );
                    
                    this.clients = response.data;
                    

                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                    // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            }, 

            getUserConfig(option) {
                axios.get(
                    this.$store.state.backendUrl + '/client_configs',
                    {
                        params: {
                            'client_id': option 
                        },
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + this.$store.state.token,
                        }
                    }
                )
                .then(response => {
                    // Procesa la respuesta aquí
                    this.configs = response.data;
                    console.log("configs: ", this.configs);
                    
                })
                .catch(error => {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                    // this.errorMsg = "Ha ocurrido un error: " + error;
                });
            },

            async saveDevice() {
                try {
                    console.log("FORM: ", this.form);
                    const response = await axios.post(
                        this.$store.state.backendUrl + '/devices',
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
                        this.successMsg = "Dispositivo añadido exitósamente."; 
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

<style src="vue-multiselect/dist/vue-multiselect.css"></style>