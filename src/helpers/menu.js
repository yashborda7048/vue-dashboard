export let menulist = [
    {
        keyIndex: 1,
        link: '/dashboard',
        routerName: 'dashboard',
        name: 'Dashboard',
        icon: 'grid'
    },
    {
        keyIndex: 2,
        link: '/customer',
        routerName: 'customer',
        name: 'Customer',
        icon: 'user-check'
    },
    {
        keyIndex: 3,
        link: '/customers',
        routerName: 'customers-map-view',
        name: 'Customer Map View',
        icon: 'map-pin'
    },
    {
        keyIndex: 4,
        link: '/reseller',
        routerName: 'reseller',
        name: 'Reseller',
        icon: 'user'
    },
    {
        keyIndex: 5,
        link: '/userIpList',
        routerName: 'userIpList',
        name: 'IP',
        icon: 'server'
    },
    {
        submenuKey: 'sub1',
        subMenuTitle: 'Marketing',
        subMenIcon: 'volume-1',
        subMenuList: [
            {
                keyIndex: 6,
                link: '/leads',
                routerName: 'leads',
                name: 'Leads',
                icon: 'file-text'
            },
            {
                keyIndex: 7,
                link: '/admin/proposal',
                routerName: 'proposal',
                name: 'Proposal',
                icon: 'file-text'
            },
        ]
    },
    {
        submenuKey: 'sub2',
        subMenuTitle: 'Sales',
        subMenIcon: 'bar-chart-2',
        subMenuList: [
            {
                keyIndex: 8,
                link: '/admin/contract',
                routerName: 'contract',
                name: 'Contract',
                icon: 'file-minus'
            },
            {
                keyIndex: 9,
                link: '/invoices',
                routerName: 'old-invoices',
                name: 'Old Invoices',
                icon: 'sidebar'
            },
            {
                keyIndex: 10,
                link: '/invoice',
                routerName: 'invoice',
                name: 'Invoices',
                icon: 'sidebar'
            },
            {
                keyIndex: 11,
                link: '/subscription/subscriptions',
                routerName: 'subscriptions',
                name: 'Subscription',
                icon: 'check-circle'
            },
        ]
    },
    {
        submenuKey: 'sub3',
        subMenuTitle: 'Support',
        subMenIcon: 'headphones',
        subMenuList: [
            {
                keyIndex: 12,
                link: '/allTicketList',
                routerName: 'ticket',
                name: 'Ticket',
                icon: 'headphones'
            },
            {
                keyIndex: 13,
                link: '/admin/installation',
                routerName: 'installation',
                name: 'Installation',
                icon: 'link'
            },
            {
                keyIndex: 14,
                link: '/trainings',
                routerName: 'trainings',
                name: 'Trainings',
                icon: 'user'
            },
        ]
    },
    {
        submenuKey: 'sub4',
        subMenuTitle: 'Numbers',
        subMenIcon: 'smartphone',
        subMenuList: [
            {
                keyIndex: 15,
                link: '/domain/viewPhoneNumber',
                routerName: 'phone-number',
                name: 'Phone Number',
                icon: 'phone-call'
            },
            {
                keyIndex: 16,
                link: '/smsPhoneNumberList',
                routerName: 'messages',
                name: 'Messages',
                icon: 'phone-call'
            },
            {
                keyIndex: 17,
                link: '/viewFaxNumber',
                routerName: 'view-fax-number',
                name: 'Fax Number',
                icon: 'printer'
            },
            {
                keyIndex: 18,
                link: '/porting',
                routerName: 'porting',
                name: 'Porting',
                icon: 'repeat'
            },
            {
                keyIndex: 19,
                link: '/checkPorting',
                routerName: 'check-porting',
                name: 'Check Porting',
                icon: 'repeat'
            },
        ]
    },
    {
        submenuKey: 'sub5',
        subMenuTitle: 'Inventory',
        subMenIcon: 'package',
        subMenuList: [
            {
                keyIndex: 20,
                link: '/admin/device',
                routerName: 'device',
                name: 'Device',
                icon: 'smartphone'
            },
            {
                keyIndex: 21,
                link: '/vendors',
                routerName: 'vendors',
                name: 'Vendors',
                icon: 'users'
            },
            {
                keyIndex: 22,
                link: '/settings/item',
                routerName: 'products-services',
                name: 'Products & Services',
                icon: 'box'
            },
            {
                keyIndex: 23,
                link: '/cdxInventoryList',
                routerName: 'Inventory',
                name: 'Inventory',
                icon: 'package'
            },
            {
                keyIndex: 24,
                link: '/cdxInventoryList',
                routerName: 'inventory',
                name: 'Inventory',
                icon: 'package'
            },
            {
                keyIndex: 25,
                link: '/purchaseOrderList',
                routerName: 'purchase-orders',
                name: 'Purchase Orders',
                icon: 'shopping-cart'
            },
            {
                keyIndex: 26,
                link: '/admin/shipping',
                routerName: 'shipping',
                name: 'Shipping',
                icon: 'briefcase'
            },
        ]
    },
    {
        submenuKey: 'sub6',
        subMenuTitle: 'Lex Chat Bot',
        subMenIcon: 'sidebar',
        subMenuList: [
            {
                keyIndex: 27,
                link: '/chatbotHotels',
                routerName: 'chatbot-hotels',
                name: 'Chatbot Hotels',
                icon: 'home'
            },
            {
                keyIndex: 28,
                link: '/chatbotIntents',
                routerName: 'intents',
                name: 'Intents',
                icon: 'file-text'
            },
            {
                keyIndex: 29,
                link: '/chatbotUtterances',
                routerName: 'utterances',
                name: 'Utterances',
                icon: 'list'
            },
        ]
    },
    {
        submenuKey: 'sub7',
        subMenuTitle: 'Report',
        subMenIcon: 'flag',
        subMenuList: [
            {
                keyIndex: 30,
                link: '/settings/alerts',
                routerName: 'alerts',
                name: 'Alerts',
                icon: 'alert-circle'
            },
            {
                keyIndex: 31,
                link: '/settings/wakeUpCall',
                routerName: 'wakeup-call',
                name: 'Wakeup Call',
                icon: 'bell'
            },
            {
                keyIndex: 32,
                link: '/setting/wakeuplog',
                routerName: 'wakeupcalls-log',
                name: 'WakeUpCalls Log',
                icon: 'list'
            },
            {
                keyIndex: 33,
                link: '/setting/notificationList',
                routerName: 'notification-settings',
                name: 'Notification Settings',
                icon: 'sliders'
            },
            {
                keyIndex: 34,
                link: '/customerTrackingReport',
                routerName: 'customer-call-tracking-report',
                name: 'Customer Call Tracking Report',
                icon: 'file-minus'
            },
            {
                keyIndex: 35,
                link: '/faxRecords',
                routerName: 'fax-records',
                name: 'Fax Records',
                icon: 'printer'
            },
        ]
    },
    {
        submenuKey: 'sub8',
        subMenuTitle: 'Admin',
        subMenIcon: 'user',
        subMenuList: [
            {
                keyIndex: 36,
                link: '/domain/viewDomain',
                routerName: 'domain',
                name: 'Domain',
                icon: 'globe'
            },
            {
                keyIndex: 37,
                link: '/domain/viewDomainUser',
                routerName: 'domain-user',
                name: 'Domain User',
                icon: 'user'
            },
        ]
    },
    {
        submenuKey: 'sub9',
        subMenuTitle: 'Settings',
        subMenIcon: 'settings',
        subMenuList: [
            {
                keyIndex: 38,
                link: '/groupManager',
                routerName: 'role-manager',
                name: 'Role Manager',
                icon: 'users'
            },
            {
                keyIndex: 39,
                link: '/devices/deviceProfile',
                routerName: 'device-profile',
                name: 'Device Profile',
                icon: 'smartphone'
            },
            {
                keyIndex: 40,
                link: '/quickBookConnection',
                routerName: 'quickBook-connection',
                name: 'QuickBook Connection',
                icon: 'link'
            },
            {
                keyIndex: 41,
                link: '/newFeature',
                routerName: 'whats-new',
                name: "What's New",
                icon: 'info'
            },
            {
                keyIndex: 42,
                link: '/setting/ticketTitle',
                routerName: 'ticket-title',
                name: 'Ticket Title',
                icon: 'tag'
            },
            {
                keyIndex: 43,
                link: '/setting/pbxServer',
                routerName: 'server',
                name: 'Server',
                icon: 'server'
            },
            {
                keyIndex: 42,
                link: '/setting/metadata',
                routerName: 'security-group-meta-data',
                name: 'Security Group Meta Data',
                icon: 'link'
            },
        ]
    },
]