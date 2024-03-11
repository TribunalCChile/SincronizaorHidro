<template>
    <CRow>
        <CCol>
            <label class="form-label">Fecha</label>
            <DatePicker
                v-model="dateRange"
                placeholder="Escoja un rango de fechas"
                @update:model-value="handleDate"
                range

            /> 
        </CCol>
        
        <CCol class="col-3">
            <ClientFilter 
                @filter="handleClients"
                
            /> 
        </CCol>
        <CCol class="col-3">
            <DeviceFilter 
                :devices="devicesFilter"
                @filter="handleDevices"
            /> 
        </CCol>
        <CCol class="mt-4">
            <CButton color="primary" @click="getQueueTasksTest" class="mt-1">
                Buscar
            </CButton>
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
            ClientFilter,
            DeviceFilter
        },
        data() {
            return {
                clientSelected: '',
                clients: [],
                devices: [],
                clientsFilter: [],
                devicesFilter: [],
                dateRange: [null, null],
                formatDates: [null, null], 
            }
        },

        mounted() {
            const today = new Date();
            this.dateRange = [today, today];
            //this.getClients();
            //this.getDevices(); 
        }, 

        methods: {
            getQueueTasksTest() {
                let date1, date2; 
                date1 = this.dateRange[0]; 
                date2 = this.dateRange[1]; 
                this.clients = this.clientsFilter.map(client => client.id); 
                console.log(this.clients); 
                console.log("Clients: ",this.clientsFilter); 
                console.log("Dispositivos: ",this.devicesFilter); 
                console.log(`Date Range: ${this.dateRange}`); 
                console.log(date1);
                console.log(date2); 
            },
            handleDate(modelData) {
                this.dateRange = modelData.map(date => {
                    if (date instanceof Date) {
                        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                    }
                    return date;
                });
                console.log("RANGE DATA: ",this.dateRange); 
            },
           
           
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
            handleClients(options) {
                this.clientsFilter = options; 
                this.getDevicesByClients(); 
                
            }, 
            handleDevices(options) {
                this.devicesFilter = options; 
                console.log("Devices: ",this.devicesFilter); 
                this.getDevicesByClients(); 
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
            },
            async getDevicesByClients() { 
                try {
                    let devices = []; 
                    for (const client_id of this.clientsFilter) {
                        const response = await axios.get(
                            this.$store.state.backendUrl + "/devices",
                            {
                                params: {
                                    'client_id': client_id,
                                    'clientConfig': true
                                },
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer " + this.$store.state.token,
                                },
                            }
                        )
                        devices = devices.concat(response.data); 
                    }

                    this.devicesFilter = devices; 
                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                }
            }
        }
    
    }
</script>