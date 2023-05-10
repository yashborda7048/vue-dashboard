<template>
  <a-layout>
    <a-layout-sider
      id="leftSider"
      v-model:collapsed="collapsed"
      :theme="this.theme"
      :trigger="null"
      collapsible
    >
      <div class="logo d-flex justify-content-center align-items-center">
        <div v-if="collapsed">
          <img src="../../assets/logo.png" class="mx-auto d-block" alt="logo" />
        </div>
        <div v-else class="d-flex justify-content-center">
          <img src="../../assets/logo.png" alt="logo" />
          <h4 class="ms-2" :class="this.theme == 'dark' ? 'text-white' : ''">
            Yash Borda
          </h4>
        </div>
      </div>
      <a-menu
        class="menu-list"
        v-model="selectedKeys"
        :theme="this.theme"
        mode="inline"
        v-for="menu in menulist"
        :key="menu"
      >
        <a-menu-item
          v-if="!menu.subMenuTitle"
          :key="menu.keyIndex"
          :class="
            this.$route.name == menu.routerName ? 'ant-menu-item-selected' : ''
          "
        >
          <router-link :to="menu.link">
            <vue-feather :type="menu.icon"></vue-feather>
            <span class="title">{{ menu.name }}</span>
          </router-link>
        </a-menu-item>
        <div v-if="menu.subMenuTitle">
          <a-sub-menu :key="menu.submenuKey">
            <template #icon>
              <vue-feather :type="menu.subMenIcon"></vue-feather>
            </template>
            <template #title>{{ menu.subMenuTitle }}</template>
            <a-menu-item
              :key="submenu.keyIndex"
              v-for="submenu in menu.subMenuList"
              :class="
                this.$route.name == submenu.routerName
                  ? 'ant-menu-item-selected'
                  : ''
              "
            >
              <router-link :to="submenu.link">
                <vue-feather :type="submenu.icon"></vue-feather>
                <span class="title">{{ submenu.name }}</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </div>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        id="header"
        :theme="this.theme"
        :class="this.theme == 'light' ? 'bg-white' : ''"
        class="d-flex justify-content-between align-items-center px-3"
      >
        <vue-feather
          type="menu"
          class="trigger"
          :class="this.theme == 'dark' ? 'text-white' : ''"
          @click="collapsed = !collapsed"
        ></vue-feather>
        <div>
          <vue-feather
            type="moon"
            @click="this.changeTheme('dark')"
            v-if="this.theme == 'light'"
          ></vue-feather>
          <vue-feather
            type="sun"
            class="text-white"
            @click="this.changeTheme('light')"
            v-else
          ></vue-feather>
        </div>
      </a-layout-header>
      <slot />
    </a-layout>
  </a-layout>
</template>
<script>
import { layoutComputed, layoutMethods } from "@/store/helpers";

export default {
  name: "App",
  data() {
    return {
      selectedKeys: ["1"],
      collapsed: false,
      menulist: [
        {
          keyIndex: 1,
          link: "/dashboard",
          routerName: "dashboard",
          name: "Dashboard",
          icon: "grid",
        },
        {
          keyIndex: 2,
          link: "/customer",
          routerName: "customer",
          name: "Customer",
          icon: "user-check",
        },
        {
          keyIndex: 3,
          link: "/customers",
          routerName: "customers-map-view",
          name: "Customer Map View",
          icon: "map-pin",
        },
        {
          keyIndex: 4,
          link: "/reseller",
          routerName: "reseller",
          name: "Reseller",
          icon: "user",
        },
        {
          keyIndex: 5,
          link: "/userIpList",
          routerName: "userIpList",
          name: "IP",
          icon: "server",
        },
        {
          submenuKey: "sub1",
          subMenuTitle: "Marketing",
          subMenIcon: "volume-1",
          subMenuList: [
            {
              keyIndex: 6,
              link: "/leads",
              routerName: "leads",
              name: "Leads",
              icon: "file-text",
            },
            {
              keyIndex: 7,
              link: "/admin/proposal",
              routerName: "proposal",
              name: "Proposal",
              icon: "file-text",
            },
          ],
        },
        {
          submenuKey: "sub2",
          subMenuTitle: "Sales",
          subMenIcon: "bar-chart-2",
          subMenuList: [
            {
              keyIndex: 8,
              link: "/admin/contract",
              routerName: "contract",
              name: "Contract",
              icon: "file-minus",
            },
            {
              keyIndex: 9,
              link: "/invoices",
              routerName: "old-invoices",
              name: "Old Invoices",
              icon: "sidebar",
            },
            {
              keyIndex: 10,
              link: "/invoice",
              routerName: "invoice",
              name: "Invoices",
              icon: "sidebar",
            },
            {
              keyIndex: 11,
              link: "/subscription/subscriptions",
              routerName: "subscriptions",
              name: "Subscription",
              icon: "check-circle",
            },
          ],
        },
        {
          submenuKey: "sub3",
          subMenuTitle: "Support",
          subMenIcon: "headphones",
          subMenuList: [
            {
              keyIndex: 12,
              link: "/allTicketList",
              routerName: "ticket",
              name: "Ticket",
              icon: "headphones",
            },
            {
              keyIndex: 13,
              link: "/admin/installation",
              routerName: "installation",
              name: "Installation",
              icon: "link",
            },
            {
              keyIndex: 14,
              link: "/trainings",
              routerName: "trainings",
              name: "Trainings",
              icon: "user",
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...layoutComputed,
  },
  methods: {
    ...layoutMethods,
  },
};
</script>
