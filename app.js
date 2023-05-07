App({
    onLaunch: function () {
        require("minapp-sdk");
        let clientId = this.globalData.clientId;
        wx.BaaS.init(clientId, {autoLogin: true});
    },
    globalData: {
        clientId: "014f424c956ead8b0624"
    }
})
