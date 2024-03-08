<template>
<<<<<<< HEAD
    <CModal :visible="showDeleteModal" @click.native="closeDeleteModalOutside">
        <CModalHeader>
            <CModalTitle>
                <slot name="modalTitle">Desasignar</slot>
=======
    <CModal :visible="showDeleteModal" @click.native="closeModalOutside">
        <CModalHeader>
            <CModalTitle>
                <slot name="modalTitle"></slot>
>>>>>>> cde013cd2844bf5f0c3da6106e8c24b06cb6e32a
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
<<<<<<< HEAD
            <CButton color="primary" @click="closeDeleteModal">Cancelar</CButton>
=======
            <CButton color="primary" @click="closeModal">Cancelar</CButton>
>>>>>>> cde013cd2844bf5f0c3da6106e8c24b06cb6e32a
        </CModalFooter>
    </CModal>
</template>

<script>
<<<<<<< HEAD
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
=======
    export default {
        name: 'DeleteModal',
        props: {
            showDeleteModal: false
        },
        methods: {
            closeModal() {
                this.$emit('cerrar'); 
                //this.success = false;
            },

            closeModalOutside(event) {
                if (event.target === event.currentTarget) {
                    this.closeModal();
                }
            },
>>>>>>> cde013cd2844bf5f0c3da6106e8c24b06cb6e32a
        }
    }
</script>