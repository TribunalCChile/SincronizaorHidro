<template>
    <CRow class="mb-4">
        <CCol class="col-3 mt-4">
            <CButton @click="addClient" color="success" shape="rounded-pill" variant="outline">
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
                <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                <CTableHeaderCell scope="col">Herramientas</CTableHeaderCell>
                
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow v-for="(client, index) in filteredClients" :key="client.id">
                <CTableDataCell>{{ client.name }} </CTableDataCell>
                <CTableDataCell>
                    <CButton @click="editClient(client)">
                        <font-awesome-icon icon="pen-to-square" size="xl" />
                    </CButton>
                    <CButton @click="deleteClient(client)">
                        <font-awesome-icon icon="trash" size="xl" />
                    </CButton>
                </CTableDataCell>
               
                
            </CTableRow>
        </CTableBody>
    </CTable>
    <AddClientModal
        :showAddModal="showAddModal"
        @cerrarAddModal="onCloseAdd"
    />
    <EditClientModal
        :showEditModal="showEditModal"
        :client="client_id"
        @cerrarEditModal="onCloseEdit"
    />
    <DeleteClient
        :showDeleteModal="showDeleteModal"
        @closeDeleteModal="onCloseDeleteModal"
        :client="client_id"
    >
        <template v-slot:modalTitle>Eliminar Cliente: <b>{{ client_id.name }}</b></template>
        <template v-slot:modalBody>
            ADVERTENCIA: Se eliminarán todos los datos de este cliente.
        </template>
        <template v-slot:modalFooter>
        </template>

    </DeleteClient>

</template>

<script>
    import axios from 'axios'
    import SearchBarFilter from '../../components/SearchFilter.vue'; 
    import { CIcon } from '@coreui/icons-vue';
    import * as icon from '@coreui/icons';
    import AddClientModal from '../../components/AddClient.vue'; 
    import EditClientModal from '../../components/EditClient.vue'; 
    import DeleteClient from '../../components/DeleteClient.vue'; 

    export default {
        name: "Clients",
        components: {
            SearchBarFilter,
            CIcon,
            AddClientModal,
            EditClientModal,
            DeleteClient
        },
        setup() {
            return {
                icon,
            }
        },
        data() {
            return {
                clients: [],
                searchFilter: '',
                showAddModal: false,
                showEditModal: false,
                showDeleteModal: false,
                client_id: null
            }
            
        },
        computed: {
            filteredClients() {
                let filterClients = this.clients; 

                if (this.searchFilter !== '') {
                    filterClients = filterClients.filter(client => 
                        client.name.toLowerCase().includes(this.searchFilter.toLowerCase())
                    );
                }

                return filterClients; 
            }

            
        },

        mounted() {
            this.getClients(); 
        },
        
        methods: {
            editClient(client) {
                this.showEditModal = true; 
                this.client_id = client; 
            },
            deleteClient(client) {
                this.showDeleteModal = true; 
                this.client_id = client; 
            },

            addClient() {
                this.showAddModal = true; 
            },
            handleSearch(search) {
                this.searchFilter = search; 
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
                    console.log(this.clients[0])
                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                        
                        // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            },
            onCloseAdd() {
                this.showAddModal = false; 
                this.getClients(); 
            },
            onCloseEdit() {
                console.log("cerré modal editClient")
                this.showEditModal = false;
                this.getClients(); 
            },
            onCloseDeleteModal() {
                console.log("cerre modal Delete Modal"); 
                this.showDeleteModal = false; 
                this.getClients();
            },
        }
    }

    
</script> 