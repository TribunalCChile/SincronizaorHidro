<template>
  <CDropdown placement="bottom-end" variant="nav-item">
    <CDropdownToggle class="py-0 pe-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">      
      <CDropdownHeader
        component="h6"
        class="bg-body-secondary text-body-secondary fw-semibold my-2"
      >
        Perfil
      </CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-user" /> Mi Perfil
      </CDropdownItem>
      
      <CDropdownItem @click="logout()">
        <CIcon icon="cil-lock-locked" /> Cerrar sesión
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/avatars/10.jpg'
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42,
    }
  },
  methods: {
    logout() {
      this.$store.commit('logOut')
      this.$router.push('/pages/login')
    },
  }
}
</script>
