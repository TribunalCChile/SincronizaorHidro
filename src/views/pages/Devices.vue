<template>
    <CRow class="mb-4">
        <CCol class="col-3 mt-4">
            <CButton @click="addDevice" color="success" shape="rounded-pill" variant="outline">
                <CIcon :icon="icon.cilPlus" size="xl"/>
                
            </CButton>
        </CCol>
        <CCol class="col-9">
            <SearchBarFilter @search="handleSearch" /> 
        </CCol>
    </CRow>
    <CTable class="mt-5">
        <CTableHead>
            <CTableRow color="dark">
                <CTableHeaderCell scope="col">Cliente</CTableHeaderCell>
                <CTableHeaderCell scope="col">Zeus Nombre</CTableHeaderCell>
                <CTableHeaderCell scope="col">Zeus Código</CTableHeaderCell>
                <CTableHeaderCell scope="col">DGA Código</CTableHeaderCell>
                <CTableHeaderCell scope="col">Habilitado</CTableHeaderCell>
                <CTableHeaderCell scope="col">Editar</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow v-for="(device, index) in filteredDevices" :key="device.id">
                <CTableDataCell>{{ device.client.name }} </CTableDataCell>
                <CTableDataCell>{{ device.zeusName }} </CTableDataCell>
                <CTableDataCell>{{ device.zeusCode }} </CTableDataCell>
                <CTableDataCell>{{ device.dgaCode }} </CTableDataCell>
                <CTableDataCell class="text-center">
                    <CFormCheck :checked="device.enabled" disabled />
                </CTableDataCell>
                <CTableDataCell>
                    <CButton @click="editDevice(device)">
                        <font-awesome-icon icon="pen-to-square" size="xl" />
                    </CButton>
                </CTableDataCell>
                
            </CTableRow>
        </CTableBody>
    </CTable>
    <AddDeviceModal
        :showModal="showAddModal"
        @cerrar="onCloseAdd"
    />
    <EditDeviceModal
        :showModal="showEditModal"
        :device="device_id"
        @cerrar="onCloseEdit"
    />
</template>

<script>
    import axios from 'axios'
    import SearchBarFilter from '../../components/SearchFilter.vue'; 
    import { CIcon } from '@coreui/icons-vue';
    import * as icon from '@coreui/icons';
    import AddDeviceModal from '../../components/AddDevice.vue'; 
    import EditDeviceModal from '../../components/EditDevice.vue'; 

    export default {
        name: "Devices",
        components: {
            SearchBarFilter,
            CIcon,
            AddDeviceModal,
            EditDeviceModal,
        },
        setup() {
            return {
                icon,
            }
        },
        data() {
            return {
                devices: [],
                searchFilter: '',
                status: false,
                showAddModal: false,
                showEditModal: false, 
                device_id: null,
                
            }
            
        },
        computed: {
            filteredDevices() {
                let filterDevices = this.devices; 

                if (this.searchFilter !== '') {
                    filterDevices = filterDevices.filter(devices => 
                        devices.zeusName.toLowerCase().includes(this.searchFilter) || 
                        devices.zeusCode.toLowerCase().includes(this.searchFilter) || 
                        devices.dgaCode.toLowerCase().includes(this.searchFilter) 
                    );
                }

                return filterDevices; 
            }

            
        },

        mounted() {
            this.getDevices(); 
        },
        
        methods: {
            handleSearch(search) {
                this.searchFilter = search; 
            },

            editDevice(device) {
                this.showEditModal = true; 
                this.device_id = device; 
            },

            addDevice() {
                this.showAddModal = true; 
            },
            async getDevices() {
                try {
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/devices',
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
                    
                    this.devices = response.data;
                    console.log("DEVICES: ",this.devices)

                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                        
                        // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            },

            onCloseAdd() {
                this.showAddModal = false; 
                this.getDevices(); 
            },
            onCloseEdit() {
                this.showEditModal = false;
                this.getDevices(); 
            }
        }
    }

    
</script> 