import{_ as w,j as C,a as i,b as N,c as B,w as t,e as o,f as u,t as g,h as U,C as $,d as I,F as E,g as R}from"./index-8UleF4ZQ.js";import{_ as L}from"./SearchFilter-B183IJ57.js";import{i as x}from"./index-CYE9aSFO.js";import{u as S,r as f,i as D}from"./index-5FCShcH-.js";/* empty css                                                                 */import"./index-Cp4zSSMc.js";import"./index-Cw_ppwa_.js";import"./index-C6AE5JqC.js";const H={name:"AddConfig",setup(){return{v$:S()}},props:{showModal:Boolean},data(){return{form:{enabled:!1,client_id:null,client_config_id:null,schedule_id:null,zeusName:"",zeusCode:"",channelNivelFreatico:0,channelCaudal:0,channelTotalizador:0,channelAlturaLimnimetrica:0},schedules:[],configs:[],clients:[],selected:null,options:[],success:!1,successMsg:""}},validations(){return{form:{client_id:{required:f},client_config_id:{required:f},schedule_id:{required:f},zeusName:{required:f},zeusCode:{required:f},dgaCode:{required:f},channelCaudal:{required:f},channelAlturaLimnimetrica:{integer:D},channelTotalizador:{integer:D}}}},mounted(){this.getClients(),this.getSchedules()},watch:{showModal(e){e||this.$emit("update:showModal",!1)}},methods:{setTouched(e){(e=="client_id"||e=="all")&&this.v$.form.client_id.$touch(),(e=="client_config_id"||e=="all")&&this.v$.form.client_config_id.$touch(),(e=="schedule_id"||e=="all")&&this.v$.form.schedule_id.$touch(),(e=="zeusName"||e=="all")&&this.v$.form.zeusName.$touch(),(e=="zeusCode"||e=="all")&&this.v$.form.zeusCode.$touch(),(e=="dgaCode"||e=="all")&&this.v$.form.dgaCode.$touch(),(e=="channelCaudal"||e=="all")&&this.v$.form.channelCaudal.$touch(),(e=="channelAlturaLimnimetrica"||e=="all")&&this.v$.form.channelAlturaLimnimetrica.$touch(),(e=="channelTotalizador"||e=="all")&&this.v$.form.channelTotalizador.$touch()},closeModal(){console.log("Cerrandose modal"),this.$emit("cerrar"),this.success=!1},closeModalOutside(e){console.log("Cerrándose modal en funcion2"),document.querySelector(".modal-class").contains(e.target)||(console.log("Entra al if"),this.closeModal())},async getSchedules(){try{const e=await C.get(this.$store.state.backendUrl+"/schedules",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.schedules=e.data,console.log(this.schedules[0])}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},async getClients(){try{const e=await C.get(this.$store.state.backendUrl+"/clients",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.clients=e.data}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},getUserConfig(e){C.get(this.$store.state.backendUrl+"/client_configs",{params:{client_id:e},headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}}).then(l=>{this.configs=l.data,console.log("configs: ",this.configs)}).catch(l=>{console.error("Error en la solicitud a la API:",l),this.ShowError=!0})},saveDevice(){this.setTouched("all"),this.v$.$invalid||C.post(this.$store.state.backendUrl+"/devices",this.form,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}}).then(e=>{console.log(e),this.successMsg="Dispositivo añadido exitósamente.",this.success=!0}).catch(e=>{console.log("Error en post: ",e)})}}},j=U("label",{class:"mb-2"},"Seleccionar cliente",-1),G=U("label",{class:"mb-2"},"Seleccionar configuración",-1),P=U("label",{class:"mb-2"},"Seleccionar periodicidad ",-1);function Z(e,l,F,d,n,r){const z=i("CModalTitle"),_=i("CModalHeader"),b=i("CAlert"),T=i("CFormCheck"),s=i("CCol"),m=i("v-select"),c=i("CFormInput"),V=i("CRow"),h=i("CForm"),y=i("CModalBody"),p=i("CButton"),k=i("CModalFooter"),A=i("CModal");return N(),B(A,{size:"lg",class:"modal-class",visible:F.showModal,onClose:r.closeModal},{default:t(()=>[o(_,null,{default:t(()=>[o(z,null,{default:t(()=>[u("Agregar nuevo dispositivo")]),_:1})]),_:1}),o(y,null,{default:t(()=>[o(b,{color:"success",visible:n.success},{default:t(()=>[u(g(n.successMsg),1)]),_:1},8,["visible"]),o(h,null,{default:t(()=>[o(V,null,{default:t(()=>[o(s,{class:"col-12"},{default:t(()=>[o(T,{modelValue:n.form.enabled,"onUpdate:modelValue":l[0]||(l[0]=a=>n.form.enabled=a),label:"Habilitado",class:"mr-5"},null,8,["modelValue"])]),_:1}),o(s,{class:"col-12 mt-4"},{default:t(()=>[j,o(m,{modelValue:n.form.client_id,"onUpdate:modelValue":l[1]||(l[1]=a=>n.form.client_id=a),options:n.clients,reduce:a=>a.id,"onOption:selected":r.getUserConfig,placeholder:"Seleccione...",label:"name",onInput:l[2]||(l[2]=a=>r.setTouched("client_id")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.client_id.$error},null,8,["modelValue","options","reduce","onOption:selected","invalid"])]),_:1}),o(s,{class:"col-6 mt-4"},{default:t(()=>[G,o(m,{modelValue:n.form.client_config_id,"onUpdate:modelValue":l[3]||(l[3]=a=>n.form.client_config_id=a),options:n.configs,reduce:a=>a.id,placeholder:"Seleccione...",label:"zeusHost",onInput:l[4]||(l[4]=a=>r.setTouched("client_config_id")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.client_config_id.$error},null,8,["modelValue","options","reduce","invalid"])]),_:1}),o(s,{class:"col-6 mt-4"},{default:t(()=>[P,o(m,{modelValue:n.form.schedule_id,"onUpdate:modelValue":l[5]||(l[5]=a=>n.form.schedule_id=a),options:n.schedules,reduce:a=>a.id,searchable:!0,label:"name",placeholder:"Seleccione",onInput:l[6]||(l[6]=a=>r.setTouched("schedule_id")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.schedule_id.$error},null,8,["modelValue","options","reduce","invalid"])]),_:1}),o(s,{class:"col-12 mt-4"},{default:t(()=>[o(c,{label:"Nombre",type:"text",placeholder:"Nombre","aria-describedby":"nombre",modelValue:n.form.zeusName,"onUpdate:modelValue":l[7]||(l[7]=a=>n.form.zeusName=a),onInput:l[8]||(l[8]=a=>r.setTouched("zeusName")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.zeusName.$error},null,8,["modelValue","invalid"])]),_:1}),o(s,{class:"col-6 mt-4"},{default:t(()=>[o(c,{label:"Zeus Código",type:"text",placeholder:"Zeus código","aria-describedby":"Zeus código",modelValue:n.form.zeusCode,"onUpdate:modelValue":l[9]||(l[9]=a=>n.form.zeusCode=a),onInput:l[10]||(l[10]=a=>r.setTouched("zeusCode")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.zeusCode.$error},null,8,["modelValue","invalid"])]),_:1}),o(s,{class:"col-6 mt-4"},{default:t(()=>[o(c,{label:"DGA Código",type:"text",placeholder:"DGA código","aria-describedby":"DGA código",modelValue:n.form.dgaCode,"onUpdate:modelValue":l[11]||(l[11]=a=>n.form.dgaCode=a),onInput:l[12]||(l[12]=a=>r.setTouched("dgaCode")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.dgaCode.$error},null,8,["modelValue","invalid"])]),_:1}),o(s,{class:"col-4 mt-4"},{default:t(()=>[o(c,{label:"Canal: Nivel Freático",type:"number",placeholder:"Canal: Nivel Freático","aria-describedby":"Nivel Freático",modelValue:n.form.channelNivelFreatico,"onUpdate:modelValue":l[13]||(l[13]=a=>n.form.channelNivelFreatico=a)},null,8,["modelValue"])]),_:1}),o(s,{class:"col-4 mt-4"},{default:t(()=>[o(c,{label:"Canal: Caudal",type:"number",placeholder:"Canal: Caudal","aria-describedby":"Caudal",modelValue:n.form.channelCaudal,"onUpdate:modelValue":l[14]||(l[14]=a=>n.form.channelCaudal=a),onInput:l[15]||(l[15]=a=>r.setTouched("channelCaudal")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.channelCaudal.$error},null,8,["modelValue","invalid"])]),_:1}),o(s,{class:"col-4 mt-4"},{default:t(()=>[o(c,{label:"Canal: Totalizador",type:"number",placeholder:"Canal: Totalizador","aria-describedby":"Totalizador",modelValue:n.form.channelTotalizador,"onUpdate:modelValue":l[16]||(l[16]=a=>n.form.channelTotalizador=a),onInput:l[17]||(l[17]=a=>r.setTouched("channelTotalizador")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.channelTotalizador.$error},null,8,["modelValue","invalid"])]),_:1}),o(s,{class:"col-6 mt-4"},{default:t(()=>[o(c,{label:"Canal: Altura Limnimétrica",type:"number",placeholder:"Canal: Altura limnimétrica","aria-describedby":"Altura Limnimétrica",modelValue:n.form.channelAlturaLimnimetrica,"onUpdate:modelValue":l[18]||(l[18]=a=>n.form.channelAlturaLimnimetrica=a),onInput:l[19]||(l[19]=a=>r.setTouched("channelAlturaLimnimetrica")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.channelAlturaLimnimetrica.$error},null,8,["modelValue","invalid"])]),_:1})]),_:1})]),_:1})]),_:1}),o(k,null,{default:t(()=>[o(p,{color:"secondary",onClick:r.closeModal},{default:t(()=>[u(" Cerrar ")]),_:1},8,["onClick"]),o(p,{color:"primary",onClick:r.saveDevice},{default:t(()=>[u("Guardar")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["visible","onClose"])}const O=w(H,[["render",Z]]),q={name:"AddConfig",props:{showModal:Boolean,device:Object},setup(){return{v$:S()}},data(){return{form:{id:"",enabled:!1,client_id:"",client_config_id:"",zeusCode:"",zeusName:"",dgaCode:"",channelNivelFreatico:"",channelCaudal:"",channelTotalizador:"",channelAlturaLimnimetrica:""},schedules:[],configs:[],configsByClient:[],successMsg:"",success:!1}},validations(){return{form:{client_id:{required:f},client_config_id:{required:f},schedule_id:{required:f},zeusName:{required:f},zeusCode:{required:f},dgaCode:{required:f},channelCaudal:{required:f},channelAlturaLimnimetrica:{integer:D},channelTotalizador:{integer:D}}}},watch:{device:{handler(e){this.setDataDevice(e)},deep:!0,immediate:!0},showModal(e){e||this.$emit("update:showModal",!1)}},mounted(){this.getUsersConfig(),this.getSchedules()},methods:{setTouched(e){(e=="client_id"||e=="all")&&this.v$.form.client_id.$touch(),(e=="client_config_id"||e=="all")&&this.v$.form.client_config_id.$touch(),(e=="schedule_id"||e=="all")&&this.v$.form.schedule_id.$touch(),(e=="zeusName"||e=="all")&&this.v$.form.zeusName.$touch(),(e=="zeusCode"||e=="all")&&this.v$.form.zeusCode.$touch(),(e=="dgaCode"||e=="all")&&this.v$.form.dgaCode.$touch(),(e=="channelCaudal"||e=="all")&&this.v$.form.channelCaudal.$touch(),(e=="channelAlturaLimnimetrica"||e=="all")&&this.v$.form.channelAlturaLimnimetrica.$touch(),(e=="channelTotalizador"||e=="all")&&this.v$.form.channelTotalizador.$touch()},closeModal(){this.$emit("cerrar"),this.success=!1},closeModalOutside(e){e.target===e.currentTarget&&this.closeModal()},setDataDevice(e){e&&(this.form.id=e.id,this.form.client_id=e.client_id,this.form.schedule_id=e.schedule_id,this.form.client_config_id=e.client_config_id,this.form.name=e.name,this.form.zeusCode=e.zeusCode,this.form.zeusName=e.zeusName,this.form.dgaCode=e.dgaCode,this.form.channelNivelFreatico=e.channelNivelFreatico,this.form.channelCaudal=e.channelCaudal,this.form.channelTotalizador=e.channelTotalizador,this.form.channelAlturaLimnimetrica=e.channelAlturaLimnimetrica,this.form.enabled=e.enabled,this.getConfigByClient(this.form.client_id))},async getSchedules(){try{const e=await C.get(this.$store.state.backendUrl+"/schedules",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.schedules=e.data,console.log(this.schedules[0])}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},async getUsersConfig(){try{const e=await C.get(this.$store.state.backendUrl+"/client_configs",{params:{client:1},headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.configs=e.data.map(l=>({...l,clientName:l.client.name})),console.log(this.configs[0])}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},async getConfigByClient(e){try{const l=await C.get(this.$store.state.backendUrl+"/client_configs",{params:{client:1,client_id:e},headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.configsByClient=l.data,console.log(this.configsByClient)}catch(l){console.error("Error en la solicitud a la API:",l),this.ShowError=!0}},saveDevice(){this.setTouched("all"),this.v$.$invalid||C.put(this.$store.state.backendUrl+"/devices/"+this.form.id,this.form,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}}).then(e=>{console.log(e),this.successMsg="Dispositivo actualizado correctamente.",this.success=!0}).catch(e=>{console.log("Error en post: ",e)})}}};function J(e,l,F,d,n,r){const z=i("CModalTitle"),_=i("CModalHeader"),b=i("CAlert"),T=i("CFormCheck"),s=i("CCol"),m=i("v-select"),c=i("CFormInput"),V=i("CRow"),h=i("CForm"),y=i("CModalBody"),p=i("CButton"),k=i("CModalFooter"),A=i("CModal");return N(),B(A,{size:"lg",visible:F.showModal,onClick:r.closeModalOutside},{default:t(()=>[o(_,null,{default:t(()=>[o(z,null,{default:t(()=>[u("Agregar nuevo dispositivo")]),_:1})]),_:1}),o(y,null,{default:t(()=>[o(b,{color:"success",visible:n.success},{default:t(()=>[u(g(n.successMsg),1)]),_:1},8,["visible"]),o(h,null,{default:t(()=>[o(V,null,{default:t(()=>[o(s,{class:"col-12"},{default:t(()=>[o(T,{label:"Habilitado",class:"mr-5",modelValue:n.form.enabled,"onUpdate:modelValue":l[0]||(l[0]=a=>n.form.enabled=a)},null,8,["modelValue"])]),_:1}),o(s,{class:"col-12 mt-4"},{default:t(()=>[o(m,{modelValue:n.form.client_id,"onUpdate:modelValue":l[1]||(l[1]=a=>n.form.client_id=a),options:n.configs,reduce:a=>a.client_id,label:"clientName",placeholder:"Seleccione...",onInput:l[2]||(l[2]=a=>r.setTouched("client_id")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.client_id.$error},null,8,["modelValue","options","reduce","invalid"])]),_:1}),o(s,{class:"col-6 mt-4"},{default:t(()=>[o(m,{modelValue:n.form.client_config_id,"onUpdate:modelValue":l[3]||(l[3]=a=>n.form.client_config_id=a),options:n.configsByClient,reduce:a=>a.id,placeholder:"Seleccione...",label:"zeusHost",onInput:l[4]||(l[4]=a=>r.setTouched("client_config_id")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.client_config_id.$error},null,8,["modelValue","options","reduce","invalid"])]),_:1}),o(s,{class:"col-6 mt-4"},{default:t(()=>[o(m,{modelValue:n.form.schedule_id,"onUpdate:modelValue":l[5]||(l[5]=a=>n.form.schedule_id=a),options:n.schedules,reduce:a=>a.id,label:"name",placeholder:"Seleccione...",onInput:l[6]||(l[6]=a=>r.setTouched("schedule_id")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.schedule_id.$error},null,8,["modelValue","options","reduce","invalid"])]),_:1}),o(s,{class:"col-12 mt-4"},{default:t(()=>[o(c,{label:"Nombre",type:"text",placeholder:"Nombre","aria-describedby":"nombre",modelValue:n.form.zeusName,"onUpdate:modelValue":l[7]||(l[7]=a=>n.form.zeusName=a),onInput:l[8]||(l[8]=a=>r.setTouched("zeusName")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.zeusName.$error},null,8,["modelValue","invalid"])]),_:1}),o(s,{class:"col-6 mt-4"},{default:t(()=>[o(c,{label:"Zeus Código",type:"text",placeholder:"Zeus código","aria-describedby":"Zeus código",modelValue:n.form.zeusCode,"onUpdate:modelValue":l[9]||(l[9]=a=>n.form.zeusCode=a),onInput:l[10]||(l[10]=a=>r.setTouched("zeusCode")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.zeusCode.$error},null,8,["modelValue","invalid"])]),_:1}),o(s,{class:"col-6 mt-4"},{default:t(()=>[o(c,{label:"DGA Código",type:"text",placeholder:"DGA código","aria-describedby":"DGA código",modelValue:n.form.dgaCode,"onUpdate:modelValue":l[11]||(l[11]=a=>n.form.dgaCode=a),onInput:l[12]||(l[12]=a=>r.setTouched("dgaCode")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.dgaCode.$error},null,8,["modelValue","invalid"])]),_:1}),o(s,{class:"col-4 mt-4"},{default:t(()=>[o(c,{label:"Canal: Nivel Freático",type:"text",placeholder:"Canal: Nivel Freático","aria-describedby":"Nivel Freático",modelValue:n.form.channelNivelFreatico,"onUpdate:modelValue":l[13]||(l[13]=a=>n.form.channelNivelFreatico=a)},null,8,["modelValue"])]),_:1}),o(s,{class:"col-4 mt-4"},{default:t(()=>[o(c,{label:"Canal: Caudal",type:"text",placeholder:"Canal: Caudal","aria-describedby":"Caudal",modelValue:n.form.channelCaudal,"onUpdate:modelValue":l[14]||(l[14]=a=>n.form.channelCaudal=a),onInput:l[15]||(l[15]=a=>r.setTouched("channelCaudal")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.channelCaudal.$error},null,8,["modelValue","invalid"])]),_:1}),o(s,{class:"col-4 mt-4"},{default:t(()=>[o(c,{label:"Canal: Totalizador",type:"text",placeholder:"Canal: Totalizador","aria-describedby":"Totalizador",modelValue:n.form.channelTotalizador,"onUpdate:modelValue":l[16]||(l[16]=a=>n.form.channelTotalizador=a),onInput:l[17]||(l[17]=a=>r.setTouched("channelTotalizador")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.channelTotalizador.$error},null,8,["modelValue","invalid"])]),_:1}),o(s,{class:"col-4 mt-4"},{default:t(()=>[o(c,{label:"Canal: Altura Limnimétrica",type:"text",placeholder:"Canal: Altura limnimétrica","aria-describedby":"limnimetrica",modelValue:n.form.channelAlturaLimnimetrica,"onUpdate:modelValue":l[18]||(l[18]=a=>n.form.channelAlturaLimnimetrica=a),onInput:l[19]||(l[19]=a=>r.setTouched("channelAlturaLimnimetrica")),feedback:"Rellene este campo por favor.",invalid:d.v$.form.channelAlturaLimnimetrica.$error},null,8,["modelValue","invalid"])]),_:1})]),_:1})]),_:1})]),_:1}),o(k,null,{default:t(()=>[o(p,{color:"secondary",onClick:r.closeModal},{default:t(()=>[u(" Cerrar ")]),_:1},8,["onClick"]),o(p,{color:"primary",onClick:r.saveDevice},{default:t(()=>[u("Guardar")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["visible","onClick"])}const K=w(q,[["render",J]]),Q={name:"Devices",components:{SearchBarFilter:L,CIcon:$,AddDeviceModal:O,EditDeviceModal:K},setup(){return{icon:x}},data(){return{devices:[],searchFilter:"",status:!1,showAddModal:!1,showEditModal:!1,device_id:null}},computed:{filteredDevices(){let e=this.devices;return this.searchFilter!==""&&(e=e.filter(l=>l.zeusName.toLowerCase().includes(this.searchFilter)||l.zeusCode.toLowerCase().includes(this.searchFilter)||l.dgaCode.toLowerCase().includes(this.searchFilter))),e}},mounted(){this.getDevices()},methods:{handleSearch(e){this.searchFilter=e},editDevice(e){this.showEditModal=!0,this.device_id=e},addDevice(){this.showAddModal=!0},async getDevices(){try{const e=await C.get(this.$store.state.backendUrl+"/devices",{params:{client:1},headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.devices=e.data,console.log("DEVICES: ",this.devices)}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},onCloseAdd(){this.showAddModal=!1,this.getDevices()},onCloseEdit(){this.showEditModal=!1,this.getDevices()}}};function W(e,l,F,d,n,r){const z=i("CIcon"),_=i("CButton"),b=i("CCol"),T=i("SearchBarFilter"),s=i("CRow"),m=i("CTableHeaderCell"),c=i("CTableRow"),V=i("CTableHead"),h=i("CTableDataCell"),y=i("CFormCheck"),p=i("font-awesome-icon"),k=i("CTableBody"),A=i("CTable"),a=i("AddDeviceModal"),M=i("EditDeviceModal");return N(),I(E,null,[o(s,{class:"mb-4"},{default:t(()=>[o(b,{class:"col-3 mt-4"},{default:t(()=>[o(_,{onClick:r.addDevice,color:"success",shape:"rounded-pill",variant:"outline"},{default:t(()=>[o(z,{icon:d.icon.cilPlus,size:"xl"},null,8,["icon"])]),_:1},8,["onClick"])]),_:1}),o(b,{class:"col-9"},{default:t(()=>[o(T,{onSearch:r.handleSearch},null,8,["onSearch"])]),_:1})]),_:1}),o(A,{class:"mt-5"},{default:t(()=>[o(V,null,{default:t(()=>[o(c,{color:"dark"},{default:t(()=>[o(m,{scope:"col"},{default:t(()=>[u("Cliente")]),_:1}),o(m,{scope:"col"},{default:t(()=>[u("Zeus Nombre")]),_:1}),o(m,{scope:"col"},{default:t(()=>[u("Zeus Código")]),_:1}),o(m,{scope:"col"},{default:t(()=>[u("DGA Código")]),_:1}),o(m,{scope:"col"},{default:t(()=>[u("Habilitado")]),_:1}),o(m,{scope:"col"},{default:t(()=>[u("Editar")]),_:1})]),_:1})]),_:1}),o(k,null,{default:t(()=>[(N(!0),I(E,null,R(r.filteredDevices,(v,X)=>(N(),B(c,{key:v.id},{default:t(()=>[o(h,null,{default:t(()=>[u(g(v.client.name),1)]),_:2},1024),o(h,null,{default:t(()=>[u(g(v.zeusName),1)]),_:2},1024),o(h,null,{default:t(()=>[u(g(v.zeusCode),1)]),_:2},1024),o(h,null,{default:t(()=>[u(g(v.dgaCode),1)]),_:2},1024),o(h,{class:"text-center"},{default:t(()=>[o(y,{checked:v.enabled,disabled:""},null,8,["checked"])]),_:2},1024),o(h,null,{default:t(()=>[o(_,{onClick:Y=>r.editDevice(v)},{default:t(()=>[o(p,{icon:"pen-to-square",size:"xl"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),o(a,{showModal:n.showAddModal,onCerrar:r.onCloseAdd},null,8,["showModal","onCerrar"]),o(M,{showModal:n.showEditModal,device:n.device_id,onCerrar:r.onCloseEdit},null,8,["showModal","device","onCerrar"])],64)}const se=w(Q,[["render",W]]);export{se as default};
