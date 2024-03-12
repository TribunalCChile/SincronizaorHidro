import{_ as k,j as y,a,b as A,c as T,w as t,e as s,f as c,t as g,C as B,d as H,F as M,g as Z}from"./index-8UleF4ZQ.js";import{_ as $}from"./SearchFilter-B183IJ57.js";import{u as I,r as m}from"./index-5FCShcH-.js";/* empty css                                                                 */import{i as R}from"./index-CYE9aSFO.js";import"./index-Cp4zSSMc.js";import"./index-Cw_ppwa_.js";import"./index-C6AE5JqC.js";const E={name:"AddConfig",setup(){return{v$:I()}},props:{showModal:Boolean},data(){return{form:{client_id:"",zeusHost:"zeus.microcom.es",zeusPort:"4040",zeusUsername:"",zeusPassword:"",zeusAuthPass:"",dgaUsername:"",dgaPassword:""},configs:[],success:!1,successMsg:""}},validations(){return{form:{client_id:{required:m},zeusHost:{required:m},zeusPort:{required:m},zeusUsername:{required:m},zeusPassword:{required:m},zeusAuthPass:{required:m},dgaUsername:{required:m},dgaPassword:{required:m}}}},mounted(){this.getUsersConfig()},methods:{setTouched(e){(e=="zeusHost"||e=="all")&&this.v$.form.zeusHost.$touch(),(e=="zeusPort"||e=="all")&&this.v$.form.zeusPort.$touch(),(e=="zeusUsername"||e=="all")&&this.v$.form.zeusUsername.$touch(),(e=="zeusPassword"||e=="all")&&this.v$.form.zeusPassword.$touch(),(e=="zeusAuthPass"||e=="all")&&this.v$.form.zeusAuthPass.$touch(),(e=="dgaUsername"||e=="all")&&this.v$.form.dgaUsername.$touch(),(e=="dgaPassword"||e=="all")&&this.v$.form.dgaPassword.$touch()},closeModal(){this.$emit("cerrar"),this.success=!1,this.form.client_id="",this.form.zeusHost="",this.form.zeusPort="",this.form.zeusUsername="",this.form.zeusPassword="",this.form.zeusAuthPass="",this.form.dgaUsername="",this.form.dgaPassword="",this.v$.$reset()},closeModalOutside(e){e.target===e.currentTarget&&this.closeModal()},setData(e){console.log("OPTION: ",e)},async getUsersConfig(){try{const e=await y.get(this.$store.state.backendUrl+"/client_configs",{params:{client:1},headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.configs=e.data.map(o=>({...o,clientName:o.client.name})),console.log(this.configs[0])}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},saveConfig(){console.log("form: ",this.form),this.setTouched("all"),this.v$.$invalid||y.post(this.$store.state.backendUrl+"/client_configs",this.form,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}}).then(e=>{console.log(e),this.successMsg="Configuración añadida exitósamente",this.success=!0}).catch(e=>{console.log("Error en post: ",e)})}}};function F(e,o,V,i,r,n){const z=a("CModalTitle"),C=a("CModalHeader"),h=a("CAlert"),P=a("v-select"),u=a("CCol"),d=a("CFormInput"),_=a("CRow"),b=a("CForm"),f=a("CModalBody"),p=a("CButton"),w=a("CModalFooter"),U=a("CModal");return A(),T(U,{visible:V.showModal,onClick:n.closeModalOutside},{default:t(()=>[s(C,null,{default:t(()=>[s(z,null,{default:t(()=>[c("Crear configuración de servidores")]),_:1})]),_:1}),s(f,null,{default:t(()=>[s(h,{color:"success",visible:r.success},{default:t(()=>[c(g(r.successMsg),1)]),_:1},8,["visible"]),s(b,null,{default:t(()=>[s(_,null,{default:t(()=>[s(u,{class:"col-12 mt-4"},{default:t(()=>[s(P,{modelValue:r.form.client_id,"onUpdate:modelValue":o[0]||(o[0]=l=>r.form.client_id=l),options:r.configs,reduce:l=>l.client_id,"onOption:selected":n.setData,label:"clientName",placeholder:"Seleccione...",onInput:o[1]||(o[1]=l=>n.setTouched("client_id")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.client_id.$error},null,8,["modelValue","options","reduce","onOption:selected","invalid"])]),_:1}),s(u,{class:"col-6 mt-4"},{default:t(()=>[s(d,{label:"Zeus Host",type:"text",placeholder:"","aria-describedby":"Zeus Host",onInput:o[2]||(o[2]=l=>n.setTouched("zeusHost")),modelValue:r.form.zeusHost,"onUpdate:modelValue":o[3]||(o[3]=l=>r.form.zeusHost=l),feedback:"Rellene este campo por favor.",invalid:i.v$.form.zeusHost.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-6 mt-4"},{default:t(()=>[s(d,{label:"Zeus Puerto",type:"text",placeholder:"","aria-describedby":"Zeus Puerto",modelValue:r.form.zeusPort,"onUpdate:modelValue":o[4]||(o[4]=l=>r.form.zeusPort=l),onInput:o[5]||(o[5]=l=>n.setTouched("zeusPort")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.zeusPort.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-12 mt-4"},{default:t(()=>[s(d,{type:"text",placeholder:"Zeus Username","aria-describedby":"Zeus username",modelValue:r.form.zeusUsername,"onUpdate:modelValue":o[6]||(o[6]=l=>r.form.zeusUsername=l),onInput:o[7]||(o[7]=l=>n.setTouched("zeusUsername")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.zeusUsername.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-12 mt-4"},{default:t(()=>[s(d,{type:"text",placeholder:"Zeus Password","aria-describedby":"Zeus password",modelValue:r.form.zeusPassword,"onUpdate:modelValue":o[8]||(o[8]=l=>r.form.zeusPassword=l),onInput:o[9]||(o[9]=l=>n.setTouched("zeusPassword")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.zeusPassword.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-12 mt-4"},{default:t(()=>[s(d,{type:"text",placeholder:"Zeus Auth Pass","aria-describedby":"Zeus Auth Pass",modelValue:r.form.zeusAuthPass,"onUpdate:modelValue":o[10]||(o[10]=l=>r.form.zeusAuthPass=l),onInput:o[11]||(o[11]=l=>n.setTouched("zeusAuthPass")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.zeusAuthPass.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-12 mt-4"},{default:t(()=>[s(d,{type:"text",placeholder:"DGA Username","aria-describedby":"DGA username",modelValue:r.form.dgaUsername,"onUpdate:modelValue":o[12]||(o[12]=l=>r.form.dgaUsername=l),onInput:o[13]||(o[13]=l=>n.setTouched("dgaUsername")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.dgaUsername.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-12 mt-4"},{default:t(()=>[s(d,{type:"text",placeholder:"DGA Password","aria-describedby":"DGA password",modelValue:r.form.dgaPassword,"onUpdate:modelValue":o[14]||(o[14]=l=>r.form.dgaPassword=l),onInput:o[15]||(o[15]=l=>n.setTouched("dgaPassword")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.dgaPassword.$error},null,8,["modelValue","invalid"])]),_:1})]),_:1})]),_:1})]),_:1}),s(w,null,{default:t(()=>[s(p,{color:"secondary",onClick:n.closeModal},{default:t(()=>[c(" Cerrar ")]),_:1},8,["onClick"]),s(p,{color:"primary",onClick:n.saveConfig},{default:t(()=>[c("Guardar")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["visible","onClick"])}const D=k(E,[["render",F]]),S={name:"EditConfig",props:{showModal:Boolean,configClient:Object},setup(){return{v$:I()}},data(){return{form:{id:"",client_id:"",name:"",zeusHost:"",zeusPort:"",zeusUsername:"",zeusPassword:"",zeusAuthPass:"",dgaUsername:"",dgaPassword:""},configs:[],success:!1,successMsg:""}},validations(){return{form:{client_config_id:{required:m},name:{required:m},zeusHost:{required:m},zeusPort:{required:m},zeusUsername:{required:m},zeusPassword:{required:m},zeusAuthPass:{required:m},dgaUsername:{required:m},dgaPassword:{required:m}}}},watch:{configClient:{handler(e){this.setDataConfig(e)},deep:!0,immediate:!0},showModal(e){e||this.$emit("update:showModal",!1)}},mounted(){this.getUsersConfig()},methods:{setTouched(e){(e=="name"||e=="all")&&this.v$.form.name.$touch(),(e=="zeusHost"||e=="all")&&this.v$.form.zeusHost.$touch(),(e=="zeusPort"||e=="all")&&this.v$.form.zeusPort.$touch(),(e=="zeusUsername"||e=="all")&&this.v$.form.zeusUsername.$touch(),(e=="zeusPassword"||e=="all")&&this.v$.form.zeusPassword.$touch(),(e=="zeusAuthPass"||e=="all")&&this.v$.form.zeusAuthPass.$touch(),(e=="dgaUsername"||e=="all")&&this.v$.form.dgaUsername.$touch(),(e=="dgaPassword"||e=="all")&&this.v$.form.dgaPassword.$touch()},setData(e){console.log("option: ",e)},async saveConfig(){try{const e=await y.put(this.$store.state.backendUrl+"/client_configs/"+this.form.id,this.form,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}}).then(o=>{console.log(o),this.successMsg="Configuración actualizada correctamente.",this.success=!0}).catch(o=>{console.log("Error en post: ",o)})}catch(e){console.error("Error en la solicitud a la API:",e)}},setDataConfig(e){console.log("SET DATA: ",e),e&&(console.log(e),this.form.id=e.id,this.form.client_id=e.client_id,this.form.name=e.name,this.form.zeusHost=e.zeusHost,this.form.zeusPort=e.zeusPort.toString(),this.form.zeusUsername=e.zeusUsername,this.form.zeusPassword=e.zeusPassword,this.form.zeusAuthPass=e.zeusAuthPass,this.form.dgaUsername=e.dgaUsername,this.form.dgaPassword=e.dgaPassword)},closeModal(){this.$emit("cerrar"),this.success=!1},closeModalOutside(e){e.target===e.currentTarget&&this.closeModal()},async getUsersConfig(){try{const e=await y.get(this.$store.state.backendUrl+"/client_configs",{params:{client:1},headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.configs=e.data.map(o=>({...o,clientName:o.client.name})),console.log(this.configs)}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}}}};function G(e,o,V,i,r,n){const z=a("CModalTitle"),C=a("CModalHeader"),h=a("CAlert"),P=a("v-select"),u=a("CCol"),d=a("CFormInput"),_=a("CRow"),b=a("CForm"),f=a("CModalBody"),p=a("CButton"),w=a("CModalFooter"),U=a("CModal");return A(),T(U,{visible:V.showModal,onClick:n.closeModalOutside},{default:t(()=>[s(C,null,{default:t(()=>[s(z,null,{default:t(()=>[c("Editar configuración de servidores")]),_:1})]),_:1}),s(f,null,{default:t(()=>[s(h,{color:"success",visible:r.success},{default:t(()=>[c(g(r.successMsg),1)]),_:1},8,["visible"]),s(b,null,{default:t(()=>[s(_,null,{default:t(()=>[s(u,{class:"col-12 mt-4"},{default:t(()=>[s(P,{modelValue:r.form.client_config_id,"onUpdate:modelValue":o[0]||(o[0]=l=>r.form.client_config_id=l),options:r.configs,reduce:l=>l.client_id,"onOption:selected":n.setData,label:"clientName",placeholder:"Seleccione...",onInput:o[1]||(o[1]=l=>n.setTouched("client_config_id")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.client_config_id.$error},null,8,["modelValue","options","reduce","onOption:selected","invalid"])]),_:1}),s(u,{class:"col-6 mt-4"},{default:t(()=>[s(d,{label:"Zeus Host",type:"text",placeholder:"","aria-describedby":"Zeus Host",modelValue:r.form.zeusHost,"onUpdate:modelValue":o[2]||(o[2]=l=>r.form.zeusHost=l),onInput:o[3]||(o[3]=l=>n.setTouched("zeusHost")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.zeusHost.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-6 mt-4"},{default:t(()=>[s(d,{label:"Zeus Puerto",type:"text",placeholder:"","aria-describedby":"Zeus Puerto",modelValue:r.form.zeusPort,"onUpdate:modelValue":o[4]||(o[4]=l=>r.form.zeusPort=l),onInput:o[5]||(o[5]=l=>n.setTouched("zeusPort")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.zeusPort.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-12 mt-4"},{default:t(()=>[s(d,{label:"Zeus Username",type:"text",placeholder:"Zeus Username","aria-describedby":"Zeus username",modelValue:r.form.zeusUsername,"onUpdate:modelValue":o[6]||(o[6]=l=>r.form.zeusUsername=l),onInput:o[7]||(o[7]=l=>n.setTouched("zeusUsername")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.zeusUsername.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-12 mt-4"},{default:t(()=>[s(d,{label:"Zeus Password",type:"text",placeholder:"Zeus Password","aria-describedby":"Zeus password",modelValue:r.form.zeusPassword,"onUpdate:modelValue":o[8]||(o[8]=l=>r.form.zeusPassword=l),onInput:o[9]||(o[9]=l=>n.setTouched("zeusPassword")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.zeusPassword.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-12 mt-4"},{default:t(()=>[s(d,{label:"Zeus Auth Pass",type:"text",placeholder:"Zeus Auth Pass","aria-describedby":"Zeus Auth Pass",modelValue:r.form.zeusAuthPass,"onUpdate:modelValue":o[10]||(o[10]=l=>r.form.zeusAuthPass=l),onInput:o[11]||(o[11]=l=>n.setTouched("zeusAuthPass")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.zeusAuthPass.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-12 mt-4"},{default:t(()=>[s(d,{label:"DGA Username",type:"text",placeholder:"DGA Username","aria-describedby":"DGA username",modelValue:r.form.dgaUsername,"onUpdate:modelValue":o[12]||(o[12]=l=>r.form.dgaUsername=l),onInput:o[13]||(o[13]=l=>n.setTouched("dgaUsername")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.dgaUsername.$error},null,8,["modelValue","invalid"])]),_:1}),s(u,{class:"col-12 mt-4"},{default:t(()=>[s(d,{label:"DGA Password",type:"text",placeholder:"DGA Password","aria-describedby":"DGA password",modelValue:r.form.dgaPassword,"onUpdate:modelValue":o[14]||(o[14]=l=>r.form.dgaPassword=l),onInput:o[15]||(o[15]=l=>n.setTouched("dgaPassword")),feedback:"Rellene este campo por favor.",invalid:i.v$.form.dgaPassword.$error},null,8,["modelValue","invalid"])]),_:1})]),_:1})]),_:1})]),_:1}),s(w,null,{default:t(()=>[s(p,{color:"secondary",onClick:n.closeModal},{default:t(()=>[c(" Cerrar ")]),_:1},8,["onClick"]),s(p,{color:"primary",onClick:n.saveConfig},{default:t(()=>[c("Guardar")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["visible","onClick"])}const O=k(S,[["render",G]]),j={name:"Configurations",components:{SearchBarFilter:$,CIcon:B,AddConfigModal:D,EditConfigModal:O},setup(){return{icon:R}},data(){return{configs:[],searchFilter:"",showAddModal:!1,showEditModal:!1,config_id:null}},computed:{filteredConfigs(){let e=this.configs;return this.searchFilter!==""&&(e=e.filter(o=>o.zeusHost.toLowerCase().includes(this.searchFilter)||o.zeusUsername.toLowerCase().includes(this.searchFilter)||o.dgaUsername.toLowerCase().includes(this.searchFilter))),e}},mounted(){this.getConfigs()},methods:{addConfig(){this.showAddModal=!0},editConfig(e){this.showEditModal=!0,this.config_id=e},handleSearch(e){this.searchFilter=e},async getConfigs(){try{const e=await y.get(this.$store.state.backendUrl+"/client_configs",{params:{client:!0},headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.configs=e.data,console.log(this.configs[0])}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},onCloseAdd(){this.showAddModal=!1,this.getConfigs()},onCloseEdit(){this.showEditModal=!1,this.getConfigs()}}};function N(e,o,V,i,r,n){const z=a("CIcon"),C=a("CButton"),h=a("CCol"),P=a("SearchBarFilter"),u=a("CRow"),d=a("CTableHeaderCell"),_=a("CTableRow"),b=a("CTableHead"),f=a("CTableDataCell"),p=a("font-awesome-icon"),w=a("CTableBody"),U=a("CTable"),l=a("AddConfigModal"),x=a("EditConfigModal");return A(),H(M,null,[s(u,{class:"mb-4"},{default:t(()=>[s(h,{class:"col-3 mt-4"},{default:t(()=>[s(C,{onClick:n.addConfig,color:"success",shape:"rounded-pill",variant:"outline"},{default:t(()=>[s(z,{icon:i.icon.cilPlus,size:"xl"},null,8,["icon"])]),_:1},8,["onClick"])]),_:1}),s(h,{class:"col-9"},{default:t(()=>[s(P,{onSearch:n.handleSearch},null,8,["onSearch"])]),_:1})]),_:1}),s(U,{class:"mt-5"},{default:t(()=>[s(b,null,{default:t(()=>[s(_,{color:"dark"},{default:t(()=>[s(d,{scope:"col"},{default:t(()=>[c("Cliente")]),_:1}),s(d,{scope:"col"},{default:t(()=>[c("Zeus Host")]),_:1}),s(d,{scope:"col"},{default:t(()=>[c("Zeus Username")]),_:1}),s(d,{scope:"col"},{default:t(()=>[c("DGA Username")]),_:1}),s(d,{scope:"col"},{default:t(()=>[c("Editar")]),_:1})]),_:1})]),_:1}),s(w,null,{default:t(()=>[(A(!0),H(M,null,Z(n.filteredConfigs,(v,L)=>(A(),T(_,{key:v.id},{default:t(()=>[s(f,null,{default:t(()=>[c(g(v.client.name),1)]),_:2},1024),s(f,null,{default:t(()=>[c(g(v.zeusHost),1)]),_:2},1024),s(f,null,{default:t(()=>[c(g(v.zeusUsername),1)]),_:2},1024),s(f,null,{default:t(()=>[c(g(v.dgaUsername),1)]),_:2},1024),s(f,null,{default:t(()=>[s(C,{onClick:q=>n.editConfig(v)},{default:t(()=>[s(p,{icon:"pen-to-square",size:"xl"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),s(l,{showModal:r.showAddModal,onCerrar:n.onCloseAdd},null,8,["showModal","onCerrar"]),s(x,{showModal:r.showEditModal,configClient:r.config_id,onCerrar:n.onCloseEdit},null,8,["showModal","configClient","onCerrar"])],64)}const se=k(j,[["render",N]]);export{se as default};
