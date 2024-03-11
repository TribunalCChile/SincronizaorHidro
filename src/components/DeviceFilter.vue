<template>
    <label class="form-label">Seleccione dispositivo</label>
    <v-select 
        multiple
        v-model="selectedDevices" 
        :options="devices"
        @option:selected="filter"
        :reduce="device => device.id"
        label="zeusName"
        placeholder="Seleccione..."
    />
</template>

<script>
    import { defineEmits } from 'vue';
    import axios from 'axios';
    export default { 
        emits: ['filter'],
        props: {
            devices: Array
        },
        data() {
            return {
                selectedDevices: []
            }
            

        },

        mounted() {
            
        },

        methods: {
            filter(e) {
                console.log(this.selectedDevices); 
                this.$emit('filter',e);
            }
        }
    }
    
</script>