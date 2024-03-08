<template>
    <CModal :visible="showDeleteModal" @click.native="closeDeleteModalOutside">
        <CModalHeader>
            <CModalTitle>
                <slot name="modalTitle">Desasignar</slot>
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
            <CButton color="primary" @click="closeDeleteModal">Cancelar</CButton>
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
        methods: {
            closeDeleteModal() {
                this.$emit('cerrarDelete');    
            },
            closeDeleteModalOutside(event) {
                if (event.target === event.currentTarget) {
                    this.closeDeleteModal();
                }
            },
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