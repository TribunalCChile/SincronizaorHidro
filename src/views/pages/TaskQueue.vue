<template>
    <CRow>
        <CCol>
            <DatePicker /> 
        </CCol>
        <CCol>
            <DatePicker /> 
        </CCol>
        <CCol>
            <CFormSelect 
                class="form-select mb-3" 
                aria-label="Select Clientes">
                <option>Seleccione un cliente</option>
                <option v-for="client in clients" 
                    :key="client.id" 
                    :value="client.id"> {{ client.name }}
                </option>
            </CFormSelect>
        </CCol>
        <CCol>
            <CFormSelect 
                class="form-select mb-3" 
                aria-label="Select Dispositivos">
                <option>Seleccione un dispositivo</option>
                <option v-for="device in devices" 
                    :key="device.id" 
                    :value="device.id"> {{ device.name }}
                </option>
            </CFormSelect>
        </CCol>
    </CRow>
</template>

<script>
    import axios from 'axios';
    import DatePicker from '../../components/DatePicker.vue'; 
    import ClientFilter from '../../components/ClientFilter.vue';
    import DeviceFilter from '../../components/DeviceFilter.vue'; 

    export default {
        name: 'TaskQueue',
        components: {
            DatePicker,
        },
        data() {
            return {
                clientSelected: '',
                clients: [],
                devices: [],
            }
        },

        mounted() {
            //this.getClients();
            //this.getDevices(); 
        }, 

        methods: {
            //handleClient() {
             //   let clientSelected = this.
            //}
            async getQueueTasks() {
                try {
                    let params = {
                        'client': true,
                        'client_id': 2
                    }
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/clients',
             
                        {
                        params,
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + this.$store.state.token,
                        }
                        }
                    );
                    
                    this.clients = response.data;
                    console.log(this.clients[0])
                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                        
                        // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            },

            async getDevices() {
                try {
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/devices',
                        {
                            client: true,
                            client_id: 2,
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + this.$store.state.token,
                            }
                        }
                    );
                    
                    this.devices = response.data;
                    console.log(this.devices)

                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                        
                        // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            }
        }
    
    }
</script>