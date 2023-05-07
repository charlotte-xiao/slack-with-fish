App({
    onLaunch: function () {
        require("minapp-sdk");
        const clientId = this.GLOBAL_DATA.CLIENT_ID;
        wx.BaaS.init(clientId, {autoLogin: true});
        const userInfo = wx.BaaS.storage.get('userinfo');
        this.GLOBAL_DATA.UID = parseInt(userInfo?.uid ?? '0');
    },
    GLOBAL_DATA: {
        CLIENT_ID: "014f424c956ead8b0624",
        UID: 0
    }
})
