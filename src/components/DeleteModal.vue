<template>

    
    <CModal :visible="showDeleteModal" @close="closeModal">
        <CModalHeader>
            <CModalTitle>
                <slot name="modalTitle"></slot>

            </CModalTitle>
        </CModalHeader>
        <CModalBody>
            <slot name="modalBody"></slot>
        </CModalBody>
        <CModalFooter>
            <CButton 
                @click="deleteProduct"
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
        props: {   
            showDeleteModal: Boolean, 
            client: Object
        },
        data() {
            return {
                
            }
        },
        emits: ['closeDeleteModal'],
        methods: {
            closeModal() {
                this.$emit('closeDeleteModal'); 
            },
            
            /*closeDeleteModal() {
                this.$emit('cerrarDelete', false);    
            },
            closeDeleteModalOutside(event) {
                console.log("cierra delete con la X");
                if (event.target === event.currentTarget) {
                    this.closeDeleteModal();
                }
            },
            */
            deleteProduct() {
                /* console.log(this.$store.state.token); 
                axios.post(
                    this.$store.state.backendUrl+'/eliminar-producto',
                    {
                        params: {
                            'id': this.product.id
                        },
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": 'Bearer ' + this.$store.state.token,
                        }
                    })

                .then((response) => {
                    console.log(response); 
                })
                .catch((error) => {
                    console.log("Error: ", error);
                    this.showError=true;
                    //this.errorMsg = "Ha ocurrido un error: " + error; 
                }) */
            }

        }
    }           
</script>