<template>
    <CRow>
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

        <CCol class="col-4">
            <SearchBarFilter 
                @search="handleSearch" 
            /> 
        </CCol>
        <CCol class="col-2">
            <CButton>

            </CButton>
        </CCol>


    </CRow>

    <CTable class="mt-4" striped bordered>
        <CTableHead>
            <CTableRow>
                <CTableHeaderCell scope="col">Cliente</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                <CTableHeaderCell scope="col">Código zeus</CTableHeaderCell>
                <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                <CTableHeaderCell scope="col">Error</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow v-for="(task, index) in filteredTasks" :key="index">
                <template v-if="task.client !== null">
                    <CTableDataCell>{{ task.client.name }} </CTableDataCell>
                </template>
                <template v-else> 
                    <CTableDataCell> </CTableDataCell>
                </template>
                <CTableDataCell> {{ task.device.zeusName }} </CTableDataCell>
                <CTableDataCell>{{ task.device.zeusCode }} </CTableDataCell>
                <CTableDataCell>{{ task.last_error.updated_at }} </CTableDataCell>
                <CTableDataCell>{{ task.last_error.message }} </CTableDataCell>
            </CTableRow>
        </CTableBody>
    </CTable>

    
</template>

<script>
    import axios from 'axios';
    import DatePicker from '../../components/DatePicker.vue'; 
    import ClientFilter from '../../components/ClientFilter.vue'; 
    import DeviceFilter from '../../components/DeviceFilter.vue'; 
    import SearchBarFilter from '../../components/SearchFilter.vue'; 

    export default {
        name: "FailedTasks",
        components: {
            DatePicker,
            ClientFilter,
            DeviceFilter,
            SearchBarFilter,
        },
        data() {
            return {
                failTasks: [],
                showModal: [],
                searchFilter: '',
                clientsFilter: [],
                devicesFilter: [],
            }
            
        },

        computed: {
            filteredTasks() {
                let filterTasks = this.failTasks; 
                console.log(filterTasks);  
                if (this.clientsFilter.length > 0) {
                    filterTasks = filterTasks.filter(task => 
                        this.clientsFilter.includes(task.last_error.client_id) 
                    );
                }

                return filterTasks; 
            }

        }, 

        mounted() {
            this.getFailedTasks(); 
        },

        methods: {
            handleSearch(search) {
                this.searchFilter = search; 
            }, 

            handleClients(options) {
                this.clientsFilter = options; 
                this.getDevicesByClients(); 
                
            }, 
            handleDevices(options) {
                this.devicesFilter = options; 
                console.log("DEVICES: ",options); 
            }, 

            handleDevices(devices) {
                this.devicesFilter = devices; 
            },

            async getFailedTasks() {
                const response = await axios.get(
                    this.$store.state.backendUrl + '/syncManual',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + this.$store.state.token,
                        }
                    }
                ); 

                this.failTasks = response.data; 
                console.log(this.failTasks); 
                
                
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
                        devices = devices.concat(response.data.map(config => ({
                            ...config,
                            host: config.client_config.zeusHost
                        }))); 
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