import{_ as g,j as V,a as s,b as k,c as A,w as l,e as o,f as i,t as T,C as I,d as E,F,g as x}from"./index-8UleF4ZQ.js";import{_ as S}from"./SearchFilter-B183IJ57.js";import{i as P}from"./index-CYE9aSFO.js";import{u as R,r as u}from"./index-5FCShcH-.js";import"./index-Cp4zSSMc.js";import"./index-Cw_ppwa_.js";import"./index-C6AE5JqC.js";const z={name:"AddUser",props:{showModal:Boolean},setup(){return{v$:R()}},data(){return{form:{profile_id:"",name:"",email:"",password:"",password_confirmation:""},profiles:[],success:!1,successMsg:""}},validations(){return{form:{profile_id:{required:u},name:{required:u},email:{required:u},password:{required:u},password_confirmation:{required:u}}}},mounted(){this.getProfiles()},methods:{setTouched(e){(e=="profile_id"||e=="all")&&this.v$.form.profile_id.$touch(),(e=="name"||e=="all")&&this.v$.form.name.$touch(),(e=="email"||e=="all")&&this.v$.form.email.$touch(),(e=="passowrd"||e=="all")&&this.v$.form.password.$touch(),(e=="password_confirmation"||e=="all")&&this.v$.form.password_confirmation.$touch()},closeModal(){this.$emit("cerrar"),this.success=!1},closeModalOutside(e){e.target===e.currentTarget&&this.closeModal()},async getProfiles(){try{const e=await V.get(this.$store.state.backendUrl+"/profile",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.profiles=e.data}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},saveUser(){this.setTouched("all"),this.v$.$invalid||V.post(this.$store.state.backendUrl+"/users",this.form,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}}).then(e=>{console.log(e),this.successMsg="Usuario creado exitósamente",this.success=!0}).catch(e=>{console.log("Error en post: ",e)})}}};function H(e,r,B,m,t,n){const w=s("CModalTitle"),_=s("CModalHeader"),C=s("CAlert"),v=s("v-select"),c=s("CCol"),d=s("CFormInput"),h=s("CRow"),b=s("CForm"),f=s("CModalBody"),p=s("CButton"),U=s("CModalFooter"),M=s("CModal");return k(),A(M,{visible:B.showModal,onClick:n.closeModalOutside},{default:l(()=>[o(_,null,{default:l(()=>[o(w,null,{default:l(()=>[i("Nuevo Usuario")]),_:1})]),_:1}),o(f,null,{default:l(()=>[o(C,{color:"success",visible:t.success},{default:l(()=>[i(T(t.successMsg),1)]),_:1},8,["visible"]),o(b,null,{default:l(()=>[o(h,null,{default:l(()=>[o(c,{class:"col-12"},{default:l(()=>[o(v,{modelValue:t.form.profile_id,"onUpdate:modelValue":r[0]||(r[0]=a=>t.form.profile_id=a),options:t.profiles,reduce:a=>a.id,label:"name",placeholder:"Seleccione un perfil...",onInput:r[1]||(r[1]=a=>n.setTouched("profile_id")),feedback:"Rellene este campo por favor.",invalid:m.v$.form.profile_id.$error},null,8,["modelValue","options","reduce","invalid"])]),_:1}),o(c,{class:"col-12 mt-4"},{default:l(()=>[o(d,{type:"text",placeholder:"Nombre","aria-describedby":"Nombre Usuario",modelValue:t.form.name,"onUpdate:modelValue":r[2]||(r[2]=a=>t.form.name=a),onInput:r[3]||(r[3]=a=>n.setTouched("name")),feedback:"Rellene este campo por favor.",invalid:m.v$.form.name.$error},null,8,["modelValue","invalid"])]),_:1}),o(c,{class:"col-12 mt-4"},{default:l(()=>[o(d,{type:"email",placeholder:"Correo electronico","aria-describedby":"Correo electrónico",modelValue:t.form.email,"onUpdate:modelValue":r[4]||(r[4]=a=>t.form.email=a),onInput:r[5]||(r[5]=a=>n.setTouched("email")),feedback:"Rellene este campo por favor.",invalid:m.v$.form.email.$error},null,8,["modelValue","invalid"])]),_:1}),o(c,{class:"col-6 mt-4"},{default:l(()=>[o(d,{type:"password",placeholder:"Contraseña","aria-describedby":"Contraseña",modelValue:t.form.password,"onUpdate:modelValue":r[6]||(r[6]=a=>t.form.password=a),onInput:r[7]||(r[7]=a=>n.setTouched("password")),feedback:"Rellene este campo por favor.",invalid:m.v$.form.password.$error},null,8,["modelValue","invalid"])]),_:1}),o(c,{class:"col-6 mt-4"},{default:l(()=>[o(d,{type:"password",placeholder:"Repetir Contraseña","aria-describedby":"Repetir Contraseña",modelValue:t.form.password_confirmation,"onUpdate:modelValue":r[8]||(r[8]=a=>t.form.password_confirmation=a),onInput:r[9]||(r[9]=a=>n.setTouched("password_confirmation")),feedback:"Rellene este campo por favor.",invalid:m.v$.form.password_confirmation.$error},null,8,["modelValue","invalid"])]),_:1})]),_:1})]),_:1})]),_:1}),o(U,null,{default:l(()=>[o(p,{color:"secondary",onClick:n.closeModal},{default:l(()=>[i(" Cerrar ")]),_:1},8,["onClick"]),o(p,{color:"primary",onClick:n.saveUser},{default:l(()=>[i("Guardar")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["visible","onClick"])}const N=g(z,[["render",H]]),j={name:"EditUser",props:{showModal:Boolean,user:Object},setup(){return{v$:R()}},data(){return{form:{id:"",name:"",profile_id:"",email:"",password:"",password_confirmation:""},success:!1,successMsg:"",profiles:[]}},validations(){return{form:{profile_id:{required:u},name:{required:u},email:{required:u},password:{required:u},password_confirmation:{required:u}}}},watch:{user:{handler(e){this.setDataUser(e)},deep:!0,immediate:!0},showModal(e){e||this.$emit("update:showModal",!1)}},mounted(){this.getProfiles()},methods:{setTouched(e){(e=="profile_id"||e=="all")&&this.v$.form.profile_id.$touch(),(e=="name"||e=="all")&&this.v$.form.name.$touch(),(e=="email"||e=="all")&&this.v$.form.email.$touch(),(e=="passowrd"||e=="all")&&this.v$.form.password.$touch(),(e=="password_confirmation"||e=="all")&&this.v$.form.password_confirmation.$touch()},closeModal(){this.$emit("cerrar")},closeModalOutside(e){e.target===e.currentTarget&&this.closeModal()},setDataUser(e){e&&(console.log(e),this.form.id=e.id,this.form.profile_id=e.profile_id,this.form.name=e.name,this.form.email=e.email,this.form.password=e.password,this.form.password_confirmation=e.password_confirmation)},async getProfiles(){try{const e=await V.get(this.$store.state.backendUrl+"/profile",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.profiles=e.data,console.log("PROFILES: ",this.profiles)}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},saveUser(){this.setTouched("all"),this.v$.$invalid||V.put(this.$store.state.backendUrl+"/users/"+this.form.id,this.form,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}}).then(e=>{console.log(e),this.successMsg="Usuario actualizado exitósamente.",this.success=!0}).catch(e=>{console.log("Error en post: ",e)})}}};function O(e,r,B,m,t,n){const w=s("CModalTitle"),_=s("CModalHeader"),C=s("CAlert"),v=s("v-select"),c=s("CCol"),d=s("CFormInput"),h=s("CRow"),b=s("CForm"),f=s("CModalBody"),p=s("CButton"),U=s("CModalFooter"),M=s("CModal");return k(),A(M,{visible:B.showModal,onClick:n.closeModalOutside},{default:l(()=>[o(_,null,{default:l(()=>[o(w,null,{default:l(()=>[i("Editar Cliente")]),_:1})]),_:1}),o(f,null,{default:l(()=>[o(C,{color:"success",visible:t.success},{default:l(()=>[i(T(t.successMsg),1)]),_:1},8,["visible"]),o(b,null,{default:l(()=>[o(h,null,{default:l(()=>[o(c,{class:"col-12"},{default:l(()=>[o(v,{modelValue:t.form.profile_id,"onUpdate:modelValue":r[0]||(r[0]=a=>t.form.profile_id=a),options:t.profiles,reduce:a=>a.id,label:"name",placeholder:"Seleccione un perfil..."},null,8,["modelValue","options","reduce"])]),_:1}),o(c,{class:"col-12 mt-4"},{default:l(()=>[o(d,{type:"text",placeholder:"Nombre","aria-describedby":"Nombre Usuario",modelValue:t.form.name,"onUpdate:modelValue":r[1]||(r[1]=a=>t.form.name=a)},null,8,["modelValue"])]),_:1}),o(c,{class:"col-12 mt-4"},{default:l(()=>[o(d,{type:"email",placeholder:"Correo electronico","aria-describedby":"Correo electrónico",modelValue:t.form.email,"onUpdate:modelValue":r[2]||(r[2]=a=>t.form.email=a)},null,8,["modelValue"])]),_:1}),o(c,{class:"col-6 mt-4"},{default:l(()=>[o(d,{type:"password",placeholder:"Contraseña","aria-describedby":"Contraseña",modelValue:t.form.password,"onUpdate:modelValue":r[3]||(r[3]=a=>t.form.password=a)},null,8,["modelValue"])]),_:1}),o(c,{class:"col-6 mt-4"},{default:l(()=>[o(d,{type:"password",placeholder:"Repetir Contraseña","aria-describedby":"Repetir Contraseña",modelValue:t.form.password_confirmation,"onUpdate:modelValue":r[4]||(r[4]=a=>t.form.password_confirmation=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),o(U,null,{default:l(()=>[o(p,{color:"secondary",onClick:n.closeModal},{default:l(()=>[i(" Cerrar ")]),_:1},8,["onClick"]),o(p,{color:"primary",onClick:n.saveUser},{default:l(()=>[i("Guardar")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["visible","onClick"])}const D=g(j,[["render",O]]),L={name:"Clients",components:{SearchBarFilter:S,CIcon:I,AddUserModal:N,EditUserModal:D},setup(){return{icon:P}},data(){return{users:[],searchFilter:"",showAddModal:!1,showEditModal:!1,user_id:null}},computed:{filteredUsers(){let e=this.users;return this.searchFilter!==""&&(e=e.filter(r=>r.name.toLowerCase().includes(this.searchFilter))),e}},mounted(){this.getUsers()},methods:{editUser(e){this.showEditModal=!0,this.user_id=e},addUser(){this.showAddModal=!0},handleSearch(e){this.searchFilter=e},async getUsers(){try{const e=await V.get(this.$store.state.backendUrl+"/users",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.users=e.data,console.log("Usuarios: ",this.users)}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},onCloseAdd(){this.showAddModal=!1,this.getUsers()},onCloseEdit(){this.showEditModal=!1,this.getUsers()}}};function q(e,r,B,m,t,n){const w=s("CIcon"),_=s("CButton"),C=s("CCol"),v=s("SearchBarFilter"),c=s("CRow"),d=s("CTableHeaderCell"),h=s("CTableRow"),b=s("CTableHead"),f=s("CTableDataCell"),p=s("font-awesome-icon"),U=s("CTableBody"),M=s("CTable"),a=s("AddUserModal"),$=s("EditUserModal");return k(),E(F,null,[o(c,{class:"mb-4"},{default:l(()=>[o(C,{class:"col-3 mt-4"},{default:l(()=>[o(_,{onClick:n.addUser,color:"success",shape:"rounded-pill",variant:"outline"},{default:l(()=>[o(w,{icon:m.icon.cilPlus,size:"xl"},null,8,["icon"])]),_:1},8,["onClick"])]),_:1}),o(C,{class:"col-9"},{default:l(()=>[o(v,{onSearch:n.handleSearch},null,8,["onSearch"])]),_:1})]),_:1}),o(M,{class:"mt-5"},{default:l(()=>[o(b,null,{default:l(()=>[o(h,{color:"dark"},{default:l(()=>[o(d,{scope:"col"},{default:l(()=>[i("Nombre")]),_:1}),o(d,{scope:"col"},{default:l(()=>[i("Perfil")]),_:1}),o(d,{scope:"col"},{default:l(()=>[i("Correo")]),_:1}),o(d,{scope:"col"},{default:l(()=>[i("Editar")]),_:1})]),_:1})]),_:1}),o(U,null,{default:l(()=>[(k(!0),E(F,null,x(n.filteredUsers,(y,G)=>(k(),A(h,{key:y.id},{default:l(()=>[o(f,null,{default:l(()=>[i(T(y.name),1)]),_:2},1024),o(f,null,{default:l(()=>[i(T(y.profile.name),1)]),_:2},1024),o(f,null,{default:l(()=>[i(T(y.email),1)]),_:2},1024),o(f,null,{default:l(()=>[o(_,{onClick:J=>n.editUser(y)},{default:l(()=>[o(p,{icon:"pen-to-square",size:"xl"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),o(a,{showModal:t.showAddModal,onCerrar:n.onCloseAdd},null,8,["showModal","onCerrar"]),o($,{showModal:t.showEditModal,user:t.user_id,onCerrar:n.onCloseEdit},null,8,["showModal","user","onCerrar"])],64)}const oe=g(L,[["render",q]]);export{oe as default};
