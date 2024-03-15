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
                :allDevices="devicesFilter"
                @filter="handleDevices"
            /> 
        </CCol>
        <CCol class="mt-4">
            <CButton color="primary" @click="getQueueTasks" class="mt-1">
                Buscar
            </CButton>
        </CCol>
    </CRow>

    <CTable class="mt-5">
        <CTableHead>
            <CTableRow color="dark">
                <CTableHeaderCell scope="col">Estado</CTableHeaderCell>
                <CTableHeaderCell scope="col">Cliente</CTableHeaderCell>
                <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                <CTableHeaderCell scope="col">Hora</CTableHeaderCell>
                <CTableHeaderCell scope="col">Dispositivo</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nivel Freatico</CTableHeaderCell>
                <CTableHeaderCell scope="col">Caudal</CTableHeaderCell>
                <CTableHeaderCell scope="col">Totalizador</CTableHeaderCell>
                <CTableHeaderCell scope="col">Fecha Medición</CTableHeaderCell>
                <CTableHeaderCell scope="col">Comprobante DGA</CTableHeaderCell>
                <!--  <CTableHeaderCell scope="col">Sincronizado el</CTableHeaderCell>-->
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow v-for="(task, index) in tasksQueue" :key="task.id">
                <CTableDataCell>{{ getStepName(task.step) }} </CTableDataCell>
                <CTableDataCell>{{ task.client.name }} </CTableDataCell>
                <CTableDataCell>{{ task.taskDate }} </CTableDataCell>
                <CTableDataCell>{{ task.taskHour }} </CTableDataCell>
                <CTableDataCell>{{ task.device.zeusName }} </CTableDataCell>
                <CTableDataCell>{{ task.device.channelNivelFreatico }} </CTableDataCell>
                <CTableDataCell>{{ task.device.channelCaudal }} </CTableDataCell>
                <CTableDataCell>{{ task.device.channelTotalizador }} </CTableDataCell>
                <CTableDataCell>{{ task.zeusDate }} </CTableDataCell>
                <template v-if="task.dgaNumeroComprobante !== null">
                    <CTableDataCell>{{ task.dgaNumeroComprobante }} </CTableDataCell>
                </template>
                <template v-else>
                    <CTableDataCell></CTableDataCell>
                </template>
                
                <!-- <CTableDataCell>{{  }} </CTableDataCell> -->
            </CTableRow>
        </CTableBody>
    </CTable>
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
                tasksQueue: [],
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
            getStepName(step) {
                let name; 
                switch(step) {
                    case 1:
                        name = 'En cola zeus';
                        break; 
                    case 2: 
                        name = 'En cola DGA';
                        break; 
                    case 3:
                        name = 'Finalizado';
                        break; 
                    default: 
                        name = '';
                }

                return name; 
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
                let date1, date2; 
                date1 = this.dateRange[0]; 
                date2 = this.dateRange[1]; 
                this.devices = this.devicesFilter.map(device => device.id); 

                try {
                    let params = {
                        'clients': this.clientsFilter,
                        'devices': this.devices,
                        'date1': date1,
                        'date2': date2,
                    }
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/tasks',
                        {
                        params,
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + this.$store.state.token,
                        }
                        }
                    );
                    
                    this.tasksQueue = response.data;
                    console.log(this.tasksQueue); 

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