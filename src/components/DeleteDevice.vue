<template>
    <CModal :visible="showDeleteModal" @close="closeModal">
        <CModalHeader>
            <CModalTitle>
                <slot name="modalTitle"></slot>

            </CModalTitle>
        </CModalHeader>
        <CModalBody>
            <slot name="modalBody">
                                
            </slot>
        </CModalBody>
        <CModalFooter>
            <CAlert color="danger"
                :visible="fail">
                Para eliminar este dispositivo no debe estar habilitado. 
            </CAlert>
            <CAlert color="success"
                :visible="success">
                Dispositivo eliminado exitósamente. 
            </CAlert>

            <CButton 
                @click="deleteDevice"
                color="danger" 
                class="text-white">Eliminar
            </CButton>

            <CButton color="primary" @click="closeModal">Cancelar</CButton>
        </CModalFooter>
    </CModal>
</template>

<script>
    import axios from 'axios'; 
    

    export default {
        name: 'DeleteModal',
        
        emits: ['closeDeleteModal'],
        props: {   
            showDeleteModal: Boolean, 
            device: Object
        },
        data() {
            return {
                fail: false,
                success: false,
            }
        },
        methods: {
            closeModal() {
                this.$emit('closeDeleteModal');
                this.fail = false;
                this.success = false;
            },
            
           
            deleteDevice() {
                if (this.device.enabled) {
                    this.fail = true; 
                } 

                if (!this.fail) {
                    axios.delete(
                        this.$store.state.backendUrl+'/devices/' + this.devices.id,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": 'Bearer ' + this.$store.state.token,
                            }
                        })

                    .then((response) => {
                            console.log(response); 
                            this.success = true; 
                    })
                    .catch((error) => {
                            console.log("Error: ", error);
                            //this.errorMsg = "Ha ocurrido un error: " + error; 
                     })
                }  
            }

        }
    }           
</script>