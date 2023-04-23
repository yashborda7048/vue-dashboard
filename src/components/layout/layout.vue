<template>
    <a-layout>
        <a-layout-sider id="leftSider" v-model:collapsed="collapsed" :theme="this.theme" :trigger="null" collapsible>
            <div class="logo d-flex justify-content-center align-items-center">
                <div v-if="collapsed">
                    <img src="../../assets/logo.png" class="mx-auto d-block" alt="logo">
                </div>
                <div v-else class="d-flex justify-content-center">
                    <img src="../../assets/logo.png" alt="logo">
                    <h4 class="ms-2">Cloud<span>Ext</span></h4>
                </div>
            </div>
            <a-menu v-model="selectedKeys" :theme="this.theme" mode="inline">
                <a-menu-item key="1" :class="this.$route.name == 'dashboard' ? 'ant-menu-item-selected' : ''">
                    <router-link to="/dashboard">
                        <appstore-outlined />
                        <span>dashboard</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="2" :class="this.$route.name == 'customer' ? 'ant-menu-item-selected' : ''">
                    <router-link to="/customer">
                        <user-outlined />
                        <span>Customer</span>
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :theme="this.theme" :class="this.theme == 'light' ? 'bg-white' : ''"
                class="d-flex justify-content-between align-items-center px-3">
                <menu-outlined class="trigger" fill="success" @click="collapsed = !collapsed" />
                <appstore-outlined @click="this.changeTheme('dark')" v-if="this.theme == 'light'" />
                <appstore-outlined @click="this.changeTheme('light')" v-else />
            </a-layout-header>
            <slot />
        </a-layout>
    </a-layout>
</template>
<script >
import {
    AppstoreOutlined,
    UserOutlined,
    MenuOutlined,
} from '@ant-design/icons-vue';
import { layoutComputed, layoutMethods } from '@/store/helpers'

export default {
    name: "App",
    data() {
        return {
            selectedKeys: ['1'],
            collapsed: false
        }
    },
    components: {
        AppstoreOutlined,
        UserOutlined,
        MenuOutlined,
    },
    computed: {
        ...layoutComputed,
    },
    methods: {
        ...layoutMethods,
    },
};
</script>