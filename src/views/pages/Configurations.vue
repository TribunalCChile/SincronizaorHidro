<template>
    <CRow class="mb-4">
        <CCol class="col-3 mt-4">
            <CButton @click="addConfig">
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
                <CTableHeaderCell scope="col">Zeus Host</CTableHeaderCell>
                <CTableHeaderCell scope="col">Zeus Username</CTableHeaderCell>
                <CTableHeaderCell scope="col">DGA Username</CTableHeaderCell>
                <CTableHeaderCell scope="col">Editar</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow v-for="(config, index) in filteredConfigs" :key="config.id">
                <CTableDataCell>{{ config.client.name }} </CTableDataCell>
                <CTableDataCell>{{ config.zeusHost }} </CTableDataCell>
                <CTableDataCell>{{ config.zeusUsername }} </CTableDataCell>
                <CTableDataCell>{{ config.dgaUsername }} </CTableDataCell>
                <CTableDataCell>
                    <CButton @click="editConfig(config)">
                        <font-awesome-icon icon="pen-to-square" size="xl" /> 
                        
                        
                    </CButton>
                   
                </CTableDataCell>
                
            </CTableRow>
        </CTableBody>
    </CTable>

    <AddConfigModal
        :showModal="showAddModal"
        @cerrar="showAddModal = false"
    />
    <EditConfigModal
        :showModal="showEditModal"
        :configClient="config_id"
        @cerrar="showEditModal = false"
    />
</template>

<script>
    import axios from 'axios'
    import SearchBarFilter from '../../components/SearchFilter.vue'; 
    import AddConfigModal from '../../components/AddConfig.vue';
    import EditConfigModal from '../../components/EditConfig.vue'; 
    import { CIcon } from '@coreui/icons-vue';
    import * as icon from '@coreui/icons';
    export default {
        name: "Configurations",
        components: {
            SearchBarFilter,
            CIcon,
            AddConfigModal,
            EditConfigModal
        },
        setup() {
            return {
                icon,
            }
        },
        data() {
            return {
                configs: [],
                searchFilter: '',
                showAddModal: false,
                showEditModal: false,
                config_id: null
            }
            
        },
        computed: {
            filteredConfigs() {
                let filterConfigs = this.configs; 

                if (this.searchFilter !== '') {
                    filterConfigs = filterConfigs.filter(config => 
                        config.zeusHost.toLowerCase().includes(this.searchFilter) || 
                        config.zeusUsername.toLowerCase().includes(this.searchFilter) || 
                        config.dgaUsername.toLowerCase().includes(this.searchFilter) 
                    );
                }

                return filterConfigs; 
            }

            
        },
       

        mounted() {
            this.getConfigs(); 
        },
        
        methods: {
            addConfig() {
                this.showAddModal = true;
            },
            editConfig(config) {
                this.showEditModal = true;
                this.config_id = config;      
            },
            handleSearch(search) {
                this.searchFilter = search; 
            },

            async getConfigs() {
                try {
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/client_configs',
                        {
                            params: {
                                'client': true
                            },
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + this.$store.state.token,
                            }
                        }
                    );
                    
                    this.configs = response.data;
                    console.log(this.configs[0])

                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                    // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            }
        }
    }

    
</script> 