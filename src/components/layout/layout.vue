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
            <a-menu class="menu-list" v-model="selectedKeys" :theme="this.theme" mode="inline">
                <a-menu-item key="1" :class="this.$route.name == 'dashboard' ? 'ant-menu-item-selected' : ''">
                    <router-link to="/dashboard">
                        <appstore-outlined />
                        <span>Dashboard</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="2" :class="this.$route.name == 'customer' ? 'ant-menu-item-selected' : ''">
                    <router-link to="/customer">
                        <user-add-outlined />
                        <span>Customer</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="3" :class="this.$route.name == 'customers-map-view' ? 'ant-menu-item-selected' : ''">
                    <router-link to="/customers">
                        <environment-outlined />
                        <span>Customer Map View</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="4" :class="this.$route.name == 'reseller' ? 'ant-menu-item-selected' : ''">
                    <router-link to="/reseller">
                        <user-outlined />
                        <span>Reseller</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="5" :class="this.$route.name == 'userIpList' ? 'ant-menu-item-selected' : ''">
                    <router-link to="/userIpList">
                        <group-outlined />
                        <span>IP</span>
                    </router-link>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #icon>
                        <sound-outlined />
                    </template>
                    <template #title>Marketing</template>
                    <a-menu-item key="6" :class="this.$route.name == 'leads' ? 'ant-menu-item-selected' : ''">
                        <router-link to="/leads">
                            <file-text-outlined />
                            <span>Leads</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="7" :class="this.$route.name == 'proposal' ? 'ant-menu-item-selected' : ''">
                        <router-link to="/admin/proposal">
                            <file-outlined />
                            <span>Proposal</span>
                        </router-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #icon>
                        <bar-chart-outlined />
                    </template>
                    <template #title>Sales</template>
                    <a-menu-item key="8" :class="this.$route.name == 'contract' ? 'ant-menu-item-selected' : ''">
                        <router-link to="/admin/contract">
                            <file-text-outlined />
                            <span>Contract</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="9" :class="this.$route.name == 'old-invoices' ? 'ant-menu-item-selected' : ''">
                        <router-link to="/invoices">
                            <credit-card-outlined />
                            <span>Old Invoices</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="10" :class="this.$route.name == 'invoice' ? 'ant-menu-item-selected' : ''">
                        <router-link to="/invoice">
                            <credit-card-outlined />
                            <span>Invoices</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="11" :class="this.$route.name == 'subscriptions' ? 'ant-menu-item-selected' : ''">
                        <router-link to="/subscription/subscriptions">
                            <credit-card-outlined />
                            <span>Subscription</span>
                        </router-link>
                    </a-menu-item>
                </a-sub-menu>
                 <a-sub-menu key="sub3">
                    <template #icon>
                        <customer-service-outlined />
                    </template>
                    <template #title>Support</template>
                    <a-menu-item key="12" :class="this.$route.name == 'ticket' ? 'ant-menu-item-selected' : ''">
                        <router-link to="/allTicketList">
                            <customer-service-outlined />
                            <span>Ticket</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="13" :class="this.$route.name == 'installation' ? 'ant-menu-item-selected' : ''">
                        <router-link to="/admin/installation">
                            <link-outlined />
                            <span>Installation</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="13" :class="this.$route.name == 'installation' ? 'ant-menu-item-selected' : ''">
                        <router-link to="/admin/installation">
                            <user-outlined />
                            <span>Trainings</span>
                        </router-link>
                    </a-menu-item>
                </a-sub-menu>
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
    UserAddOutlined,
    UserOutlined,
    MenuOutlined,
    EnvironmentOutlined,
    GroupOutlined,
    SoundOutlined,
    FileTextOutlined,
    FileOutlined,
    BarChartOutlined,
    CreditCardOutlined,
    CustomerServiceOutlined,
    LinkOutlined,
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
        UserAddOutlined,
        UserOutlined,
        MenuOutlined,
        EnvironmentOutlined,
        GroupOutlined,
        SoundOutlined,
        FileTextOutlined,
        FileOutlined,
        BarChartOutlined,
        CreditCardOutlined,
        CustomerServiceOutlined,
        LinkOutlined,
    },
    computed: {
        ...layoutComputed,
    },
    methods: {
        ...layoutMethods,
    },
};
</script>