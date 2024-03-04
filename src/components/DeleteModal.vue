<template>
    <CModal :visible="showDeleteModal" @click.native="closeModalOutside">
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
        }
    }
</script>